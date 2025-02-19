/**
 * Lit Protocol Contract Fetcher
 *
 * This script fetches and caches contract ABIs and addresses from Lit Protocol repositories.
 *
 * Environment Variables Required:
 * - GH_LIT_ASSETS_READ_ONLY_API: GitHub API token
 * - DEV_BRANCH: Branch name for development
 */

import * as fs from "fs";

// Constants
const GITHUB_API_BASE = "https://api.github.com/repos";
const USERNAME = "LIT-Protocol";
const NETWORKS_REPO = "networks";

// Environment validation
const requiredEnvVars = {
  GH_LIT_ASSETS_READ_ONLY_API: process.env.GH_LIT_ASSETS_READ_ONLY_API,
  DEV_BRANCH: process.env.DEV_BRANCH,
};

Object.entries(requiredEnvVars).forEach(([name, value]) => {
  if (!value) {
    throw new Error(`❌ ${name} is not defined`);
  }
});

// Types
type LitNetwork = "datil-dev" | "datil-test" | "datil" | "naga-dev";
type NetworkMode = "prod" | "dev";

// Network configurations
const NETWORKS = {
  prod: {
    networks: ["datil-dev", "datil-test", "datil", "naga-dev"] as const,
    deployedContracts: {
      "datil-dev":
        "https://raw.githubusercontent.com/LIT-Protocol/networks/main/datil-dev/deployed-lit-node-contracts-temp.json",
      "datil-test":
        "https://raw.githubusercontent.com/LIT-Protocol/networks/main/datil-test/deployed-lit-node-contracts-temp.json",
      datil:
        "https://raw.githubusercontent.com/LIT-Protocol/networks/main/datil-prod/deployed-lit-node-contracts-temp.json",
      "naga-dev":
        "https://raw.githubusercontent.com/LIT-Protocol/networks/main/naga-dev/deployed-lit-node-contracts-temp.json",
    },
  },
  dev: {
    networks: ["develop"] as const,
    deployedContracts: {
      develop:
        "https://raw.githubusercontent.com/LIT-Protocol/networks/main/naga-dev/deployed-lit-node-contracts-temp.json",
    },
  },
} as const;

type ContractAddressKey =
  | "litTokenContractAddress"
  | "pkpNftContractAddress"
  | "pkpHelperContractAddress"
  | "pkpPermissionsContractAddress"
  | "pkpNftMetadataContractAddress"
  | "pubkeyRouterContractAddress"
  | "rateLimitNftContractAddress"
  | "stakingBalancesContractAddress"
  | "stakingContractAddress"
  | "multisenderContractAddress"
  | "allowlistContractAddress"
  | "paymentDelegationContractAddress"
  | "priceFeedContractAddress"
  | "cloneNetContractAddress";

type ContractConfig = {
  chainId?: string;
  rpcUrl?: string;
  chainName?: string;
  litNodeDomainName?: string;
  litNodePort?: number;
  rocketPort?: number;
};

interface NetworkCache {
  config?: ContractConfig;
  data: Array<{
    name: string;
    contracts: Array<{
      network: string;
      address_hash: string;
      inserted_at: string;
      ABI: any[];
    }>;
  }>;
}

type ABISource = {
  repoName: string;
  path: string;
  branch: string;
  fileExtensionToRemove: string;
  abiSourceInJson: any[];
  contractNameMap: Record<string, string>;
  deployedContract: Record<LitNetwork, string>;
};

// Source configurations
const contractNameMap = {
  litTokenContractAddress: "LITToken",
  pkpNftContractAddress: "PKPNFT",
  pkpHelperContractAddress: "PKPHelper",
  pkpPermissionsContractAddress: "PKPPermissions",
  pkpNftMetadataContractAddress: "PKPNFTMetadata",
  pubkeyRouterContractAddress: "PubkeyRouter",
  rateLimitNftContractAddress: "RateLimitNFT",
  stakingBalancesContractAddress: "StakingBalances",
  stakingContractAddress: "Staking",
  multisenderContractAddress: "Multisender",
  allowlistContractAddress: "Allowlist",
  paymentDelegationContractAddress: "PaymentDelegation",
  priceFeedContractAddress: "PriceFeed",
  cloneNetContractAddress: "CloneNet",
};

