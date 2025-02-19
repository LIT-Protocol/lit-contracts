/**
 * Lit Protocol Contract Fetcher
 * Main entry point for fetching and caching contract ABIs and addresses
 */
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';
import { NETWORKS } from './config/networks';
import { GitHubService } from './services/github';
import { ContractService } from './services/contracts';
import * as fs from 'fs';
import { formatNetworkName } from './utils/format';

// Environment validation
const env = createEnv({
  server: {
    GH_API_KEY: z.string().min(1, 'GitHub API token is required'),
    DEV_BRANCH: z
      .string()
      .min(1, 'Development branch name is required')
      .default('develop'),
  },
  runtimeEnv: process.env,
});

/**
 * Generates the index.ts file with exports for all networks
 */
function generateIndexFile(): void {
  console.log('\n📝 Generating index.ts file...');

  const exports: string[] = [];

  // Add production exports
  NETWORKS.prod.networks.forEach((network) => {
    const formattedName = formatNetworkName(network);
    exports.push(`export { ${formattedName} } from "./prod/${network}";`);
  });

  // Add development exports
  NETWORKS.dev.networks.forEach((network) => {
    const formattedName = formatNetworkName(network);
    exports.push(`export { ${formattedName} } from "./dev/${network}";`);
  });

  // Write the index file
  const indexContent = `/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT BY HAND.
 */

${exports.join('\n')}
`;

  fs.writeFileSync('./dist/index.ts', indexContent);
  console.log('✅ Successfully generated index.ts');
}

/**
 * Prints a summary of all network paths
 */
function printNetworkSummary(githubService: GitHubService): void {
  console.log('\n📊 Network Paths Summary:');
  console.log('========================');

  const networkPaths = githubService.getNetworkPaths();
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
    console.log('\n✅ Successfully Processed Networks:');
    successfulNetworks.forEach((network) => {
      const paths = networkPaths[network];
      console.log(`\n🌐 Network: ${network}`);
      console.log('  📁 ABIs Source:');
      console.log(`     ${paths.abis}`);
      console.log('  📄 Deployed Contracts:');
      console.log(`     ${paths.deployedContracts}`);
    });
  }

  if (failedNetworks.length > 0) {
    console.log('\n❌ Failed Networks:');
    failedNetworks.forEach((network) => {
      const paths = networkPaths[network];
      console.log(`\n🌐 Network: ${network}`);
      console.log(`  ❌ Error: ${paths.error}`);
      if (paths.abis) {
        console.log('  📁 ABIs Source:');
        console.log(`     ${paths.abis}`);
      }
      if (paths.deployedContracts) {
        console.log('  📄 Deployed Contracts:');
        console.log(`     ${paths.deployedContracts}`);
      }
    });
  }

  // Print summary counts
  console.log('\n📈 Summary:');
  console.log(`   ✅ Successful: ${successfulNetworks.length} networks`);
  console.log(`   ❌ Failed: ${failedNetworks.length} networks`);
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting contract fetch process...');

  try {
    const githubService = new GitHubService(env.GH_API_KEY);
    const contractService = new ContractService(githubService);

    // Process production networks
    console.log(
      `📋 Processing production networks: ${NETWORKS.prod.networks.join(', ')}`
    );
    await Promise.all(NETWORKS.prod.networks.map(contractService.updateProdCache.bind(contractService)));

    // Process development
    console.log(`📋 Processing development branch`);
    await contractService.updateDevCache();

    // Generate index.ts
    generateIndexFile();

    // Print network summary
    printNetworkSummary(githubService);

    console.log('\n✨ All networks processed successfully');
  } catch (error: any) {
    console.error('💥 Process failed:', error.message);
    process.exit(1);
  }
}

main(); 