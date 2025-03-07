// Generated signatures for naga-develop network

module.exports = { signatures: {
  "claimAndMintNextAndAddAuthMethodsWithTypes": {
    "contractName": "PKPHelper",
    "address": "0x04C89607413713Ec9775E14b954286519d836FEf",
    "abi": {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "keyType",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "derivedKeyId",
              "type": "bytes32"
            },
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                }
              ],
              "internalType": "struct IPubkeyRouter.Signature[]",
              "name": "signatures",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct LibPKPNFTStorage.ClaimMaterial",
          "name": "claimMaterial",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "keyType",
              "type": "uint256"
            },
            {
              "internalType": "bytes[]",
              "name": "permittedIpfsCIDs",
              "type": "bytes[]"
            },
            {
              "internalType": "uint256[][]",
              "name": "permittedIpfsCIDScopes",
              "type": "uint256[][]"
            },
            {
              "internalType": "address[]",
              "name": "permittedAddresses",
              "type": "address[]"
            },
            {
              "internalType": "uint256[][]",
              "name": "permittedAddressScopes",
              "type": "uint256[][]"
            },
            {
              "internalType": "uint256[]",
              "name": "permittedAuthMethodTypes",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "permittedAuthMethodIds",
              "type": "bytes[]"
            },
            {
              "internalType": "bytes[]",
              "name": "permittedAuthMethodPubkeys",
              "type": "bytes[]"
            },
            {
              "internalType": "uint256[][]",
              "name": "permittedAuthMethodScopes",
              "type": "uint256[][]"
            },
            {
              "internalType": "bool",
              "name": "addPkpEthAddressAsPermittedAddress",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "sendPkpToItself",
              "type": "bool"
            }
          ],
          "internalType": "struct PKPHelper.AuthMethodData",
          "name": "authMethodData",
          "type": "tuple"
        }
      ],
      "name": "claimAndMintNextAndAddAuthMethodsWithTypes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    "signature": "function claimAndMintNextAndAddAuthMethodsWithTypes((uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures) claimMaterial, (uint256 keyType, bytes[] permittedIpfsCIDs, uint256[][] permittedIpfsCIDScopes, address[] permittedAddresses, uint256[][] permittedAddressScopes, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) authMethodData) payable returns (uint256)"
  },
  "mintNextAndAddAuthMethods": {
    "contractName": "PKPHelper",
    "address": "0x04C89607413713Ec9775E14b954286519d836FEf",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "permittedAuthMethodTypes",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "permittedAuthMethodIds",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes[]",
          "name": "permittedAuthMethodPubkeys",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256[][]",
          "name": "permittedAuthMethodScopes",
          "type": "uint256[][]"
        },
        {
          "internalType": "bool",
          "name": "addPkpEthAddressAsPermittedAddress",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "sendPkpToItself",
          "type": "bool"
        }
      ],
      "name": "mintNextAndAddAuthMethods",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    "signature": "function mintNextAndAddAuthMethods(uint256 keyType, uint256[] permittedAuthMethodTypes, bytes[] permittedAuthMethodIds, bytes[] permittedAuthMethodPubkeys, uint256[][] permittedAuthMethodScopes, bool addPkpEthAddressAsPermittedAddress, bool sendPkpToItself) payable returns (uint256)"
  },
  "claimAndMint": {
    "contractName": "PKPNFT",
    "address": "0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "realmId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "derivedKeyId",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            }
          ],
          "internalType": "struct IPubkeyRouter.Signature[]",
          "name": "signatures",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "stakingContractAddress",
          "type": "address"
        }
      ],
      "name": "claimAndMint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    "signature": "function claimAndMint(uint256 realmId, uint256 keyType, bytes32 derivedKeyId, (bytes32 r, bytes32 s, uint8 v)[] signatures, address stakingContractAddress) payable returns (uint256)"
  },
  "getEthAddress": {
    "contractName": "PubkeyRouter",
    "address": "0x809d550fca64d94Bd9F66E60752A544199cfAC3D",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getEthAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function getEthAddress(uint256 tokenId) view returns (address)"
  },
  "getPubkey": {
    "contractName": "PubkeyRouter",
    "address": "0x809d550fca64d94Bd9F66E60752A544199cfAC3D",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getPubkey",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function getPubkey(uint256 tokenId) view returns (bytes)"
  },
  "mintCost": {
    "contractName": "PKPNFT",
    "address": "0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf",
    "abi": {
      "inputs": [],
      "name": "mintCost",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function mintCost() view returns (uint256)"
  },
  "tokenOfOwnerByIndex": {
    "contractName": "PKPNFT",
    "address": "0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf",
    "abi": {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)"
  },
  "addPermittedAction": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "ipfsCID",
          "type": "bytes"
        },
        {
          "internalType": "uint256[]",
          "name": "scopes",
          "type": "uint256[]"
        }
      ],
      "name": "addPermittedAction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    "signature": "function addPermittedAction(uint256 tokenId, bytes ipfsCID, uint256[] scopes)"
  },
  "addPermittedAddress": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "scopes",
          "type": "uint256[]"
        }
      ],
      "name": "addPermittedAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    "signature": "function addPermittedAddress(uint256 tokenId, address user, uint256[] scopes)"
  },
  "getPermittedActions": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getPermittedActions",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function getPermittedActions(uint256 tokenId) view returns (bytes[])"
  },
  "getPermittedAddresses": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getPermittedAddresses",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function getPermittedAddresses(uint256 tokenId) view returns (address[])"
  },
  "getPermittedAuthMethodScopes": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "authMethodType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "id",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "maxScopeId",
          "type": "uint256"
        }
      ],
      "name": "getPermittedAuthMethodScopes",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "",
          "type": "bool[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function getPermittedAuthMethodScopes(uint256 tokenId, uint256 authMethodType, bytes id, uint256 maxScopeId) view returns (bool[])"
  },
  "getPermittedAuthMethods": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getPermittedAuthMethods",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "authMethodType",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "id",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "userPubkey",
              "type": "bytes"
            }
          ],
          "internalType": "struct LibPKPPermissionsStorage.AuthMethod[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function getPermittedAuthMethods(uint256 tokenId) view returns ((uint256 authMethodType, bytes id, bytes userPubkey)[])"
  },
  "isPermittedAction": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "ipfsCID",
          "type": "bytes"
        }
      ],
      "name": "isPermittedAction",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function isPermittedAction(uint256 tokenId, bytes ipfsCID) view returns (bool)"
  },
  "isPermittedAddress": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "isPermittedAddress",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function isPermittedAddress(uint256 tokenId, address user) view returns (bool)"
  },
  "removePermittedAction": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "ipfsCID",
          "type": "bytes"
        }
      ],
      "name": "removePermittedAction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    "signature": "function removePermittedAction(uint256 tokenId, bytes ipfsCID)"
  },
  "removePermittedAddress": {
    "contractName": "PKPPermissions",
    "address": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "removePermittedAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    "signature": "function removePermittedAddress(uint256 tokenId, address user)"
  },
  "deriveEthAddressFromPubkey": {
    "contractName": "PubkeyRouter",
    "address": "0x809d550fca64d94Bd9F66E60752A544199cfAC3D",
    "abi": {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "pubkey",
          "type": "bytes"
        }
      ],
      "name": "deriveEthAddressFromPubkey",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    "signature": "function deriveEthAddressFromPubkey(bytes pubkey) pure returns (address)"
  },
  "ethAddressToPkpId": {
    "contractName": "PubkeyRouter",
    "address": "0x809d550fca64d94Bd9F66E60752A544199cfAC3D",
    "abi": {
      "inputs": [
        {
          "internalType": "address",
          "name": "ethAddress",
          "type": "address"
        }
      ],
      "name": "ethAddressToPkpId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function ethAddressToPkpId(address ethAddress) view returns (uint256)"
  },
  "getActiveUnkickedValidatorStructsAndCounts": {
    "contractName": "Staking",
    "address": "0x9E545E3C0baAB3E08CdfD552C960A1050f373042",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "realmId",
          "type": "uint256"
        }
      ],
      "name": "getActiveUnkickedValidatorStructsAndCounts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "epochLength",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "number",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardEpochNumber",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "retries",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeout",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastEpochStart",
              "type": "uint256"
            }
          ],
          "internalType": "struct LibStakingStorage.Epoch",
          "name": "",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "ip",
              "type": "uint32"
            },
            {
              "internalType": "uint128",
              "name": "ipv6",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "port",
              "type": "uint32"
            },
            {
              "internalType": "address",
              "name": "nodeAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "reward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "senderPubKey",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "receiverPubKey",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastActiveEpoch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "commission",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "commissionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastRewardEpoch",
              "type": "uint256"
            }
          ],
          "internalType": "struct LibStakingStorage.Validator[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function getActiveUnkickedValidatorStructsAndCounts(uint256 realmId) view returns ((uint256 epochLength, uint256 number, uint256 rewardEpochNumber, uint256 endTime, uint256 retries, uint256 timeout, uint256 startTime, uint256 lastEpochStart), uint256, (uint32 ip, uint128 ipv6, uint32 port, address nodeAddress, uint256 reward, uint256 senderPubKey, uint256 receiverPubKey, uint256 lastActiveEpoch, uint256 commission, uint256 commissionRate, uint256 lastRewardEpoch)[])"
  },
  "getNodesForRequest": {
    "contractName": "PriceFeed",
    "address": "0xf953b3A269d80e3eB0F2947630Da976B896A8C5b",
    "abi": {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "realmId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "productIds",
          "type": "uint256[]"
        }
      ],
      "name": "getNodesForRequest",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "ip",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "ipv6",
                  "type": "uint128"
                },
                {
                  "internalType": "uint32",
                  "name": "port",
                  "type": "uint32"
                },
                {
                  "internalType": "address",
                  "name": "nodeAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "reward",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "senderPubKey",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "receiverPubKey",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lastActiveEpoch",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "commission",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "commissionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lastRewardEpoch",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LibStakingStorage.Validator",
              "name": "validator",
              "type": "tuple"
            },
            {
              "internalType": "uint256[]",
              "name": "prices",
              "type": "uint256[]"
            }
          ],
          "internalType": "struct LibPriceFeedStorage.NodeInfoAndPrices[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "signature": "function getNodesForRequest(uint256 realmId, uint256[] productIds) view returns (uint256, uint256, ((uint32 ip, uint128 ipv6, uint32 port, address nodeAddress, uint256 reward, uint256 senderPubKey, uint256 receiverPubKey, uint256 lastActiveEpoch, uint256 commission, uint256 commissionRate, uint256 lastRewardEpoch) validator, uint256[] prices)[])"
  }
} };
