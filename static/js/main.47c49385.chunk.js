(this["webpackJsonp@bscflip-game/react-app"] = this["webpackJsonp@bscflip-game/react-app"] || []).push([
    [0], {
        381: function(e, t, n) {},
        520: function(e, t) {},
        532: function(e, t) {},
        581: function(e, t) {},
        583: function(e, t) {},
        653: function(e, t, n) {},
        654: function(e, t, n) {},
        655: function(e, t, n) {},
        656: function(e, t, n) {},
        993: function(e, t, n) {},
        995: function(e, t, n) {
            "use strict";
            n.r(t);
            n(381);
            var a, i, s, c, r, o, l, u, d, p, b, m, j, x, y, f, O, h, v, g = n(1005),
                w = n(512),
                C = n(1),
                T = n.n(C),
                k = n(294),
                N = n.n(k),
                F = n(16),
                M = n(36),
                A = n(490),
                S = n(511),
                B = n(513),
                I = n(2),
                H = n(10),
                E = n(7),
                R = {
                    56: {
                        bscF: "0x011d3F6CC8F10dc1157dd0F7aD8DAe9F45bAB953",
                        safemoon2: "0x0000000000000000000000000000000000000000",
                        bscCoinFlip: "0xD10800C73Ae3D96490d8E275D3B96d4FA8cc6cB8",
                        muuinu: "0x0000000000000000000000000000000000000000",
                        bnb: "0x0000000000000000000000000000000000000000"
                    },
                    97: {
                        bscF: "0x011d3F6CC8F10dc1157dd0F7aD8DAe9F45bAB953",
                        safemoon2: "0x0000000000000000000000000000000000000000",
                        bscCoinFlip: "0xD10800C73Ae3D96490d8E275D3B96d4FA8cc6cB8",
                        muuinu: "0x0000000000000000000000000000000000000000",
                        bnb: "0x0000000000000000000000000000000000000000"
                    }
                },
                P = {
                    bscF: [{
                        inputs: [],
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }],
                        name: "Approval",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "previousOwner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "newOwner",
                            type: "address"
                        }],
                        name: "OwnershipTransferred",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }],
                        name: "Transfer",
                        type: "event"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_allowances",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_balances",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_buyTaxes",
                        outputs: [{
                            internalType: "uint8",
                            name: "devFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "rewardsFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "marketingFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "teamFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "liqFee",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_decimals",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_devAddress",
                        outputs: [{
                            internalType: "address payable",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_isDividendExempt",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_isExcludedFromMaxBalance",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_isExcludedFromMaxTx",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_liquifyThreshhold",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_marketingAddress",
                        outputs: [{
                            internalType: "address payable",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_maxBalance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_maxDevFee",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_maxFees",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_maxTx",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_name",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_sellTaxes",
                        outputs: [{
                            internalType: "uint8",
                            name: "devFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "rewardsFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "marketingFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "teamFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "liqFee",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_symbol",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_teamAddress",
                        outputs: [{
                            internalType: "address payable",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_totalBuyTaxes",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_totalSellTaxes",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_totalSupply",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }],
                        name: "allowance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "approve",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "balanceOf",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "decimals",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "subtractedValue",
                            type: "uint256"
                        }],
                        name: "decreaseAllowance",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "distributor",
                        outputs: [{
                            internalType: "contract DividendDistributor",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "excludeFromFees",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }, {
                            internalType: "bool",
                            name: "exempt",
                            type: "bool"
                        }],
                        name: "excludeFromMaxBalance",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }, {
                            internalType: "bool",
                            name: "exempt",
                            type: "bool"
                        }],
                        name: "excludeFromMaxTx",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "includeInFees",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "addedValue",
                            type: "uint256"
                        }],
                        name: "increaseAllowance",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "name",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "owner",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "pair",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "renounceOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "router",
                        outputs: [{
                            internalType: "contract IDEXRouter",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint8",
                            name: "newDevBuyFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "newRewardsBuyFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "newMarketingBuyFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "newTeamBuyFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "newLiqBuyFee",
                            type: "uint8"
                        }],
                        name: "setBuyFees",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_minPeriod",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "_minDistribution",
                            type: "uint256"
                        }],
                        name: "setDistributionCriteria",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "gas",
                            type: "uint256"
                        }],
                        name: "setDistributorSettings",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "holder",
                            type: "address"
                        }, {
                            internalType: "bool",
                            name: "exempt",
                            type: "bool"
                        }],
                        name: "setIsDividendExempt",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "newLiquifyThreshhold",
                            type: "uint256"
                        }],
                        name: "setLiquifyThreshhold",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "newMaxBalancePercentage",
                            type: "uint256"
                        }],
                        name: "setMaxBalancePercentage",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "newMaxTxPercentage",
                            type: "uint256"
                        }],
                        name: "setMaxTxPercentage",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "newPairAddress",
                            type: "address"
                        }],
                        name: "setNewPair",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "newAddress",
                            type: "address"
                        }],
                        name: "setNewRouter",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address payable",
                            name: "newMarketingAddress",
                            type: "address"
                        }, {
                            internalType: "address payable",
                            name: "newDevAddress",
                            type: "address"
                        }, {
                            internalType: "address payable",
                            name: "newTeamAddress",
                            type: "address"
                        }],
                        name: "setReceiverAddresses",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint8",
                            name: "newDevSellFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "newRewardsSellFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "newMarketingSellFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "newTeamSellFee",
                            type: "uint8"
                        }, {
                            internalType: "uint8",
                            name: "newLiqSellFee",
                            type: "uint8"
                        }],
                        name: "setSellFees",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bool",
                            name: "enabled",
                            type: "bool"
                        }],
                        name: "setTradingEnabled",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "symbol",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalSupply",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "transfer",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "transferFrom",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "newOwner",
                            type: "address"
                        }],
                        name: "transferOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "withdrawBNB",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_tokenContract",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "_amount",
                            type: "uint256"
                        }],
                        name: "withdrawToken",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        stateMutability: "payable",
                        type: "receive"
                    }],
                    safemoon2: [{
                        inputs: [],
                        name: "totalFees",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "decimals",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "name",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "symbol",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalSupply",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "decimals",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "balanceOf",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "owner",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "uniswapV2Pair",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }],
                    bscCoinFlip: [{
                        inputs: [],
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "uint8",
                            name: "oldPercentage",
                            type: "uint8"
                        }, {
                            indexed: !1,
                            internalType: "uint8",
                            name: "newPercentage",
                            type: "uint8"
                        }],
                        name: "DevFeePercentageChanged",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "address",
                            name: "oldReceiver",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "address",
                            name: "newReceiver",
                            type: "address"
                        }],
                        name: "DevFeeReceiverChanged",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "better",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "bool",
                            name: "winner",
                            type: "bool"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "wager",
                            type: "uint256"
                        }, {
                            indexed: !1,
                            internalType: "uint32",
                            name: "id",
                            type: "uint32"
                        }],
                        name: "GameFinished",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "better",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "wager",
                            type: "uint256"
                        }, {
                            indexed: !1,
                            internalType: "uint8",
                            name: "predictedOutcome",
                            type: "uint8"
                        }, {
                            indexed: !1,
                            internalType: "uint32",
                            name: "id",
                            type: "uint32"
                        }],
                        name: "GameStarted",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "uint8",
                            name: "oldPercentage",
                            type: "uint8"
                        }, {
                            indexed: !1,
                            internalType: "uint8",
                            name: "newPercentage",
                            type: "uint8"
                        }],
                        name: "HouseFeePercentageChanged",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "address",
                            name: "oldReceiver",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "address",
                            name: "newReceiver",
                            type: "address"
                        }],
                        name: "HouseFeeReceiverChanged",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "previousOwner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "newOwner",
                            type: "address"
                        }],
                        name: "OwnershipTransferred",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "winner",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "winnings",
                            type: "uint256"
                        }],
                        name: "PayoutComplete",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "uint8",
                            name: "oldPercentage",
                            type: "uint8"
                        }, {
                            indexed: !1,
                            internalType: "uint8",
                            name: "newPercentage",
                            type: "uint8"
                        }],
                        name: "ReferrerFeePercentageChanged",
                        type: "event"
                    }, {
                        inputs: [],
                        name: "_blockWaitTime",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_devFeePercentage",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_devFeeReceiver",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        name: "_games",
                        outputs: [{
                            internalType: "address",
                            name: "better",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }, {
                            internalType: "uint32",
                            name: "id",
                            type: "uint32"
                        }, {
                            internalType: "uint8",
                            name: "predictedOutcome",
                            type: "uint8"
                        }, {
                            internalType: "bool",
                            name: "finished",
                            type: "bool"
                        }, {
                            internalType: "bool",
                            name: "winner",
                            type: "bool"
                        }, {
                            internalType: "uint256",
                            name: "wager",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "startBlock",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_houseFeePercentage",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_houseFeeReceiver",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_isBlacklisted",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_maxBetForToken",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_minBetForToken",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_queueResetSize",
                        outputs: [{
                            internalType: "uint32",
                            name: "",
                            type: "uint32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_referrer",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_referrerFeePercentage",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_team",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_winnings",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }],
                        name: "claimWinnings",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "wager",
                            type: "uint256"
                        }, {
                            internalType: "uint8",
                            name: "outcome",
                            type: "uint8"
                        }, {
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "referrer",
                            type: "address"
                        }],
                        name: "enterGame",
                        outputs: [],
                        stateMutability: "payable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "forceCompleteQueuedGames",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "owner",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "rand",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "renounceOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "wallet",
                            type: "address"
                        }, {
                            internalType: "bool",
                            name: "isBlacklisted",
                            type: "bool"
                        }],
                        name: "setBlacklist",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint8",
                            name: "newPercentage",
                            type: "uint8"
                        }],
                        name: "setDevFeePercentage",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "newReceiver",
                            type: "address"
                        }],
                        name: "setDevFeeReceiver",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bool",
                            name: "enabled",
                            type: "bool"
                        }],
                        name: "setGameEnabled",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint8",
                            name: "newPercentage",
                            type: "uint8"
                        }],
                        name: "setHouseFeePercentage",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "newReceiver",
                            type: "address"
                        }],
                        name: "setHouseFeeReceiver",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "maxBet",
                            type: "uint256"
                        }],
                        name: "setMaxBetForToken",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "minBet",
                            type: "uint256"
                        }],
                        name: "setMinBetForToken",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint32",
                            name: "newSize",
                            type: "uint32"
                        }],
                        name: "setQueueSize",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint8",
                            name: "newPercentage",
                            type: "uint8"
                        }],
                        name: "setReferrerFeePercentage",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "member",
                            type: "address"
                        }, {
                            internalType: "bool",
                            name: "isTeamMember",
                            type: "bool"
                        }],
                        name: "setTeamMember",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "newOwner",
                            type: "address"
                        }],
                        name: "transferOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "withdrawBNB",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_tokenContract",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "_amount",
                            type: "uint256"
                        }],
                        name: "withdrawToken",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        stateMutability: "payable",
                        type: "receive"
                    }],
                    muuinu: [{
                        inputs: [],
                        name: "totalFees",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "decimals",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "name",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "symbol",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalSupply",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "decimals",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "balanceOf",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "owner",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "uniswapV2Pair",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }]
                },
                G = n(248),
                L = n(31),
                V = n(32),
                D = n.p + "static/media/nightTexture.deefc2f0.png",
                Z = n.p + "static/media/bscflogo.b892e805.png",
                U = V.a.div(a || (a = Object(L.a)(["\n  position: relative;\n  width:100%;\n  background-color: #000000;\n  overflow:hidden;\n"]))),
                z = V.a.div(i || (i = Object(L.a)(["\nposition: absolute;\nbackground-repeat:no-repeat;\nbackground-size: cover;\nopacity: 0.075;\nz-index: -1;\nheight: 100%;\nwidth: 50%;\n"]))),
                W = (V.a.canvas(s || (s = Object(L.a)(["\n  position:fixed;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n"]))), V.a.div(c || (c = Object(L.a)(["\n  position: relative;\n  align-items: center;\n  color: white;\n  display: flex;\n  width:100%;\n  flex-direction: column;\n  font-size: calc(10px + 2vmin);\n  justify-content: center;\n  min-height: calc(100vh - 70px);\n  z-index: 1;\n\n"])))),
                Y = V.a.div(r || (r = Object(L.a)(["\n  position: absolute;\n  border:none;\n  top: 100px;\n  background-image: url(", ");\n  background-size: fill;\n  opacity: 1;\n  z-index: 0;\n  height: 100%;\n  width: 100%;\n"])), D),
                K = V.a.img(o || (o = Object(L.a)(["\n  height: 350px;\n  width: 350px;\n  pointer-events: none;\n"]))),
                J = (V.a.a.attrs({
                    target: "_blank",
                    rel: "noopener noreferrer"
                })(l || (l = Object(L.a)(["\n  color: #61dafb;\n  margin-top: 10px;\n"]))), V.a.p(u || (u = Object(L.a)(["\n  margin: 0px;\n  text-align: center;\n  font-size:1.2rem;\n  letter-spacing: ", ";\n  margin-bottom: ", ";\n  "])), (function(e) {
                    return e.spaced ? "5px" : "0px"
                }), (function(e) {
                    return e.spaced, "0px"
                }))),
                X = V.a.div(d || (d = Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: calc(1px + 2vmin);\n  align-items: center;\n  flex-wrap: wrap;\n  width:100%;\n  // @media (max-width: 800px) {\n  //   margin-top: 20px;\n  //   flex-direction: column;\n  //   align-items: center;\n  // }\n"]))),
                Q = V.a.div(p || (p = Object(L.a)(["\n  padding:5px;\n  left:10px;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:space-between;\n  position:fixed;\n  width:auto;\n  height:7rem;\n"]))),
                _ = V.a.div(b || (b = Object(L.a)(["\n  display: flex;\n  width:100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n"]))),
                q = V.a.div(m || (m = Object(L.a)(["\n  display: flex;\n  position:relative;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 24px;\n  top:-100px;\n  min-width: 200px;\n"]))),
                $ = n(105),
                ee = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEJ0lEQVR4nO3aSYgdRRjA8d/LmBm3wKgJEyNjXONCBjdUEA/JRU00GjGYqIeAiBgVD8YFJSfXgx7mIoiKihvBFUGjgeCgoqgHITkoMQZR4q7jwiQx28RD9TMzb6rmdb9Zni/pPxTdU1/39331varqqq+GkpKSkpKSkpKSkpKSA5BKE2y2YwEW4xR0oh+f4Q182ASfJoVO3I0t2DtK6cOJTfJxQjgOvfjb6A0fWvpxQTOcHU/OxWrskr/hQ8uvmD3pXo+RKbgc72us0bXl1QK2T8cVmFnE4aKT4OHoQRemDqmfgtOwTJjY8vA7XsFmnI+rEv7MwaY6uu7Hqux+Oy7Dezn9yMU5eBP/GPuvuhErcGiNjeWJ5++o49vxGKx55y/MbbCtw6jgvoiBRkofFgm9JcXnkfeeruPjvIS9L4wMcmF6E8rzlp14HmfntPdsRMeaOu9MEybMmP3enHajLEkozfsZexjHFLT5VETXOzXPzMJNWIqOrG6e+PDcpcGh0CZMTnkbPIjvhF9rOQ5rxKj6ATgDfw6RrccRmWxFwreXG3FkfkLZJlxiHMZWgnoBWB2Rvyv8YMQ/v7txQspgakKaH6nbgYWZwW15WjMBzIjUXYyV2f29EXkbrkspTAXg2EjdJ+p/jyeaVHe+B0fiI6yNyJekFKYCEOviv4zq2uTwhHgQOnFzdh+T92B6TOFo3+T/I3txPX6IyK7Mrmuy54ZSEfYmI2i1AMBWPBqpP0vYB/yEryLyOTFlrRgAQuKklgpOyu5jPWRWTFGrBuBbYdNTS3Xh9WNENi2mqFUDUF181VKti+0qa+cFtG4ApouvNn/LrrGcwEBMUasG4KJE/ebsGhvvW2IvtGIAKrg9Ur9R2I/MFJ/xo4u4VgzAXUKCppa3sutCI+eAQSHtPoJUAGIzbKFc2wTRI6S/atlh395/aUS+XtiijyAVgNh39Dz5830TxSLDc5FVHhfG+IXi80MyuZoKwAeRug68LZzqNLrfHys/R+o2CJuhCh6KyHfjxaKGOvC9/AmRPUKv6cNtOKqowYx6+YCDhbFclW3ByZnsloRvLzXoixsSCvOUrXjMvqVpXvKkxNqFjc81wi6QkL+IpcR24tSCPvxHBS9ElBYpe/C6/Mdcz0R01EuKduOPhP1HctpN0i7swccShGr5WDj8aJPm08h7z9Xx8c6EvQ3CkBkXFiSca6R8jVuNnEiXJZ5fZXRWRt7pl7PrFz0amy3su7sNzxpNFXL/lwq9Jg/9wuxcPRq7Wrx3nCl8x1N0ZfKu7O9tQuK2Kf9ncDQekD6oKFrW5bTbjQeFMd/stQo4BDcKx1ONNn7AOJ3vNZOK0B3XKna+uF046t6vmIsnhcaN1vgvhTlhv2WGsFpcJ6zkBvANXsO1OKh5rpWUlJSUlJSUlJSUlBwg/AtTUATqktoOTAAAAABJRU5ErkJggg==",
                te = (V.a.header(j || (j = Object(L.a)(["\n  position: relative;\n  z-index: 2;\n  min-height: 70px;\n  max-height:150px;\n  display: flex;\n  align-items: center;\n  width:100%;\n  color: white;\n"]))), V.a.div(x || (x = Object(L.a)(["\n  margin: 0px 15px 0px 5px;\n"]))), V.a.div(y || (y = Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width:fit-content;\n  margin-left: 20px;\n  margin-right: auto;\n"])))),
                ne = (V.a.button(f || (f = Object(L.a)(["\n  background: #1a1b1f;\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  border: 1px solid #545659;\n  cursor: pointer;\n  margin: 0px;\n  &:hover {\n    background-color: #2F3236;\n    opacity: 0.8;\n  }\n"]))), V.a.img(O || (O = Object(L.a)(["\n  padding-top: 2px;\n  width: 20px;\n  height: 20px;\n  filter: invert(1);\n  margin: 0 auto;\n"]))), V.a.div(h || (h = Object(L.a)(["\n  background: #323232;\n  opacity: 0.7;\n  border-radius: 30px;\n  border: 1px solid #414341;\n  background-image: linear-gradient(to right, #5B543F,#36383C);\n  font-size: 12px;\n  padding: 15px 15px;\n  margin-left: 10px;\n  color: white;\n"]))), V.a.button(v || (v = Object(L.a)(["\n    height: 50px;\n    width: ", ";\n    background-color: rgba(16, 16, 16, 0.08);\n    border: 1px solid rgba(255, 255, 255, 0.11);\n    border-radius: 8px;\n    color: white;\n    cursor: ", ";\n    font-size: 14px;\n    text-align: center;\n    text-decoration: none;\n    margin: 0px 5px;\n    padding: 12px 24px;\n    font-weight: 200;\n    opacity: ", ";\n\n  ", " :focus {\n    border: none;\n    outline: none;\n  }\n\n  &:hover {\n    background-color: #2F3236;\n    opacity: 0.8;\n  }\n"])), (function(e) {
                    return e.wide ? "auto" : "125px"
                }), (function(e) {
                    return e.isDisabled ? "not-allowed" : "pointer"
                }), (function(e) {
                    return e.isDisabled ? .5 : 1
                }), (function(e) {
                    return e.hidden && "hidden"
                })), n(1007)),
                ae = n(1006),
                ie = n(503),
                se = n.p + "static/media/MetaMask_Fox.b6b09bd4.svg",
                ce = n.p + "static/media/Coinbase.43d23473.svg",
                re = n.p + "static/media/WalletConnect.9d4d0853.svg",
                oe = n(3);
            var le = function(e) {
                    var t = e.wrongChain,
                        n = Object(M.c)(),
                        a = Object(E.a)(n, 2),
                        i = a[0],
                        s = i.data,
                        c = (i.error, a[1]),
                        r = Object(M.b)({
                            fetchEns: !1
                        }),
                        o = Object(E.a)(r, 2),
                        l = o[0].data,
                        u = o[1],
                        d = Object(C.useState)(s.connectors[0]),
                        p = Object(E.a)(d, 2),
                        b = p[0],
                        m = p[1],
                        j = {
                            injected: se,
                            walletConnect: re,
                            walletLink: ce
                        };
                    return Object(oe.jsxs)("div", {
                        className: "flex justify-between mx-5 w100",
                        children: [!l && Object(oe.jsxs)(ne.a, {
                            as: "div",
                            className: "relative inline-block text-left mr-5",
                            children: [Object(oe.jsx)("div", {
                                children: Object(oe.jsxs)(ne.a.Button, {
                                    disabled: l,
                                    className: "text-sm flex items-center w-50 tracking-wide justify-center rounded-md border border-[#3A3A3A] shadow-sm px-4 py-2 bg-black hover:bg-[#2F3236] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
                                    children: [Object(oe.jsx)("img", {
                                        src: j[b.id],
                                        alt: "metamask_logo",
                                        className: "mr-3 h-5 w-5",
                                        "aria-hidden": "true"
                                    }), b.name, Object(oe.jsx)(ie.a, {
                                        className: "-mr-1 ml-2",
                                        "aria-hidden": "true"
                                    })]
                                })
                            }), Object(oe.jsx)(ae.a, {
                                as: C.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                children: Object(oe.jsx)(ne.a.Items, {
                                    className: "origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black text-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none",
                                    children: Object(oe.jsx)("div", {
                                        className: "border-[#3A3A3A] border-[1px] rounded-[0.375rem]",
                                        children: s.connectors.map((function(e) {
                                            return Object(oe.jsx)(ne.a.Item, {
                                                children: Object(oe.jsxs)("div", {
                                                    onClick: function() {
                                                        return m(e)
                                                    },
                                                    className: "group flex items-center px-4 py-2 text-sm hover:bg-[#efb911] hover:text-black",
                                                    children: [Object(oe.jsx)("img", {
                                                        src: j[e.id],
                                                        alt: "metamask_logo",
                                                        className: "mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500",
                                                        "aria-hidden": "true"
                                                    }), e.name, !e.ready && " (unsupported)"]
                                                })
                                            }, e.id)
                                        }))
                                    })
                                })
                            })]
                        }), Object(oe.jsx)("div", {
                            className: "",
                            children: l ? t ? Object(oe.jsx)("button", {
                                className: "text-white text-sm border-[#3A3A3A] border-[1px] inline-flex items-center px-4 py-2 rounded-md bg-black hover:bg-[#2F3236]",
                                children: "WRONG CHAIN"
                            }) : Object(oe.jsxs)("button", {
                                onClick: u,
                                className: "text-white text-sm border-[#3A3A3A] border-[1px] inline-flex items-center px-4 py-2 rounded-md bg-black hover:bg-[#2F3236]",
                                children: [Object(oe.jsx)("svg", {
                                    className: "-ml-0.5 mr-1.5 h-2 w-2 text-[#24FF00]",
                                    fill: "currentColor",
                                    viewBox: "0 0 8 8",
                                    children: Object(oe.jsx)("circle", {
                                        cx: 4,
                                        cy: 4,
                                        r: 3
                                    })
                                }), l.address.substring(0, 6), "...", l.address.substring(38)]
                            }) : Object(oe.jsx)("button", {
                                onClick: function() {
                                    return c(b)
                                },
                                className: "text-white text-sm border-[#3A3A3A] border-[1px] inline-flex items-center px-4 py-2 rounded-md bg-black hover:bg-[#2F3236]",
                                children: "Connect Wallet"
                            })
                        })]
                    })
                },
                ue = (n(653), Object(oe.jsxs)("svg", {
                    width: "116",
                    height: "37",
                    viewBox: "0 0 116 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [Object(oe.jsx)("rect", {
                        width: "116",
                        height: "37",
                        rx: "8",
                        fill: "#0F0F0F",
                        "fill-opacity": "0.81"
                    }), Object(oe.jsx)("rect", {
                        x: "0.5",
                        y: "0.5",
                        width: "115",
                        height: "36",
                        rx: "7.5",
                        stroke: "white",
                        "stroke-opacity": "0.2"
                    }), Object(oe.jsx)("path", {
                        d: "M19.865 17.565C19.6137 17.0363 19.2497 16.629 18.773 16.343C18.2963 16.0483 17.7417 15.901 17.109 15.901C16.4763 15.901 15.9043 16.0483 15.393 16.343C14.8903 16.629 14.4917 17.045 14.197 17.591C13.911 18.1283 13.768 18.7523 13.768 19.463C13.768 20.1737 13.911 20.7977 14.197 21.335C14.4917 21.8723 14.8903 22.2883 15.393 22.583C15.9043 22.869 16.4763 23.012 17.109 23.012C17.993 23.012 18.721 22.7477 19.293 22.219C19.865 21.6903 20.1987 20.9753 20.294 20.074H16.68V19.112H21.555V20.022C21.4857 20.7673 21.2517 21.452 20.853 22.076C20.4543 22.6913 19.93 23.181 19.28 23.545C18.63 23.9003 17.9063 24.078 17.109 24.078C16.2683 24.078 15.5013 23.883 14.808 23.493C14.1147 23.0943 13.5643 22.544 13.157 21.842C12.7583 21.14 12.559 20.347 12.559 19.463C12.559 18.579 12.7583 17.786 13.157 17.084C13.5643 16.3733 14.1147 15.823 14.808 15.433C15.5013 15.0343 16.2683 14.835 17.109 14.835C18.071 14.835 18.9203 15.0733 19.657 15.55C20.4023 16.0267 20.944 16.6983 21.282 17.565H19.865ZM28.4752 21.985H24.5232L23.7952 24H22.5472L25.8232 14.991H27.1882L30.4512 24H29.2032L28.4752 21.985ZM28.1372 21.023L26.4992 16.447L24.8612 21.023H28.1372ZM41.0699 15.004V24H39.8869V17.292L36.8969 24H36.0649L33.0619 17.279V24H31.8789V15.004H33.1529L36.4809 22.44L39.8089 15.004H41.0699ZM44.2592 15.901V18.93H47.5612V19.905H44.2592V23.025H47.9512V24H43.0762V14.926H47.9512V15.901H44.2592ZM58.9322 15.004V24H57.7492V17.292L54.7592 24H53.9272L50.9242 17.279V24H49.7412V15.004H51.0152L54.3432 22.44L57.6712 15.004H58.9322ZM65.0465 24.091C64.2058 24.091 63.4388 23.896 62.7455 23.506C62.0522 23.1073 61.5018 22.557 61.0945 21.855C60.6958 21.1443 60.4965 20.347 60.4965 19.463C60.4965 18.579 60.6958 17.786 61.0945 17.084C61.5018 16.3733 62.0522 15.823 62.7455 15.433C63.4388 15.0343 64.2058 14.835 65.0465 14.835C65.8958 14.835 66.6672 15.0343 67.3605 15.433C68.0538 15.823 68.5998 16.369 68.9985 17.071C69.3972 17.773 69.5965 18.5703 69.5965 19.463C69.5965 20.3557 69.3972 21.153 68.9985 21.855C68.5998 22.557 68.0538 23.1073 67.3605 23.506C66.6672 23.896 65.8958 24.091 65.0465 24.091ZM65.0465 23.064C65.6792 23.064 66.2468 22.9167 66.7495 22.622C67.2608 22.3273 67.6595 21.907 67.9455 21.361C68.2402 20.815 68.3875 20.1823 68.3875 19.463C68.3875 18.735 68.2402 18.1023 67.9455 17.565C67.6595 17.019 67.2652 16.5987 66.7625 16.304C66.2598 16.0093 65.6878 15.862 65.0465 15.862C64.4052 15.862 63.8332 16.0093 63.3305 16.304C62.8278 16.5987 62.4292 17.019 62.1345 17.565C61.8485 18.1023 61.7055 18.735 61.7055 19.463C61.7055 20.1823 61.8485 20.815 62.1345 21.361C62.4292 21.907 62.8278 22.3273 63.3305 22.622C63.8418 22.9167 64.4138 23.064 65.0465 23.064ZM73.9792 14.939C74.9672 14.939 75.8209 15.1253 76.5402 15.498C77.2682 15.862 77.8229 16.3863 78.2042 17.071C78.5942 17.7557 78.7892 18.5617 78.7892 19.489C78.7892 20.4163 78.5942 21.2223 78.2042 21.907C77.8229 22.583 77.2682 23.103 76.5402 23.467C75.8209 23.8223 74.9672 24 73.9792 24H71.1582V14.939H73.9792ZM73.9792 23.025C75.1492 23.025 76.0419 22.7173 76.6572 22.102C77.2726 21.478 77.5802 20.607 77.5802 19.489C77.5802 18.3623 77.2682 17.4827 76.6442 16.85C76.0289 16.2173 75.1406 15.901 73.9792 15.901H72.3412V23.025H73.9792ZM81.5326 15.901V18.93H84.8346V19.905H81.5326V23.025H85.2246V24H80.3496V14.926H85.2246V15.901H81.5326Z",
                        fill: "white"
                    }), Object(oe.jsx)("path", {
                        d: "M101.796 21.3536C101.991 21.5488 102.308 21.5488 102.503 21.3536L105.685 18.1716C105.88 17.9763 105.88 17.6597 105.685 17.4645C105.49 17.2692 105.173 17.2692 104.978 17.4645L102.149 20.2929L99.3208 17.4645C99.1255 17.2692 98.809 17.2692 98.6137 17.4645C98.4184 17.6597 98.4184 17.9763 98.6137 18.1716L101.796 21.3536ZM101.649 20V21H102.649V20H101.649Z",
                        fill: "white"
                    })]
                })),
                de = function(e, t) {
                    return "coinflip" === t ? Object(oe.jsxs)("svg", {
                        width: "140",
                        height: "24",
                        viewBox: "0 0 140 24",
                        fill: "coinflip" === e ? "#EFB911" : "black",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [Object(oe.jsx)("rect", {
                            width: "140",
                            height: "24",
                            rx: "12",
                            fill: "#ffffff"
                        }), Object(oe.jsx)("rect", {
                            x: "0.25",
                            y: "0.25",
                            width: "139.5",
                            height: "23.5",
                            rx: "11.75",
                            stroke: "white",
                            strokeOpacity: "0.61",
                            strokeWidth: "0.5"
                        }), Object(oe.jsx)("path", {
                            d: "M29.088 17.098C28.444 17.098 27.8747 16.986 27.38 16.762C26.8947 16.538 26.512 16.2253 26.232 15.824C25.952 15.4227 25.8027 14.9747 25.784 14.48H26.82C26.8667 14.956 27.0767 15.376 27.45 15.74C27.8233 16.0947 28.3693 16.272 29.088 16.272C29.7507 16.272 30.2733 16.104 30.656 15.768C31.048 15.4227 31.244 14.9887 31.244 14.466C31.244 14.046 31.1367 13.71 30.922 13.458C30.7073 13.1967 30.4413 13.0053 30.124 12.884C29.8067 12.7533 29.368 12.6133 28.808 12.464C28.1547 12.2867 27.6367 12.114 27.254 11.946C26.8713 11.778 26.5447 11.5167 26.274 11.162C26.0033 10.8073 25.868 10.3267 25.868 9.72C25.868 9.216 25.9987 8.768 26.26 8.376C26.5213 7.97467 26.89 7.662 27.366 7.438C27.842 7.214 28.388 7.102 29.004 7.102C29.9093 7.102 30.6373 7.326 31.188 7.774C31.748 8.21267 32.07 8.782 32.154 9.482H31.09C31.0247 9.08067 30.8053 8.726 30.432 8.418C30.0587 8.10067 29.5547 7.942 28.92 7.942C28.332 7.942 27.842 8.10067 27.45 8.418C27.058 8.726 26.862 9.15067 26.862 9.692C26.862 10.1027 26.9693 10.434 27.184 10.686C27.3987 10.938 27.6647 11.1293 27.982 11.26C28.3087 11.3907 28.7473 11.5307 29.298 11.68C29.9327 11.8573 30.446 12.0347 30.838 12.212C31.23 12.38 31.5613 12.6413 31.832 12.996C32.1027 13.3507 32.238 13.8267 32.238 14.424C32.238 14.8813 32.1167 15.3153 31.874 15.726C31.6313 16.1367 31.272 16.468 30.796 16.72C30.32 16.972 29.7507 17.098 29.088 17.098ZM35.1117 7.214V17H34.1317V7.214H35.1117ZM44.7089 17H43.7289L38.3109 8.768V17H37.3309V7.214H38.3109L43.7289 15.432V7.214H44.7089V17ZM54.6286 10.07C54.3486 9.426 53.9193 8.922 53.3406 8.558C52.7713 8.18467 52.0993 7.998 51.3246 7.998C50.5966 7.998 49.9433 8.166 49.3646 8.502C48.7859 8.838 48.3286 9.31867 47.9926 9.944C47.6566 10.56 47.4886 11.2787 47.4886 12.1C47.4886 12.9213 47.6566 13.6447 47.9926 14.27C48.3286 14.8953 48.7859 15.376 49.3646 15.712C49.9433 16.048 50.5966 16.216 51.3246 16.216C52.0059 16.216 52.6173 16.0713 53.1586 15.782C53.7093 15.4833 54.1479 15.0633 54.4746 14.522C54.8106 13.9713 55.0019 13.332 55.0486 12.604H50.9326V11.806H56.0846V12.52C56.0379 13.3787 55.8046 14.158 55.3846 14.858C54.9646 15.5487 54.3999 16.0947 53.6906 16.496C52.9906 16.8973 52.2019 17.098 51.3246 17.098C50.4193 17.098 49.5979 16.888 48.8606 16.468C48.1233 16.0387 47.5399 15.446 47.1106 14.69C46.6906 13.9247 46.4806 13.0613 46.4806 12.1C46.4806 11.1387 46.6906 10.28 47.1106 9.524C47.5399 8.75867 48.1233 8.166 48.8606 7.746C49.5979 7.31667 50.4193 7.102 51.3246 7.102C52.3699 7.102 53.2846 7.36333 54.0686 7.886C54.8526 8.40867 55.4219 9.13667 55.7766 10.07H54.6286ZM58.8598 16.202H62.3738V17H57.8798V7.214H58.8598V16.202ZM64.7523 8.012V11.666H68.4623V12.478H64.7523V16.188H68.8823V17H63.7723V7.2H68.8823V8.012H64.7523ZM77.0714 10.028C77.0714 10.868 76.796 11.5447 76.2454 12.058C75.6947 12.5713 74.8687 12.828 73.7674 12.828H71.7934V17H70.8134V7.214H73.7674C74.8594 7.214 75.6807 7.47067 76.2314 7.984C76.7914 8.49733 77.0714 9.17867 77.0714 10.028ZM73.7674 11.988C75.298 11.988 76.0634 11.3347 76.0634 10.028C76.0634 9.37467 75.8814 8.88 75.5174 8.544C75.1534 8.208 74.57 8.04 73.7674 8.04H71.7934V11.988H73.7674ZM79.6957 16.202H83.2097V17H78.7157V7.214H79.6957V16.202ZM90.2783 14.676H85.8263L84.9723 17H83.9363L87.5063 7.34H88.6123L92.1683 17H91.1323L90.2783 14.676ZM89.9843 13.864L88.0523 8.572L86.1203 13.864H89.9843ZM100.209 7.214L97.0731 13.192V17H96.0931V13.192L92.9291 7.214H94.0351L96.5831 12.296L99.1171 7.214H100.209ZM102.623 8.012V11.666H106.333V12.478H102.623V16.188H106.753V17H101.643V7.2H106.753V8.012H102.623ZM113.892 17L111.47 12.912H109.664V17H108.684V7.214H111.624C112.716 7.214 113.542 7.47533 114.102 7.998C114.672 8.52067 114.956 9.20667 114.956 10.056C114.956 10.7653 114.751 11.372 114.34 11.876C113.939 12.3707 113.342 12.6927 112.548 12.842L115.068 17H113.892ZM109.664 12.114H111.638C112.404 12.114 112.978 11.9273 113.36 11.554C113.752 11.1807 113.948 10.6813 113.948 10.056C113.948 9.412 113.762 8.91733 113.388 8.572C113.015 8.21733 112.427 8.04 111.624 8.04H109.664V12.114Z",
                            fill: "coinflip" === e ? "black" : "white"
                        })]
                    }) : "kingflip" === t ? Object(oe.jsxs)("svg", {
                        width: "140",
                        height: "24",
                        viewBox: "0 0 140 24",
                        fill: "kingflip" === e ? "#EFB911" : "black",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [Object(oe.jsx)("rect", {
                            x: "0.25",
                            y: "0.25",
                            width: "139.5",
                            height: "23.5",
                            rx: "11.75",
                            stroke: "white",
                            strokeOpacity: "0.61",
                            strokeWidth: "0.5"
                        }), Object(oe.jsx)("path", {
                            d: "M52.516 17.098C51.6107 17.098 50.7893 16.888 50.052 16.468C49.3147 16.0387 48.7313 15.446 48.302 14.69C47.882 13.9247 47.672 13.0613 47.672 12.1C47.672 11.1387 47.882 10.28 48.302 9.524C48.7313 8.75867 49.3147 8.166 50.052 7.746C50.7893 7.31667 51.6107 7.102 52.516 7.102C53.4307 7.102 54.2567 7.31667 54.994 7.746C55.7313 8.166 56.31 8.75867 56.73 9.524C57.15 10.28 57.36 11.1387 57.36 12.1C57.36 13.0613 57.15 13.9247 56.73 14.69C56.31 15.446 55.7313 16.0387 54.994 16.468C54.2567 16.888 53.4307 17.098 52.516 17.098ZM52.516 16.244C53.244 16.244 53.8973 16.076 54.476 15.74C55.0547 15.404 55.512 14.9233 55.848 14.298C56.184 13.6633 56.352 12.9307 56.352 12.1C56.352 11.2693 56.184 10.5413 55.848 9.916C55.512 9.29067 55.0547 8.81 54.476 8.474C53.8973 8.138 53.244 7.97 52.516 7.97C51.788 7.97 51.1347 8.138 50.556 8.474C49.9773 8.81 49.52 9.29067 49.184 9.916C48.848 10.5413 48.68 11.2693 48.68 12.1C48.68 12.9307 48.848 13.6633 49.184 14.298C49.52 14.9233 49.9773 15.404 50.556 15.74C51.1347 16.076 51.788 16.244 52.516 16.244ZM66.5312 17H65.5512L60.1332 8.768V17H59.1532V7.214H60.1332L65.5512 15.432V7.214H66.5312V17ZM69.7309 16.202H73.2449V17H68.7509V7.214H69.7309V16.202ZM75.6234 7.214V17H74.6434V7.214H75.6234ZM85.2207 17H84.2407L78.8227 8.768V17H77.8427V7.214H78.8227L84.2407 15.432V7.214H85.2207V17ZM88.4203 8.012V11.666H92.1303V12.478H88.4203V16.188H92.5503V17H87.4403V7.2H92.5503V8.012H88.4203Z",
                            fill: "kingflip" === e ? "black" : "white"
                        })]
                    }) : void 0
                },
                pe = Object(oe.jsx)("svg", {
                    width: "8",
                    height: "5",
                    viewBox: "0 0 8 5",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: Object(oe.jsx)("path", {
                        d: "M4.35355 0.646447C4.15829 0.451185 3.84171 0.451185 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM4.5 2V1H3.5V2H4.5Z",
                        fill: "white"
                    })
                });

            function be(e) {
                var t = e.gameMode,
                    n = e.setGameMode,
                    a = Object(C.useState)(!1),
                    i = Object(E.a)(a, 2),
                    s = i[0],
                    c = i[1];
                return Object(oe.jsxs)("div", {
                    className: "dropDownContainer",
                    children: [!s && Object(oe.jsx)("div", {
                        className: "gameModeDropDiv",
                        onClick: function() {
                            c(!s)
                        },
                        children: ue
                    }), s && Object(oe.jsx)("div", {
                        className: "divider"
                    }), s && Object(oe.jsxs)("div", {
                        className: "gameSelectModal",
                        children: [Object(oe.jsx)("div", {
                            className: "gameModes",
                            children: "GAMEMODES"
                        }), Object(oe.jsx)("div", {
                            className: "singlePlayerSelect",
                            onClick: function() {
                                n("coinflip"), c(!1)
                            },
                            children: de(t, "coinflip")
                        }), Object(oe.jsx)("div", {
                            className: "onlineSelect",
                            onClick: function() {
                                n("kingflip"), c(!1)
                            },
                            children: de(t, "kingflip")
                        }), Object(oe.jsx)("div", {
                            className: "closeBracket",
                            onClick: function() {
                                c(!1)
                            },
                            children: pe
                        })]
                    })]
                })
            }

            function me(e) {
                var t = e.setActivity,
                    n = e.game,
                    a = Object(C.useState)(0),
                    i = Object(E.a)(a, 2),
                    s = i[0],
                    c = i[1],
                    r = Object(C.useState)(!1),
                    o = Object(E.a)(r, 2),
                    l = o[0],
                    u = o[1],
                    d = Object(C.useState)(0),
                    p = Object(E.a)(d, 2),
                    b = p[0],
                    m = p[1];

                function j() {
                    return (j = Object(H.a)(Object(I.a)().mark((function e() {
                        var t;
                        return Object(I.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, n._queuedGames.end;
                                case 3:
                                    t = e.sent, m(t), e.next = 11;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0), console.log("Could not call SC"), m(b + 1);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function x() {
                    return (x = Object(H.a)(Object(I.a)().mark((function e(t) {
                        var a, i, s;
                        return Object(I.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a = [];
                                case 1:
                                    return e.next = 4, n._games(t);
                                case 4:
                                    if ((i = e.sent).finished) {
                                        e.next = 9;
                                        break
                                    }
                                    return t--, console.log("Game Not Finished"), e.abrupt("continue", 1);
                                case 9:
                                    if (0 !== i.id) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("break", 18);
                                case 11:
                                    if (3 !== a.length) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.abrupt("break", 18);
                                case 13:
                                    s = {
                                        better: i.better,
                                        bet: parseInt(i.wager),
                                        win: i.winner
                                    }, a.push(s), t--, e.next = 1;
                                    break;
                                case 18:
                                    0 === a.length ? u(!1) : u(a);
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return Object(C.useEffect)((function() {
                    var e = setInterval((function() {
                        c(s + 1)
                    }), 1e3);
                    return function() {
                        return clearInterval(e)
                    }
                }), [s]), Object(C.useEffect)((function() {
                    console.log("Getting GAMES DATA"),
                        function() {
                            j.apply(this, arguments)
                        }(),
                        function(e) {
                            x.apply(this, arguments)
                        }(b)
                }), [s]), Object(oe.jsxs)("div", {
                    className: "activityModal",
                    children: [l && l.map((function(e, t) {
                        return Object(oe.jsxs)("div", {
                            className: "activityRow",
                            children: [Object(oe.jsx)("p", {
                                className: "addressText",
                                children: e.better.substring(0, 7)
                            }), Object(oe.jsx)("p", {
                                className: "basic",
                                children: "bet"
                            }), Object(oe.jsx)("p", {
                                className: "betText",
                                children: parseFloat(e.bet / Math.pow(10, 18)).toFixed(2)
                            }), Object(oe.jsx)("p", {
                                className: "basic",
                                children: "and"
                            }), e.win ? Object(oe.jsx)("p", {
                                className: "winnerText",
                                children: "WON"
                            }) : Object(oe.jsx)("p", {
                                className: "loserText",
                                children: "LOST"
                            })]
                        }, t)
                    })), l && Object(oe.jsx)("div", {
                        className: "closeBracket",
                        onClick: function() {
                            t(!1)
                        },
                        children: pe
                    }), !l && Object(oe.jsx)("h1", {
                        children: "LOADING..."
                    })]
                })
            }
            n(654);
            var je, xe, ye, fe, Oe, he, ve, ge, we, Ce, Te, ke, Ne, Fe = function(e) {
                    var t = e.gameMode,
                        n = e.setGameMode,
                        a = e.game,
                        i = (e.bscF, e.chainId, e.wrongChain),
                        s = Object(M.b)({
                            fetchEns: !1
                        }),
                        c = Object(E.a)(s, 2),
                        r = c[0].data,
                        o = (c[1], Object(C.useState)(!1)),
                        l = Object(E.a)(o, 2),
                        u = l[0],
                        d = l[1],
                        p = Object(C.useState)(!1),
                        b = Object(E.a)(p, 2),
                        m = b[0],
                        j = b[1],
                        x = Object(C.useState)(!1),
                        y = Object(E.a)(x, 2),
                        f = y[0],
                        O = y[1],
                        h = Object(C.useState)(ee),
                        v = Object(E.a)(h, 2),
                        g = (v[0], v[1], Object(C.useState)(!0)),
                        w = Object(E.a)(g, 2),
                        T = (w[0], w[1], Object(C.useState)(!0)),
                        k = Object(E.a)(T, 2);
                    k[0], k[1];
                    return Object(oe.jsxs)("div", {
                        className: "headerDiv",
                        children: [Object(oe.jsxs)(te, {
                            children: [Object(oe.jsx)(be, {
                                setGameMode: n,
                                gameMode: t
                            }), Object(oe.jsxs)("div", {
                                className: "centerHeader",
                                children: [Object(oe.jsxs)("div", {
                                    className: "affBtn",
                                    children: [Object(oe.jsx)("p", {
                                        onClick: function() {
                                            O(!f)
                                        },
                                        children: "DISCLAIMER"
                                    }), f && Object(oe.jsxs)("div", {
                                        className: "affModal",
                                        children: [Object(oe.jsxs)("div", {
                                            className: "toprowAff",
                                            children: [Object(oe.jsx)("h1", {
                                                children: "DISCLAIMER"
                                            }), Object(oe.jsx)($.b, {
                                                onClick: function() {
                                                    return O(!1)
                                                },
                                                className: "absolute cursor-pointer w-5 h-5 top-5 right-5 text-white",
                                                "aria-hidden": "true"
                                            })]
                                        }), Object(oe.jsx)("p", {
                                            children: "Online gambling, even bean flip, is illegal in many countries and jurisdictions. It is your responsibility to ensure that online gambling is legal in your jurisdiction."
                                        }), Object(oe.jsx)("p", {
                                            children: "Bean Flip does not accept responsibility for any errors on this website and we do not accept liability for any financial losses incurred as a result of using this website. This is your typical double or nothing coin flip BNB betting dapp you can win double or loss your bet completely 3% taxes goes to feed bean machine."
                                        })]
                                    })]
                                }), Object(oe.jsxs)("div", {
                                    className: "affBtn",
                                    children: [Object(oe.jsx)("p", {
                                        onClick: function() {
                                            d(!u)
                                        },
                                        children: "AFFILIATE"
                                    }), u && Object(oe.jsxs)("div", {
                                        className: "affModal",
                                        children: [Object(oe.jsxs)("div", {
                                            className: "toprowAff",
                                            children: [Object(oe.jsx)("h1", {
                                                children: "YOUR AFFILIATE LINK"
                                            }), Object(oe.jsx)($.b, {
                                                onClick: function() {
                                                    return d(!1)
                                                },
                                                className: "absolute cursor-pointer w-5 h-5 top-5 right-5 text-white",
                                                "aria-hidden": "true"
                                            })]
                                        }), Object(oe.jsxs)(oe.Fragment, {
                                            children: [Object(oe.jsx)("input", {
                                                id: "affiliateLink",
                                                defaultValue: "https://beanflip.pro?ref=".concat(void 0 !== r ? r.address : "0x")
                                            }), Object(oe.jsx)("button", {
                                                onClick: function() {
                                                    var e = document.getElementById("affiliateLink");
                                                    document.queryCommandSupported("copy") && (e.select(), document.execCommand("copy"))
                                                },
                                                id: "copyButton",
                                                children: "COPY"
                                            })]
                                        }), Object(oe.jsx)("p", {
                                            children: "- earn 0.5% of all flips made with your link"
                                        })]
                                    })]
                                }), Object(oe.jsxs)("div", {
                                    className: "activityBtn",
                                    children: [Object(oe.jsx)("p", {
                                        onClick: function() {
                                            j(!m)
                                        },
                                        children: "ACTIVITY"
                                    }), m && Object(oe.jsx)(me, {
                                        setActivity: j,
                                        game: a
                                    })]
                                })]
                            })]
                        }), Object(oe.jsx)(le, {
                            wrongChain: i
                        })]
                    })
                },
                Me = n(39),
                Ae = V.a.div(je || (je = Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n"]))),
                Se = V.a.button(xe || (xe = Object(L.a)(["\n  color: white;\n  // width: 200px;\n  font-size: 14px;\n  cursor: pointer;\n  font-weight: 400;\n"]))),
                Be = V.a.text(ye || (ye = Object(L.a)(["\n  color: green;\n  font-weight: bold;\n"]))),
                Ie = V.a.div(fe || (fe = Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]))),
                He = (V.a.select(Oe || (Oe = Object(L.a)(["\n  cursor: pointer;\n  color: white;\n  background: black;\n  border: none;\n  padding: 10px;\n"]))), V.a.option(he || (he = Object(L.a)(["\n  margin: 10px;\n  background: none;\n"]))), V.a.button(ve || (ve = Object(L.a)(["\n  height: 50px;\n  width: 200px;\n  background-color: #16171a;\n  border: 0.5px solid #545659;\n  border-radius: 11% / 50%;\n  color: ", ";\n  cursor: ", ";\n  font-size: 12px;\n  text-align: center;\n  text-decoration: none;\n  margin: ", ";\n  padding: 12px 24px;\n  opacity: ", ';\n  font-weight: 200;\n  font-family: "Helvetica";\n  ', " :focus {\n    border: none;\n    outline: none;\n  }\n\n  ", " {\n    background-color: ", ";\n    box-shadow: 0px 0px 5px 1px rgba(240, 185, 18, 0.5);\n    opacity: 0.8;\n  }\n"])), (function(e) {
                    return e.isActive ? "black" : "white"
                }), (function(e) {
                    return e.isDisabled ? "not-allowed" : "pointer"
                }), (function(e) {
                    return e.spaced ? "5px 20px" : "5px 5px"
                }), (function(e) {
                    return e.isDisabled ? .5 : 1
                }), (function(e) {
                    return e.hidden && "hidden"
                }), (function(e) {
                    return !e.isDisabled && ":hover"
                }), (function(e) {
                    return e.isActive ? "#F1B213" : "#2F3236"
                }))),
                Ee = V.a.button(ge || (ge = Object(L.a)(["\nbackground: #876d1e;\nborder: none;\npadding: 0;\ncursor: ", ";\nopacity: ", ";\noutline-offset: 4px;\nborder-radius: 24px;\n\n    span{\n      min-width: 260px;\n      display: block;\n  padding: 12px 42px;\n  transform: translateY(-6px);\n  background: #f1b913;\n  border: 1px solid #3a3a3a;\n  border-radius: 24px;\n  color:black;\n    }\n\n  &:active span{\n    transform: ", ";\n  }  \n  // height: 50px;\n  // width: 250px;\n  // color: white;\n  // background-color: #16171a;\n  // border-radius: 11% / 50%;\n  // border: .5px solid #545659;\n  // cursor: ", ";\n  // opacity: ", ';\n  // font-weight: 200;\n  // font-family: "Helvetica";\n  // font-size: 16px;\n  // ', " {\n  //   background-color: #F0B912;\n  //   color: black;\n  //   box-shadow: 0 5px 30px rgba(240, 185, 18, .8);\n  // }\n"])), (function(e) {
                    return e.isDisabled ? "not-allowed" : "pointer"
                }), (function(e) {
                    return e.isDisabled ? .8 : 1
                }), (function(e) {
                    return e.isDisabled ? "" : "translateY(0px)"
                }), (function(e) {
                    return e.isDisabled ? "not-allowed" : "pointer"
                }), (function(e) {
                    return e.isDisabled ? .5 : 1
                }), (function(e) {
                    return !e.isDisabled && ":hover"
                })),
                Re = function(e) {
                    e.muuinu;
                    var t = e.selectedTokenAddress,
                        n = (e.safemoon2, e.bscF),
                        a = e.game,
                        i = Object(Me.parseUnits)("1", 25),
                        s = function() {
                            var e = Object(H.a)(Object(I.a)().mark((function e() {
                                return Object(I.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, t !== n.address) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 4, n.approve(a.address, i);
                                        case 4:
                                            e.next = 9;
                                            break;
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(0), console.log(e.t0);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return "0x0000000000000000000000000000000000000000" === t ? Object(oe.jsx)(oe.Fragment, {}) : Object(oe.jsxs)(oe.Fragment, {
                        children: ["    ", n && t === n.address && Object(oe.jsx)(He, {
                            wide: !0,
                            onClick: s,
                            children: "APPROVE $BSCF"
                        })]
                    })
                },
                Pe = [{
                    id: 0,
                    name: "100 BSCF",
                    value: Object(Me.parseUnits)("1", 20)
                }, {
                    id: 1,
                    name: "500 BSCF",
                    value: Object(Me.parseUnits)("5", 20)
                }, {
                    id: 2,
                    name: "1000 BSCF",
                    value: Object(Me.parseUnits)("1", 21)
                }, {
                    id: 3,
                    name: "5000 BSCF",
                    value: Object(Me.parseUnits)("5", 21)
                }],
                Ge = [{
                    id: 0,
                    name: "0.05 BNB",
                    value: Object(Me.parseUnits)("5", 16)
                }, {
                    id: 1,
                    name: "0.1 BNB",
                    value: Object(Me.parseUnits)("1", 17)
                }, {
                    id: 2,
                    name: "0.5 BNB",
                    value: Object(Me.parseUnits)("5", 17)
                }, {
                    id: 3,
                    name: "1 BNB",
                    value: Object(Me.parseUnits)("1", 18)
                }],
                Le = [{
                    token: R[56].bnb,
                    values: Ge
                }, {
                    token: R[97].safemoon2,
                    values: Ge
                }, {
                    token: R[97].bscF,
                    values: Pe
                }, {
                    token: R[97].bnb,
                    values: Ge
                }, {
                    token: R[56].bscF,
                    values: Pe
                }, {
                    token: R[56].safemoon2,
                    values: Ge
                }, {
                    token: R[97].muuinu,
                    values: Ge
                }, {
                    token: R[56].muuinu,
                    values: Ge
                }],
                Ve = [{
                    id: 0,
                    name: "HEADS",
                    value: 0
                }, {
                    id: 1,
                    name: "TAILS",
                    value: 1
                }],
                De = Object(V.a)("div")(we || (we = Object(L.a)(["\n  position:relative;\n"]))),
                Ze = Object(V.a)("ul")(Ce || (Ce = Object(L.a)(["\n  min-width: 150px;\n  margin-top: 10px;\n  padding: 2px;\n  background: #1a1b1f;\n  border: 1px solid #545659;\n  border-radius: 5px;\n  box-sizing: border-box;\n  color: white;\n  font-size: 15px;\n  &:first-child {\n    padding-top: 0.8em;\n  }\n"]))),
                Ue = Object(V.a)("li")(Te || (Te = Object(L.a)(["\n  list-style: none;\n  padding: 10px 10px;\n  // border-radius: 30px;\n  cursor: pointer;\n  &:hover {\n    background: #2F3236;\n    // box-shadow: 0px 0px 5px 1px rgba(240, 185, 18, .5);\n  }\n"]))),
                ze = (V.a.p(ke || (ke = Object(L.a)(["\n  text-align: center;\n  font-size: 8px;\n  margin: 0;\n"]))), V.a.p(Ne || (Ne = Object(L.a)(["\n  text-align: center;\n  font-size: 12px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n"])))),
                We = function(e) {
                    e.selectedDecimals;
                    var t = e.game,
                        n = e.bscF,
                        a = e.chainId,
                        i = Object(M.b)({
                            fetchEns: !1
                        }),
                        s = Object(E.a)(i, 2),
                        c = s[0].data,
                        r = (s[1], Object(C.useState)(0)),
                        o = Object(E.a)(r, 2),
                        l = (o[0], o[1]),
                        u = Object(C.useState)(0),
                        d = Object(E.a)(u, 2),
                        p = d[0],
                        b = d[1],
                        m = Object(C.useState)(0),
                        j = Object(E.a)(m, 2),
                        x = (j[0], j[1], Object(C.useState)(0)),
                        y = Object(E.a)(x, 2),
                        f = (y[0], y[1], Object(C.useState)(0)),
                        O = Object(E.a)(f, 2),
                        h = (O[0], O[1]),
                        v = Object(C.useCallback)((function(e, t, n, a, i) {
                            c.address === e && (T(), w())
                        }), [t, c, a]),
                        g = Object(C.useCallback)((function(e, t, n) {
                            c.address === e && (T(), w())
                        }), [t, c, a]);
                    Object(C.useEffect)((function() {
                        w()
                    }), [t, c, a]);
                    var w = function() {
                        var e = Object(H.a)(Object(I.a)().mark((function e() {
                            var t;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(n && c && n.signer)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, n.balanceOf(c.address);
                                    case 4:
                                        t = e.sent, h(Object(Me.formatUnits)(t.toString())), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), console.log(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    Object(C.useEffect)((function() {
                        return t && t.signer && (t.on("GameFinished", v), t.on("PayoutComplete", g)),
                            function() {
                                t.off("GameFinished", v), t.off("PayoutComplete", g)
                            }
                    }), [v, g]), Object(C.useEffect)((function() {
                        w()
                    }), [n, c]);
                    var T = function() {
                        var e = Object(H.a)(Object(I.a)().mark((function e() {
                            var n, i;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.signer || !c) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, t._winnings(c.address, R[a].bscF);
                                    case 4:
                                        return n = e.sent, e.next = 7, t._winnings(c.address, R[a].bnb);
                                    case 7:
                                        i = e.sent, l(Object(Me.formatUnits)(n.toString())), b(Object(Me.formatUnits)(i.toString())), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(1), console.log(e.t0);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 12]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();

                    function k(e) {
                        return N.apply(this, arguments)
                    }

                    function N() {
                        return (N = Object(H.a)(Object(I.a)().mark((function e(n) {
                            var a;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.estimateGas.claimWinnings(n);
                                    case 2:
                                        return a = e.sent, e.abrupt("return", a.mul(13).div(10));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    Object(C.useEffect)((function() {
                        T()
                    }), [t, c, a]), Object(C.useEffect)((function() {
                        return t && t.signer && (t.on("GameFinished", v), t.on("PayoutComplete", g)),
                            function() {
                                t.off("GameFinished", v), t.off("PayoutComplete", g)
                            }
                    }), [v, g]);
                    var F = function() {
                        var e = Object(H.a)(Object(I.a)().mark((function e(n) {
                            var a;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, k(n);
                                    case 3:
                                        return e.t0 = e.sent, a = {
                                            gasLimit: e.t0
                                        }, e.next = 7, t.claimWinnings(n, a);
                                    case 7:
                                        T(), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t1 = e.catch(0), console.log(e.t1);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    return Object(oe.jsxs)(De, {
                        children: [Object(oe.jsx)(J, {
                            children: "WINNINGS"
                        }), Object(oe.jsx)(ze, {
                            children: "CLICK TO CLAIM"
                        }), Object(oe.jsx)(Ze, {
                            children: Object(oe.jsxs)(Ue, {
                                onClick: function() {
                                    return F(R[a].bnb)
                                },
                                children: ["BNB: ", parseFloat(p).toFixed(2)]
                            })
                        })]
                    })
                },
                Ye = n.p + "static/media/512tail-single.3be735b9.gif",
                Ke = n.p + "static/media/512head-single.d88a72e9.gif";
            n(655);

            function Je(e) {
                var t = e.selectedDecimals,
                    n = e.betLimits,
                    a = e.selectedToken,
                    i = e.activeBetAmount,
                    s = e.setActiveBetAmount,
                    c = e.openBetModal,
                    r = n[a][0],
                    o = 0 === n[a][1] ? 1 * Math.pow(10, t) : n[a][1],
                    l = 118 - (i - r < 0 ? 0 : i - r) / (o - r) * 94;
                return Object(oe.jsxs)("div", {
                    className: "SelectBetModal",
                    children: [Object(oe.jsx)($.b, {
                        onClick: function() {
                            return c(!1)
                        },
                        className: "absolute cursor-pointer top-5 right-5 text-white",
                        "aria-hidden": "true"
                    }), Object(oe.jsx)("h1", {
                        children: "SELECT BET AMOUNT"
                    }), Object(oe.jsxs)("p", {
                        children: ["SLIDER (", parseFloat(r / Math.pow(10, t)).toFixed(2), " -", " ", parseFloat(o / Math.pow(10, t)).toFixed(2), " ", a, ")"]
                    }), Object(oe.jsxs)("div", {
                        className: "sliderContainer",
                        children: [Object(oe.jsx)("div", {
                            className: "activeSliderContainer",
                            children: Object(oe.jsxs)("div", {
                                className: "sliderDiv",
                                style: {
                                    right: "".concat(l, "%")
                                },
                                children: [Object(oe.jsx)("div", {
                                    className: "yellowSlide"
                                }), Object(oe.jsx)("img", {
                                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEdmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIzLTAxLTE0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmRmMTY0M2RiLTFmMWUtNGRhNS1hZWFmLWZlM2YyZTQxYjRmNzwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5EZXNpZ24gc2VtIG5vbWUgLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkdhYnJpZWwgUmliZWlybzwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PuVfQF4AAApOSURBVFiF1ZhLjBzHecd/VdXd09OzM7PvJbl8SuSKJmVRtiw/JMVKCDiwotgBYiQwAsHOIYgBw7IOutiIgSCwAR9ySZAEMBQgMAz7EAQBhCRALgRsHxTAgRRZj1ASaEoUtSQl7oM7z57urkcO0z3snZ1ZUk4u+YBC1zzq+371r+r6qgr2Md/3+d1vf48nnv46jaUF7lk7x98894/cc+9H+Oi536gtrhx5sN6YezaK6j8PKuGG8vxECGkBK4QwSqnY94P1oBI+X6nW/nRu+eCJJ//wadWcbQKIxuyy4JMw/4kHCJvN/VCmm5Q+AM45jq09AE/C1/787/nk+d+qrBw6/lAUzfxQKW8LcHdbhJC3PD/4cbOxeBrgY595kqpfFb/z9Nc4cPQYtdrMh4P0fX9Uf+y3f7+oihMnzx6u12f/UnneRgnAAiZ/TioG0PkzBxZbnud/59DxUzNzUQNAfP5LX2JtbY2Zmfrdg/7k+Z/hnOM3z3+hYFRHjp56LIpmflYCLIIXQG6s7iZ8b4Cs+F0p78Ls4spRP6wBSOcczzzzDLXaXcAeO3aSbz77HdZOPziCPHjo+PkwjN7IA5gS4CS4aaX8vxGwlPJivd68TykfQN4m8aZD+r7PysoqyysrfOP7nwMQR47e81gYRhdLKk4F9CROSZwUOCHuCGuBlOFUeKNenz1cqdQIgkDMzzc4c+bYLjYxDjs7W2dhcY2f/POLfOUPzh27dv3KP/S67fO5CjJv44RAOAdnT0Q8/mCDy9uL7MQV0mSAlIrVhZRBP+Y/X11np2vGw7hS/AzwhZD//sAD57/4+OMP6x/96Afs7NxicXGRzc3NyfrWG6ucOfNpvvx7Z+vt9ubX+73O+dzxCBIQRaiZqiLwJIt1TTX0EQgCXxJVFNFilfUbITvdHkKAc6MwhR+XM2jn7BOvvfbTb7zyyoW/AuTS0rKN43jUYDQnGo0Gs3MHOXpA8K//8nfSmPTj3V77KTf07nZBliRZmfepzlSwfhM/WsSPVrD+EpuDQ2zEixw5GBH4sgw5Ppqi4HDOfqtWqx+p15u22+2KbrezF7TdbhOGvojNIidPnat3Ojt/nCaDQwznUgG5J0q9Kjm44OMpgUDjdJ+a32MuvMVSvcsTj83x/adPIPdMsl3KyqGqbiWOe3/S6bSI475oNBp7QauRQsiARx7/MtoMVuJB79EpvaesqDGQGfjcx9qcW3mPR+/b5CMHbvKpU22WZloYmrTigNXlYCJpyV2uqvtqszm3ND+/bLPMjOKporKydILr1y9z+Y2XQm2yL3Q77T9yzqmSs4maHF1ReK5Pknm8+rrC4Xh9XSKM4dI1iPsaqgc4PNdGCLixmU1Stfyc1dr8NE0HvzJGS6Wss7akqBEW5xzRXDNKkuRRa03AcNj3tU4vQ1fP0M3qrB4yuNRyfNmw3bbce8ij042ZD/sszM3wxKcjzt5Tnd7r4cqCMfpTWmcYowUsAiVQnQ4EgILI6OzklF7v+cI6hwhXsE7RrBtaPUez6sicRz1yLM4rkjRFNs5yddPji5+dYaHp4fa6G8UQQpx96qnvSsBWKno3qDVGCCGwxtacM0t3UlLkbjPjIftvkrav4qRgJvSIAsX8rE+vZwjCkDh1qEoTwsNILMcOBrt85DZaUYQQBy5ceK4OYG0mdoGmaSIAYZ0JHKJyJ1DrIPQFWeYzsDUqviDwILUOoy3VwOIQWO1obW/w369fRHoh1Yq4vQhPF6Ghta4yTLFAacE31gpAWoSc0n7cGZ4nCQONN7iKCC2bLU0USQaZoyIHpMayXNPMBYqXXnib5QUf28i4+M5gKOFu3tHwO4fMjFZD4dgNaq3J/+gcOL0foHPw0H1LPHL/AW5u36TTixHCI6gITh6GrZYh8KBRkWx3LOubGcZabt3SXLpiSdKJrotMBZA6Yy0gjc7sGKgFUEYbK5DJVClzV+s3u9RCxeHlZW5sXWOrpVk9IOgPHJ2+IzUOhKU/sGzeynjoeA0pfCqnm7x8aYsXXr0xNQSwAyIFlDFmuOG5DeAAhNZZqjz1PnB2DG9X6ox8wVvvbnP/ySUWGktstW5w5YOYKx8ImpGHTg1pYlAIhJZ0+oLeYMDgepdr7/eHowPjs3WYr51bN8brATIXsPTWW+sAMej3B77nvyyGr+TUZakaBsT9hBubPZozNRr1FeZrIXNS0ECytWkYJD7dWDDILK12n6pIWG1qrN13NwXwy17v/QyQzhk3BmoAZK/XGoB80fP81hjoaHcC8NZ6GxBcv9nG4lhqNgjULH0dcHXbYoDBYIC0Mcu1lMUZixAOTZVDC81ddCVTwMD3/ReBSn5QBEpz1DmHlAprjdHWvh0E4cUsSz9DadjLqmpjeXcjZu1glVd+tYWnBEm/D1YTKsN8xSEEGAuJliBDhOfzxo2YK+93yu4K/wZQQsj/UEq9Dfjg4qI/5f2os24oa7ezs91ozD4vY/UJa41fcuYAUShx6XqH04fryKSFlJa5AJSERDsSI0EEKD8kSRyXr/VZ39imE+/K9a70HC7sUv04jvu9XLyRouObDimE8Jw1MgjCjpTq/ixLDzPM+eX1VQzVciAkpw5EZGlMahVWBAhVAxXRigWvvNPipUvbbLRiUm3L2ag8L3M1xc+V9P7aWmOBhOHRx42DFo0U4CdJrKNaY9sa/Yi1pjYJFqDdS7l3dY6wUkH6NTLn884HMb94a5M332vR6qVDufamy8KHBRRC9JTyntU6fTcHT7h9xJ4IKkEoQBqtd2ozDbI0eTjf8u2BNdax0U6Q0ufVKzv84q1NbmwP1Rv1ZreNQwpAKM/7M2fMBTf8HDM8S42Wh3FQGJ2NhLLWCCm89yphGGVZcv+48yJob6DFexs92v3h/BMT6CZAmjy+UMp7Tgh+OExGxLmaGaVt5iTQAkICSusk8/3gclCJlNbZaeecx4SVRYhh7+4AV5gtYnue/7dCiB9orXUOWai5K41PAi2cFqdOlWVJhpQXq1HtXWfdmrWmye7EMg44IemMcrkEpJDyuu8FfwH8k9aZBvpMUXMaaDnASF2jM51l6dVarf6ylJ5vrVl1zlXYPQ0mFUqdliASpbx/8/3ge2k2+K/8DS8gB4zNzTLIJBMM19gACIEIqOV1Pwxrdc9X92ltPmt09rDW+qhz1p/iCxBGKXVFCPGCEOKCc+5NrbM0V62Xg/aZouZ+oIUKZdhqXkLAB7xKpRoo5c0aa1edtWcd9ijQwCHBZc65lnNclVK+ppS8bozezrIszeOmJSXLQ75HzTuBwnBqqBy2DFzJPxeZTUjpqSDwPSGVJ4ZJxRpjsyxLsjzDFFMkzcugVPaFvBtQyN9+hioWgMWzgPUo3XjkVk6PNgfJcsgkLwV0cYU51fa52xvZ+H2nzgP6peLlnSleGkptimvKol1agtbcviHc1+5G0bIVMIXCqgQ5DbToXAFbrhci3NE+LGjRptgTyBJ4aQkaBZ92XV6UDxX0f2PlxFAuhU27if61Av1f2ri/Xwvq/7X9D2PL5qtbHZRlAAAAAElFTkSuQmCC"
                                }), Object(oe.jsx)("div", {
                                    className: "noSlide"
                                })]
                            })
                        }), Object(oe.jsx)("input", {
                            onChange: function(e) {
                                s(e.target.value)
                            },
                            type: "range",
                            min: r,
                            max: 1 * o,
                            id: "betSizeSlider"
                        })]
                    }), Object(oe.jsxs)("div", {
                        className: "centerDiv",
                        children: [Object(oe.jsxs)("div", {
                            className: "percentButtons",
                            children: [Object(oe.jsx)("button", {
                                onClick: function() {
                                    s(.1 * o)
                                },
                                children: "10%"
                            }), Object(oe.jsx)("button", {
                                onClick: function() {
                                    s(.25 * o)
                                },
                                children: "25%"
                            }), Object(oe.jsx)("button", {
                                onClick: function() {
                                    s(.5 * o)
                                },
                                children: "50%"
                            }), Object(oe.jsx)("button", {
                                onClick: function() {
                                    s(.75 * o)
                                },
                                children: "75%"
                            }), Object(oe.jsx)("button", {
                                onClick: function() {
                                    s(o)
                                },
                                children: "MAX"
                            })]
                        }), Object(oe.jsx)("input", {
                            onChange: function(e) {
                                e.target.value * Math.pow(10, t) > o ? s(o) : s(e.target.value * Math.pow(10, t))
                            },
                            placeholder: "Type your bet amount...",
                            type: "number"
                        }), Object(oe.jsxs)("p", {
                            children: ["Current Bet:", " ", i ? parseFloat(i / Math.pow(10, t)).toFixed(3) : 0, " ", a]
                        }), Object(oe.jsx)("button", {
                            id: "confirmBetButton",
                            onClick: function() {
                                c(!1)
                            },
                            children: "CONFIRM"
                        })]
                    })]
                })
            }
            n(656), n(657);
            var Xe, Qe, _e, qe, $e, et, tt, nt = Object(V.a)("div")(Xe || (Xe = Object(L.a)(["\n  width: 150px;\n  margin: 0;\n  position: relative;\n  font-size: 14px;\n  z-index:10;\n"]))),
                at = Object(V.a)("div")(Qe || (Qe = Object(L.a)(["\n  position: relative;\n  margin-top: 5px;\n  z-index:10;\n  height: auto;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 15px;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);\n  border-radius: 0.375rem;\n  font-size: 14px;\n  color: white;\n  background: black;\n  cursor: pointer;\n  border: 1px solid #3A3A3A;\n  &:hover {\n    background: #2F3236;\n  }\n"]))),
                it = Object(V.a)("div")(_e || (_e = Object(L.a)(["\n  position: relative;\n  top: -14.5px;\n  z-index: 0;\n  width: 100%;\n"]))),
                st = Object(V.a)("ul")(qe || (qe = Object(L.a)(["\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  margin-top: 1px;\n  padding: 0;\n  background: black;\n  border: 1px solid #3A3A3A;\n  border-radius: 0 0 10px 10px;\n  box-sizing: border-box;\n  color: white;\n  overflow: hidden;\n  &:first-child {\n    padding-top: 0.8em;\n  }\n"]))),
                ct = Object(V.a)("li")($e || ($e = Object(L.a)(["\n  list-style: none;\n  cursor: pointer;\n  padding: 10px 10px;\n  display: flex;\n  justify-items: center;\n  &:hover {\n    background: #2F3236;\n  }\n"]))),
                rt = V.a.div(et || (et = Object(L.a)(["\n  position: absolute;\n  transform: ", ";\n  top: 45%;\n  right: 10%;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid white;\n"])), (function(e) {
                    return e.isOpen ? "rotate(180deg)" : "rotate(0deg)"
                })),
                ot = V.a.div(tt || (tt = Object(L.a)(["\n  transform: ", ";\n  width: 0;\n  height: 0;\n  border-left: 2px solid transparent;\n  border-right: 2px solid transparent;\n  position: relative;\n  top: -10px;\n  left: -5px;\n"])), (function(e) {
                    return e.isOpen ? "rotate(180deg)" : "rotate(0deg)"
                })),
                lt = n.p + "static/media/bnblogo.1b5f418c.png",
                ut = n.p + "static/media/flipCoin.31e39e3c.png",
                dt = function(e) {
                    var t = e.options,
                        n = e.onOptionClicked,
                        a = e.selectedOption,
                        i = e.isOpen,
                        s = e.toggling,
                        c = Object(C.useState)(Z),
                        r = Object(E.a)(c, 2),
                        o = (r[0], r[1]);
                    return Object(C.useEffect)((function() {
                        "BSCF" === a && o(Z), "BNB" === a && o(lt), o(ut)
                    }), [a]), Object(oe.jsxs)(nt, {
                        children: [Object(oe.jsxs)(at, {
                            onClick: s,
                            children: [a, Object(oe.jsx)(rt, {
                                isOpen: i,
                                children: Object(oe.jsx)(ot, {
                                    isOpen: i
                                })
                            })]
                        }), i && Object(oe.jsx)(it, {
                            children: Object(oe.jsx)(st, {
                                children: t.map((function(e) {
                                    return Object(oe.jsx)(ct, {
                                        onClick: n(e),
                                        children: e
                                    }, e)
                                }))
                            })
                        })]
                    })
                },
                pt = function(e) {
                    var t, n = e.selectedDecimals,
                        a = e.muuinu,
                        i = e.safemoon2,
                        s = e.selectedToken,
                        c = e.flipCoinGif,
                        r = e.betModal,
                        o = e.openBetModal,
                        l = e.setGameStarted,
                        u = e.gameStarted,
                        d = e.gameToken,
                        p = e.bscF,
                        b = e.game,
                        m = e.chainId,
                        j = "0x0000000000000000000000000000000000000000",
                        x = Object(Me.parseUnits)("5", 23),
                        y = Object(M.b)({
                            fetchEns: !1
                        }),
                        f = Object(E.a)(y, 1)[0].data,
                        O = Object(C.useState)(-1),
                        h = Object(E.a)(O, 2),
                        v = (h[0], h[1]),
                        g = Object(C.useState)(-1),
                        w = Object(E.a)(g, 2),
                        k = w[0],
                        N = w[1],
                        F = Object(C.useState)(!1),
                        A = Object(E.a)(F, 2),
                        S = A[0],
                        B = A[1],
                        P = Object(C.useState)(null),
                        L = Object(E.a)(P, 2),
                        V = L[0],
                        D = L[1],
                        Z = Object(C.useState)(!1),
                        U = Object(E.a)(Z, 2),
                        z = U[0],
                        W = U[1],
                        Y = Object(C.useState)(null),
                        X = Object(E.a)(Y, 2),
                        Q = X[0],
                        _ = X[1],
                        q = Object(C.useState)(!1),
                        $ = Object(E.a)(q, 2),
                        ee = $[0],
                        te = $[1],
                        ne = Object(C.useState)(!1),
                        ae = Object(E.a)(ne, 2),
                        ie = ae[0],
                        se = ae[1],
                        ce = Object(C.useState)(-1),
                        re = Object(E.a)(ce, 2),
                        le = re[0],
                        ue = re[1],
                        de = Object(C.useState)(0),
                        pe = Object(E.a)(de, 2),
                        be = pe[0],
                        me = pe[1],
                        je = Object(C.useState)(0),
                        xe = Object(E.a)(je, 2),
                        ye = xe[0],
                        fe = xe[1],
                        Oe = Object(C.useState)(!1),
                        he = Object(E.a)(Oe, 2),
                        ve = he[0],
                        ge = he[1],
                        we = Object(C.useState)(!1),
                        Ce = Object(E.a)(we, 2),
                        Te = Ce[0],
                        ke = Ce[1],
                        Ne = Object(C.useState)(!1),
                        Fe = Object(E.a)(Ne, 2),
                        He = Fe[0],
                        Pe = Fe[1],
                        Ge = Object(C.useState)({
                            BNB: [.05, 1],
                            BSCF: [0, 1]
                        }),
                        De = Object(E.a)(Ge, 2),
                        Ze = De[0],
                        Ue = De[1],
                        ze = Object(C.useState)(0),
                        Xe = Object(E.a)(ze, 2),
                        Qe = Xe[0],
                        _e = Xe[1],
                        qe = function(e) {
                            var t = e.id,
                                n = void 0 === t ? "" : t,
                                a = e.name,
                                i = void 0 === a ? "" : a,
                                s = e.isActive,
                                c = void 0 !== s && s,
                                r = e.onClick;
                            return Object(oe.jsx)("button", {
                                value: n,
                                name: i,
                                onClick: function() {
                                    return r(n)
                                },
                                className: "pushable mt-6 tracking-[2px]",
                                children: Object(oe.jsx)("span", {
                                    className: "front".concat(c ? " active" : ""),
                                    children: i
                                })
                            })
                        };
                    Object(C.useEffect)((function() {
                        _e(0)
                    }), [s]);
                    var $e = function(e) {
                        N(Number(e))
                    };
                    Object(C.useEffect)((function() {
                        if (!1 !== Te)
                            if (0 === Te) Pe(!0);
                            else {
                                var e = Te;
                                setTimeout((function() {
                                    ke(e - 1)
                                }), 1e3)
                            }
                    }), [Te]), Object(C.useEffect)((function() {
                        He && setTimeout((function() {
                            ge(!0)
                        }), 1e4)
                    }), [He]), T.a.useEffect((function() {
                        if (ve) {
                            var e = new G.a({
                                target: "canvas",
                                colors: [
                                    [241, 186, 19],
                                    [232, 183, 32],
                                    [194, 149, 12]
                                ]
                            });
                            return ie && e.render(), setTimeout((function() {
                                    e.clear()
                                }), 5e3),
                                function() {
                                    return e.clear()
                                }
                        }
                    }), [ve]), Object(C.useEffect)((function() {
                        var e = function() {
                            var e = Object(H.a)(Object(I.a)().mark((function e() {
                                var t;
                                return Object(I.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(b && p && f && p.signer)) {
                                                e.next = 15;
                                                break
                                            }
                                            if (e.prev = 1, d !== R[m].bscF) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 5, p.allowance(f.address, b.address);
                                        case 5:
                                            t = e.sent, B(parseInt(t._hex, 16) > parseInt(x._hex, 16)), e.next = 10;
                                            break;
                                        case 9:
                                            B(!0);
                                        case 10:
                                            e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(1), console.log(e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 12]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [f, b, p]), Object(C.useEffect)((function() {
                        et()
                    }), []);
                    var et = function() {
                            var e = Object(H.a)(Object(I.a)().mark((function e() {
                                var t, n, a, i;
                                return Object(I.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b._minBetForToken(j);
                                        case 2:
                                            return t = e.sent, e.next = 5, b._minBetForToken(p.address);
                                        case 5:
                                            return n = e.sent, t = parseInt(t._hex), n = parseInt(n._hex), e.next = 10, b._maxBetForToken(j);
                                        case 10:
                                            return a = e.sent, e.next = 13, b._maxBetForToken(p.address);
                                        case 13:
                                            i = e.sent, a = parseInt(a._hex), i = parseInt(i._hex), Ue({
                                                BNB: [t, a],
                                                BSCF: [n, i]
                                            });
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        tt = function() {
                            var e = Object(H.a)(Object(I.a)().mark((function e(t, n, a) {
                                var i;
                                return Object(I.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, t !== p.signer) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, p.allowance(f.address, b.address);
                                        case 4:
                                            i = e.sent, B(i._hex > x._hex);
                                        case 6:
                                            e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function(t, n, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        nt = function(e) {
                            t = setInterval(Object(H.a)(Object(I.a)().mark((function n() {
                                var a;
                                return Object(I.a)().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!b.signer) {
                                                n.next = 11;
                                                break
                                            }
                                            return n.prev = 1, n.next = 4, b._games(e);
                                        case 4:
                                            (a = n.sent).finished && (se(a.winner), te(!0), fe(parseInt(a.wager._hex)), a.winner ? me(a.predictedOutcome) : me((a.predictedOutcome + 1) % 2), clearInterval(t), ke(3)), n.next = 11;
                                            break;
                                        case 8:
                                            n.prev = 8, n.t0 = n.catch(1), console.log(n.t0);
                                        case 11:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [1, 8]
                                ])
                            }))), 3e3)
                        };

                    function at(e, t, n, a, i) {
                        return it.apply(this, arguments)
                    }

                    function it() {
                        return (it = Object(H.a)(Object(I.a)().mark((function e(t, n, a, i, s) {
                            var c, r;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = {
                                            value: s
                                        }, e.next = 3, b.estimateGas.enterGame(t, n, a, i, c);
                                    case 3:
                                        return r = e.sent, e.abrupt("return", r.mul(13).div(10));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    Object(C.useEffect)((function() {
                        return p && p.signer && p.on("Approval", tt),
                            function() {
                                p && p.signer && p.off("Approval", tt)
                            }
                    }), [p]), Object(C.useEffect)((function() {
                        var e = Le.find((function(e) {
                            return e.token === d
                        }));
                        D(e.values)
                    }), [d]), Object(C.useEffect)((function() {
                        W(!!(Qe && k >= 0))
                    }), [Qe, k]);
                    var st = function() {
                            var e = Object(H.a)(Object(I.a)().mark((function e() {
                                var t, a, i, s, c, r, o, u, p, m, x;
                                return Object(I.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return l(!0), e.prev = 1, a = new Proxy(new URLSearchParams(window.location.search), {
                                                get: function(e, t) {
                                                    return e.get(t)
                                                }
                                            }), i = null !== (t = a.ref) && void 0 !== t ? t : "0x0000000000000000000000000000000000000000", console.log("Referrer: ", i), s = 18 === n ? Object(Me.parseUnits)("".concat((Qe - Qe % 1e7) / 1e7), 7) : Object(Me.parseUnits)("".concat(Qe), 0), c = Ve[k].value, console.log("Flip Bet:"), console.log(s), r = d === j ? s : 0, e.next = 12, at(s, c, d, i, r);
                                        case 12:
                                            return e.t0 = e.sent, e.t1 = r, o = {
                                                gasLimit: e.t0,
                                                value: e.t1
                                            }, e.next = 17, b.enterGame(s, c, d, i, o);
                                        case 17:
                                            return u = e.sent, e.next = 20, u.wait();
                                        case 20:
                                            p = e.sent, m = null === p || void 0 === p ? void 0 : p.events.find((function(e) {
                                                return "GameStarted" === e.event
                                            })), x = m.args[4], nt(x), ue(x), te(!1), e.next = 32;
                                            break;
                                        case 28:
                                            e.prev = 28, e.t2 = e.catch(1), _(e.t2), console.log(e.t2);
                                        case 32:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 28]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ct = function() {
                            ue(-1), te(!1), se(!1), _(null), v(-1), N(-1), l(!1), ge(!1), ke(!1)
                        };
                    return Object(oe.jsxs)("div", {
                        className: "mainDivContainer",
                        children: [!S && Object(oe.jsx)("div", {
                            className: "approvalButton",
                            children: Object(oe.jsx)(Re, {
                                muuinu: a,
                                selectedTokenAddress: d,
                                safemoon2: i,
                                bscF: p,
                                game: b
                            })
                        }), S && f && !u && V && Object(oe.jsxs)("div", {
                            style: {
                                width: "100%"
                            },
                            children: [Object(oe.jsx)(Ae, {
                                style: {
                                    marginBottom: 0
                                },
                                children: !r && Object(oe.jsxs)("div", {
                                    className: "mainBetDiv",
                                    children: [Object(oe.jsx)("div", {
                                        className: "winningsDiv",
                                        children: Object(oe.jsx)(We, {
                                            selectedDecimals: n,
                                            game: b,
                                            bscF: p,
                                            chainId: m
                                        })
                                    }), Object(oe.jsxs)("div", {
                                        className: "betInputDiv",
                                        children: [Object(oe.jsx)(qe, {
                                            id: Ve[0].id,
                                            isActive: Ve[0].id === k,
                                            name: Ve[0].name,
                                            onClick: $e
                                        }), Object(oe.jsx)(K, {
                                            src: c,
                                            alt: "bscflip-logo"
                                        }), Object(oe.jsx)(qe, {
                                            id: Ve[1].id,
                                            isActive: Ve[1].id === k,
                                            name: Ve[1].name,
                                            onClick: $e
                                        })]
                                    }), Object(oe.jsx)("div", {})]
                                })
                            }), Object(oe.jsxs)(Ae, {
                                children: [r && Object(oe.jsx)(Je, {
                                    selectedDecimals: n,
                                    betLimits: Ze,
                                    selectedToken: s,
                                    activeBetAmount: Qe,
                                    setActiveBetAmount: _e,
                                    openBetModal: o
                                }), !r && Object(oe.jsx)(Se, {
                                    className: "pushable",
                                    onClick: function() {
                                        o(!0)
                                    },
                                    children: Qe ? Object(oe.jsx)(oe.Fragment, {
                                        children: Object(oe.jsxs)("span", {
                                            className: "front",
                                            children: [parseFloat(Qe / Math.pow(10, n)).toFixed(2), " ", s]
                                        })
                                    }) : Object(oe.jsx)("span", {
                                        className: "front",
                                        children: "SELECT A BET SIZE"
                                    })
                                })]
                            }), !r && Object(oe.jsx)(Ae, {
                                children: Object(oe.jsxs)(Ee, {
                                    isDisabled: !z,
                                    onClick: z ? st : null,
                                    children: [!z && Object(oe.jsx)("span", {
                                        children: "CHOOSE YOUR OPTIONS"
                                    }), z && Object(oe.jsx)("span", {
                                        children: "FLIP"
                                    })]
                                })
                            })]
                        }), u && Object(oe.jsxs)("div", {
                            children: [!ee && !Q && Object(oe.jsxs)("div", {
                                children: [Object(oe.jsx)(Ie, {
                                    children: Object(oe.jsx)(K, {
                                        src: c
                                    })
                                }), -1 === le && Object(oe.jsx)(J, {
                                    children: "WAITING FOR CONFIRMATION"
                                }), le >= 0 && Object(oe.jsxs)("div", {
                                    children: [Object(oe.jsxs)(J, {
                                        spaced: !0,
                                        children: ["YOU CHOSE: ", Ve[k].name]
                                    }), Object(oe.jsx)(J, {
                                        children: "WAITING FOR YOUR FLIP"
                                    })]
                                })]
                            }), !ee && Q && Object(oe.jsxs)("div", {
                                children: [Object(oe.jsx)(J, {
                                    children: "ERROR WHEN STARTING GAME"
                                }), Object(oe.jsx)(J, {
                                    children: Q.message.substring(0, 40) + "..."
                                }), Object(oe.jsx)(Ae, {
                                    children: Object(oe.jsx)(qe, {
                                        name: "TRY AGAIN",
                                        onClick: ct
                                    })
                                })]
                            }), ee && Object(oe.jsxs)("div", {
                                children: [!He && Object(oe.jsxs)(J, {
                                    spaced: !0,
                                    children: ["Spinning in: ", Te]
                                }), ve && ie && Object(oe.jsxs)(J, {
                                    spaced: !0,
                                    children: ["YOU WON", " ", Object(oe.jsxs)(Be, {
                                        children: ["+", parseFloat(ye / Math.pow(10, n)).toFixed(2), " ", s]
                                    })]
                                }), He && Object(oe.jsx)(Ie, {
                                    children: Object(oe.jsx)(K, {
                                        src: 0 === be ? Ke : Ye
                                    })
                                }), Object(oe.jsxs)(J, {
                                    spaced: !0,
                                    children: ["YOU CHOSE: ", Ve[k].name]
                                }), ve && Object(oe.jsxs)(oe.Fragment, {
                                    children: [Object(oe.jsxs)(J, {
                                        spaced: !0,
                                        children: ["YOUR FLIP: ", Ve[be].name]
                                    }), ie ? Object(oe.jsx)(J, {
                                        spaced: !0,
                                        children: "WINNER"
                                    }) : Object(oe.jsx)(J, {
                                        spaced: !0,
                                        children: "RUGGED"
                                    }), Object(oe.jsx)(Ae, {
                                        children: Object(oe.jsx)(qe, {
                                            name: "FLIP AGAIN",
                                            onClick: function() {
                                                Pe(!1), ct()
                                            }
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                bt = function(e) {
                    var t = e.muuinu,
                        n = e.safemoon2,
                        a = e.flipCoinGif,
                        i = e.chainId,
                        s = e.wrongChain,
                        c = e.bscF,
                        r = e.game,
                        o = ["BNB"],
                        l = Object(M.b)({
                            fetchEns: !1
                        }),
                        u = Object(E.a)(l, 1)[0].data,
                        d = Object(C.useState)(!1),
                        p = Object(E.a)(d, 2),
                        b = p[0],
                        m = p[1],
                        j = Object(C.useState)(o[0]),
                        x = Object(E.a)(j, 2),
                        y = x[0],
                        f = x[1],
                        O = Object(C.useState)(18),
                        h = Object(E.a)(O, 2),
                        v = h[0],
                        g = h[1],
                        w = Object(C.useState)(R[i].bscF),
                        T = Object(E.a)(w, 2),
                        k = T[0],
                        N = T[1],
                        F = Object(C.useState)(!1),
                        A = Object(E.a)(F, 2),
                        S = A[0],
                        B = A[1],
                        P = Object(C.useState)(!1),
                        G = Object(E.a)(P, 2),
                        L = G[0],
                        V = G[1],
                        D = Object(C.useState)(!1),
                        Z = Object(E.a)(D, 2),
                        U = Z[0],
                        z = Z[1];
                    return Object(C.useEffect)((function() {
                        var e = function() {
                            var e = Object(H.a)(Object(I.a)().mark((function e() {
                                return Object(I.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            r && c && u && c.signer ? m(!0) : m(!1);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [u, r, c]), Object(C.useEffect)((function() {
                        "BNB" === y && (N(R[i].bnb), g(18))
                    }), [y, i]), Object(oe.jsxs)(X, {
                        children: [Object(oe.jsx)("div", {
                            className: "pancakeSwapDiv absolute top-0"
                        }), Object(oe.jsxs)("div", {
                            style: {
                                width: "95%"
                            },
                            children: [!b && Object(oe.jsx)(J, {
                                children: "CONNECT YOUR ACCOUNT TO START FLIPPING"
                            }), b && !s && Object(oe.jsxs)(_, {
                                children: [!L && !U && Object(oe.jsx)(dt, {
                                    options: o,
                                    onOptionClicked: function(e) {
                                        return function() {
                                            f(e), B(!1)
                                        }
                                    },
                                    selectedOption: y,
                                    isOpen: S,
                                    toggling: function() {
                                        return B(!S)
                                    }
                                }), Object(oe.jsx)(pt, {
                                    selectedDecimals: v,
                                    muuinu: t,
                                    safemoon2: n,
                                    chainId: i,
                                    selectedToken: y,
                                    flipCoinGif: a,
                                    betModal: U,
                                    openBetModal: z,
                                    gameStarted: L,
                                    setGameStarted: V,
                                    gameToken: k,
                                    bscF: c,
                                    game: r
                                })]
                            }), s && b && Object(oe.jsx)(J, {
                                children: "WRONG CHAIN! PLEASE CONNECT TO BSC"
                            })]
                        }), Object(oe.jsx)(q, {})]
                    })
                };

            function mt() {
                return Object(oe.jsx)("div", {
                    children: "Coming Soon"
                })
            }
            n(993);
            var jt = n.p + "static/media/beanflip.488a777a.png";

            function xt(e) {
                e.chainId, e.wrongChain, e.bscF, e.game;
                var t = Object(C.useState)(!1),
                    n = Object(E.a)(t, 2),
                    a = (n[0], n[1], Object(M.b)({
                        fetchEns: !1
                    })),
                    i = Object(E.a)(a, 2);
                i[0].data, i[1];
                return Object(oe.jsxs)("div", {
                    className: "footerDiv",
                    children: [Object(oe.jsx)("div", {
                        className: "footerLogoLeft",
                        children: Object(oe.jsx)("img", {
                            src: jt
                        })
                    }), Object(oe.jsx)("div", {
                        className: "invisible",
                        children: Object(oe.jsx)("img", {
                            src: jt
                        })
                    })]
                })
            }
            n.p;
            var yt = n.p + "static/media/twitter.d3b55239.svg",
                ft = n.p + "static/media/telegram.dba1fec4.svg",
                Ot = n.p + "static/media/1.b89d740d.gif",
                ht = n.p + "static/media/beanlogo.6b6c1f2b.png";
            var vt = function() {
                    var e = Object(M.e)(),
                        t = Object(E.a)(e, 2),
                        n = t[0],
                        a = n.data,
                        i = (n.error, n.loading, t[1], Object(M.f)()),
                        s = Object(E.a)(i, 2),
                        c = s[0],
                        r = c.data,
                        o = (c.error, c.loading, s[1], Object(C.useState)(!1)),
                        l = Object(E.a)(o, 2),
                        u = (l[0], l[1]),
                        d = Object(C.useState)(56),
                        p = Object(E.a)(d, 2),
                        b = p[0],
                        m = p[1],
                        j = Object(C.useState)(!1),
                        x = Object(E.a)(j, 2),
                        y = x[0],
                        f = x[1],
                        O = Object(C.useState)("coinflip"),
                        h = Object(E.a)(O, 2),
                        v = h[0],
                        g = h[1],
                        w = Object(M.d)({
                            addressOrName: R[b].bscF,
                            contractInterface: P.bscF,
                            signerOrProvider: r
                        }),
                        T = Object(M.d)({
                            addressOrName: R[b].safemoon2,
                            contractInterface: P.safemoon2,
                            signerOrProvider: r
                        }),
                        k = Object(M.d)({
                            addressOrName: R[b].bscCoinFlip,
                            contractInterface: P.bscCoinFlip,
                            signerOrProvider: r
                        }),
                        N = Object(M.d)({
                            addressOrName: R[b].muuinu,
                            contractInterface: P.muuinu,
                            signerOrProvider: r
                        });
                    Object(C.useEffect)((function() {
                        var e = localStorage.getItem("appEntered");
                        u(e)
                    }), []);
                    return Object(C.useEffect)((function() {
                        var e = function() {
                            var e = Object(H.a)(Object(I.a)().mark((function e() {
                                var t, n;
                                return Object(I.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            56 === (null === (t = a.chain) || void 0 === t ? void 0 : t.id) ? (m(56), f(!1)) : 97 === (null === (n = a.chain) || void 0 === n ? void 0 : n.id) ? (m(97), f(!1)) : f(!0);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [a]), Object(oe.jsxs)(U, {
                        children: [Object(oe.jsx)(Fe, {
                            gameMode: v,
                            setGameMode: g,
                            game: k,
                            bscF: w,
                            chainId: b,
                            wrongChain: y
                        }), Object(oe.jsxs)(W, {
                            children: [Object(oe.jsxs)(Q, {
                                children: [Object(oe.jsx)("div", {
                                    className: "socialIcon",
                                    children: Object(oe.jsx)("a", {
                                        href: "https://twitter.com/Beanmachine_BSC",
                                        target: "_blank",
                                        children: Object(oe.jsx)("img", {
                                            src: yt
                                        })
                                    })
                                }), Object(oe.jsx)("div", {
                                    className: "socialIcon",
                                    children: Object(oe.jsx)("a", {
                                        href: "https://t.me/BeanMachineMiner",
                                        target: "_blank",
                                        children: Object(oe.jsx)("img", {
                                            src: ft
                                        })
                                    })
                                })]
                            }), Object(oe.jsx)(z, {}), "coinflip" === v ? Object(oe.jsx)(bt, {
                                muuinu: N,
                                safemoon2: T,
                                flipCoinGif: Ot,
                                chainId: b,
                                wrongChain: y,
                                bscF: w,
                                game: k
                            }) : Object(oe.jsx)(oe.Fragment, {}), "kingflip" === v ? Object(oe.jsx)(mt, {}) : Object(oe.jsx)(oe.Fragment, {}), Object(oe.jsx)(xt, {
                                chainId: b,
                                wrongChain: y,
                                bscF: w,
                                game: k
                            })]
                        }), Object(oe.jsx)(Y, {})]
                    })
                },
                gt = n(1003),
                wt = n(505),
                Ct = n(1004),
                Tt = {
                    injected: se,
                    walletConnect: re,
                    walletLink: ce
                };

            function kt(e) {
                var t = e.openModal,
                    n = e.setOpenModal,
                    a = Object(M.c)(),
                    i = Object(E.a)(a, 2),
                    s = i[0],
                    c = s.data,
                    r = (s.error, i[1]),
                    o = Object(C.useState)(c.connectors[0]),
                    l = Object(E.a)(o, 2);
                l[0], l[1];
                return Object(oe.jsx)(ae.a.Root, {
                    show: t,
                    as: C.Fragment,
                    children: Object(oe.jsxs)(Ct.a, {
                        as: "div",
                        className: "relative z-10 w-full",
                        onClose: n,
                        children: [Object(oe.jsx)(ae.a.Child, {
                            as: C.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: Object(oe.jsx)("div", {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }), Object(oe.jsx)("div", {
                            className: "fixed z-10 inset-0 overflow-y-auto",
                            children: Object(oe.jsx)("div", {
                                className: "flex items-center justify-center min-h-full p-4 text-center sm:p-0",
                                children: Object(oe.jsx)(ae.a.Child, {
                                    as: C.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: Object(oe.jsxs)(Ct.a.Panel, {
                                        className: "w-full relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6",
                                        children: [Object(oe.jsx)("div", {
                                            className: "hidden sm:block absolute top-0 right-0 pt-4 pr-4",
                                            children: Object(oe.jsx)("button", {
                                                type: "button",
                                                className: "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                onClick: function() {
                                                    return n(!1)
                                                },
                                                children: Object(oe.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                })
                                            })
                                        }), Object(oe.jsxs)("div", {
                                            className: "sm:flex sm:items-start",
                                            children: [Object(oe.jsx)("div", {
                                                className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10",
                                                children: Object(oe.jsx)($.c, {
                                                    className: "h-6 w-6 text-gray-600",
                                                    "aria-hidden": "true"
                                                })
                                            }), Object(oe.jsx)("div", {
                                                className: "w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                                children: Object(oe.jsx)(Ct.a.Title, {
                                                    as: "h3",
                                                    className: "text-lg leading-6 font-medium text-gray-900",
                                                    children: "Choose your Wallet"
                                                })
                                            })]
                                        }), Object(oe.jsx)("div", {
                                            className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",
                                            children: c.connectors.map((function(e) {
                                                return Object(oe.jsxs)("button", {
                                                    type: "button",
                                                    className: "mt-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",
                                                    onClick: function() {
                                                        return r(e)
                                                    },
                                                    children: [Object(oe.jsx)("img", {
                                                        src: Tt[e.id],
                                                        alt: "metamask_logo",
                                                        className: "mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500",
                                                        "aria-hidden": "true"
                                                    }), e.name, !e.ready && " (unsupported)"]
                                                })
                                            }))
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function Nt() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.filter(Boolean).join(" ")
            }

            function Ft() {
                var e = Object(C.useState)(!1),
                    t = Object(E.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    i = Object(M.b)({
                        fetchEns: !1
                    }),
                    s = Object(E.a)(i, 2),
                    c = s[0].data,
                    r = s[1],
                    o = Object(C.useState)(!1),
                    l = Object(E.a)(o, 2),
                    u = l[0],
                    d = l[1],
                    p = Object(M.e)(),
                    b = Object(E.a)(p, 2),
                    m = b[0],
                    j = m.data,
                    x = (m.error, m.loading, b[1], Object(M.f)()),
                    y = Object(E.a)(x, 2),
                    f = y[0],
                    O = (f.data, f.error, f.loading, y[1], Object(C.useState)(!1)),
                    h = Object(E.a)(O, 2),
                    v = (h[0], h[1]),
                    g = Object(C.useState)(56),
                    w = Object(E.a)(g, 2),
                    T = (w[0], w[1]);
                return Object(C.useEffect)((function() {
                    var e = localStorage.getItem("appEntered");
                    v(e)
                }), []), Object(C.useEffect)((function() {
                    c && d(!1)
                }), [c]), Object(C.useEffect)((function() {
                    var e = function() {
                        var e = Object(H.a)(Object(I.a)().mark((function e() {
                            var t, n;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        56 === (null === (t = j.chain) || void 0 === t ? void 0 : t.id) ? (T(56), a(!1)) : 97 === (null === (n = j.chain) || void 0 === n ? void 0 : n.id) ? (T(97), a(!1)) : a(!0);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [j]), Object(oe.jsx)(gt.a, {
                    as: "nav",
                    className: "bg-black",
                    children: function(e) {
                        var t = e.open;
                        return Object(oe.jsxs)(oe.Fragment, {
                            children: [Object(oe.jsx)(kt, {
                                openModal: u,
                                setOpenModal: d
                            }), Object(oe.jsx)("div", {
                                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                children: Object(oe.jsxs)("div", {
                                    className: "flex items-center justify-between h-16",
                                    children: [Object(oe.jsx)("div", {
                                        className: "flex items-center",
                                        children: Object(oe.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: Object(oe.jsx)("img", {
                                                className: "block lg:hidden h-[2.5rem] w-auto",
                                                src: ht,
                                                alt: "Workflow"
                                            })
                                        })
                                    }), Object(oe.jsx)("div", {
                                        className: "hidden sm:ml-6 sm:block",
                                        children: Object(oe.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [Object(oe.jsxs)("button", {
                                                type: "button",
                                                className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                children: [Object(oe.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "View notifications"
                                                }), Object(oe.jsx)($.a, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })]
                                            }), Object(oe.jsxs)(ne.a, {
                                                as: "div",
                                                className: "ml-3 relative",
                                                children: [Object(oe.jsx)("div", {
                                                    children: Object(oe.jsxs)(ne.a.Button, {
                                                        className: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                        children: [Object(oe.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "Open user menu"
                                                        }), Object(oe.jsx)("img", {
                                                            className: "h-8 w-8 rounded-full",
                                                            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                            alt: ""
                                                        })]
                                                    })
                                                }), Object(oe.jsx)(ae.a, {
                                                    as: C.Fragment,
                                                    enter: "transition ease-out duration-100",
                                                    enterFrom: "transform opacity-0 scale-95",
                                                    enterTo: "transform opacity-100 scale-100",
                                                    leave: "transition ease-in duration-75",
                                                    leaveFrom: "transform opacity-100 scale-100",
                                                    leaveTo: "transform opacity-0 scale-95",
                                                    children: Object(oe.jsxs)(ne.a.Items, {
                                                        className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                        children: [Object(oe.jsx)(ne.a.Item, {
                                                            children: function(e) {
                                                                var t = e.active;
                                                                return Object(oe.jsx)("a", {
                                                                    href: "#",
                                                                    className: Nt(t ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                    children: "Your Profile"
                                                                })
                                                            }
                                                        }), Object(oe.jsx)(ne.a.Item, {
                                                            children: function(e) {
                                                                var t = e.active;
                                                                return Object(oe.jsx)("a", {
                                                                    href: "#",
                                                                    className: Nt(t ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                    children: "Settings"
                                                                })
                                                            }
                                                        }), Object(oe.jsx)(ne.a.Item, {
                                                            children: function(e) {
                                                                var t = e.active;
                                                                return Object(oe.jsx)("a", {
                                                                    href: "#",
                                                                    className: Nt(t ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                    children: "Sign out"
                                                                })
                                                            }
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    }), Object(oe.jsxs)("div", {
                                        className: "-mr-2 flex sm:hidden z-10",
                                        children: [c ? n ? Object(oe.jsx)("button", {
                                            className: "text-white text-sm border-[#3A3A3A] border-[1px] inline-flex items-center px-4 py-2 rounded-md bg-black hover:bg-[#2F3236]",
                                            children: "WRONG CHAIN"
                                        }) : Object(oe.jsxs)("button", {
                                            onClick: r,
                                            className: "text-white text-sm border-[#3A3A3A] border-[1px] inline-flex items-center px-4 py-2 rounded-md bg-black hover:bg-[#2F3236] mr-2",
                                            children: [Object(oe.jsx)("svg", {
                                                className: "-ml-0.5 mr-1.5 h-2 w-2 text-[#24FF00]",
                                                fill: "currentColor",
                                                viewBox: "0 0 8 8",
                                                children: Object(oe.jsx)("circle", {
                                                    cx: 4,
                                                    cy: 4,
                                                    r: 3
                                                })
                                            }), c.address.substring(0, 6), "...", c.address.substring(38)]
                                        }) : Object(oe.jsx)("button", {
                                            onClick: function(e) {
                                                e.stopPropagation(), d(!0)
                                            },
                                            className: "text-white text-sm border-[#3A3A3A] border-[1px] inline-flex items-center px-4 py-2 rounded-md bg-black hover:bg-[#2F3236] mr-2",
                                            children: "Connect Wallet"
                                        }), Object(oe.jsxs)(gt.a.Button, {
                                            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                            children: [Object(oe.jsx)("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }), t ? Object(oe.jsx)($.b, {
                                                className: "block h-6 w-6 text-white",
                                                "aria-hidden": "true"
                                            }) : Object(oe.jsx)(wt.a, {
                                                className: "block h-6 w-6 text-white",
                                                "aria-hidden": "true"
                                            })]
                                        })]
                                    })]
                                })
                            }), Object(oe.jsxs)(gt.a.Panel, {
                                className: "sm:hidden",
                                children: [Object(oe.jsxs)("div", {
                                    className: "px-2 pt-2 pb-3 space-y-1",
                                    children: [Object(oe.jsx)(gt.a.Button, {
                                        as: "a",
                                        href: "https://bean-machine.site/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                                        children: "Project"
                                    }), Object(oe.jsxs)(gt.a.Panel, {
                                        className: "text-left w-full text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                                        children: [Object(oe.jsx)("div", {
                                            children: "Disclaimer"
                                        }), Object(oe.jsxs)("div", {
                                            className: "w-full mt-1",
                                            children: [Object(oe.jsx)("p", {
                                                children: "Online gambling, even bean flip, is illegal in many countries and jurisdictions. It is your responsibility to ensure that online gambling is legal in your jurisdiction."
                                            }), Object(oe.jsx)("p", {
                                                children: "Bean Flip does not accept responsibility for any errors on this website and we do not accept liability for any financial losses incurred as a result of using this website. This is your typical double or nothing coin flip BNB betting dapp you can win double or loss your bet completely 3% taxes goes to feed bean machine."
                                            })]
                                        })]
                                    }), Object(oe.jsxs)(gt.a.Panel, {
                                        className: "text-left w-full text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                                        children: [Object(oe.jsx)("div", {
                                            children: "Affiliate"
                                        }), Object(oe.jsxs)("div", {
                                            className: "w-full flex mt-1",
                                            children: [Object(oe.jsx)("input", {
                                                id: "affiliateLink",
                                                className: "w-full p-2 rounded-xl text-black",
                                                value: "https://beanflip.pro?ref=".concat(void 0 !== c ? c.address : "0x")
                                            }), Object(oe.jsx)("button", {
                                                onClick: function(e) {
                                                    e.stopPropagation();
                                                    var t = document.getElementById("affiliateLink");
                                                    document.queryCommandSupported("copy") && (t.select(), document.execCommand("copy"))
                                                },
                                                id: "copyButton",
                                                children: "COPY"
                                            })]
                                        })]
                                    })]
                                }), Object(oe.jsx)("div", {
                                    className: "pt-4 pb-3 border-t border-gray-700",
                                    children: " "
                                })]
                            })]
                        })
                    }
                })
            }
            n(1008);

            function Mt(e) {
                var t = e.open,
                    n = e.setOpen,
                    a = e.betLimits,
                    i = void 0 === a ? {
                        BNB: [.05, 1],
                        BSCF: [500, 1e5]
                    } : a,
                    s = e.selectedToken,
                    c = e.activeBetAmount,
                    r = e.setActiveBetAmount,
                    o = (e.openBetModal, Number(i[s][0])),
                    l = Number(i[s][1]);
                return console.log(o), console.log(l), Object(oe.jsx)(ae.a.Root, {
                    show: t,
                    as: C.Fragment,
                    children: Object(oe.jsxs)(Ct.a, {
                        as: "div",
                        className: "relative z-10",
                        onClose: n,
                        children: [Object(oe.jsx)(ae.a.Child, {
                            as: C.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: Object(oe.jsx)("div", {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }), Object(oe.jsx)("div", {
                            className: "fixed z-10 inset-0 overflow-y-auto",
                            children: Object(oe.jsx)("div", {
                                className: "flex items-center justify-center min-h-full p-4 text-center sm:p-0",
                                children: Object(oe.jsx)(ae.a.Child, {
                                    as: C.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: Object(oe.jsxs)(Ct.a.Panel, {
                                        className: "relative w-full bg-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6",
                                        children: [Object(oe.jsx)($.b, {
                                            onClick: function() {
                                                return n(!1)
                                            },
                                            className: "absolute cursor-pointer top-5 right-5 text-white",
                                            "aria-hidden": "true"
                                        }), Object(oe.jsx)("div", {
                                            className: "hidden sm:block absolute top-0 right-0 pt-4 pr-4",
                                            children: Object(oe.jsxs)("button", {
                                                type: "button",
                                                className: "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                onClick: function() {
                                                    return n(!1)
                                                },
                                                children: [Object(oe.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                }), Object(oe.jsx)($.b, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })]
                                            })
                                        }), Object(oe.jsx)("div", {
                                            className: "sm:flex sm:items-start",
                                            children: Object(oe.jsx)("div", {
                                                className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                                children: Object(oe.jsx)(Ct.a.Title, {
                                                    as: "h3",
                                                    className: "text-lg leading-6 font-medium text-white mb-4",
                                                    children: "Select bet amount"
                                                })
                                            })
                                        }), Object(oe.jsxs)("div", {
                                            className: "mt-5 justify-center flex flex-col",
                                            children: [Object(oe.jsxs)("ul", {
                                                className: "grid gap-6 grid-cols-2",
                                                children: [Object(oe.jsx)("li", {
                                                    className: "mx-auto",
                                                    children: Object(oe.jsx)("button", {
                                                        onClick: function() {
                                                            return r(o)
                                                        },
                                                        className: "pushable-mobile",
                                                        children: Object(oe.jsx)("span", {
                                                            className: "front-mobile font-bold text-[8px]",
                                                            children: "".concat(o, " ").concat(s)
                                                        })
                                                    })
                                                }), Object(oe.jsx)("li", {
                                                    className: "mx-auto",
                                                    children: Object(oe.jsx)("button", {
                                                        onClick: function() {
                                                            return r(.1 * l)
                                                        },
                                                        className: "pushable-mobile",
                                                        children: Object(oe.jsx)("span", {
                                                            className: "front-mobile font-bold text-[8px]",
                                                            children: "".concat(.1 * l, " ").concat(s)
                                                        })
                                                    })
                                                }), Object(oe.jsx)("li", {
                                                    className: "mx-auto",
                                                    children: Object(oe.jsx)("button", {
                                                        onClick: function() {
                                                            r(.25 * l)
                                                        },
                                                        className: "pushable-mobile",
                                                        children: Object(oe.jsx)("span", {
                                                            className: "front-mobile font-bold text-[8px]",
                                                            children: "".concat(.25 * l, " ").concat(s)
                                                        })
                                                    })
                                                }), Object(oe.jsx)("li", {
                                                    className: "mx-auto",
                                                    children: Object(oe.jsx)("button", {
                                                        onClick: function() {
                                                            r(.5 * l)
                                                        },
                                                        className: "pushable-mobile",
                                                        children: Object(oe.jsx)("span", {
                                                            className: "front-mobile font-bold text-[8px]",
                                                            children: "".concat(.5 * l, " ").concat(s)
                                                        })
                                                    })
                                                }), Object(oe.jsx)("li", {
                                                    className: "mx-auto",
                                                    children: Object(oe.jsx)("button", {
                                                        onClick: function() {
                                                            r(.75 * l)
                                                        },
                                                        className: "pushable-mobile",
                                                        children: Object(oe.jsx)("span", {
                                                            className: "front-mobile font-bold text-[8px]",
                                                            children: "".concat(.75 * l, " ").concat(s)
                                                        })
                                                    })
                                                }), Object(oe.jsx)("li", {
                                                    className: "mx-auto",
                                                    children: Object(oe.jsx)("button", {
                                                        onClick: function() {
                                                            r(l)
                                                        },
                                                        className: "pushable-mobile",
                                                        children: Object(oe.jsx)("span", {
                                                            className: "front-mobile font-bold text-[8px]",
                                                            children: "".concat(l, " ").concat(s)
                                                        })
                                                    })
                                                })]
                                            }), Object(oe.jsx)("input", {
                                                type: "text",
                                                value: c,
                                                placeholder: "Type your bet amount",
                                                onChange: function(e) {
                                                    return r(e.target.value)
                                                },
                                                className: "mx-auto bg-black px-5 text-xs w-[75%] h-10 rounded-xl border-white border-[1px] mt-4 text-white"
                                            }), Object(oe.jsx)("button", {
                                                onClick: function() {
                                                    return n(!1)
                                                },
                                                className: "pushable-mobile pushable-gold mt-10",
                                                children: Object(oe.jsx)("span", {
                                                    className: "front-mobile front-gold font-bold text-[8px]",
                                                    children: "CONFIRM"
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function At(e) {
                var t = e.game,
                    n = e.bscF,
                    a = e.chainId,
                    i = e.selectedToken,
                    s = Object(M.b)({
                        fetchEns: !1
                    }),
                    c = Object(E.a)(s, 2),
                    r = c[0].data,
                    o = (c[1], Object(C.useState)(0)),
                    l = Object(E.a)(o, 2),
                    u = l[0],
                    d = l[1],
                    p = Object(C.useState)(0),
                    b = Object(E.a)(p, 2),
                    m = b[0],
                    j = b[1],
                    x = Object(C.useState)(0),
                    y = Object(E.a)(x, 2),
                    f = (y[0], y[1]),
                    O = Object(C.useCallback)((function(e, t, n, a, i) {
                        r.address === e && (g(), v())
                    }), [t, r, a]),
                    h = Object(C.useCallback)((function(e, t, n) {
                        r.address === e && (g(), v())
                    }), [t, r, a]);
                Object(C.useEffect)((function() {
                    v()
                }), [t, r, a]);
                var v = function() {
                    var e = Object(H.a)(Object(I.a)().mark((function e() {
                        var t;
                        return Object(I.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(n && r && n.signer)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, n.balanceOf(r.address);
                                case 4:
                                    t = e.sent, f(Object(Me.formatUnits)(t.toString())), e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), console.log(e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                Object(C.useEffect)((function() {
                    return t && t.signer && (t.on("GameFinished", O), t.on("PayoutComplete", h)),
                        function() {
                            t.off("GameFinished", O), t.off("PayoutComplete", h)
                        }
                }), [O, h]), Object(C.useEffect)((function() {
                    v()
                }), [n, r]);
                var g = function() {
                    var e = Object(H.a)(Object(I.a)().mark((function e() {
                        var n, i;
                        return Object(I.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t.signer || !r) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, t._winnings(r.address, R[a].bscF);
                                case 4:
                                    return n = e.sent, e.next = 7, t._winnings(r.address, R[a].bnb);
                                case 7:
                                    i = e.sent, d(Object(Me.formatUnits)(n.toString())), j(Object(Me.formatUnits)(i.toString())), e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(1), console.log(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 12]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();

                function w(e) {
                    return T.apply(this, arguments)
                }

                function T() {
                    return (T = Object(H.a)(Object(I.a)().mark((function e(n) {
                        var a;
                        return Object(I.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.estimateGas.claimWinnings(n);
                                case 2:
                                    return a = e.sent, e.abrupt("return", a.mul(13).div(10));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                Object(C.useEffect)((function() {
                    g()
                }), [t, r, a]), Object(C.useEffect)((function() {
                    return t && t.signer && (t.on("GameFinished", O), t.on("PayoutComplete", h)),
                        function() {
                            t.off("GameFinished", O), t.off("PayoutComplete", h)
                        }
                }), [O, h]);
                var k = function() {
                    var e = Object(H.a)(Object(I.a)().mark((function e(n) {
                        var a;
                        return Object(I.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, w(n);
                                case 3:
                                    return e.t0 = e.sent, a = {
                                        gasLimit: e.t0
                                    }, e.next = 7, t.claimWinnings(n, a);
                                case 7:
                                    g(), e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t1 = e.catch(0), console.log(e.t1);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(oe.jsxs)("div", {
                    className: "mb-8",
                    children: [Object(oe.jsx)("div", {
                        className: "text-white text-sm text-center",
                        children: "WINNINGS"
                    }), Object(oe.jsxs)("div", {
                        className: "border-[#3A3A3A] px-4 py-2 border-[1px] rounded-md mt-2 text-white",
                        children: ["BNB" === i && Object(oe.jsxs)("span", {
                            onClick: function() {
                                return k(R[a].bnb)
                            },
                            children: ["BNB: ", parseFloat(m).toFixed(2)]
                        }), "BSCF" === i && Object(oe.jsxs)("span", {
                            onClick: function() {
                                return k(R[a].bscf)
                            },
                            children: ["BSCF : ", parseFloat(u).toFixed(2)]
                        })]
                    })]
                })
            }

            function St(e) {
                var t, n = e.flipCoinGif,
                    a = e.open,
                    i = e.setOpen,
                    s = e.enabled,
                    c = (e.setEnabled, e.selectedToken),
                    r = (e.betModal, e.openBetModal),
                    o = e.setGameStarted,
                    l = e.gameStarted,
                    u = e.gameToken,
                    d = e.bscF,
                    p = e.game,
                    b = (e.chainId, "0x0000000000000000000000000000000000000000"),
                    m = Object(Me.parseUnits)("5", 23),
                    j = Object(M.b)({
                        fetchEns: !1
                    }),
                    x = Object(E.a)(j, 1)[0].data,
                    y = Object(C.useState)(-1),
                    f = Object(E.a)(y, 2),
                    O = (f[0], f[1]),
                    h = Object(C.useState)(-1),
                    v = Object(E.a)(h, 2),
                    g = v[0],
                    w = v[1],
                    k = Object(C.useState)(!1),
                    N = Object(E.a)(k, 2),
                    F = N[0],
                    A = N[1],
                    S = Object(C.useState)(null),
                    B = Object(E.a)(S, 2),
                    R = B[0],
                    P = B[1],
                    L = Object(C.useState)(!1),
                    V = Object(E.a)(L, 2),
                    D = V[0],
                    Z = V[1],
                    U = Object(C.useState)(null),
                    z = Object(E.a)(U, 2),
                    W = z[0],
                    Y = z[1],
                    K = Object(C.useState)(!1),
                    X = Object(E.a)(K, 2),
                    Q = X[0],
                    _ = X[1],
                    q = Object(C.useState)(!1),
                    $ = Object(E.a)(q, 2),
                    ee = $[0],
                    te = $[1],
                    ne = Object(C.useState)(-1),
                    ae = Object(E.a)(ne, 2),
                    ie = ae[0],
                    se = ae[1],
                    ce = Object(C.useState)(0),
                    re = Object(E.a)(ce, 2),
                    le = re[0],
                    ue = re[1],
                    de = Object(C.useState)(0),
                    pe = Object(E.a)(de, 2),
                    be = pe[0],
                    me = pe[1],
                    je = Object(C.useState)(!1),
                    xe = Object(E.a)(je, 2),
                    ye = xe[0],
                    fe = xe[1],
                    Oe = Object(C.useState)(!1),
                    he = Object(E.a)(Oe, 2),
                    ve = he[0],
                    ge = he[1],
                    we = Object(C.useState)(!1),
                    Ce = Object(E.a)(we, 2),
                    Te = Ce[0],
                    ke = Ce[1],
                    Ne = Object(C.useState)({
                        BNB: [.05, 1],
                        BSCF: [0, 1]
                    }),
                    Fe = Object(E.a)(Ne, 2),
                    Se = (Fe[0], Fe[1]),
                    Ie = Object(C.useState)(0),
                    He = Object(E.a)(Ie, 2),
                    Ee = He[0],
                    Pe = He[1],
                    Ge = function(e) {
                        var t = e.id,
                            n = void 0 === t ? "" : t,
                            a = e.name,
                            i = void 0 === a ? "" : a,
                            s = e.isActive,
                            c = void 0 !== s && s,
                            r = e.onClick;
                        return Object(oe.jsx)("button", {
                            value: n,
                            name: i,
                            onClick: function() {
                                return r(n)
                            },
                            className: "pushable mt-6 tracking-[2px]",
                            children: Object(oe.jsx)("span", {
                                className: "front".concat(c ? " active" : ""),
                                children: i
                            })
                        })
                    },
                    De = function(e) {
                        w(Number(e))
                    };
                Object(C.useEffect)((function() {
                    if (!1 !== ve)
                        if (0 === ve) ke(!0);
                        else {
                            var e = ve;
                            setTimeout((function() {
                                ge(e - 1)
                            }), 1e3)
                        }
                }), [ve]), Object(C.useEffect)((function() {
                    Te && setTimeout((function() {
                        fe(!0)
                    }), 1e4)
                }), [Te]), T.a.useEffect((function() {
                    if (ye) {
                        var e = new G.a({
                            target: "canvas",
                            colors: [
                                [241, 186, 19],
                                [232, 183, 32],
                                [194, 149, 12]
                            ]
                        });
                        return ee && e.render(), setTimeout((function() {
                                e.clear()
                            }), 5e3),
                            function() {
                                return e.clear()
                            }
                    }
                }), [ye]), Object(C.useEffect)((function() {
                    var e = function() {
                        var e = Object(H.a)(Object(I.a)().mark((function e() {
                            var t;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(p && d && x && d.signer)) {
                                            e.next = 15;
                                            break
                                        }
                                        if (e.prev = 1, u === b) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 5, d.allowance(x.address, p.address);
                                    case 5:
                                        t = e.sent, A(parseInt(t._hex, 16) > parseInt(m._hex, 16)), e.next = 10;
                                        break;
                                    case 9:
                                        A(!0);
                                    case 10:
                                        e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(1), console.log(e.t0);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 12]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [x, p, d]);
                var Ze = Object(C.useCallback)(Object(H.a)(Object(I.a)().mark((function e() {
                    var t, n, a, i;
                    return Object(I.a)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, p._minBetForToken(b);
                            case 2:
                                return t = e.sent, e.next = 5, p._minBetForToken(d.address);
                            case 5:
                                return n = e.sent, t = parseInt(t._hex), n = parseInt(n._hex), e.next = 10, p._maxBetForToken(b);
                            case 10:
                                return a = e.sent, e.next = 13, p._maxBetForToken(d.address);
                            case 13:
                                i = e.sent, a = parseInt(a._hex), i = parseInt(i._hex), Se({
                                    BNB: [t, a],
                                    BSCF: [n, i]
                                });
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), [d.address, p]);
                Object(C.useEffect)((function() {
                    Ze()
                }), [Ze]);
                var Ue = function() {
                        var e = Object(H.a)(Object(I.a)().mark((function e(t, n, a) {
                            var i;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, t !== d.signer) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 4, d.allowance(x.address, p.address);
                                    case 4:
                                        i = e.sent, A(i._hex > m._hex);
                                    case 6:
                                        e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function(t, n, a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ze = function(e) {
                        t = setInterval(Object(H.a)(Object(I.a)().mark((function n() {
                            var a;
                            return Object(I.a)().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!p.signer) {
                                            n.next = 11;
                                            break
                                        }
                                        return n.prev = 1, n.next = 4, p._games(e);
                                    case 4:
                                        (a = n.sent).finished && (te(a.winner), _(!0), me(parseInt(a.wager._hex)), a.winner ? ue(a.predictedOutcome) : ue((a.predictedOutcome + 1) % 2), clearInterval(t), ge(3)), n.next = 11;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n.catch(1), console.log(n.t0);
                                    case 11:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 8]
                            ])
                        }))), 3e3)
                    };

                function We(e, t, n, a, i) {
                    return Je.apply(this, arguments)
                }

                function Je() {
                    return (Je = Object(H.a)(Object(I.a)().mark((function e(t, n, a, i, s) {
                        var c, r;
                        return Object(I.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return c = {
                                        value: s
                                    }, e.next = 3, p.estimateGas.enterGame(t, n, a, i, c);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r.mul(13).div(10));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                Object(C.useEffect)((function() {
                    Pe(0)
                }), [s]), Object(C.useEffect)((function() {
                    return d && d.signer && d.on("Approval", Ue),
                        function() {
                            d && d.signer && d.off("Approval", Ue)
                        }
                }), [d]), Object(C.useEffect)((function() {
                    var e = Le.find((function(e) {
                        return e.token === u
                    }));
                    P(e.values)
                }), [u]), Object(C.useEffect)((function() {
                    Z(!!(Ee && g >= 0))
                }), [Ee, g]);
                var Xe = function() {
                        var e = Object(H.a)(Object(I.a)().mark((function e() {
                            var t, n, a, i, s, c, r, l, d, m, j;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o(!0), e.prev = 1, n = new Proxy(new URLSearchParams(window.location.search), {
                                            get: function(e, t) {
                                                return e.get(t)
                                            }
                                        }), a = null !== (t = n.ref) && void 0 !== t ? t : "0x0000000000000000000000000000000000000000", console.log("Referrer: ", a), i = Object(Me.parseUnits)("".concat(Ee * Math.pow(10, 18)), 0), s = Ve[g].value, console.log(i), c = u === b ? i : 0, e.next = 11, We(i, s, u, a, c);
                                    case 11:
                                        return e.t0 = e.sent, e.t1 = c, r = {
                                            gasLimit: e.t0,
                                            value: e.t1
                                        }, e.next = 16, p.enterGame(i, s, u, a, r);
                                    case 16:
                                        return l = e.sent, e.next = 19, l.wait();
                                    case 19:
                                        d = e.sent, m = null === d || void 0 === d ? void 0 : d.events.find((function(e) {
                                            return "GameStarted" === e.event
                                        })), j = m.args[4], ze(j), se(j), _(!1), e.next = 31;
                                        break;
                                    case 27:
                                        e.prev = 27, e.t2 = e.catch(1), Y(e.t2), console.log(e.t2);
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 27]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Qe = function() {
                        se(-1), _(!1), te(!1), Y(null), O(-1), w(-1), o(!1), fe(!1), ge(!1)
                    };
                return Object(oe.jsxs)(oe.Fragment, {
                    children: [Object(oe.jsxs)("div", {
                        className: "flex items-center justify-center flex-row mx-auto text-white",
                        children: [!F && Object(oe.jsx)("div", {
                            className: "flex justify-center",
                            children: Object(oe.jsx)(Re, {
                                bscF: d,
                                game: p
                            })
                        }), F && x && !l && R && Object(oe.jsxs)(oe.Fragment, {
                            children: [Object(oe.jsx)("button", {
                                onClick: function() {
                                    return De(Ve[0].id)
                                },
                                className: "pushable-mobile",
                                children: Object(oe.jsx)("span", {
                                    className: "front-mobile font-bold text-[8px]",
                                    children: "HEADS"
                                })
                            }), Object(oe.jsx)("div", {
                                className: "w-[185px] h-auto mx-auto",
                                children: Object(oe.jsx)("img", {
                                    src: n,
                                    alt: "coinFlip"
                                })
                            }), Object(oe.jsx)("button", {
                                onClick: function() {
                                    return De(Ve[1].id)
                                },
                                className: "pushable-mobile",
                                children: Object(oe.jsx)("span", {
                                    className: "front-mobile font-bold text-[8px]",
                                    children: "TAILS"
                                })
                            }), Object(oe.jsx)("div", {
                                className: "mx-auto my-3"
                            })]
                        }), l && Object(oe.jsxs)(oe.Fragment, {
                            children: [Object(oe.jsx)("div", {}), !Q && !W && Object(oe.jsxs)("div", {
                                className: "flex flex-col text-white justify-center items-center",
                                children: [Object(oe.jsx)("div", {
                                    className: "w-[185px] h-auto mx-auto",
                                    children: Object(oe.jsx)("img", {
                                        src: n,
                                        alt: "coinFlip"
                                    })
                                }), -1 === ie && Object(oe.jsx)("p", {
                                    className: "text-white",
                                    children: "WAITING FOR CONFIRMATION"
                                }), ie >= 0 && Object(oe.jsxs)("div", {
                                    children: [Object(oe.jsxs)(J, {
                                        spaced: !0,
                                        children: ["YOU CHOSE: ", Ve[g].name]
                                    }), Object(oe.jsx)(J, {
                                        children: "WAITING FOR YOUR FLIP"
                                    })]
                                })]
                            }), !Q && W && Object(oe.jsxs)("div", {
                                className: "flex flex-col text-white justify-center items-center",
                                children: [Object(oe.jsx)(J, {
                                    children: "ERROR WHEN STARTING GAME"
                                }), Object(oe.jsx)(J, {
                                    children: W.message.substring(0, 40) + "..."
                                }), Object(oe.jsx)("button", {
                                    onClick: Qe,
                                    className: "pushable-mobile mt-4",
                                    children: Object(oe.jsx)("span", {
                                        className: "front-mobile font-bold text-[8px]",
                                        children: "TRY AGAIN"
                                    })
                                })]
                            }), Q && Object(oe.jsxs)("div", {
                                className: "text-white",
                                children: [!Te && Object(oe.jsxs)(J, {
                                    spaced: !0,
                                    children: ["Spinning in: ", ve]
                                }), ye && ee && Object(oe.jsxs)(J, {
                                    spaced: !0,
                                    children: ["YOU WON", " ", Object(oe.jsxs)(Be, {
                                        children: ["+", parseFloat(be / Math.pow(10, 18)).toFixed(2), " ", c]
                                    })]
                                }), Te && Object(oe.jsx)("div", {
                                    className: "w-[185px] h-auto mx-auto",
                                    children: Object(oe.jsx)("img", {
                                        alt: "logo",
                                        src: 0 === le ? Ke : Ye
                                    })
                                }), Object(oe.jsxs)(J, {
                                    spaced: !0,
                                    children: ["YOU CHOSE: ", Ve[g].name]
                                }), ye && Object(oe.jsxs)(oe.Fragment, {
                                    children: [Object(oe.jsxs)(J, {
                                        spaced: !0,
                                        children: ["YOUR FLIP: ", Ve[le].name]
                                    }), ee ? Object(oe.jsx)(J, {
                                        spaced: !0,
                                        children: "WINNER"
                                    }) : Object(oe.jsx)(J, {
                                        spaced: !0,
                                        children: "RUGGED"
                                    }), Object(oe.jsx)(Ae, {
                                        children: Object(oe.jsx)(Ge, {
                                            name: "FLIP AGAIN",
                                            onClick: function() {
                                                ke(!1), Qe()
                                            }
                                        })
                                    })]
                                })]
                            }), Object(oe.jsx)("div", {}), " "]
                        })]
                    }), F && x && !l && R && Object(oe.jsx)("div", {
                        className: "mx-auto my-3",
                        children: Object(oe.jsx)("button", {
                            disabled: !D,
                            onClick: D ? Xe : null,
                            className: "pushable-mobile pushable-gold w-full",
                            children: Object(oe.jsxs)("span", {
                                className: "front-mobile front-gold font-bold text-[8px]",
                                children: [!D && Object(oe.jsx)("span", {
                                    children: "CHOOSE YOUR OPTIONS"
                                }), D && Object(oe.jsx)("span", {
                                    children: "FLIP"
                                })]
                            })
                        })
                    }), Object(oe.jsx)("div", {
                        className: "w-[80%] flex-grow-[1] flex items-end pb-6",
                        children: Object(oe.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [!ye && Object(oe.jsxs)("div", {
                                className: "text-white mb-4 text-center",
                                children: ["Current Bet: ", Ee, " ", c]
                            }), F && x && !l && R && Object(oe.jsxs)(oe.Fragment, {
                                children: [Object(oe.jsx)("button", {
                                    onClick: function() {
                                        return i(!0)
                                    },
                                    className: "block pushable-mobile pushable-gold w-full",
                                    children: Object(oe.jsx)("span", {
                                        className: "front-mobile front-gold font-bold text-[8px] w-full",
                                        children: "SELECT BET AMOUNT"
                                    })
                                }), Object(oe.jsx)(Mt, {
                                    open: a,
                                    setOpen: i,
                                    betLimits: {
                                        BNB: [.05, 1],
                                        BSCF: [500, 1e5]
                                    },
                                    selectedToken: c,
                                    activeBetAmount: Ee,
                                    setActiveBetAmount: Pe,
                                    openBetModal: r
                                })]
                            })]
                        })
                    })]
                })
            }

            function Bt(e) {
                var t = e.chainId,
                    n = e.wrongChain,
                    a = e.bscF,
                    i = e.game,
                    s = Object(C.useState)(!0),
                    c = Object(E.a)(s, 2),
                    r = c[0],
                    o = c[1],
                    l = Object(C.useState)(!1),
                    u = Object(E.a)(l, 2),
                    d = u[0],
                    p = u[1],
                    b = Object(M.b)({
                        fetchEns: !1
                    }),
                    m = Object(E.a)(b, 1)[0].data,
                    j = Object(C.useState)(!1),
                    x = Object(E.a)(j, 2),
                    y = x[0],
                    f = x[1],
                    O = Object(C.useState)("BNB"),
                    h = Object(E.a)(O, 2),
                    v = h[0],
                    g = h[1],
                    w = Object(C.useState)(R[t].bscF),
                    T = Object(E.a)(w, 2),
                    k = T[0],
                    N = T[1],
                    F = Object(C.useState)(!1),
                    A = Object(E.a)(F, 2),
                    S = (A[0], A[1], Object(C.useState)(!1)),
                    B = Object(E.a)(S, 2),
                    P = B[0],
                    G = B[1],
                    L = Object(C.useState)(!1),
                    V = Object(E.a)(L, 2),
                    D = V[0],
                    Z = V[1];
                return Object(C.useEffect)((function() {
                    var e = function() {
                        var e = Object(H.a)(Object(I.a)().mark((function e() {
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        i && a && m && a.signer ? f(!0) : f(!1);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [m, i, a]), Object(C.useEffect)((function() {
                    "BNB" === v ? N(R[t].bnb) : "BSCF" === v && N(R[t].bscF)
                }), [v, t]), Object(C.useEffect)((function() {
                    g(!0 === r ? "BNB" : "BSCF")
                }), [r]), Object(oe.jsxs)(oe.Fragment, {
                    children: [!y && Object(oe.jsx)("div", {
                        className: "flex items-center justify-center flex-col h-[calc(100vh-64px)] text-white",
                        children: "CONNECT YOUT WALLET TO START FLIPPING"
                    }), y && !n && Object(oe.jsxs)("div", {
                        className: "flex items-center justify-center flex-col h-[calc(100vh-64px)]",
                        children: [Object(oe.jsx)("div", {
                            className: "mx-auto flex-grow-[1] flex items-end",
                            children: Object(oe.jsx)(At, {
                                selectedToken: v,
                                game: i,
                                bscF: a,
                                chainId: t
                            })
                        }), Object(oe.jsx)(St, {
                            flipCoinGif: Ot,
                            open: d,
                            setOpen: p,
                            enabled: r,
                            setEnabled: o,
                            chainId: t,
                            selectedToken: v,
                            betModal: D,
                            openBetModal: Z,
                            gameStarted: P,
                            setGameStarted: G,
                            gameToken: k,
                            bscF: a,
                            game: i
                        })]
                    }), n && y && Object(oe.jsx)("div", {
                        className: "text-white flex items-center justify-center flex-col h-[calc(100vh-64px)]",
                        children: "WRONG CHAIN! PLEASE CONNECT TO BSC"
                    })]
                })
            }

            function It() {
                var e = Object(M.e)(),
                    t = Object(E.a)(e, 2),
                    n = t[0],
                    a = n.data,
                    i = (n.error, n.loading, t[1], Object(M.f)()),
                    s = Object(E.a)(i, 2),
                    c = s[0],
                    r = c.data,
                    o = (c.error, c.loading, s[1], Object(C.useState)(!1)),
                    l = Object(E.a)(o, 2),
                    u = (l[0], l[1]),
                    d = Object(C.useState)(56),
                    p = Object(E.a)(d, 2),
                    b = p[0],
                    m = p[1],
                    j = Object(C.useState)(!1),
                    x = Object(E.a)(j, 2),
                    y = x[0],
                    f = x[1],
                    O = Object(C.useState)("coinflip"),
                    h = Object(E.a)(O, 2),
                    v = (h[0], h[1], Object(M.d)({
                        addressOrName: R[b].bscF,
                        contractInterface: P.bscF,
                        signerOrProvider: r
                    })),
                    g = Object(M.d)({
                        addressOrName: R[b].bscCoinFlip,
                        contractInterface: P.bscCoinFlip,
                        signerOrProvider: r
                    });
                Object(C.useEffect)((function() {
                    var e = localStorage.getItem("appEntered");
                    u(e)
                }), []);
                return Object(C.useEffect)((function() {
                    var e = function() {
                        var e = Object(H.a)(Object(I.a)().mark((function e() {
                            var t, n;
                            return Object(I.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        56 === (null === (t = a.chain) || void 0 === t ? void 0 : t.id) ? (m(56), f(!1)) : 97 === (null === (n = a.chain) || void 0 === n ? void 0 : n.id) ? (m(97), f(!1)) : f(!0);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [a]), Object(oe.jsxs)(U, {
                    children: [Object(oe.jsx)(Ft, {}), Object(oe.jsx)(Bt, {
                        chainId: b,
                        wrongChain: y,
                        bscF: v,
                        game: g
                    })]
                })
            }
            var Ht = function() {
                    var e = Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: ".",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0,
                            FAST_REFRESH: !0
                        }).INFURA_ID,
                        t = F.l;
                    return Object(oe.jsxs)(M.a, {
                        autoConnect: !0,
                        connectors: function(n) {
                            var a, i, s, c = n.chainId,
                                r = null !== (a = null === (i = t.find((function(e) {
                                    return e.id === c
                                }))) || void 0 === i || null === (s = i.rpcUrls) || void 0 === s ? void 0 : s[0]) && void 0 !== a ? a : F.n.mainnet.rpcUrls[0];
                            return [new A.a({
                                chains: t,
                                options: {
                                    shimDisconnect: !0
                                }
                            }), new S.a({
                                options: {
                                    infuraId: e,
                                    qrcode: !0
                                }
                            }), new B.a({
                                options: {
                                    appName: "BeanFlip",
                                    jsonRpcUrl: "".concat(r, "/").concat(e)
                                }
                            })]
                        },
                        children: [Object(oe.jsx)("div", {
                            className: "sm:hidden",
                            children: Object(oe.jsx)(It, {})
                        }), Object(oe.jsx)("div", {
                            className: "hidden sm:block",
                            children: Object(oe.jsx)(vt, {})
                        })]
                    })
                },
                Et = new w.a({
                    uri: "https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app"
                });
            N.a.render(Object(oe.jsx)(g.a, {
                client: Et,
                children: Object(oe.jsx)(Ht, {})
            }), document.getElementById("root"))
        }
    },
    [
        [995, 1, 2]
    ]
]);
//# sourceMappingURL=main.47c49385.chunk.js.map
