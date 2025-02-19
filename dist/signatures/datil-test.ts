/**
 * Generated Contract Method Signatures for datil-test
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

export const signatures = {
  "getPermittedActions": [
    {
      "contractName": "PKPPermissions",
      "address": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
      "signature": "function getPermittedActions(uint256 tokenId) view returns (bytes[])"
    }
  ],
  "getPermittedAddresses": [
    {
      "contractName": "PKPPermissions",
      "address": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
      "signature": "function getPermittedAddresses(uint256 tokenId) view returns (address[])"
    }
  ],
  "isPermittedAction": [
    {
      "contractName": "PKPPermissions",
      "address": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
      "signature": "function isPermittedAction(uint256 tokenId, bytes ipfsCID) view returns (bool)"
    }
  ],
  "isPermittedAddress": [
    {
      "contractName": "PKPPermissions",
      "address": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
      "signature": "function isPermittedAddress(uint256 tokenId, address user) view returns (bool)"
    }
  ],
  "addPermittedAction": [
    {
      "contractName": "PKPPermissions",
      "address": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
      "signature": "function addPermittedAction(uint256 tokenId, bytes ipfsCID, uint256[] scopes)"
    }
  ],
  "addPermittedAddress": [
    {
      "contractName": "PKPPermissions",
      "address": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
      "signature": "function addPermittedAddress(uint256 tokenId, address user, uint256[] scopes)"
    }
  ],
  "removePermittedAction": [
    {
      "contractName": "PKPPermissions",
      "address": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
      "signature": "function removePermittedAction(uint256 tokenId, bytes ipfsCID)"
    }
  ],
  "removePermittedAddress": [
    {
      "contractName": "PKPPermissions",
      "address": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
      "signature": "function removePermittedAddress(uint256 tokenId, address user)"
    }
  ],
  "tokenOfOwnerByIndex": [
    {
      "contractName": "PKPNFT",
      "address": "0x6a0f439f064B7167A8Ea6B22AcC07ae5360ee0d1",
      "signature": "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)"
    },
    {
      "contractName": "RateLimitNFT",
      "address": "0xa17f11B7f828EEc97926E56D98D5AB63A0231b77",
      "signature": "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)"
    }
  ],
  "claimAndMint": [
    {
      "contractName": "PKPNFT",
      "address": "0x6a0f439f064B7167A8Ea6B22AcC07ae5360ee0d1",
      "signature": "function claimAndMint(uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures) payable returns (uint256)"
    }
  ],
  "claimAndMintNextAndAddAuthMethodsWithTypes": [
    {
      "contractName": "PKPHelper",
      "address": "0x341E5273E2E2ea3c4aDa4101F008b1261E58510D",
      "signature": "function claimAndMintNextAndAddAuthMethodsWithTypes((uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures) claimMaterial, (uint256 keyType, bytes[] permittedIpfsCIDs, uint256[][] permittedIpfsCIDScopes, address[] permittedAddresses, uint256[][] permittedAddressScopes, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) authMethodData) payable returns (uint256)"
    }
  ],
  "mintNextAndAddAuthMethods": [
    {
      "contractName": "PKPHelper",
      "address": "0x341E5273E2E2ea3c4aDa4101F008b1261E58510D",
      "signature": "function mintNextAndAddAuthMethods(uint256 keyType, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) payable returns (uint256)"
    }
  ],
  "getActiveUnkickedValidatorStructsAndCounts": [
    {
      "contractName": "Staking",
      "address": "0xdec37933239846834b3BfD408913Ed3dbEf6588F",
      "signature": "function getActiveUnkickedValidatorStructsAndCounts() view returns ((uint256 epochLength, uint256 number, uint256 endTime, uint256 retries, uint256 timeout), uint256, (uint32 ip, uint128 ipv6, uint32 port, address nodeAddress, uint256 reward, uint256 senderPubKey, uint256 receiverPubKey)[])"
    }
  ],
  "getNodesForRequest": []
} as const;
export type Signatures = typeof signatures;
