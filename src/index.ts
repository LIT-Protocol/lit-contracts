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
import { extractAbiMethods } from "./utils/abi-extractor";
import type { NetworkCache } from "./types/contracts";
import { METHODS_TO_EXTRACT } from "./config/methods";

/**
 * Generates ABI signatures for specified methods
 */
function generateAbiSignatures(networkData: NetworkCache) {
  console.log("\n📝 Generating ABI signatures...");
  const methodsByContract = new Map<string, string[]>();
  
  // Group methods by contract
  METHODS_TO_EXTRACT.forEach(methodString => {
    const [contractName, methodName] = methodString.split('.');
    if (!methodsByContract.has(contractName)) {
      methodsByContract.set(contractName, []);
    }
    methodsByContract.get(contractName)!.push(methodName);
  });

  // Extract methods for each contract
  const signatures: Record<string, { 
    address: string; 
    methods: Record<string, any>;
    events: any[];
  }> = {};
  
  networkData.data.forEach(contractGroup => {
    const contractName = contractGroup.name;
    if (methodsByContract.has(contractName)) {
      const methods = methodsByContract.get(contractName)!;
      const contractMethods = extractAbiMethods(networkData, methods);
      
      if (Object.keys(contractMethods).length > 0) {
        const address = contractGroup.contracts[0].address_hash;
        const events = contractGroup.contracts[0].ABI
          .filter(item => item.type === 'event');
        
        signatures[contractName] = {
          address,
          methods: Object.fromEntries(
            Object.entries(contractMethods).map(([methodName, data]) => [
              methodName,
              data.abi
            ])
          ),
          events
        };
      }
    }
  });

  return signatures;
}

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
    exports[`./signatures/${network}`] = {
      import: `./dist/signatures/${network}.js`,
      require: `./dist/signatures/${network}.cjs`,
      types: `./dist/signatures/${network}.ts`,
    };
  });

  // Add development network exports
  networks.dev.forEach((network) => {
    exports[`./dev/${network}`] = {
      import: `./dist/dev/${network}.js`,
      require: `./dist/dev/${network}.cjs`,
      types: `./dist/dev/${network}.ts`,
    };
    exports[`./signatures/${network}`] = {
      import: `./dist/signatures/${network}.js`,
      require: `./dist/signatures/${network}.cjs`,
      types: `./dist/signatures/${network}.ts`,
    };
  });

  // Update package.json
  packageJson.exports = exports;
  packageJson.main = "./dist/index.cjs";
  packageJson.module = "./dist/index.js";

  // Write updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
  console.log("✅ Successfully updated package.json exports");
}

/**
 * Generates index files for different module formats (TypeScript, ES Modules, and CommonJS)
 */
