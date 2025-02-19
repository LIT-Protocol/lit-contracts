/**
 * Generated Contract Method Signatures for develop
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

export const signatures = {
  "getActiveUnkickedValidatorStructsAndCounts": {
    "contractName": "Staking",
    "address": "0x1aD7Ad65Dd04dab562205d2e5FE58066BfDa822e",
    "signature": "function getActiveUnkickedValidatorStructsAndCounts(uint256 realmId) view returns ((uint256 epochLength, uint256 number, uint256 rewardEpochNumber, uint256 nextRewardEpochNumber, uint256 endTime, uint256 retries, uint256 timeout, uint256 startTime), uint256, (uint32 ip, uint128 ipv6, uint32 port, address nodeAddress, uint256 reward, uint256 senderPubKey, uint256 receiverPubKey, uint256 lastActiveEpoch, uint256 commission, uint256 commissionRate, uint256 lastRewardEpoch, uint256 lastRealmId, uint256 delegatedStakeAmountNeedingAttribution, uint256 delegatedStakeWeightNeedingAttribution)[])"
  },
  "claimAndMint": {
    "contractName": "PKPNFT",
    "address": "0x10d0223524e5d599C11758cbB091F840ed2f49a6",
    "signature": "function claimAndMint(uint256 realmId, uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures, address stakingContractAddress) payable returns (uint256)"
  },
  "mintCost": {
    "contractName": "PKPNFT",
    "address": "0x10d0223524e5d599C11758cbB091F840ed2f49a6",
    "signature": "function mintCost() view returns (uint256)"
  },
  "tokenOfOwnerByIndex": {
    "contractName": "PKPNFT",
    "address": "0x10d0223524e5d599C11758cbB091F840ed2f49a6",
    "signature": "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)"
  },
  "claimAndMintNextAndAddAuthMethodsWithTypes": {
    "contractName": "PKPHelper",
    "address": "0x0c2f4Deb242f14379C809BCc70DDE5e7c9B24Cb0",
    "signature": "function claimAndMintNextAndAddAuthMethodsWithTypes((uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures) claimMaterial, (uint256 keyType, bytes[] permittedIpfsCIDs, uint256[][] permittedIpfsCIDScopes, address[] permittedAddresses, uint256[][] permittedAddressScopes, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) authMethodData) payable returns (uint256)"
  },
  "mintNextAndAddAuthMethods": {
    "contractName": "PKPHelper",
    "address": "0x0c2f4Deb242f14379C809BCc70DDE5e7c9B24Cb0",
    "signature": "function mintNextAndAddAuthMethods(uint256 keyType, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) payable returns (uint256)"
  },
  "addPermittedAction": {
    "contractName": "PKPPermissions",
    "address": "0x04938BF1d2D3Ec15Dd519e01EAfb0324F6589BBe",
    "signature": "function addPermittedAction(uint256 tokenId, bytes ipfsCID, uint256[] scopes)"
  },
  "addPermittedAddress": {
    "contractName": "PKPPermissions",
    "address": "0x04938BF1d2D3Ec15Dd519e01EAfb0324F6589BBe",
    "signature": "function addPermittedAddress(uint256 tokenId, address user, uint256[] scopes)"
  },
  "getPermittedActions": {
    "contractName": "PKPPermissions",
    "address": "0x04938BF1d2D3Ec15Dd519e01EAfb0324F6589BBe",
    "signature": "function getPermittedActions(uint256 tokenId) view returns (bytes[])"
  },
  "getPermittedAddresses": {
    "contractName": "PKPPermissions",
    "address": "0x04938BF1d2D3Ec15Dd519e01EAfb0324F6589BBe",
    "signature": "function getPermittedAddresses(uint256 tokenId) view returns (address[])"
  },
  "isPermittedAction": {
    "contractName": "PKPPermissions",
    "address": "0x04938BF1d2D3Ec15Dd519e01EAfb0324F6589BBe",
    "signature": "function isPermittedAction(uint256 tokenId, bytes ipfsCID) view returns (bool)"
  },
  "isPermittedAddress": {
    "contractName": "PKPPermissions",
    "address": "0x04938BF1d2D3Ec15Dd519e01EAfb0324F6589BBe",
    "signature": "function isPermittedAddress(uint256 tokenId, address user) view returns (bool)"
  },
  "removePermittedAction": {
    "contractName": "PKPPermissions",
    "address": "0x04938BF1d2D3Ec15Dd519e01EAfb0324F6589BBe",
    "signature": "function removePermittedAction(uint256 tokenId, bytes ipfsCID)"
  },
  "removePermittedAddress": {
    "contractName": "PKPPermissions",
    "address": "0x04938BF1d2D3Ec15Dd519e01EAfb0324F6589BBe",
    "signature": "function removePermittedAddress(uint256 tokenId, address user)"
  },
  "getNodesForRequest": {
    "contractName": "PriceFeed",
    "address": "0x19F421a79401a75C1f850a4655479F952e38e00F",
    "signature": "function getNodesForRequest(uint256 realmId, uint256[] productIds) view returns (uint256, uint256, ((uint32 ip, uint128 ipv6, uint32 port, address nodeAddress, uint256 reward, uint256 senderPubKey, uint256 receiverPubKey, uint256 lastActiveEpoch, uint256 commission, uint256 commissionRate, uint256 lastRewardEpoch, uint256 lastRealmId, uint256 delegatedStakeAmountNeedingAttribution, uint256 delegatedStakeWeightNeedingAttribution) validator, uint256[] prices)[])"
  }
} as const;
export type Signatures = typeof signatures;
