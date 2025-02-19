/**
 * Network Configuration
 * Contains all network-related constants and configurations
 */

// GitHub Configuration
export const GITHUB_API_BASE = "https://api.github.com/repos";
export const USERNAME = "LIT-Protocol";
export const NETWORKS_REPO = "networks";
export const LIT_ASSETS_REPO = "lit-assets";

// Network path mapping - single source of truth
export const PATH_BY_NETWORK = {
  datil: "datil-prod",
  "datil-dev": "datil-dev",
  "datil-test": "datil-test",
  "naga-dev": "naga-dev",
} as const;

// Network types derived from PATH_BY_NETWORK
export type NetworkName = keyof typeof PATH_BY_NETWORK;
export type NetworkPath = (typeof PATH_BY_NETWORK)[NetworkName];

/**
 * Network path configuration for GitHub API requests
 *
 * Production:
 * - Uses network-specific subdirectories (e.g., "datil-prod/abis" for datil network)
 * - Special case: "datil" network uses "datil-prod" directory
 *
 * Development:
 * - Uses a flat structure without network subdirectories
 * - All files are in the same directory (e.g., "rust/lit-core/blockchain/abis")
 */
export const NETWORK_PATHS = {
  prod: {
    /**
     * Maps network names to their directory names
     * Example: "datil" -> "datil-prod", "datil-dev" -> "datil-dev"
     */
    networkToPath: PATH_BY_NETWORK,
    /**
     * Constructs the full path for production networks
     * Format: <network-directory>/<content-path>
     * Example: "datil-prod/abis"
     */
    getContentPath: (network: NetworkName, contentPath: string) => {
      const networkDir = PATH_BY_NETWORK[network];
      return `${networkDir}/${contentPath}`;
    },
  },
  dev: {
    /**
     * Constructs the full path for development
     * Uses the content path directly without network subdirectory
     * Example: "rust/lit-core/blockchain/abis"
     */
    getContentPath: (network: string, contentPath: string) => contentPath,
  },
} as const;

// Network Configurations
export const NETWORKS = {
  prod: {
    networks: Object.keys(PATH_BY_NETWORK) as NetworkName[],
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

// Contract Name Mapping
export const CONTRACT_NAME_MAP = {
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
} as const;

// Environment Configuration
export const ENV_CONFIG = {
  prod: {
    repoName: NETWORKS_REPO,
    path: "abis",
    fileExtensionToRemove: ".abi",
    abiSourceInJson: [],
  },
  dev: {
    repoName: LIT_ASSETS_REPO,
    path: "rust/lit-core/lit-blockchain/abis",
    fileExtensionToRemove: ".json",
    abiSourceInJson: ["abi"],
  },
} as const;