function generateIndexFiles(failedNetworks: string[] = []): void {
  console.log("\n📝 Generating index files...");

  const exports: string[] = [];
  const signatureExports: string[] = [];

  // Create signatures directory if it doesn't exist
  if (!fs.existsSync("./dist/signatures")) {
    fs.mkdirSync("./dist/signatures", { recursive: true });
  }

  // Add production exports and generate signatures
  NETWORKS.prod.networks.forEach((network) => {
    const formattedName = formatNetworkName(network);
    const exportLine = `export { ${formattedName} } from "./prod/${network}";`;
    if (failedNetworks.includes(network)) {
      exports.push(`// ${exportLine} // Network failed to generate`);
    } else {
      exports.push(exportLine);
      // Add signature export
      signatureExports.push(`export { signatures as ${formattedName}Signatures } from "./signatures/${network}";`);

      // Generate signatures for this network
      try {
        const networkData = require(`../dist/prod/${network}`);
        const signatures = generateAbiSignatures(networkData[formattedName]);

        // Generate signature files for this network
        const tsSignatures = `/**
 * Generated Contract Method Signatures for ${network}
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

export const signatures = ${JSON.stringify(signatures, null, 2)} as const;
export type Signatures = typeof signatures;
`;

        const jsSignatures = `/**
 * Generated Contract Method Signatures for ${network}
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

export const signatures = ${JSON.stringify(signatures, null, 2)};
`;

        const cjsSignatures = `/**
 * Generated Contract Method Signatures for ${network}
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

const signatures = ${JSON.stringify(signatures, null, 2)};

module.exports = {
  signatures
};
`;

        // Write signature files for this network
        fs.writeFileSync(`./dist/signatures/${network}.ts`, tsSignatures);
        fs.writeFileSync(`./dist/signatures/${network}.js`, jsSignatures);
        fs.writeFileSync(`./dist/signatures/${network}.cjs`, cjsSignatures);
      } catch (error) {
        console.warn(`Failed to generate signatures for ${network}:`, error);
      }
    }
  });

  // Add development exports and generate signatures
  NETWORKS.dev.networks.forEach((network) => {
    const formattedName = formatNetworkName(network);
    const exportLine = `export { ${formattedName} } from "./dev/${network}";`;
    if (failedNetworks.includes(network)) {
      exports.push(`// ${exportLine} // Network failed to generate`);
    } else {
      exports.push(exportLine);
      // Add signature export
      signatureExports.push(`export { signatures as ${formattedName}Signatures } from "./signatures/${network}";`);

      // Generate signatures for this network
      try {
        const networkData = require(`../dist/dev/${network}`);
        const signatures = generateAbiSignatures(networkData[formattedName]);

        // Generate signature files for this network
        const tsSignatures = `/**
 * Generated Contract Method Signatures for ${network}
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

export const signatures = ${JSON.stringify(signatures, null, 2)} as const;
export type Signatures = typeof signatures;
`;

        const jsSignatures = `/**
 * Generated Contract Method Signatures for ${network}
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

export const signatures = ${JSON.stringify(signatures, null, 2)};
`;

        const cjsSignatures = `/**
 * Generated Contract Method Signatures for ${network}
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

const signatures = ${JSON.stringify(signatures, null, 2)};

module.exports = {
  signatures
};
`;

        // Write signature files for this network
        fs.writeFileSync(`./dist/signatures/${network}.ts`, tsSignatures);
        fs.writeFileSync(`./dist/signatures/${network}.js`, jsSignatures);
        fs.writeFileSync(`./dist/signatures/${network}.cjs`, cjsSignatures);
      } catch (error) {
        console.warn(`Failed to generate signatures for ${network}:`, error);
      }
    }
  });

  // Generate TypeScript index
  const tsContent = `/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

${exports.join("\n")}

${signatureExports.join("\n")}
`;

  // Generate ES Module index
  const jsContent = `/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

${exports
  .map((line) => {
    // If line is already commented out, keep it as is
    if (line.startsWith("//")) return line;

    const [exportPart, importPart] = line.split(" from ");
    const importPath = importPart
      .replace(";", "")
      .replace(/["']/g, "")
      .replace(".ts", "");
    return `${exportPart} from "${importPath}.js";`;
  })
  .join("\n")}

${signatureExports
  .map((line) => {
    const [exportPart, importPart] = line.split(" from ");
    const importPath = importPart
      .replace(";", "")
      .replace(/["']/g, "")
      .replace(".ts", "");
    return `${exportPart} from "${importPath}.js";`;
  })
  .join("\n")}
`;

  // Generate CommonJS index
  const moduleNames = [
    ...exports
      .filter(line => !line.startsWith("//"))
      .map(line => line
        .split(" from ")[0]
        .replace("export { ", "")
        .replace(" }", "")
        .trim()),
    ...signatureExports
      .map(line => line
        .split(" from ")[0]
        .replace("export { signatures as ", "")
        .replace(" }", "")
        .trim())
  ];

  const cjsContent = `/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

${exports
  .map((line) => {
    // If line is already commented out, keep it as is
    if (line.startsWith("//")) return line;

    const [exportPart, importPart] = line.split(" from ");
    const varName = exportPart.replace("export { ", "").replace(" }", "");
    const importPath = importPart
      .replace(";", "")
      .replace(/["']/g, "")
      .replace(".ts", "");
    return `const ${varName} = require("${importPath}.cjs");`;
  })
  .join("\n")}

${signatureExports
  .map((line) => {
    const [exportPart, importPart] = line.split(" from ");
    const varName = exportPart
      .replace("export { signatures as ", "")
      .replace(" }", "");
    const importPath = importPart
      .replace(";", "")
      .replace(/["']/g, "")
      .replace(".ts", "");
    return `const ${varName} = require("${importPath}.cjs").signatures;`;
  })
  .join("\n")}

module.exports = {
${moduleNames.map(name => `  ${name},`).join("\n")}
};
`;

  // Write the files
  fs.writeFileSync("./dist/index.ts", tsContent);
  fs.writeFileSync("./dist/index.js", jsContent);
  fs.writeFileSync("./dist/index.cjs", cjsContent);

  // Update package.json exports
  updatePackageJsonExports({
    prod: NETWORKS.prod.networks.filter(
      (network) => !failedNetworks.includes(network)
    ),
    dev: NETWORKS.dev.networks.filter(
      (network) => !failedNetworks.includes(network)
    ),
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