// Production configuration
const prodConfig = {
  repoName: NETWORKS_REPO,
  branch: "main",
  path: "abis",
  fileExtensionToRemove: ".abi",
  abiSourceInJson: [],
  contractNameMap,
  deployedContract: NETWORKS.prod.deployedContracts,
};

// Development configuration
const devConfig = {
  repoName: "lit-assets",
  path: "rust/lit-core/lit-blockchain/abis",
  branch: process.env.DEV_BRANCH!,
  fileExtensionToRemove: ".json",
  abiSourceInJson: ["abi"],
  contractNameMap,
  deployedContract: NETWORKS.dev.deployedContracts,
};

// GitHub API configuration
const GITHUB_HEADERS = {
  headers: {
    Authorization: `token ${process.env.GH_LIT_ASSETS_READ_ONLY_API}`,
    Accept: "application/vnd.github.v3+json",
  },
};

// Network path tracking
type NetworkPaths = {
  abis: string;
  deployedContracts: string;
  error?: string;
  status: 'success' | 'error';
};

const networkPaths: Record<string, NetworkPaths> = {};

/**
 * Tracks network paths for summary
 */
function trackNetworkPath(network: string, type: keyof Omit<NetworkPaths, 'error' | 'status'>, path: string) {
  if (!networkPaths[network]) {
    networkPaths[network] = { abis: '', deployedContracts: '', status: 'success' };
  }
  networkPaths[network][type] = path;
}

/**
 * Tracks network error
 */
function trackNetworkError(network: string, error: string) {
  if (!networkPaths[network]) {
    networkPaths[network] = { abis: '', deployedContracts: '', status: 'error' };
  }
  networkPaths[network].error = error;
  networkPaths[network].status = 'error';
}

/**
 * Creates the GitHub API path for fetching contract data
 */
function createGitHubPath(
  path: string,
  branch: string,
  network: string,
  isProd: boolean
): string {
  const repoName = isProd ? NETWORKS_REPO : "lit-assets";

  let githubPath: string;
  if (isProd) {
    const networkPath = network === "datil" ? "datil-prod" : network;
    githubPath = `${GITHUB_API_BASE}/${USERNAME}/${repoName}/contents/${networkPath}/${path}?ref=${branch}`;
  } else {
    githubPath = `${GITHUB_API_BASE}/${USERNAME}/${repoName}/contents/${path}?ref=${branch}`;
  }

  trackNetworkPath(network, 'abis', githubPath);
  return githubPath;
}

/**
 * Extracts the path after 'main' from a GitHub URL
 */
function extractPathAfterMain(urlString: string): string {
  const url = new URL(urlString);
  const parts = url.pathname.split("/");
  const mainIndex = parts.indexOf("main");
  return parts.slice(mainIndex + 1).join("/");
}

/**
 * Fetches the last modified date for a file from GitHub
 */
async function getLastModified(
  filePath: string,
  network: string
): Promise<string | null> {
  console.log(`📅 [${network}] Fetching last modified date for: ${filePath}`);

  try {
    const fileAPI = `${GITHUB_API_BASE}/${USERNAME}/${NETWORKS_REPO}/commits?path=${filePath}`;
    const response = await fetch(fileAPI, GITHUB_HEADERS);
    const commits: any = await response.json();

    if (!commits.length) {
      console.error(`❌ [${network}] No commit history found for ${filePath}`);
      return null;
    }

    return commits[0].commit.author.date;
  } catch (error: any) {
    console.error(
      `❌ [${network}] Failed to fetch last modified date: ${error.message}`
    );
    return null;
  }
}

/**
 * Fetches and processes contract ABIs for production networks
 */
