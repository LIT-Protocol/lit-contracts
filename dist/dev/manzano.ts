export const manzano = {
  "config": {
    "chainId": "175177",
    "rpcUrl": "https://lit-protocol.calderachain.xyz/http",
    "chainName": "lit",
    "litNodeDomainName": "127.0.0.1",
    "litNodePort": 7470,
    "rocketPort": 7470
  },
  "data": [
    {
      "name": "StakingBalances",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0x82F0a170CEDFAaab623513EE558DB19f5D787C8D",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": []
        }
      ]
    },
    {
      "name": "Staking",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0xBC7F8d7864002b6629Ab49781D5199C8dD1DDcE1",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": [
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotAddFunctionToDiamondThatAlreadyExists",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4[]",
                  "name": "_selectors",
                  "type": "bytes4[]"
                }
              ],
              "name": "CannotAddSelectorsToZeroAddress",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotRemoveFunctionThatDoesNotExist",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotRemoveImmutableFunction",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotReplaceFunctionThatDoesNotExists",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotReplaceFunctionWithTheSameFunctionFromTheSameFacet",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4[]",
                  "name": "_selectors",
                  "type": "bytes4[]"
                }
              ],
              "name": "CannotReplaceFunctionsFromFacetWithZeroAddress",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotReplaceImmutableFunction",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8",
                  "name": "_action",
                  "type": "uint8"
                }
              ],
              "name": "IncorrectFacetCutAction",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_initializationContractAddress",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "_calldata",
                  "type": "bytes"
                }
              ],
              "name": "InitializationFunctionReverted",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_contractAddress",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "_message",
                  "type": "string"
                }
              ],
              "name": "NoBytecodeAtAddress",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_facetAddress",
                  "type": "address"
                }
              ],
              "name": "NoSelectorsProvidedForFacetForCut",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_user",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_contractOwner",
                  "type": "address"
                }
              ],
              "name": "NotContractOwner",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_facetAddress",
                  "type": "address"
                }
              ],
              "name": "RemoveFacetAddressMustBeZeroAddress",
              "type": "error"
            },
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
                  "internalType": "struct IDiamond.FacetCut[]",
                  "name": "_diamondCut",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address",
                  "name": "_init",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "_calldata",
                  "type": "bytes"
                }
              ],
              "name": "diamondCut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_functionSelector",
                  "type": "bytes4"
                }
              ],
              "name": "facetAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "facetAddress_",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "facetAddresses",
              "outputs": [
                {
                  "internalType": "address[]",
                  "name": "facetAddresses_",
                  "type": "address[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_facet",
                  "type": "address"
                }
              ],
              "name": "facetFunctionSelectors",
              "outputs": [
                {
                  "internalType": "bytes4[]",
                  "name": "_facetFunctionSelectors",
                  "type": "bytes4[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "facets",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "facetAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes4[]",
                      "name": "functionSelectors",
                      "type": "bytes4[]"
                    }
                  ],
                  "internalType": "struct IDiamondLoupe.Facet[]",
                  "name": "facets_",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
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
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "CallerNotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "CallerNotOwnerOrDevopsAdmin",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "enum LibStakingStorage.States",
                  "name": "state",
                  "type": "uint8"
                }
              ],
              "name": "MustBeInActiveOrUnlockedOrPausedState",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "enum LibStakingStorage.States",
                  "name": "state",
                  "type": "uint8"
                }
              ],
              "name": "MustBeInNextValidatorSetLockedOrReadyForNextEpochState",
              "type": "error"
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
                  "internalType": "address",
                  "name": "newDevopsAdmin",
                  "type": "address"
                }
              ],
              "name": "DevopsAdminSet",
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
              "inputs": [
                {
                  "internalType": "address",
                  "name": "validatorStakerAddress",
                  "type": "address"
                }
              ],
              "name": "adminKickValidatorInNextEpoch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                }
              ],
              "name": "adminRejoinValidator",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "adminResetEpoch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "validators",
                  "type": "address[]"
                }
              ],
              "name": "adminSetValidatorsInCurrentEpoch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "validatorStakerAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amountToPenalize",
                  "type": "uint256"
                }
              ],
              "name": "adminSlashValidator",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "adminStakeForValidator",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
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
                  "internalType": "struct LibStakingStorage.ComplaintConfig",
                  "name": "config",
                  "type": "tuple"
                }
              ],
              "name": "setComplaintConfig",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "tokenRewardPerTokenPerEpoch",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "DEPRECATED_complaintTolerance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "DEPRECATED_complaintIntervalSecs",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256[]",
                      "name": "keyTypes",
                      "type": "uint256[]"
                    },
                    {
                      "internalType": "uint256",
                      "name": "minimumValidatorCount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxConcurrentRequests",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxTripleCount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "minTripleCount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "peerCheckingIntervalSecs",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxTripleConcurrency",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bool",
                      "name": "rpcHealthcheckEnabled",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct LibStakingStorage.Config",
                  "name": "newConfig",
                  "type": "tuple"
                }
              ],
              "name": "setConfig",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newResolverAddress",
                  "type": "address"
                }
              ],
              "name": "setContractResolver",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newDevopsAdmin",
                  "type": "address"
                }
              ],
              "name": "setDevopsAdmin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newEpochEndTime",
                  "type": "uint256"
                }
              ],
              "name": "setEpochEndTime",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newEpochLength",
                  "type": "uint256"
                }
              ],
              "name": "setEpochLength",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum LibStakingStorage.States",
                  "name": "newState",
                  "type": "uint8"
                }
              ],
              "name": "setEpochState",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newEpochTimeout",
                  "type": "uint256"
                }
              ],
              "name": "setEpochTimeout",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "reason",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "newKickPenaltyPercent",
                  "type": "uint256"
                }
              ],
              "name": "setKickPenaltyPercent",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "ActiveValidatorsCannotLeave",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "CannotKickBelowCurrentValidatorThreshold",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakingAddress",
                  "type": "address"
                }
              ],
              "name": "CannotRejoinUntilNextEpochBecauseKicked",
              "type": "error"
            },
            {
              "inputs": [
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
              "name": "CannotReuseCommsKeys",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "CannotStakeZero",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakerAddress",
                  "type": "address"
                }
              ],
              "name": "CannotVoteTwice",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "CannotWithdrawZero",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "nodeAddress",
                  "type": "address"
                }
              ],
              "name": "CouldNotMapNodeAddressToStakerAddress",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "enum LibStakingStorage.States",
                  "name": "state",
                  "type": "uint8"
                }
              ],
              "name": "MustBeInActiveOrUnlockedState",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "enum LibStakingStorage.States",
                  "name": "state",
                  "type": "uint8"
                }
              ],
              "name": "MustBeInNextValidatorSetLockedOrReadyForNextEpochOrRestoreState",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "enum LibStakingStorage.States",
                  "name": "state",
                  "type": "uint8"
                }
              ],
              "name": "MustBeInNextValidatorSetLockedState",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "enum LibStakingStorage.States",
                  "name": "state",
                  "type": "uint8"
                }
              ],
              "name": "MustBeInReadyForNextEpochState",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakerAddress",
                  "type": "address"
                }
              ],
              "name": "MustBeValidatorInNextEpochToKick",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "currentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "epochEndTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeout",
                  "type": "uint256"
                }
              ],
              "name": "NotEnoughTimeElapsedForTimeoutSinceLastEpoch",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "currentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "epochEndTime",
                  "type": "uint256"
                }
              ],
              "name": "NotEnoughTimeElapsedSinceLastEpoch",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "validatorCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumValidatorCount",
                  "type": "uint256"
                }
              ],
              "name": "NotEnoughValidatorsInNextEpoch",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "currentReadyValidatorCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "nextReadyValidatorCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumValidatorCountToBeReady",
                  "type": "uint256"
                }
              ],
              "name": "NotEnoughValidatorsReadyForNextEpoch",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "currentEpochNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "receivedEpochNumber",
                  "type": "uint256"
                }
              ],
              "name": "SignaledReadyForWrongEpochNumber",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakerAddress",
                  "type": "address"
                }
              ],
              "name": "StakerNotPermitted",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "yourBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "requestedWithdrawlAmount",
                  "type": "uint256"
                }
              ],
              "name": "TryingToWithdrawMoreThanStaked",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "validator",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "validatorsInNextEpoch",
                  "type": "address[]"
                }
              ],
              "name": "ValidatorIsNotInNextEpoch",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "valueName",
                  "type": "string"
                }
              ],
              "name": "ValueMustBeNonzero",
              "type": "error"
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
                  "indexed": true,
                  "internalType": "address",
                  "name": "attestedAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "attestedPubKey",
                  "type": "uint256"
                }
              ],
              "name": "AttestedWalletRegistered",
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
              "inputs": [],
              "name": "advanceEpoch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "exit",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getReward",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "validatorStakerAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "reason",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "kickValidatorInNextEpoch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "lockValidatorsForNextEpoch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakerAddress",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "attestedAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "attestedPubKey",
                  "type": "uint256"
                }
              ],
              "name": "registerAttestedWallet",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
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
                  "name": "senderPubKey",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "receiverPubKey",
                  "type": "uint256"
                }
              ],
              "name": "requestToJoin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "requestToLeave",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "requestToLeaveAsNode",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
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
                  "name": "senderPubKey",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "receiverPubKey",
                  "type": "uint256"
                }
              ],
              "name": "setIpPortNodeAddressAndCommunicationPubKeys",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "epochNumber",
                  "type": "uint256"
                }
              ],
              "name": "signalReadyForNextEpoch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "stake",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
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
                  "name": "senderPubKey",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "receiverPubKey",
                  "type": "uint256"
                }
              ],
              "name": "stakeAndJoin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
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
            },
            {
              "inputs": [
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
                  "internalType": "struct LibStakingStorage.Version",
                  "name": "version",
                  "type": "tuple"
                }
              ],
              "name": "checkVersion",
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
            {
              "inputs": [],
              "name": "getMaxVersion",
              "outputs": [
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
                  "internalType": "struct LibStakingStorage.Version",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getMaxVersionString",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getMinVersion",
              "outputs": [
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
                  "internalType": "struct LibStakingStorage.Version",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getMinVersionString",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
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
                  "internalType": "struct LibStakingStorage.Version",
                  "name": "version",
                  "type": "tuple"
                }
              ],
              "name": "setMaxVersion",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
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
                  "internalType": "struct LibStakingStorage.Version",
                  "name": "version",
                  "type": "tuple"
                }
              ],
              "name": "setMinVersion",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "reason",
                  "type": "uint256"
                }
              ],
              "name": "complaintConfig",
              "outputs": [
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
                  "internalType": "struct LibStakingStorage.ComplaintConfig",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "config",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "tokenRewardPerTokenPerEpoch",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "DEPRECATED_complaintTolerance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "DEPRECATED_complaintIntervalSecs",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256[]",
                      "name": "keyTypes",
                      "type": "uint256[]"
                    },
                    {
                      "internalType": "uint256",
                      "name": "minimumValidatorCount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxConcurrentRequests",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxTripleCount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "minTripleCount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "peerCheckingIntervalSecs",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxTripleConcurrency",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bool",
                      "name": "rpcHealthcheckEnabled",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct LibStakingStorage.Config",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "contractResolver",
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
            {
              "inputs": [],
              "name": "countOfCurrentValidatorsReadyForNextEpoch",
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
            {
              "inputs": [],
              "name": "countOfNextValidatorsReadyForNextEpoch",
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
            {
              "inputs": [],
              "name": "currentValidatorCountForConsensus",
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
            {
              "inputs": [],
              "name": "epoch",
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
                    },
                    {
                      "internalType": "uint256",
                      "name": "startTime",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct LibStakingStorage.Epoch",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getActiveUnkickedValidatorStructs",
              "outputs": [
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
            {
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
                    },
                    {
                      "internalType": "uint256",
                      "name": "startTime",
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
            {
              "inputs": [],
              "name": "getActiveUnkickedValidators",
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
            {
              "inputs": [],
              "name": "getKeyTypes",
              "outputs": [
                {
                  "internalType": "uint256[]",
                  "name": "",
                  "type": "uint256[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getKickedValidators",
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
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "addresses",
                  "type": "address[]"
                }
              ],
              "name": "getNodeAttestedPubKeyMappings",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "nodeAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "pubKey",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct LibStakingStorage.PubKeyMapping[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "addresses",
                  "type": "address[]"
                }
              ],
              "name": "getNodeStakerAddressMappings",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "nodeAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "stakerAddress",
                      "type": "address"
                    }
                  ],
                  "internalType": "struct LibStakingStorage.AddressMapping[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getStakingBalancesAddress",
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
            {
              "inputs": [],
              "name": "getTokenAddress",
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
            {
              "inputs": [],
              "name": "getValidatorsInCurrentEpoch",
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
            {
              "inputs": [],
              "name": "getValidatorsInCurrentEpochLength",
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
            {
              "inputs": [],
              "name": "getValidatorsInNextEpoch",
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
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "addresses",
                  "type": "address[]"
                }
              ],
              "name": "getValidatorsStructs",
              "outputs": [
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
            {
              "inputs": [],
              "name": "getValidatorsStructsInCurrentEpoch",
              "outputs": [
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
            {
              "inputs": [],
              "name": "getValidatorsStructsInNextEpoch",
              "outputs": [
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "epochNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "validatorStakerAddress",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "voterStakerAddress",
                  "type": "address"
                }
              ],
              "name": "getVotingStatusToKickValidator",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "isActiveValidator",
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "isActiveValidatorByNodeAddress",
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
            {
              "inputs": [],
              "name": "isReadyForNextEpoch",
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "isRecentValidator",
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "reason",
                  "type": "uint256"
                }
              ],
              "name": "kickPenaltyPercentByReason",
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
            {
              "inputs": [],
              "name": "nextValidatorCountForConsensus",
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "nodeAddress",
                  "type": "address"
                }
              ],
              "name": "nodeAddressToStakerAddress",
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakerAddress",
                  "type": "address"
                }
              ],
              "name": "readyForNextEpoch",
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakerAddress",
                  "type": "address"
                }
              ],
              "name": "shouldKickValidator",
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
            {
              "inputs": [],
              "name": "state",
              "outputs": [
                {
                  "internalType": "enum LibStakingStorage.States",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakerAddress",
                  "type": "address"
                }
              ],
              "name": "validators",
              "outputs": [
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
                    }
                  ],
                  "internalType": "struct LibStakingStorage.Validator",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      ]
    },
    {
      "name": "Multisender",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0xBd119B72B52d58A7dDd771A2E4984d106Da0D1DB",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": []
        }
      ]
    },
    {
      "name": "LITToken",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0x53695556f8a1a064EdFf91767f15652BbfaFaD04",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": []
        }
      ]
    },
    {
      "name": "PubkeyRouter",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0xF6b0fE0d0C27C855f7f2e021fAd028af02cC52cb",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": []
        }
      ]
    },
    {
      "name": "PKPNFT",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0x3c3ad2d238757Ea4AF87A8624c716B11455c1F9A",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": [
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotAddFunctionToDiamondThatAlreadyExists",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4[]",
                  "name": "_selectors",
                  "type": "bytes4[]"
                }
              ],
              "name": "CannotAddSelectorsToZeroAddress",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotRemoveFunctionThatDoesNotExist",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotRemoveImmutableFunction",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotReplaceFunctionThatDoesNotExists",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotReplaceFunctionWithTheSameFunctionFromTheSameFacet",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4[]",
                  "name": "_selectors",
                  "type": "bytes4[]"
                }
              ],
              "name": "CannotReplaceFunctionsFromFacetWithZeroAddress",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_selector",
                  "type": "bytes4"
                }
              ],
              "name": "CannotReplaceImmutableFunction",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8",
                  "name": "_action",
                  "type": "uint8"
                }
              ],
              "name": "IncorrectFacetCutAction",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_initializationContractAddress",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "_calldata",
                  "type": "bytes"
                }
              ],
              "name": "InitializationFunctionReverted",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_contractAddress",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "_message",
                  "type": "string"
                }
              ],
              "name": "NoBytecodeAtAddress",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_facetAddress",
                  "type": "address"
                }
              ],
              "name": "NoSelectorsProvidedForFacetForCut",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_user",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_contractOwner",
                  "type": "address"
                }
              ],
              "name": "NotContractOwner",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_facetAddress",
                  "type": "address"
                }
              ],
              "name": "RemoveFacetAddressMustBeZeroAddress",
              "type": "error"
            },
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
                  "internalType": "struct IDiamond.FacetCut[]",
                  "name": "_diamondCut",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address",
                  "name": "_init",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "_calldata",
                  "type": "bytes"
                }
              ],
              "name": "diamondCut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "_functionSelector",
                  "type": "bytes4"
                }
              ],
              "name": "facetAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "facetAddress_",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "facetAddresses",
              "outputs": [
                {
                  "internalType": "address[]",
                  "name": "facetAddresses_",
                  "type": "address[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_facet",
                  "type": "address"
                }
              ],
              "name": "facetFunctionSelectors",
              "outputs": [
                {
                  "internalType": "bytes4[]",
                  "name": "_facetFunctionSelectors",
                  "type": "bytes4[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "facets",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "facetAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes4[]",
                      "name": "functionSelectors",
                      "type": "bytes4[]"
                    }
                  ],
                  "internalType": "struct IDiamondLoupe.Facet[]",
                  "name": "facets_",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
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
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner_",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "CallerNotOwner",
              "type": "error"
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
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "burn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "exists",
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
            {
              "inputs": [],
              "name": "freeMintSigner",
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
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
            {
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
            {
              "inputs": [],
              "name": "getNextDerivedKeyId",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getPkpNftMetadataAddress",
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
            {
              "inputs": [],
              "name": "getPkpPermissionsAddress",
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
            {
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
            {
              "inputs": [],
              "name": "getRouterAddress",
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
            {
              "inputs": [],
              "name": "getStakingAddress",
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
            {
              "inputs": [],
              "name": "initialize",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
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
            {
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "keyType",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "ipfsCID",
                  "type": "bytes"
                }
              ],
              "name": "mintGrantAndBurnNext",
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "keyType",
                  "type": "uint256"
                }
              ],
              "name": "mintNext",
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
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
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
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "hash",
                  "type": "bytes32"
                }
              ],
              "name": "prefixed",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "redeemedFreeMintIds",
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newResolverAddress",
                  "type": "address"
                }
              ],
              "name": "setContractResolver",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newFreeMintSigner",
                  "type": "address"
                }
              ],
              "name": "setFreeMintSigner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newMintCost",
                  "type": "uint256"
                }
              ],
              "name": "setMintCost",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
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
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                }
              ],
              "name": "tokenByIndex",
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
            {
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      ]
    },
    {
      "name": "RateLimitNFT",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0x9b1B8aD8A4144Be9F8Fb5C4766eE37CE0754AEAb",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": []
        }
      ]
    },
    {
      "name": "PKPHelper",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0x24d646b9510e56af8B15de759331d897C4d66044",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_resolver",
                  "type": "address"
                },
                {
                  "internalType": "enum ContractResolver.Env",
                  "name": "_env",
                  "type": "uint8"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
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
            },
            {
              "inputs": [],
              "name": "DEFAULT_ADMIN_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
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
              "name": "claimAndMintNextAndAddAuthMethods",
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
            {
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
            {
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
                    },
                    {
                      "internalType": "address",
                      "name": "stakingContractAddress",
                      "type": "address"
                    }
                  ],
                  "internalType": "struct LibPKPNFTStorage.ClaimMaterialV2",
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
              "name": "claimAndMintNextAndAddAuthMethodsWithTypesV2",
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
            {
              "inputs": [],
              "name": "contractResolver",
              "outputs": [
                {
                  "internalType": "contract ContractResolver",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "env",
              "outputs": [
                {
                  "internalType": "enum ContractResolver.Env",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getDomainWalletRegistry",
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
            {
              "inputs": [],
              "name": "getPKPNftMetdataAddress",
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
            {
              "inputs": [],
              "name": "getPkpNftAddress",
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
            {
              "inputs": [],
              "name": "getPkpPermissionsAddress",
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
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                }
              ],
              "name": "getRoleAdmin",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getStakingAddress",
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
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "grantRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "hasRole",
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
            {
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
            {
              "inputs": [
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
              "name": "mintNextAndAddAuthMethodsWithTypes",
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
            {
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
                  "internalType": "string[]",
                  "name": "nftMetadata",
                  "type": "string[]"
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
              "name": "mintNextAndAddDomainWalletMetadata",
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                }
              ],
              "name": "onERC721Received",
              "outputs": [
                {
                  "internalType": "bytes4",
                  "name": "",
                  "type": "bytes4"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "removePkpMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "renounceOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "renounceRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "revokeRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newResolverAddress",
                  "type": "address"
                }
              ],
              "name": "setContractResolver",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "string[]",
                  "name": "nftMetadata",
                  "type": "string[]"
                }
              ],
              "name": "setPkpMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      ]
    },
    {
      "name": "PKPPermissions",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0x974856dB1C4259915b709E6BcA26A002fbdd31ea",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": []
        }
      ]
    },
    {
      "name": "PKPNFTMetadata",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0xa87fe043AD341A1Dc8c5E48d75BA9f712256fe7e",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": []
        }
      ]
    },
    {
      "name": "PaymentDelegation",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0x180BA6Ec983019c578004D91c08897c12d78F516",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": []
        }
      ]
    },
    {
      "name": "Allowlist",
      "contracts": [
        {
          "network": "manzano",
          "address_hash": "0xC52b72E2AD3dC58B7d23197575fb48A4523fa734",
          "inserted_at": "2024-09-24T21:52:38Z",
          "ABI": []
        }
      ]
    }
  ]
} as const