export const addresses = {
    56: {
        bscF: "0x011d3F6CC8F10dc1157dd0F7aD8DAe9F45bAB953",
        safemoon2: "0x0000000000000000000000000000000000000000",
        bscCoinFlip: "0xe6E2F000E1c142A4A6F359222071b994F8642192",
        muuinu: "0x0000000000000000000000000000000000000000",
        bnb: "0x0000000000000000000000000000000000000000",
    },
    97: {
        bscF: "0x011d3F6CC8F10dc1157dd0F7aD8DAe9F45bAB953",
        safemoon2: "0x0000000000000000000000000000000000000000",
        bscCoinFlip: "0xe6E2F000E1c142A4A6F359222071b994F8642192",
        muuinu: "0x0000000000000000000000000000000000000000",
        bnb: "0x0000000000000000000000000000000000000000"
    },
};

export const abis = {
    bscF: [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "Transfer",
        "type": "event"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_allowances",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_balances",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_buyTaxes",
        "outputs": [{
            "internalType": "uint8",
            "name": "devFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "rewardsFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "marketingFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "teamFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "liqFee",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_decimals",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_devAddress",
        "outputs": [{
            "internalType": "address payable",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_isDividendExempt",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_isExcludedFromMaxBalance",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_isExcludedFromMaxTx",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_liquifyThreshhold",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_marketingAddress",
        "outputs": [{
            "internalType": "address payable",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_maxBalance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_maxDevFee",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_maxFees",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_maxTx",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_sellTaxes",
        "outputs": [{
            "internalType": "uint8",
            "name": "devFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "rewardsFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "marketingFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "teamFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "liqFee",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_teamAddress",
        "outputs": [{
            "internalType": "address payable",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_totalBuyTaxes",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_totalSellTaxes",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
        }],
        "name": "decreaseAllowance",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "distributor",
        "outputs": [{
            "internalType": "contract DividendDistributor",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "excludeFromFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }, {
            "internalType": "bool",
            "name": "exempt",
            "type": "bool"
        }],
        "name": "excludeFromMaxBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }, {
            "internalType": "bool",
            "name": "exempt",
            "type": "bool"
        }],
        "name": "excludeFromMaxTx",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "includeInFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
        }],
        "name": "increaseAllowance",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "pair",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "router",
        "outputs": [{
            "internalType": "contract IDEXRouter",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint8",
            "name": "newDevBuyFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "newRewardsBuyFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "newMarketingBuyFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "newTeamBuyFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "newLiqBuyFee",
            "type": "uint8"
        }],
        "name": "setBuyFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_minPeriod",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "_minDistribution",
            "type": "uint256"
        }],
        "name": "setDistributionCriteria",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "gas",
            "type": "uint256"
        }],
        "name": "setDistributorSettings",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "holder",
            "type": "address"
        }, {
            "internalType": "bool",
            "name": "exempt",
            "type": "bool"
        }],
        "name": "setIsDividendExempt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "newLiquifyThreshhold",
            "type": "uint256"
        }],
        "name": "setLiquifyThreshhold",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "newMaxBalancePercentage",
            "type": "uint256"
        }],
        "name": "setMaxBalancePercentage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "newMaxTxPercentage",
            "type": "uint256"
        }],
        "name": "setMaxTxPercentage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "newPairAddress",
            "type": "address"
        }],
        "name": "setNewPair",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "newAddress",
            "type": "address"
        }],
        "name": "setNewRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address payable",
            "name": "newMarketingAddress",
            "type": "address"
        }, {
            "internalType": "address payable",
            "name": "newDevAddress",
            "type": "address"
        }, {
            "internalType": "address payable",
            "name": "newTeamAddress",
            "type": "address"
        }],
        "name": "setReceiverAddresses",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint8",
            "name": "newDevSellFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "newRewardsSellFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "newMarketingSellFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "newTeamSellFee",
            "type": "uint8"
        }, {
            "internalType": "uint8",
            "name": "newLiqSellFee",
            "type": "uint8"
        }],
        "name": "setSellFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "bool",
            "name": "enabled",
            "type": "bool"
        }],
        "name": "setTradingEnabled",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "withdrawBNB",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_tokenContract",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }],
        "name": "withdrawToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "stateMutability": "payable",
        "type": "receive"
    }],
    safemoon2: [{
            inputs: [],
            name: 'totalFees',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'decimals',
            outputs: [{
                internalType: 'uint8',
                name: '',
                type: 'uint8'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [{
                internalType: 'string',
                name: '',
                type: 'string'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [{
                internalType: 'string',
                name: '',
                type: 'string'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalSupply',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'decimals',
            outputs: [{
                internalType: 'uint8',
                name: '',
                type: 'uint8'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{
                internalType: 'address',
                name: 'account',
                type: 'address'
            }],
            name: 'balanceOf',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: "uniswapV2Pair",
            outputs: [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            stateMutability: "view",
            type: "function"
        },
        // more ABI definitions here
    ],
    bscCoinFlip: [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint8",
            "name": "oldPercentage",
            "type": "uint8"
        }, {
            "indexed": false,
            "internalType": "uint8",
            "name": "newPercentage",
            "type": "uint8"
        }],
        "name": "DevFeePercentageChanged",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "address",
            "name": "oldReceiver",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "address",
            "name": "newReceiver",
            "type": "address"
        }],
        "name": "DevFeeReceiverChanged",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "better",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "bool",
            "name": "winner",
            "type": "bool"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "wager",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint32",
            "name": "id",
            "type": "uint32"
        }],
        "name": "GameFinished",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "better",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "wager",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint8",
            "name": "predictedOutcome",
            "type": "uint8"
        }, {
            "indexed": false,
            "internalType": "uint32",
            "name": "id",
            "type": "uint32"
        }],
        "name": "GameStarted",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint8",
            "name": "oldPercentage",
            "type": "uint8"
        }, {
            "indexed": false,
            "internalType": "uint8",
            "name": "newPercentage",
            "type": "uint8"
        }],
        "name": "HouseFeePercentageChanged",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "address",
            "name": "oldReceiver",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "address",
            "name": "newReceiver",
            "type": "address"
        }],
        "name": "HouseFeeReceiverChanged",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "winner",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "winnings",
            "type": "uint256"
        }],
        "name": "PayoutComplete",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint8",
            "name": "oldPercentage",
            "type": "uint8"
        }, {
            "indexed": false,
            "internalType": "uint8",
            "name": "newPercentage",
            "type": "uint8"
        }],
        "name": "ReferrerFeePercentageChanged",
        "type": "event"
    }, {
        "inputs": [],
        "name": "_blockWaitTime",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_devFeePercentage",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_devFeeReceiver",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "_games",
        "outputs": [{
            "internalType": "address",
            "name": "better",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint32",
            "name": "id",
            "type": "uint32"
        }, {
            "internalType": "uint8",
            "name": "predictedOutcome",
            "type": "uint8"
        }, {
            "internalType": "bool",
            "name": "finished",
            "type": "bool"
        }, {
            "internalType": "bool",
            "name": "winner",
            "type": "bool"
        }, {
            "internalType": "uint256",
            "name": "wager",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_houseFeePercentage",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_houseFeeReceiver",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_isBlacklisted",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_maxBetForToken",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_minBetForToken",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_queueResetSize",
        "outputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_referrer",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "_referrerFeePercentage",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_team",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "_winnings",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "token",
            "type": "address"
        }],
        "name": "claimWinnings",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "wager",
            "type": "uint256"
        }, {
            "internalType": "uint8",
            "name": "outcome",
            "type": "uint8"
        }, {
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
        }],
        "name": "enterGame",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "forceCompleteQueuedGames",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "rand",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "wallet",
            "type": "address"
        }, {
            "internalType": "bool",
            "name": "isBlacklisted",
            "type": "bool"
        }],
        "name": "setBlacklist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint8",
            "name": "newPercentage",
            "type": "uint8"
        }],
        "name": "setDevFeePercentage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "newReceiver",
            "type": "address"
        }],
        "name": "setDevFeeReceiver",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "bool",
            "name": "enabled",
            "type": "bool"
        }],
        "name": "setGameEnabled",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint8",
            "name": "newPercentage",
            "type": "uint8"
        }],
        "name": "setHouseFeePercentage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "newReceiver",
            "type": "address"
        }],
        "name": "setHouseFeeReceiver",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "maxBet",
            "type": "uint256"
        }],
        "name": "setMaxBetForToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "minBet",
            "type": "uint256"
        }],
        "name": "setMinBetForToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint32",
            "name": "newSize",
            "type": "uint32"
        }],
        "name": "setQueueSize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint8",
            "name": "newPercentage",
            "type": "uint8"
        }],
        "name": "setReferrerFeePercentage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "member",
            "type": "address"
        }, {
            "internalType": "bool",
            "name": "isTeamMember",
            "type": "bool"
        }],
        "name": "setTeamMember",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "withdrawBNB",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_tokenContract",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }],
        "name": "withdrawToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "stateMutability": "payable",
        "type": "receive"
    }],
    muuinu: [{
            inputs: [],
            name: 'totalFees',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'decimals',
            outputs: [{
                internalType: 'uint8',
                name: '',
                type: 'uint8'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [{
                internalType: 'string',
                name: '',
                type: 'string'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [{
                internalType: 'string',
                name: '',
                type: 'string'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalSupply',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'decimals',
            outputs: [{
                internalType: 'uint8',
                name: '',
                type: 'uint8'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{
                internalType: 'address',
                name: 'account',
                type: 'address'
            }],
            name: 'balanceOf',
            outputs: [{
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: "uniswapV2Pair",
            outputs: [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            stateMutability: "view",
            type: "function"
        },
    ]
}