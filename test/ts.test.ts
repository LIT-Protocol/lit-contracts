/**
 * TypeScript Import Test
 * Tests that TypeScript imports and type definitions are working correctly
 */

import { datil, datilDev, datilTest } from "../dist/index";
import { datil as datilDirect } from "../dist/prod/datil";
// Type verification
type Contract = {
  config?: {
    chainId?: string;
    rpcUrl?: string;
    chainName?: string;
    litNodeDomainName?: string;
    litNodePort?: number;
    rocketPort?: number;
  };
  data: ReadonlyArray<{
    readonly name: string;
    readonly contracts: ReadonlyArray<{
      readonly network: string;
      readonly address_hash: string;
      readonly inserted_at: string;
      readonly ABI: ReadonlyArray<any>;
    }>;
  }>;
};

// Type assertions - these will fail at compile time if types are incorrect
const verifyTypes = () => {
  const contracts: Contract[] = [datil, datilDev, datilTest];
  console.log("✅ TS: Type checking passed");
  return contracts;
};

console.log("✅ TS: Root import successful:", { datil, datilDev, datilTest });
console.log("✅ TS: Direct import successful:", { datilDirect });

// Verify the imported objects have the expected structure
const verifyContract = (name: string, contract: Contract) => {
  // Check for required properties
  if (!contract.data || !Array.isArray(contract.data)) {
    throw new Error(`${name} is missing or has invalid data array`);
  }

  // Verify at least one contract exists with required properties
  const hasValidContract = contract.data.some((item) =>
    item.contracts?.some(
      (c: { network: string; address_hash: string; ABI: any[] }) =>
        c.network && c.address_hash && Array.isArray(c.ABI)
    )
  );

  if (!hasValidContract) {
    throw new Error(`${name} has no valid contracts with required properties`);
  }

  console.log(`✅ TS: ${name} has correct structure`);
};

// Run verifications
verifyTypes();
verifyContract("datil", datil);
verifyContract("datilDev", datilDev);
verifyContract("datilTest", datilTest);
verifyContract("datilDirect", datilDirect);
