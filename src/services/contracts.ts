/**
 * Contract Service
 * Handles contract data processing and caching
 */
import * as fs from 'fs';
import { CONTRACT_NAME_MAP, ENV_CONFIG, NETWORKS } from '../config/networks';
import type { ContractData, NetworkCache, ProdNetwork } from '../types/contracts';
import { GitHubService } from './github';
import { formatNetworkName } from '../utils/format';

export class ContractService {
  constructor(private githubService: GitHubService) {}

  /**
   * Processes contract ABIs for production networks
   */
  async getProdContractABIs(network: ProdNetwork): Promise<ContractData[]> {
    console.log(`\n📦 [${network}] Production ABI Source Information:`);
    console.log(`   Repository: networks repo`);
    console.log(`   Branch: main`);
    console.log(`   Path: ${ENV_CONFIG.prod.path}`);

    const path = this.githubService.createGitHubPath(
      ENV_CONFIG.prod.path,
      'main',
      network,
      true
    );
    console.log(`   API URL: ${path}`);

    const filesRes = await fetch(path, { headers: this.githubService.headers });
    const files: any = await filesRes.json();

    if (!Array.isArray(files) || files.length === 0) {
      throw new Error(`No contract files found for network: ${network}`);
    }

    console.log(`   Found ${files.length} contract files\n`);
    const contractsData = [];

    for (const file of files) {
      const name = file.name.replace(ENV_CONFIG.prod.fileExtensionToRemove, '');

      if (!Object.values(CONTRACT_NAME_MAP).includes(name)) {
        continue;
      }

      console.log(`📄 [${network}] Processing contract: ${name}`);
      console.log(`   File URL: ${file.download_url}`);

      const fileRes = await fetch(file.download_url, { headers: this.githubService.headers });
      const fileData: any = await fileRes.json();

      const data = ENV_CONFIG.prod.abiSourceInJson.length > 0
        ? ENV_CONFIG.prod.abiSourceInJson.reduce((acc, key) => acc[key], fileData)
        : fileData;

      if (!data || (Array.isArray(data) && data.length === 0)) {
        throw new Error(`Empty ABI found for contract: ${name} in network: ${network}`);
      }

      console.log(`   ABI Methods: ${Array.isArray(data) ? data.length : 'N/A'}`);
      contractsData.push({ name, contractName: fileData.contractName, data });
    }

    if (contractsData.length === 0) {
      throw new Error(`No valid contracts found for network: ${network}`);
    }

    console.log(`✅ [${network}] Successfully processed ${contractsData.length} contracts`);
    return contractsData;
  }

  /**
   * Processes contract ABIs for development
   */
  async getDevContractABIs(): Promise<ContractData[]> {
    console.log(`\n📦 Development ABI Source Information:`);
    console.log(`   Repository: lit-assets repo`);
    console.log(`   Branch: ${process.env.DEV_BRANCH}`);
    console.log(`   Path: ${ENV_CONFIG.dev.path}`);

    const path = this.githubService.createGitHubPath(
      ENV_CONFIG.dev.path,
      process.env.DEV_BRANCH || 'develop',
      'develop',
      false
    );
    console.log(`   API URL: ${path}`);

    const filesRes = await fetch(path, { headers: this.githubService.headers });
    const files: any = await filesRes.json();

    if (!Array.isArray(files) || files.length === 0) {
      throw new Error('No contract files found in development');
    }

    console.log(`   Found ${files.length} contract files\n`);
    const contractsData = [];

    for (const file of files) {
      const name = file.name.replace(ENV_CONFIG.dev.fileExtensionToRemove, '');

      if (!Object.values(CONTRACT_NAME_MAP).includes(name)) {
        continue;
      }

      console.log(`📄 [develop] Processing contract: ${name}`);
      console.log(`   File URL: ${file.download_url}`);

      const fileRes = await fetch(file.download_url, { headers: this.githubService.headers });
      const fileData: any = await fileRes.json();

      const data = ENV_CONFIG.dev.abiSourceInJson.length > 0
        ? ENV_CONFIG.dev.abiSourceInJson.reduce((acc, key) => acc[key], fileData)
        : fileData;

      if (!data || (Array.isArray(data) && data.length === 0)) {
        throw new Error(`Empty ABI found for contract: ${name} in network: develop`);
      }

      console.log(`   ABI Methods: ${Array.isArray(data) ? data.length : 'N/A'}`);
      contractsData.push({ name, contractName: fileData.contractName, data });
    }

    if (contractsData.length === 0) {
      throw new Error('No valid contracts found for network: develop');
    }

    console.log(`✅ [develop] Successfully processed ${contractsData.length} contracts`);
    return contractsData;
  }

