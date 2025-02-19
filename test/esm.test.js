/**
 * ES Module Import Test
 * Tests that ES Module imports are working correctly
 */

import { datil, datilDev, datilTest } from '../dist/index.js';
import { datil as datilDirect } from '../dist/prod/datil.js';

console.log('✅ ESM: Root import successful:', { datil, datilDev, datilTest });
console.log('✅ ESM: Direct import successful:', { datilDirect });

// Verify the imported objects have the expected structure
const verifyContract = (name, contract) => {
  // Check for required properties
  if (!contract.data || !Array.isArray(contract.data)) {
    throw new Error(`${name} is missing or has invalid data array`);
  }

  // Verify at least one contract exists with required properties
  const hasValidContract = contract.data.some(item => 
    item.contracts?.some(c => 
      c.network && c.address_hash && Array.isArray(c.ABI)
    )
  );

  if (!hasValidContract) {
    throw new Error(`${name} has no valid contracts with required properties`);
  }

  console.log(`✅ ESM: ${name} has correct structure`);
};

verifyContract('datil', datil);
verifyContract('datilDev', datilDev);
verifyContract('datilTest', datilTest);
verifyContract('datilDirect', datilDirect); 