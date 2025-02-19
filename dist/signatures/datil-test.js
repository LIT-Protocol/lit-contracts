/**
 * Generated Contract Method Signatures for datil-test
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

export const signatures = {
  "Staking": {
    "address": "0xdec37933239846834b3BfD408913Ed3dbEf6588F",
    "methods": {
      "getActiveUnkickedValidatorStructsAndCounts": {
        "inputs": [],
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
              }
            ],
            "internalType": "struct LibStakingStorage.Validator[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    "events": [
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamond.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "indexed": false,
            "internalType": "struct IDiamond.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "DiamondCut",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reason",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "tolerance",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "intervalSecs",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "kickPenaltyPercent",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct LibStakingStorage.ComplaintConfig",
            "name": "config",
            "type": "tuple"
          }
        ],
        "name": "ComplaintConfigSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newTokenRewardPerTokenPerEpoch",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "newKeyTypes",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newMinimumValidatorCount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newMaxConcurrentRequests",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newMaxTripleCount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newMinTripleCount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newPeerCheckingIntervalSecs",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newMaxTripleConcurrency",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "newRpcHealthcheckEnabled",
            "type": "bool"
          }
        ],
        "name": "ConfigSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newEpochEndTime",
            "type": "uint256"
          }
        ],
        "name": "EpochEndTimeSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newEpochLength",
            "type": "uint256"
          }
        ],
        "name": "EpochLengthSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newEpochTimeout",
            "type": "uint256"
          }
        ],
        "name": "EpochTimeoutSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reason",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newKickPenaltyPercent",
            "type": "uint256"
          }
        ],
        "name": "KickPenaltyPercentSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "staker",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "epochNumber",
            "type": "uint256"
          }
        ],
        "name": "ReadyForNextEpoch",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Recovered",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "staker",
            "type": "address"
          }
        ],
        "name": "RequestToJoin",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "staker",
            "type": "address"
          }
        ],
        "name": "RequestToLeave",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newResolverContractAddress",
            "type": "address"
          }
        ],
        "name": "ResolverContractAddressSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newDuration",
            "type": "uint256"
          }
        ],
        "name": "RewardsDurationUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newStakingTokenAddress",
            "type": "address"
          }
        ],
        "name": "StakingTokenSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "enum LibStakingStorage.States",
            "name": "newState",
            "type": "uint8"
          }
        ],
        "name": "StateChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "staker",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amountBurned",
            "type": "uint256"
          }
        ],
        "name": "ValidatorKickedFromNextEpoch",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "staker",
            "type": "address"
          }
        ],
        "name": "ValidatorRejoinedNextEpoch",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "reporter",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "validatorStakerAddress",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "reason",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "VotedToKickValidatorInNextEpoch",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "major",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minor",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "patch",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct LibStakingStorage.Version",
            "name": "version",
            "type": "tuple"
          }
        ],
        "name": "VersionRequirementsUpdated",
        "type": "event"
      }
    ]
  },
  "PubkeyRouter": {
    "address": "0x65C3d057aef28175AfaC61a74cc6b27E88405583",
    "methods": {
      "deriveEthAddressFromPubkey": {
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
      "ethAddressToPkpId": {
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
      "getEthAddress": {
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
      "getPubkey": {
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
      }
    },
    "events": [
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamond.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "indexed": false,
            "internalType": "struct IDiamond.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "DiamondCut",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newResolverAddress",
            "type": "address"
          }
        ],
        "name": "ContractResolverAddressSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "pubkey",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "stakingContract",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "keyType",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "derivedKeyId",
            "type": "bytes32"
          }
        ],
        "name": "PubkeyRoutingDataSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "stakingContract",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "bytes",
                "name": "pubkey",
                "type": "bytes"
              },
              {
                "internalType": "uint256",
                "name": "keyType",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct IPubkeyRouter.RootKey",
            "name": "rootKey",
            "type": "tuple"
          }
        ],
        "name": "RootKeySet",
        "type": "event"
      }
    ]
  },
  "PKPNFT": {
    "address": "0x6a0f439f064B7167A8Ea6B22AcC07ae5360ee0d1",
    "methods": {
      "claimAndMint": {
        "inputs": [
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
      "mintCost": {
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
      "tokenOfOwnerByIndex": {
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
      }
    },
    "events": [
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamond.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "indexed": false,
            "internalType": "struct IDiamond.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "DiamondCut",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newResolverAddress",
            "type": "address"
          }
        ],
        "name": "ContractResolverAddressSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "newFreeMintSigner",
            "type": "address"
          }
        ],
        "name": "FreeMintSignerSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newMintCost",
            "type": "uint256"
          }
        ],
        "name": "MintCostSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "pubkey",
            "type": "bytes"
          }
        ],
        "name": "PKPMinted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Withdrew",
        "type": "event"
      }
    ]
  },
  "PKPHelper": {
    "address": "0x341E5273E2E2ea3c4aDa4101F008b1261E58510D",
    "methods": {
      "claimAndMintNextAndAddAuthMethodsWithTypes": {
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
      "mintNextAndAddAuthMethods": {
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
      }
    },
    "events": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newResolverAddress",
            "type": "address"
          }
        ],
        "name": "ContractResolverAddressSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "previousAdminRole",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newAdminRole",
            "type": "bytes32"
          }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleGranted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleRevoked",
        "type": "event"
      }
    ]
  },
  "PKPPermissions": {
    "address": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
    "methods": {
      "addPermittedAction": {
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
      "addPermittedAddress": {
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
      "getPermittedActions": {
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
      "getPermittedAddresses": {
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
      "isPermittedAction": {
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
      "isPermittedAddress": {
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
      "removePermittedAction": {
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
      "removePermittedAddress": {
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
      }
    },
    "events": [
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamond.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "indexed": false,
            "internalType": "struct IDiamond.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "DiamondCut",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newResolverAddress",
            "type": "address"
          }
        ],
        "name": "ContractResolverAddressSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "authMethodType",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "id",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "userPubkey",
            "type": "bytes"
          }
        ],
        "name": "PermittedAuthMethodAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "authMethodType",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "id",
            "type": "bytes"
          }
        ],
        "name": "PermittedAuthMethodRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "authMethodType",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "id",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "scopeId",
            "type": "uint256"
          }
        ],
        "name": "PermittedAuthMethodScopeAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "authMethodType",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "id",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "scopeId",
            "type": "uint256"
          }
        ],
        "name": "PermittedAuthMethodScopeRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "group",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "root",
            "type": "bytes32"
          }
        ],
        "name": "RootHashUpdated",
        "type": "event"
      }
    ]
  }
};