  /**
   * Updates the contract cache for a production network
   */
  async updateProdCache(network: ProdNetwork): Promise<void> {
    console.log(`\n🔄 Starting production cache update for network: ${network}`);

    try {
      const deployedContractUrl = NETWORKS.prod.deployedContracts[network];
      this.githubService.trackNetworkPath(network, 'deployedContracts', deployedContractUrl);
      
      console.log(`\n📍 [${network}] Contract Addresses Source:`);
      console.log(`   URL: ${deployedContractUrl}`);

      const filePath = this.extractPathAfterMain(deployedContractUrl);
      const lastModified = await this.githubService.getLastModified(filePath, network);

      if (!lastModified) {
        throw new Error('Failed to get last modified date');
      }

      console.log(`   Last Modified: ${lastModified}`);

      const contractABIs = await this.getProdContractABIs(network);
      const deployedContractsRes = await fetch(deployedContractUrl);
      const deployedContracts = await deployedContractsRes.json();

      console.log(`\n🔍 [${network}] Contract Details:`);
      console.log(`   Total Contracts Found: ${Object.keys(deployedContracts).length}`);

      const cache = await this.buildNetworkCache(
        network,
        deployedContracts,
        contractABIs,
        lastModified
      );

      await this.writeNetworkCache(network, cache);
      console.log(`✅ [${network}] Successfully updated production cache`);
    } catch (error: any) {
      console.error(`❌ [${network}] Production cache update failed: ${error.message}`);
      this.githubService.trackNetworkError(network, error.message);
    }
  }

  /**
   * Updates the contract cache for development
   */
  async updateDevCache(): Promise<void> {
    console.log(`\n🔄 Starting development cache update`);

    try {
      const contractABIs = await this.getDevContractABIs();
      const deployedContractUrl = NETWORKS.dev.deployedContracts.develop;
      this.githubService.trackNetworkPath('develop', 'deployedContracts', deployedContractUrl);

      console.log(`\n📍 [develop] Contract Addresses Source:`);
      console.log(`   URL: ${deployedContractUrl}`);

      const filePath = this.extractPathAfterMain(deployedContractUrl);
      const lastModified = await this.githubService.getLastModified(filePath, 'develop');

      if (!lastModified) {
        throw new Error('Failed to get last modified date');
      }

      console.log(`   Last Modified: ${lastModified}`);

      const deployedContractsRes = await fetch(deployedContractUrl);
      const deployedContracts = await deployedContractsRes.json();

      console.log(`\n🔍 [develop] Contract Details:`);
      console.log(`   Total Contracts Found: ${Object.keys(deployedContracts).length}`);

      const cache = await this.buildNetworkCache(
        'develop',
        deployedContracts,
        contractABIs,
        lastModified
      );

      await this.writeNetworkCache('develop', cache, true);
      console.log(`✅ Successfully updated development cache`);
    } catch (error: any) {
      console.error(`❌ Development cache update failed: ${error.message}`);
      this.githubService.trackNetworkError('develop', error.message);
      throw error;
    }
  }

  /**
   * Builds network cache from contract data
   */
  private async buildNetworkCache(
    network: string,
    deployedContracts: any,
    contractABIs: ContractData[],
    lastModified: string
  ): Promise<NetworkCache> {
    const cache: NetworkCache = {
      data: [],
    };

    const config = {
      chainId: deployedContracts?.chainId,
      rpcUrl: deployedContracts?.rpcUrl,
      chainName: deployedContracts?.chainName,
      litNodeDomainName: deployedContracts?.litNodeDomainName,
      litNodePort: deployedContracts?.litNodePort,
      rocketPort: deployedContracts?.rocketPort,
    };

    if (Object.values(config).some((val) => val !== null && val !== undefined)) {
      cache.config = config;
    }

    for (const [name, address] of Object.entries(deployedContracts)) {
      const contractFileName = CONTRACT_NAME_MAP[name as keyof typeof CONTRACT_NAME_MAP];

      if (!contractFileName) {
        if (name.includes('Address')) {
          console.log(`   ⚠️  Skipping unmapped contract: ${name}`);
        }
        continue;
      }

      const contractABI = contractABIs.find((item) => item.name === contractFileName);

      if (!contractABI) {
        console.warn(`⚠️ [${network}] No ABI found for contract: ${contractFileName}`);
        continue;
      }

      console.log(`   ✓ ${contractFileName}:`);
      console.log(`     Address: ${address}`);
      console.log(
        `     ABI Methods: ${Array.isArray(contractABI.data) ? contractABI.data.length : 'N/A'}`
      );

      cache.data.push({
        name: contractFileName,
        contracts: [
          {
            network,
            address_hash: address as string,
            inserted_at: lastModified,
            ABI: contractABI.data,
          },
        ],
      });
    }

    return cache;
  }

  /**
   * Writes network cache to file
   */
  private async writeNetworkCache(
    network: string,
    cache: NetworkCache,
    isDev = false
  ): Promise<void> {
    const outputDir = isDev ? './dist/dev' : './dist/prod';
    fs.mkdirSync(outputDir, { recursive: true });

    fs.writeFileSync(
      `${outputDir}/${network}.ts`,
      `export const ${formatNetworkName(network)} = ${JSON.stringify(cache, null, 2)} as const;`
    );
  }

  /**
   * Extracts the path after 'main' from a GitHub URL
   */
  private extractPathAfterMain(urlString: string): string {
    const url = new URL(urlString);
    const parts = url.pathname.split('/');
    const mainIndex = parts.indexOf('main');
    return parts.slice(mainIndex + 1).join('/');
  }
} 