async function getProdContractABIs(network: LitNetwork) {
  console.log(`\n📦 [${network}] Production ABI Source Information:`);
  console.log(`   Repository: networks repo`);
  console.log(`   Branch: main`);
  console.log(`   Path: ${prodConfig.path}`);

  const path = createGitHubPath(
    prodConfig.path,
    prodConfig.branch,
    network,
    true
  );
  console.log(`   API URL: ${path}`);

  const filesRes = await fetch(path, GITHUB_HEADERS);
  const files: any = await filesRes.json();

  if (!Array.isArray(files) || files.length === 0) {
    throw new Error(`No contract files found for network: ${network}`);
  }

  console.log(`   Found ${files.length} contract files\n`);

  const contractsData = [];

  for (const file of files) {
    const name = file.name.replace(prodConfig.fileExtensionToRemove, "");

    if (!Object.values(prodConfig.contractNameMap).includes(name)) {
      continue;
    }

    console.log(`📄 [${network}] Processing contract: ${name}`);
    console.log(`   File URL: ${file.download_url}`);

    const fileRes = await fetch(file.download_url, GITHUB_HEADERS);
    const fileData: any = await fileRes.json();

    const data =
      prodConfig.abiSourceInJson.length > 0
        ? prodConfig.abiSourceInJson.reduce((acc, key) => acc[key], fileData)
        : fileData;

    if (!data || (Array.isArray(data) && data.length === 0)) {
      throw new Error(
        `Empty ABI found for contract: ${name} in network: ${network}`
      );
    }

    console.log(`   ABI Methods: ${Array.isArray(data) ? data.length : "N/A"}`);

    contractsData.push({
      name,
      contractName: fileData.contractName,
      data,
    });
  }

  if (contractsData.length === 0) {
    throw new Error(`No valid contracts found for network: ${network}`);
  }

  console.log(
    `✅ [${network}] Successfully processed ${contractsData.length} contracts`
  );
  return contractsData;
}

/**
 * Fetches and processes contract ABIs for development
 */
async function getDevContractABIs() {
  console.log(`\n📦 Development ABI Source Information:`);
  console.log(`   Repository: lit-assets repo`);
  console.log(`   Branch: ${devConfig.branch}`);
  console.log(`   Path: ${devConfig.path}`);

  const path = createGitHubPath(
    devConfig.path,
    devConfig.branch,
    "develop",
    false
  );
  console.log(`   API URL: ${path}`);

  const filesRes = await fetch(path, GITHUB_HEADERS);
  const files: any = await filesRes.json();

  if (!Array.isArray(files) || files.length === 0) {
    throw new Error(`No contract files found in development`);
  }

  console.log(`   Found ${files.length} contract files\n`);

  const contractsData = [];

  for (const file of files) {
    const name = file.name.replace(devConfig.fileExtensionToRemove, "");

    if (!Object.values(devConfig.contractNameMap).includes(name)) {
      continue;
    }

    console.log(`📄 [develop] Processing contract: ${name}`);
    console.log(`   File URL: ${file.download_url}`);

    const fileRes = await fetch(file.download_url, GITHUB_HEADERS);
    const fileData: any = await fileRes.json();

    const data =
      devConfig.abiSourceInJson.length > 0
        ? devConfig.abiSourceInJson.reduce((acc, key) => acc[key], fileData)
        : fileData;

    if (!data || (Array.isArray(data) && data.length === 0)) {
      throw new Error(
        `Empty ABI found for contract: ${name} in network: develop`
      );
    }

    console.log(`   ABI Methods: ${Array.isArray(data) ? data.length : "N/A"}`);

    contractsData.push({
      name,
      contractName: fileData.contractName,
      data,
    });
  }

  if (contractsData.length === 0) {
    throw new Error(`No valid contracts found for network: develop`);
  }

  console.log(
    `✅ [develop] Successfully processed ${contractsData.length} contracts`
  );
  return contractsData;
}

/**
 * Updates the contract cache for a production network
 */
