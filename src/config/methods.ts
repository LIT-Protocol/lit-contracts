// List of methods to extract signatures for
export const METHODS_TO_EXTRACT = [
  // Permissions Read:
  "getPermittedActions",
  "getPermittedAddresses",
  "isPermittedAction",
  "isPermittedAddress",

  // Permissions Write:
  "addPermittedAction",
  "addPermittedAddress",
  "removePermittedAction",
  "removePermittedAddress",

  // PKP Read:
  "tokenOfOwnerByIndex",
  "mintCost",

  // PKP Write:
  "claimAndMint",
  "claimAndMintNextAndAddAuthMethodsWithTypes",
  "mintNextAndAddAuthMethods",

  // Staking:
  "getActiveUnkickedValidatorStructsAndCounts",
  "getNodesForRequest",
];
