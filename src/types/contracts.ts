/**
 * Contract Types
 * Contains all type definitions for contract-related data structures
 */

// Network Types
export type ProdNetwork = 'datil-dev' | 'datil-test' | 'datil' | 'naga-dev';
export type DevNetwork = 'develop';
export type LitNetwork = ProdNetwork | DevNetwork;

// Contract Types
export interface ContractConfig {
  chainId?: string;
  rpcUrl?: string;
  chainName?: string;
  litNodeDomainName?: string;
  litNodePort?: number;
  rocketPort?: number;
}

export interface NetworkCache {
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

export interface NetworkPaths {
  abis: string;
  deployedContracts: string;
  error?: string;
  status: 'success' | 'error';
}

export interface ContractData {
  name: string;
  contractName?: string;
  data: any;
}

// Environment Types
export interface EnvConfig {
  GH_API_KEY: string;
  DEV_BRANCH: string;
} 