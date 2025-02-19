/**
 * Lit Protocol Contract Fetcher
 * Main entry point for fetching and caching contract ABIs and addresses
 */

import { NETWORKS } from "./config/networks";
import { GitHubService } from "./services/github";
import { ContractService } from "./services/contracts";
import * as fs from "fs";
import { formatNetworkName } from "./utils/format";
import { env } from "./config/env";

/**
 * Updates the package.json exports field with the correct paths for all formats
 */
function updatePackageJsonExports(networks: {
  prod: readonly string[];
  dev: readonly string[];
}): void {
  console.log("\n📝 Updating package.json exports...");

  const packageJsonPath = "./package.json";
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  // Initialize exports object with the root export
  const exports: Record<string, any> = {
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.cjs",
      types: "./dist/index.ts",
    },
  };

  // Add production network exports
  networks.prod.forEach((network) => {
    exports[`./prod/${network}`] = {
      import: `./dist/prod/${network}.js`,
      require: `./dist/prod/${network}.cjs`,
      types: `./dist/prod/${network}.ts`,
    };
  });

  // Add development network exports
  networks.dev.forEach((network) => {
    exports[`./dev/${network}`] = {
      import: `./dist/dev/${network}.js`,
      require: `./dist/dev/${network}.cjs`,
      types: `./dist/dev/${network}.ts`,
    };
  });

  // Update package.json
  packageJson.exports = exports;
  packageJson.main = "./dist/index.cjs";
  packageJson.module = "./dist/index.js";

  // Write updated package.json
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n"
  );
  console.log("✅ Successfully updated package.json exports");
}

/**
 * Generates index files for different module formats (TypeScript, ES Modules, and CommonJS)
 */
function generateIndexFiles(failedNetworks: string[] = []): void {
  console.log("\n📝 Generating index files...");

  const exports: string[] = [];

  // Add production exports
  NETWORKS.prod.networks.forEach((network) => {
    const formattedName = formatNetworkName(network);
    const exportLine = `export { ${formattedName} } from "./prod/${network}";`;
    if (failedNetworks.includes(network)) {
      exports.push(`// ${exportLine} // Network failed to generate`);
    } else {
      exports.push(exportLine);
    }
  });

  // Add development exports
  NETWORKS.dev.networks.forEach((network) => {
    const formattedName = formatNetworkName(network);
    const exportLine = `export { ${formattedName} } from "./dev/${network}";`;
    if (failedNetworks.includes(network)) {
      exports.push(`// ${exportLine} // Network failed to generate`);
    } else {
      exports.push(exportLine);
    }
  });

  // Generate TypeScript index
  const tsContent = `/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT BY HAND.
 */

${exports.join("\n")}
`;

  // Generate ES Module index
  const jsContent = `/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT BY HAND.
 */

${exports.map(line => {
  // If line is already commented out, keep it as is
  if (line.startsWith('//')) return line;
  
  const [exportPart, importPart] = line.split(" from ");
  const importPath = importPart.replace(';', '').replace(/["']/g, '').replace('.ts', '');
  return `${exportPart} from "${importPath}.js";`;
}).join("\n")}
`;

  // Generate CommonJS index
  const cjsContent = `/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT BY HAND.
 */

${exports.map(line => {
  // If line is already commented out, keep it as is
  if (line.startsWith('//')) return line;

  const [exportPart, importPart] = line.split(" from ");
  const varName = exportPart.replace('export { ', '').replace(' }', '');
  const importPath = importPart.replace(';', '').replace(/["']/g, '').replace('.ts', '');
  return `const ${varName} = require("${importPath}.cjs");`;
}).join("\n")}

module.exports = {
${exports
  .filter(line => !line.startsWith('//')) // Only include non-commented exports
  .map(line => {
    const varName = line.split(" from ")[0].replace('export { ', '').replace(' }', '');
    return `  ${varName}`;
  }).join(",\n")}
};
`;

  // Write the files
  fs.writeFileSync("./dist/index.ts", tsContent);
  fs.writeFileSync("./dist/index.js", jsContent);
  fs.writeFileSync("./dist/index.cjs", cjsContent);

  // Update package.json exports
  updatePackageJsonExports({
    prod: NETWORKS.prod.networks.filter(network => !failedNetworks.includes(network)),
    dev: NETWORKS.dev.networks.filter(network => !failedNetworks.includes(network)),
  });

  console.log("✅ Successfully generated index files (ts, js, cjs)");
}

/**
 * Prints a summary of all network paths
 */
function printNetworkSummary(githubService: GitHubService): void {
  console.log("\n📊 Network Paths Summary:");
  console.log("========================");

  const networkPaths = githubService.getNetworkPaths();
  const successfulNetworks: string[] = [];
  const failedNetworks: string[] = [];

  Object.entries(networkPaths).forEach(([network, paths]) => {
    if (paths.status === "error") {
      failedNetworks.push(network);
    } else {
      successfulNetworks.push(network);
    }
  });

  if (successfulNetworks.length > 0) {
    console.log("\n✅ Successfully Processed Networks:");
    successfulNetworks.forEach((network) => {
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
    failedNetworks.forEach((network) => {
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

/**
 * Main execution
 */
async function main() {
  console.log("🚀 Starting contract fetch process...");

  try {
    const githubService = new GitHubService(env.GH_API_KEY);
    const contractService = new ContractService(githubService);

    // Process production networks
    console.log(
      `📋 Processing production networks: ${NETWORKS.prod.networks.join(", ")}`
    );
    await Promise.all(
      NETWORKS.prod.networks.map(
        contractService.updateProdCache.bind(contractService)
      )
    );

    // Process development
    console.log(`📋 Processing development branch`);
    await contractService.updateDevCache();

    // Collect failed networks
    const networkPaths = githubService.getNetworkPaths();
    const failedNetworks = Object.entries(networkPaths)
      .filter(([_, paths]) => paths.status === "error")
      .map(([network]) => network);

    // Generate index files with failed networks excluded
    generateIndexFiles(failedNetworks);

    // Print network summary
    printNetworkSummary(githubService);

    console.log("\n✨ All networks processed successfully");
  } catch (error: any) {
    console.error("💥 Process failed:", error.message);
    process.exit(1);
  }
}

main();
