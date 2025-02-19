/**
 * Generated Contract Method Signatures for datil-dev
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

export const signatures = {
  "getPermittedActions": [
    {
      "contractName": "PKPPermissions",
      "address": "0xf64638F1eb3b064f5443F7c9e2Dc050ed535D891",
      "signature": "function getPermittedActions(uint256 tokenId) view returns (bytes[])"
    }
  ],
  "getPermittedAddresses": [
    {
      "contractName": "PKPPermissions",
      "address": "0xf64638F1eb3b064f5443F7c9e2Dc050ed535D891",
      "signature": "function getPermittedAddresses(uint256 tokenId) view returns (address[])"
    }
  ],
  "isPermittedAction": [
    {
      "contractName": "PKPPermissions",
      "address": "0xf64638F1eb3b064f5443F7c9e2Dc050ed535D891",
      "signature": "function isPermittedAction(uint256 tokenId, bytes ipfsCID) view returns (bool)"
    }
  ],
  "isPermittedAddress": [
    {
      "contractName": "PKPPermissions",
      "address": "0xf64638F1eb3b064f5443F7c9e2Dc050ed535D891",
      "signature": "function isPermittedAddress(uint256 tokenId, address user) view returns (bool)"
    }
  ],
  "addPermittedAction": [
    {
      "contractName": "PKPPermissions",
      "address": "0xf64638F1eb3b064f5443F7c9e2Dc050ed535D891",
      "signature": "function addPermittedAction(uint256 tokenId, bytes ipfsCID, uint256[] scopes)"
    }
  ],
  "addPermittedAddress": [
    {
      "contractName": "PKPPermissions",
      "address": "0xf64638F1eb3b064f5443F7c9e2Dc050ed535D891",
      "signature": "function addPermittedAddress(uint256 tokenId, address user, uint256[] scopes)"
    }
  ],
  "removePermittedAction": [
    {
      "contractName": "PKPPermissions",
      "address": "0xf64638F1eb3b064f5443F7c9e2Dc050ed535D891",
      "signature": "function removePermittedAction(uint256 tokenId, bytes ipfsCID)"
    }
  ],
  "removePermittedAddress": [
    {
      "contractName": "PKPPermissions",
      "address": "0xf64638F1eb3b064f5443F7c9e2Dc050ed535D891",
      "signature": "function removePermittedAddress(uint256 tokenId, address user)"
    }
  ],
  "tokenOfOwnerByIndex": [
    {
      "contractName": "PKPNFT",
      "address": "0x02C4242F72d62c8fEF2b2DB088A35a9F4ec741C7",
      "signature": "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)"
    },
    {
      "contractName": "RateLimitNFT",
      "address": "0x1A12D5B3D6A52B3bDe0468900795D35ce994ac2b",
      "signature": "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)"
    }
  ],
  "claimAndMint": [
    {
      "contractName": "PKPNFT",
      "address": "0x02C4242F72d62c8fEF2b2DB088A35a9F4ec741C7",
      "signature": "function claimAndMint(uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures, address stakingContractAddress) payable returns (uint256)"
    }
  ],
  "claimAndMintNextAndAddAuthMethodsWithTypes": [
    {
      "contractName": "PKPHelper",
      "address": "0x3285402b15f557C496CD116235B1EC8217Cc62C2",
      "signature": "function claimAndMintNextAndAddAuthMethodsWithTypes((uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures) claimMaterial, (uint256 keyType, bytes[] permittedIpfsCIDs, uint256[][] permittedIpfsCIDScopes, address[] permittedAddresses, uint256[][] permittedAddressScopes, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) authMethodData) payable returns (uint256)"
    }
  ],
  "mintNextAndAddAuthMethods": [
    {
      "contractName": "PKPHelper",
      "address": "0x3285402b15f557C496CD116235B1EC8217Cc62C2",
      "signature": "function mintNextAndAddAuthMethods(uint256 keyType, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) payable returns (uint256)"
    }
  ],
  "getActiveUnkickedValidatorStructsAndCounts": [
    {
      "contractName": "Staking",
      "address": "0xD4507CD392Af2c80919219d7896508728f6A623F",
      "signature": "function getActiveUnkickedValidatorStructsAndCounts() view returns ((uint256 epochLength, uint256 number, uint256 endTime, uint256 retries, uint256 timeout), uint256, (uint32 ip, uint128 ipv6, uint32 port, address nodeAddress, uint256 reward, uint256 senderPubKey, uint256 receiverPubKey)[])"
    }
  ],
  "getNodesForRequest": []
};
