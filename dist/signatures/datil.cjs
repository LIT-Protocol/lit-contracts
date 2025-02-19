/**
 * Generated Contract Method Signatures for datil
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

const signatures = {
  "getPermittedActions": [
    {
      "contractName": "PKPPermissions",
      "address": "0x213Db6E1446928E19588269bEF7dFc9187c4829A",
      "signature": "function getPermittedActions(uint256 tokenId) view returns (bytes[])"
    }
  ],
  "getPermittedAddresses": [
    {
      "contractName": "PKPPermissions",
      "address": "0x213Db6E1446928E19588269bEF7dFc9187c4829A",
      "signature": "function getPermittedAddresses(uint256 tokenId) view returns (address[])"
    }
  ],
  "isPermittedAction": [
    {
      "contractName": "PKPPermissions",
      "address": "0x213Db6E1446928E19588269bEF7dFc9187c4829A",
      "signature": "function isPermittedAction(uint256 tokenId, bytes ipfsCID) view returns (bool)"
    }
  ],
  "isPermittedAddress": [
    {
      "contractName": "PKPPermissions",
      "address": "0x213Db6E1446928E19588269bEF7dFc9187c4829A",
      "signature": "function isPermittedAddress(uint256 tokenId, address user) view returns (bool)"
    }
  ],
  "addPermittedAction": [
    {
      "contractName": "PKPPermissions",
      "address": "0x213Db6E1446928E19588269bEF7dFc9187c4829A",
      "signature": "function addPermittedAction(uint256 tokenId, bytes ipfsCID, uint256[] scopes)"
    }
  ],
  "addPermittedAddress": [
    {
      "contractName": "PKPPermissions",
      "address": "0x213Db6E1446928E19588269bEF7dFc9187c4829A",
      "signature": "function addPermittedAddress(uint256 tokenId, address user, uint256[] scopes)"
    }
  ],
  "removePermittedAction": [
    {
      "contractName": "PKPPermissions",
      "address": "0x213Db6E1446928E19588269bEF7dFc9187c4829A",
      "signature": "function removePermittedAction(uint256 tokenId, bytes ipfsCID)"
    }
  ],
  "removePermittedAddress": [
    {
      "contractName": "PKPPermissions",
      "address": "0x213Db6E1446928E19588269bEF7dFc9187c4829A",
      "signature": "function removePermittedAddress(uint256 tokenId, address user)"
    }
  ],
  "tokenOfOwnerByIndex": [
    {
      "contractName": "PKPNFT",
      "address": "0x487A9D096BB4B7Ac1520Cb12370e31e677B175EA",
      "signature": "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)"
    },
    {
      "contractName": "RateLimitNFT",
      "address": "0x01205d94Fee4d9F59A4aB24bf80D11d4DdAf6Eed",
      "signature": "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)"
    }
  ],
  "claimAndMint": [
    {
      "contractName": "PKPNFT",
      "address": "0x487A9D096BB4B7Ac1520Cb12370e31e677B175EA",
      "signature": "function claimAndMint(uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures) payable returns (uint256)"
    }
  ],
  "claimAndMintNextAndAddAuthMethodsWithTypes": [
    {
      "contractName": "PKPHelper",
      "address": "0x5B55ee57C459a31072145F2Fc00b35de20520adD",
      "signature": "function claimAndMintNextAndAddAuthMethodsWithTypes((uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures) claimMaterial, (uint256 keyType, bytes[] permittedIpfsCIDs, uint256[][] permittedIpfsCIDScopes, address[] permittedAddresses, uint256[][] permittedAddressScopes, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) authMethodData) payable returns (uint256)"
    }
  ],
  "mintNextAndAddAuthMethods": [
    {
      "contractName": "PKPHelper",
      "address": "0x5B55ee57C459a31072145F2Fc00b35de20520adD",
      "signature": "function mintNextAndAddAuthMethods(uint256 keyType, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) payable returns (uint256)"
    }
  ],
  "getActiveUnkickedValidatorStructsAndCounts": [
    {
      "contractName": "Staking",
      "address": "0x21d636d95eE71150c0c3Ffa79268c989a329d1CE",
      "signature": "function getActiveUnkickedValidatorStructsAndCounts() view returns ((uint256 epochLength, uint256 number, uint256 endTime, uint256 retries, uint256 timeout), uint256, (uint32 ip, uint128 ipv6, uint32 port, address nodeAddress, uint256 reward, uint256 senderPubKey, uint256 receiverPubKey)[])"
    }
  ],
  "getNodesForRequest": []
};

module.exports = {
  signatures
};
