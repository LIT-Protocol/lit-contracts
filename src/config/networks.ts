/**
 * Network Configuration
 * Contains all network-related constants and configurations
 */

// GitHub Configuration
export const GITHUB_API_BASE = 'https://api.github.com/repos';
export const USERNAME = 'LIT-Protocol';
export const NETWORKS_REPO = 'networks';

// Network Configurations
export const NETWORKS = {
  prod: {
    networks: ['datil-dev', 'datil-test', 'datil', 'naga-dev'] as const,
    deployedContracts: {
      'datil-dev': 'https://raw.githubusercontent.com/LIT-Protocol/networks/main/datil-dev/deployed-lit-node-contracts-temp.json',
      'datil-test': 'https://raw.githubusercontent.com/LIT-Protocol/networks/main/datil-test/deployed-lit-node-contracts-temp.json',
      'datil': 'https://raw.githubusercontent.com/LIT-Protocol/networks/main/datil-prod/deployed-lit-node-contracts-temp.json',
      'naga-dev': 'https://raw.githubusercontent.com/LIT-Protocol/networks/main/naga-dev/deployed-lit-node-contracts-temp.json',
    },
  },
  dev: {
    networks: ['develop'] as const,
    deployedContracts: {
      develop: 'https://raw.githubusercontent.com/LIT-Protocol/networks/main/naga-dev/deployed-lit-node-contracts-temp.json',
    },
  },
} as const;

// Contract Name Mapping
export const CONTRACT_NAME_MAP = {
  litTokenContractAddress: 'LITToken',
  pkpNftContractAddress: 'PKPNFT',
  pkpHelperContractAddress: 'PKPHelper',
  pkpPermissionsContractAddress: 'PKPPermissions',
  pkpNftMetadataContractAddress: 'PKPNFTMetadata',
  pubkeyRouterContractAddress: 'PubkeyRouter',
  rateLimitNftContractAddress: 'RateLimitNFT',
  stakingBalancesContractAddress: 'StakingBalances',
  stakingContractAddress: 'Staking',
  multisenderContractAddress: 'Multisender',
  allowlistContractAddress: 'Allowlist',
  paymentDelegationContractAddress: 'PaymentDelegation',
  priceFeedContractAddress: 'PriceFeed',
  cloneNetContractAddress: 'CloneNet',
} as const;

// Environment Configuration
export const ENV_CONFIG = {
  prod: {
    repoName: NETWORKS_REPO,
    branch: 'main',
    path: 'abis',
    fileExtensionToRemove: '.abi',
    abiSourceInJson: [],
  },
  dev: {
    repoName: 'lit-assets',
    path: 'rust/lit-core/lit-blockchain/abis',
    fileExtensionToRemove: '.json',
    abiSourceInJson: ['abi'],
  },
} as const; 