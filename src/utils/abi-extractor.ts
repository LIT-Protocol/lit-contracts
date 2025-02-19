/**
 * Utility for extracting specific ABI methods from contract data
 *
 * Usage:
 * ```typescript
 * const methods = extractAbiMethods(networkCache, ['transfer', 'approve']);
 * ```
 */

import type { NetworkCache } from "../types/contracts";
import { toFunctionSignature } from "viem/utils";
import { Interface } from "ethers";
/**
 * Represents a single contract method with its metadata
 */
interface ContractMethod {
  contractName: string;
  // network: string;
  address: string;
  signature: string;
  // methodName: string;
}

/**
 * Maps method names to their occurrences across different contracts
 */
interface ExtractedMethods {
  [methodName: string]: ContractMethod[];
}

/**
 * Extracts specified ABI methods from contract data
 * @param networkCache - The network cache containing contract data
 * @param methodNames - Array of method names to extract
 * @returns Object mapping method names to their contract occurrences
 */
export function extractAbiMethods(
  networkCache: NetworkCache,
  methodNames: string[]
): ExtractedMethods {
  const result: ExtractedMethods = {};

  // Initialize result object with empty arrays for each method
  methodNames.forEach((method) => {
    result[method] = [];
  });

  // Iterate through each contract in the network cache
  networkCache.data.forEach((contractGroup) => {
    const contractName = contractGroup.name;

    contractGroup.contracts.forEach((contract) => {
      const { network, address_hash: address, ABI } = contract;

      // Filter and process matching ABI methods
      ABI.forEach((abiItem) => {
        if (abiItem.type === "function" && methodNames.includes(abiItem.name)) {
          try {
            const iface = new Interface(ABI);
            const functionSignature = iface
              .getFunction(abiItem.name)
              ?.format("full")!;

            // const signature = toFunctionSignature(abiItem);
            // const signature = iface.format('full');
            result[abiItem.name].push({
              contractName,
              // network,
              address,
              signature: functionSignature,
            });
          } catch (error) {
            console.warn(
              `Failed to parse ABI item for method ${abiItem.name}:`,
              error
            );
          }
        }
      });
    });
  });

  return result;
}
