export const datilTest = {
  "config": {
    "chainId": "175188",
    "rpcUrl": "https://yellowstone-rpc.litprotocol.com",
    "chainName": "yellowstone",
    "litNodeDomainName": "127.0.0.1",
    "litNodePort": 7470,
    "rocketPort": 7470
  },
  "data": [
    {
      "name": "StakingBalances",
      "contracts": [
        {
          "network": "datil-test",
          "address_hash": "0xCa3c64e7D8cA743aeD2B2d20DCA3233f400710E2",
          "inserted_at": "2024-11-02T02:50:47Z",
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
              "name": "ActiveValidatorsCannotLeave",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "aliasAccount",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "stakerAddress",
                  "type": "address"
                }
              ],
              "name": "AliasNotOwnedBySender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "CallerNotOwner",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "aliasAccount",
                  "type": "address"
                }
              ],
              "name": "CannotRemoveAliasOfActiveValidator",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "CannotStakeZero",
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
                  "internalType": "uint256",
                  "name": "aliasCount",
                  "type": "uint256"
                }
              ],
              "name": "MaxAliasCountReached",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "OnlyStakingContract",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amountStaked",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumStake",
                  "type": "uint256"
                }
              ],
              "name": "StakeMustBeGreaterThanMinimumStake",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amountStaked",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maximumStake",
                  "type": "uint256"
                }
              ],
              "name": "StakeMustBeLessThanMaximumStake",
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
                  "internalType": "address",
                  "name": "aliasAccount",
                  "type": "address"
                }
              ],
              "name": "AliasAdded",
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
                  "internalType": "address",
                  "name": "aliasAccount",
                  "type": "address"
                }
              ],
              "name": "AliasRemoved",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "newMaxAliasCount",
                  "type": "uint256"
                }
              ],
              "name": "MaxAliasCountSet",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "newMaximumStake",
                  "type": "uint256"
                }
              ],
              "name": "MaximumStakeSet",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "newMinimumStake",
                  "type": "uint256"
                }
              ],
              "name": "MinimumStakeSet",
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
              "name": "PermittedStakerAdded",
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
              "name": "PermittedStakerRemoved",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "permittedStakersOn",
                  "type": "bool"
                }
              ],
              "name": "PermittedStakersOnChanged",
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
              "name": "ResolverContractAddressSet",
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
                  "name": "reward",
                  "type": "uint256"
                }
              ],
              "name": "RewardPaid",
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
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Staked",
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
                }
              ],
              "name": "TokenRewardPerTokenPerEpochSet",
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
                  "internalType": "address",
                  "name": "aliasAccount",
                  "type": "address"
                }
              ],
              "name": "ValidatorNotRewardedBecauseAlias",
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
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "ValidatorRewarded",
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
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "ValidatorTokensPenalized",
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
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Withdrawn",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "aliasAccount",
                  "type": "address"
                }
              ],
              "name": "addAlias",
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
              "name": "addPermittedStaker",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "stakers",
                  "type": "address[]"
                }
              ],
              "name": "addPermittedStakers",
              "outputs": [],
              "stateMutability": "nonpayable",
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
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "checkStakingAmounts",
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
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "getReward",
              "outputs": [],
              "stateMutability": "nonpayable",
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
              "inputs": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                }
              ],
              "name": "isPermittedStaker",
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
              "name": "maximumStake",
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
              "name": "minimumStake",
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
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "penalizeTokens",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "permittedStakersOn",
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
                  "name": "aliasAccount",
                  "type": "address"
                }
              ],
              "name": "removeAlias",
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
              "name": "removePermittedStaker",
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
                  "name": "balance",
                  "type": "uint256"
                }
              ],
              "name": "restakePenaltyTokens",
              "outputs": [],
              "stateMutability": "nonpayable",
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
              "name": "rewardOf",
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
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "rewardValidator",
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
                  "name": "newMaxAliasCount",
                  "type": "uint256"
                }
              ],
              "name": "setMaxAliasCount",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newMaximumStake",
                  "type": "uint256"
                }
              ],
              "name": "setMaximumStake",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newMinimumStake",
                  "type": "uint256"
                }
              ],
              "name": "setMinimumStake",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bool",
                  "name": "permitted",
                  "type": "bool"
                }
              ],
              "name": "setPermittedStakersOn",
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
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
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
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "stakeForValidator",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalStaked",
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
                  "name": "balance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                }
              ],
              "name": "transferPenaltyTokens",
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
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "withdraw",
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
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "balance",
                  "type": "uint256"
                }
              ],
              "name": "withdrawPenaltyTokens",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      ]
    },
    {
      "name": "Staking",
      "contracts": [
        {
          "network": "datil-test",
          "address_hash": "0xdec37933239846834b3BfD408913Ed3dbEf6588F",
          "inserted_at": "2024-11-02T02:50:47Z",
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
          "network": "datil-test",
          "address_hash": "0x8281f3A62f7de320B3a634e6814BeC36a1AA92bd",
          "inserted_at": "2024-11-02T02:50:47Z",
          "ABI": [
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
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
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
                  "internalType": "address[]",
                  "name": "_recipients",
                  "type": "address[]"
                }
              ],
              "name": "sendEth",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "_recipients",
                  "type": "address[]"
                },
                {
                  "internalType": "address",
                  "name": "tokenContract",
                  "type": "address"
                }
              ],
              "name": "sendTokens",
              "outputs": [],
              "stateMutability": "nonpayable",
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
            },
            {
              "inputs": [],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "tokenContract",
                  "type": "address"
                }
              ],
              "name": "withdrawTokens",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      ]
    },
    {
      "name": "LITToken",
      "contracts": [
        {
          "network": "datil-test",
          "address_hash": "0xFA1208f5275a01Be1b4A6F6764d388FDcF5Bf85e",
          "inserted_at": "2024-11-02T02:50:47Z",
          "ABI": [
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "cap",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidShortString",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "str",
                  "type": "string"
                }
              ],
              "name": "StringTooLong",
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
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
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
                  "name": "delegator",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "fromDelegate",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "toDelegate",
                  "type": "address"
                }
              ],
              "name": "DelegateChanged",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "delegate",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "previousBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "newBalance",
                  "type": "uint256"
                }
              ],
              "name": "DelegateVotesChanged",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [],
              "name": "EIP712DomainChanged",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "Paused",
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
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
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
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "Unpaused",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "ADMIN_ROLE",
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
              "name": "CLOCK_MODE",
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
              "inputs": [],
              "name": "DOMAIN_SEPARATOR",
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
              "name": "MINTER_ROLE",
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
              "name": "PAUSER_ROLE",
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
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                }
              ],
              "name": "allowance",
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
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
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
                  "name": "amount",
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
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "burnFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "cap",
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
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "pos",
                  "type": "uint32"
                }
              ],
              "name": "checkpoints",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "fromBlock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint224",
                      "name": "votes",
                      "type": "uint224"
                    }
                  ],
                  "internalType": "struct ERC20Votes.Checkpoint",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "clock",
              "outputs": [
                {
                  "internalType": "uint48",
                  "name": "",
                  "type": "uint48"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
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
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "subtractedValue",
                  "type": "uint256"
                }
              ],
              "name": "decreaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "delegatee",
                  "type": "address"
                }
              ],
              "name": "delegate",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "delegatee",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "delegateBySig",
              "outputs": [],
              "stateMutability": "nonpayable",
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
              "name": "delegates",
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
              "name": "eip712Domain",
              "outputs": [
                {
                  "internalType": "bytes1",
                  "name": "fields",
                  "type": "bytes1"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "version",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "chainId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "verifyingContract",
                  "type": "address"
                },
                {
                  "internalType": "bytes32",
                  "name": "salt",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256[]",
                  "name": "extensions",
                  "type": "uint256[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "timepoint",
                  "type": "uint256"
                }
              ],
              "name": "getPastTotalSupply",
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
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "timepoint",
                  "type": "uint256"
                }
              ],
              "name": "getPastVotes",
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
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "getVotes",
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
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "addedValue",
                  "type": "uint256"
                }
              ],
              "name": "increaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "mint",
              "outputs": [],
              "stateMutability": "nonpayable",
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
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "nonces",
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
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "numCheckpoints",
              "outputs": [
                {
                  "internalType": "uint32",
                  "name": "",
                  "type": "uint32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pause",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "paused",
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
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "permit",
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
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
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
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "unpause",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      ]
    },
    {
      "name": "PubkeyRouter",
      "contracts": [
        {
          "network": "datil-test",
          "address_hash": "0x65C3d057aef28175AfaC61a74cc6b27E88405583",
          "inserted_at": "2024-11-02T02:50:47Z",
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
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakingContract",
                  "type": "address"
                }
              ],
              "name": "adminResetRootKeys",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
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
                  "internalType": "struct IPubkeyRouter.RootKey[]",
                  "name": "rootKeys",
                  "type": "tuple[]"
                }
              ],
              "name": "adminSetRootKeys",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
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
                  "internalType": "bytes",
                  "name": "signedMessage",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "stakingContractAddress",
                  "type": "address"
                }
              ],
              "name": "checkNodeSignatures",
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
            {
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
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakingContract",
                  "type": "address"
                },
                {
                  "internalType": "bytes32",
                  "name": "derivedKeyId",
                  "type": "bytes32"
                }
              ],
              "name": "getDerivedPubkey",
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
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakingContract",
                  "type": "address"
                }
              ],
              "name": "getRootKeys",
              "outputs": [
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
                  "internalType": "struct IPubkeyRouter.RootKey[]",
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
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "getRoutingData",
              "outputs": [
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
                    },
                    {
                      "internalType": "bytes32",
                      "name": "derivedKeyId",
                      "type": "bytes32"
                    }
                  ],
                  "internalType": "struct LibPubkeyRouterStorage.PubkeyRoutingData",
                  "name": "",
                  "type": "tuple"
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
              "name": "isRouted",
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
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "pubkeys",
              "outputs": [
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
                    },
                    {
                      "internalType": "bytes32",
                      "name": "derivedKeyId",
                      "type": "bytes32"
                    }
                  ],
                  "internalType": "struct LibPubkeyRouterStorage.PubkeyRoutingData",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
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
                  "internalType": "bytes",
                  "name": "pubkey",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "stakingContractAddress",
                  "type": "address"
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
                }
              ],
              "name": "setRoutingData",
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
                  "internalType": "bytes",
                  "name": "pubkey",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "stakingContract",
                  "type": "address"
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
                }
              ],
              "name": "setRoutingDataAsAdmin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "stakingContractAddress",
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
                  "internalType": "struct IPubkeyRouter.RootKey[]",
                  "name": "newRootKeys",
                  "type": "tuple[]"
                }
              ],
              "name": "voteForRootKeys",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      ]
    },
    {
      "name": "PKPNFT",
      "contracts": [
        {
          "network": "datil-test",
          "address_hash": "0x6a0f439f064B7167A8Ea6B22AcC07ae5360ee0d1",
          "inserted_at": "2024-11-02T02:50:47Z",
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
          "network": "datil-test",
          "address_hash": "0xa17f11B7f828EEc97926E56D98D5AB63A0231b77",
          "inserted_at": "2024-11-02T02:50:47Z",
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
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "newAdditionalRequestsPerKilosecondCost",
                  "type": "uint256"
                }
              ],
              "name": "AdditionalRequestsPerKilosecondCostSet",
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
                  "internalType": "uint256",
                  "name": "newFreeRequestsPerRateLimitWindow",
                  "type": "uint256"
                }
              ],
              "name": "FreeRequestsPerRateLimitWindowSet",
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
                  "name": "newRLIHolderRateLimitWindowSeconds",
                  "type": "uint256"
                }
              ],
              "name": "RLIHolderRateLimitWindowSecondsSet",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "newRateLimitWindowSeconds",
                  "type": "uint256"
                }
              ],
              "name": "RateLimitWindowSecondsSet",
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
                  "name": "expiresAt",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "requestsPerKilosecond",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "msgHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "sVal",
                  "type": "bytes32"
                }
              ],
              "name": "freeMint",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
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
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "expiresAt",
                  "type": "uint256"
                }
              ],
              "name": "mint",
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
                  "internalType": "uint256",
                  "name": "newAdditionalRequestsPerKilosecondCost",
                  "type": "uint256"
                }
              ],
              "name": "setAdditionalRequestsPerKilosecondCost",
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
                  "name": "newFreeRequestsPerRateLimitWindow",
                  "type": "uint256"
                }
              ],
              "name": "setFreeRequestsPerRateLimitWindow",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newMaxExpirationSeconds",
                  "type": "uint256"
                }
              ],
              "name": "setMaxExpirationSeconds",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newMaxRequestsPerKilosecond",
                  "type": "uint256"
                }
              ],
              "name": "setMaxRequestsPerKilosecond",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newRLIHolderRateLimitWindowSeconds",
                  "type": "uint256"
                }
              ],
              "name": "setRLIHolderRateLimitWindowSeconds",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newRateLimitWindowSeconds",
                  "type": "uint256"
                }
              ],
              "name": "setRateLimitWindowSeconds",
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
            },
            {
              "inputs": [],
              "name": "RLIHolderRateLimitWindowSeconds",
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
              "name": "additionalRequestsPerKilosecondCost",
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
                  "name": "requestsPerKilosecond",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiresAt",
                  "type": "uint256"
                }
              ],
              "name": "calculateCost",
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
                  "name": "payingAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiresAt",
                  "type": "uint256"
                }
              ],
              "name": "calculateRequestsPerKilosecond",
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
              "name": "capacity",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "requestsPerKilosecond",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "expiresAt",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct LibRateLimitNFTStorage.RateLimit",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "requestedRequestsPerKilosecond",
                  "type": "uint256"
                }
              ],
              "name": "checkBelowMaxRequestsPerKilosecond",
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
              "name": "currentSoldRequestsPerKilosecond",
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
              "name": "defaultRateLimitWindowSeconds",
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
                  "name": "expiresAt",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "requestsPerKilosecond",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "msgHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "sVal",
                  "type": "bytes32"
                }
              ],
              "name": "freeMintSigTest",
              "outputs": [],
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
              "inputs": [],
              "name": "freeRequestsPerRateLimitWindow",
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
              "name": "isExpired",
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
              "name": "maxExpirationSeconds",
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
              "name": "maxRequestsPerKilosecond",
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
                  "internalType": "bytes32",
                  "name": "msgHash",
                  "type": "bytes32"
                }
              ],
              "name": "redeemedFreeMints",
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
              "name": "tokenIdCounter",
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
              "name": "tokenSVG",
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
                  "name": "expiresAt",
                  "type": "uint256"
                }
              ],
              "name": "totalSoldRequestsPerKilosecondByExpirationTime",
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
          ]
        }
      ]
    },
    {
      "name": "PKPHelper",
      "contracts": [
        {
          "network": "datil-test",
          "address_hash": "0x341E5273E2E2ea3c4aDa4101F008b1261E58510D",
          "inserted_at": "2024-11-02T02:50:47Z",
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
          "network": "datil-test",
          "address_hash": "0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167",
          "inserted_at": "2024-11-02T02:50:47Z",
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
            },
            {
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
            {
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
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
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
                  "internalType": "struct LibPKPPermissionsStorage.AuthMethod",
                  "name": "authMethod",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256[]",
                  "name": "scopes",
                  "type": "uint256[]"
                }
              ],
              "name": "addPermittedAuthMethod",
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
                  "name": "scopeId",
                  "type": "uint256"
                }
              ],
              "name": "addPermittedAuthMethodScope",
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
                  "internalType": "uint256[]",
                  "name": "permittedAuthMethodTypesToAdd",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "permittedAuthMethodIdsToAdd",
                  "type": "bytes[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "permittedAuthMethodPubkeysToAdd",
                  "type": "bytes[]"
                },
                {
                  "internalType": "uint256[][]",
                  "name": "permittedAuthMethodScopesToAdd",
                  "type": "uint256[][]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "permittedAuthMethodTypesToRemove",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "permittedAuthMethodIdsToRemove",
                  "type": "bytes[]"
                }
              ],
              "name": "batchAddRemoveAuthMethods",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "authMethodType",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "id",
                  "type": "bytes"
                }
              ],
              "name": "getAuthMethodId",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
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
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "authMethodType",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "id",
                  "type": "bytes"
                }
              ],
              "name": "getPKPPubKeysByAuthMethod",
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
            {
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
            {
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
            {
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
            {
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
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "authMethodType",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "id",
                  "type": "bytes"
                }
              ],
              "name": "getTokenIdsForAuthMethod",
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
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "authMethodType",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "id",
                  "type": "bytes"
                }
              ],
              "name": "getUserPubkeyForAuthMethod",
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
            {
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
            {
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
                }
              ],
              "name": "isPermittedAuthMethod",
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
                  "name": "scopeId",
                  "type": "uint256"
                }
              ],
              "name": "isPermittedAuthMethodScopePresent",
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
            {
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
            {
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
                }
              ],
              "name": "removePermittedAuthMethod",
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
                  "name": "scopeId",
                  "type": "uint256"
                }
              ],
              "name": "removePermittedAuthMethodScope",
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
                  "internalType": "uint256",
                  "name": "group",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "root",
                  "type": "bytes32"
                }
              ],
              "name": "setRootHash",
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
                  "internalType": "uint256",
                  "name": "group",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32[]",
                  "name": "proof",
                  "type": "bytes32[]"
                },
                {
                  "internalType": "bytes32",
                  "name": "leaf",
                  "type": "bytes32"
                }
              ],
              "name": "verifyState",
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
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "group",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32[]",
                  "name": "proof",
                  "type": "bytes32[]"
                },
                {
                  "internalType": "bool[]",
                  "name": "proofFlags",
                  "type": "bool[]"
                },
                {
                  "internalType": "bytes32[]",
                  "name": "leaves",
                  "type": "bytes32[]"
                }
              ],
              "name": "verifyStates",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
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
      "name": "PKPNFTMetadata",
      "contracts": [
        {
          "network": "datil-test",
          "address_hash": "0xaC1d01692EBA0E457134Eb7EB8bb96ee9D91FcdD",
          "inserted_at": "2024-11-02T02:50:47Z",
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
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "buffer",
                  "type": "bytes"
                }
              ],
              "name": "bytesToHex",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "pure",
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
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "removeProfileForPkp",
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
                }
              ],
              "name": "removeUrlForPKP",
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
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                }
              ],
              "name": "setProfileForPKP",
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
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                }
              ],
              "name": "setUrlForPKP",
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
                  "internalType": "bytes",
                  "name": "pubKey",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "ethAddress",
                  "type": "address"
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
            }
          ]
        }
      ]
    },
    {
      "name": "Allowlist",
      "contracts": [
        {
          "network": "datil-test",
          "address_hash": "0x5DD7a0FD581aB11a5720bE7E388e63346bC266fe",
          "inserted_at": "2024-11-02T02:50:47Z",
          "ABI": [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newAdmin",
                  "type": "address"
                }
              ],
              "name": "AdminAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newAdmin",
                  "type": "address"
                }
              ],
              "name": "AdminRemoved",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "key",
                  "type": "bytes32"
                }
              ],
              "name": "ItemAllowed",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "key",
                  "type": "bytes32"
                }
              ],
              "name": "ItemNotAllowed",
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
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newAdmin",
                  "type": "address"
                }
              ],
              "name": "addAdmin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "allowAll",
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
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "name": "allowedItems",
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
                  "internalType": "bytes32",
                  "name": "key",
                  "type": "bytes32"
                }
              ],
              "name": "isAllowed",
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
                  "internalType": "address",
                  "name": "newAdmin",
                  "type": "address"
                }
              ],
              "name": "removeAdmin",
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
                  "internalType": "bool",
                  "name": "_allowAll",
                  "type": "bool"
                }
              ],
              "name": "setAllowAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "key",
                  "type": "bytes32"
                }
              ],
              "name": "setAllowed",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "key",
                  "type": "bytes32"
                }
              ],
              "name": "setNotAllowed",
              "outputs": [],
              "stateMutability": "nonpayable",
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
      "name": "PaymentDelegation",
      "contracts": [
        {
          "network": "datil-test",
          "address_hash": "0xd7188e0348F1dA8c9b3d6e614844cbA22329B99E",
          "inserted_at": "2024-11-02T02:50:47Z",
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
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "payer",
                  "type": "address"
                },
                {
                  "components": [
                    {
                      "internalType": "uint128",
                      "name": "totalMaxPrice",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint256",
                      "name": "requestsPerPeriod",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "periodSeconds",
                      "type": "uint256"
                    }
                  ],
                  "indexed": false,
                  "internalType": "struct LibPaymentDelegationStorage.Restriction",
                  "name": "restriction",
                  "type": "tuple"
                }
              ],
              "name": "RestrictionSet",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                }
              ],
              "name": "delegatePayments",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "users",
                  "type": "address[]"
                }
              ],
              "name": "delegatePaymentsBatch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                }
              ],
              "name": "getPayers",
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
                  "name": "users",
                  "type": "address[]"
                }
              ],
              "name": "getPayersAndRestrictions",
              "outputs": [
                {
                  "internalType": "address[][]",
                  "name": "",
                  "type": "address[][]"
                },
                {
                  "components": [
                    {
                      "internalType": "uint128",
                      "name": "totalMaxPrice",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint256",
                      "name": "requestsPerPeriod",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "periodSeconds",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct LibPaymentDelegationStorage.Restriction[][]",
                  "name": "",
                  "type": "tuple[][]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "payer",
                  "type": "address"
                }
              ],
              "name": "getRestriction",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint128",
                      "name": "totalMaxPrice",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint256",
                      "name": "requestsPerPeriod",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "periodSeconds",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct LibPaymentDelegationStorage.Restriction",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "payer",
                  "type": "address"
                }
              ],
              "name": "getUsers",
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
                  "components": [
                    {
                      "internalType": "uint128",
                      "name": "totalMaxPrice",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint256",
                      "name": "requestsPerPeriod",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "periodSeconds",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct LibPaymentDelegationStorage.Restriction",
                  "name": "r",
                  "type": "tuple"
                }
              ],
              "name": "setRestriction",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                }
              ],
              "name": "undelegatePayments",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "users",
                  "type": "address[]"
                }
              ],
              "name": "undelegatePaymentsBatch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      ]
    }
  ]
}