async function updateProdCache(network: LitNetwork): Promise<void> {
  console.log(`\n🔄 Starting production cache update for network: ${network}`);

  try {
    // Get contract data
    const deployedContractUrl = prodConfig.deployedContract[network];
    trackNetworkPath(network, 'deployedContracts', deployedContractUrl);
    console.log(`\n📍 [${network}] Contract Addresses Source:`);
    console.log(`   URL: ${deployedContractUrl}`);

    const filePath = extractPathAfterMain(deployedContractUrl);
    const lastModified = await getLastModified(filePath, network);

    if (!lastModified) {
      throw new Error("Failed to get last modified date");
    }

    console.log(`   Last Modified: ${lastModified}`);

    // Fetch contract ABIs
    const contractABIs = await getProdContractABIs(network);

    // Fetch deployed contracts
    const deployedContractsRes = await fetch(deployedContractUrl);
    const deployedContracts = await deployedContractsRes.json();

    console.log(`\n🔍 [${network}] Contract Details:`);
    console.log(
      `   Total Contracts Found: ${Object.keys(deployedContracts).length}`
    );

    // Prepare cache data
    const cache: NetworkCache = {
      data: [],
    };

    // Add network configuration if available
    const config: ContractConfig = {
      chainId: deployedContracts?.chainId,
      rpcUrl: deployedContracts?.rpcUrl,
      chainName: deployedContracts?.chainName,
      litNodeDomainName: deployedContracts?.litNodeDomainName,
      litNodePort: deployedContracts?.litNodePort,
      rocketPort: deployedContracts?.rocketPort,
    };

    // Only add config if any of its values are non-null
    if (
      Object.values(config).some((val) => val !== null && val !== undefined)
    ) {
      cache.config = config;
    }

    // Process each contract
    for (const [name, address] of Object.entries(deployedContracts)) {
      const contractFileName =
        prodConfig.contractNameMap[name as ContractAddressKey];

      if (!contractFileName) {
        if (name.includes("Address")) {
          console.log(`   ⚠️  Skipping unmapped contract: ${name}`);
        }

        continue;
      }

      const contractABI = contractABIs.find(
        (item) => item.name === contractFileName
      );

      if (!contractABI) {
        console.warn(
          `⚠️ [${network}] No ABI found for contract: ${contractFileName}`
        );
        continue;
      }

      console.log(`   ✓ ${contractFileName}:`);
      console.log(`     Address: ${address}`);
      console.log(
        `     ABI Methods: ${
          Array.isArray(contractABI.data) ? contractABI.data.length : "N/A"
        }`
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

    // Ensure output directory exists
    const outputDir = "./dist/prod";
    fs.mkdirSync(outputDir, { recursive: true });

    // Write TypeScript file
    fs.writeFileSync(
      `${outputDir}/${network}.ts`,
      `export const ${formatNetworkName(network)} = ${JSON.stringify(
        cache,
        null,
        2
      )} as const;`
    );

    console.log(`✅ [${network}] Successfully updated production cache`);
  } catch (error: any) {
    console.error(
      `❌ [${network}] Production cache update failed: ${error.message}`
    );
    trackNetworkError(network, error.message);
  }
}

/**
 * Updates the contract cache for development
 */
async function updateDevCache(): Promise<void> {
  console.log(`\n🔄 Starting development cache update`);

  try {
    // Fetch contract ABIs
    const contractABIs = await getDevContractABIs();

    // Fetch deployed contracts
    const deployedContractUrl = devConfig.deployedContract["develop"];
    trackNetworkPath("develop", 'deployedContracts', deployedContractUrl);
    console.log(`\n📍 [develop] Contract Addresses Source:`);
    console.log(`   URL: ${deployedContractUrl}`);

    const filePath = extractPathAfterMain(deployedContractUrl);
    const lastModified = await getLastModified(filePath, "develop");

    if (!lastModified) {
      throw new Error("Failed to get last modified date");
    }

    console.log(`   Last Modified: ${lastModified}`);

    const deployedContractsRes = await fetch(deployedContractUrl);
    const deployedContracts = await deployedContractsRes.json();

    console.log(`\n🔍 [develop] Contract Details:`);
    console.log(
      `   Total Contracts Found: ${Object.keys(deployedContracts).length}`
    );

    // Prepare cache data
    const cache: NetworkCache = {
      data: [],
    };

    // Process each contract
    for (const [name, address] of Object.entries(deployedContracts)) {
      const contractFileName =
        devConfig.contractNameMap[name as ContractAddressKey];

      if (!contractFileName) {
        if (name.includes("Address")) {
          console.log(`   ⚠️  Skipping unmapped contract: ${name}`);
        }
        continue;
      }

      const contractABI = contractABIs.find(
        (item) => item.name === contractFileName
      );

      if (!contractABI) {
        console.warn(
          `⚠️ [develop] No ABI found for contract: ${contractFileName}`
        );
        continue;
      }

      console.log(`   ✓ ${contractFileName}:`);
      console.log(`     Address: ${address}`);
      console.log(
        `     ABI Methods: ${
          Array.isArray(contractABI.data) ? contractABI.data.length : "N/A"
        }`
      );

      cache.data.push({
        name: contractFileName,
        contracts: [
          {
            network: "develop",
            address_hash: address as string,
            inserted_at: lastModified,
            ABI: contractABI.data,
          },
        ],
      });
    }

    // Ensure output directory exists
    const outputDir = "./dist/dev";
    fs.mkdirSync(outputDir, { recursive: true });

    // Write TypeScript file
    fs.writeFileSync(
      `${outputDir}/develop.ts`,
      `export const develop = ${JSON.stringify(cache, null, 2)} as const;`
    );

    console.log(`✅ Successfully updated development cache`);
  } catch (error: any) {
    console.error(`❌ Development cache update failed: ${error.message}`);
    trackNetworkError("develop", error.message);
    throw error;
  }
}

// Helper function for network name formatting
function formatNetworkName(network: string): string {
  return network
    .split("-")
    .map((word, i) =>
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

/**
 * Generates the index.ts file with exports for all networks
 */
function generateIndexFile() {
  console.log("\n📝 Generating index.ts file...");
  
  const exports: string[] = [];
  
  // Add production exports
  NETWORKS.prod.networks.forEach(network => {
    const formattedName = formatNetworkName(network);
    exports.push(`export { ${formattedName} } from "./prod/${network}";`);
  });

  // Add development exports
  NETWORKS.dev.networks.forEach(network => {
    const formattedName = formatNetworkName(network);
    exports.push(`export { ${formattedName} } from "./dev/${network}";`);
  });

  // Write the index file
  const indexContent = `/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT BY HAND.
 */

${exports.join("\n")}
`;

  fs.writeFileSync("./dist/index.ts", indexContent);
  console.log("✅ Successfully generated index.ts");
}

// Main execution
async function main() {
  console.log("🚀 Starting contract fetch process...");

  try {
    // Process production networks
    console.log(
      `📋 Processing production networks: ${NETWORKS.prod.networks.join(", ")}`
    );
    await Promise.all(NETWORKS.prod.networks.map(updateProdCache));

    // Process development
    console.log(`📋 Processing development branch`);
    await updateDevCache();

    // Generate index.ts
    generateIndexFile();

    // Print network summary
    printNetworkSummary();

    console.log("\n✨ All networks processed successfully");
  } catch (error: any) {
    console.error("💥 Process failed:", error.message);
    process.exit(1);
  }
}

// Prints a summary of all network paths
function printNetworkSummary() {
  console.log("\n📊 Network Paths Summary:");
  console.log("========================");

  const successfulNetworks: string[] = [];
  const failedNetworks: string[] = [];

  Object.entries(networkPaths).forEach(([network, paths]) => {
    if (paths.status === 'error') {
      failedNetworks.push(network);
    } else {
      successfulNetworks.push(network);
    }
  });

  if (successfulNetworks.length > 0) {
    console.log("\n✅ Successfully Processed Networks:");
    successfulNetworks.forEach(network => {
      const paths = networkPaths[network];
      console.log(`\n🌐 Network: ${network}`);
      console.log("  📁 ABIs Source:");
      console.log(`     ${paths.abis}`);
      console.log("  📄 Deployed Contracts:");
      console.log(`     ${paths.deployedContracts}`);
    });
  }

  if (failedNetworks.length > 0) {
    console.log("\n❌ Failed Networks:");
    failedNetworks.forEach(network => {
      const paths = networkPaths[network];
      console.log(`\n🌐 Network: ${network}`);
      console.log(`  ❌ Error: ${paths.error}`);
      if (paths.abis) {
        console.log("  📁 ABIs Source:");
        console.log(`     ${paths.abis}`);
      }
      if (paths.deployedContracts) {
        console.log("  📄 Deployed Contracts:");
        console.log(`     ${paths.deployedContracts}`);
      }
    });
  }

  // Print summary counts
  console.log("\n📈 Summary:");
  console.log(`   ✅ Successful: ${successfulNetworks.length} networks`);
  console.log(`   ❌ Failed: ${failedNetworks.length} networks`);
}

main();
