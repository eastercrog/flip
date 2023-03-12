import {
    parseUnits
} from "@ethersproject/units";
import {
    addresses,
    abis
} from "../../../contract";

const bscfFlipAmounts = [{
        id: 0,
        name: "100 BSCF",
        value: parseUnits("1", 20)
    },
    {
        id: 1,
        name: "500 BSCF",
        value: parseUnits("5", 20)
    },
    {
        id: 2,
        name: "1000 BSCF",
        value: parseUnits("1", 21)
    },
    {
        id: 3,
        name: "5000 BSCF",
        value: parseUnits("5", 21)
    },
];

const bnbFlipAmounts = [{
        id: 0,
        name: "0.05 BNB",
        value: parseUnits("5", 16)
    },
    {
        id: 1,
        name: "0.1 BNB",
        value: parseUnits("1", 17)
    },
    {
        id: 2,
        name: "0.5 BNB",
        value: parseUnits("5", 17)
    },
    {
        id: 3,
        name: "1 BNB",
        value: parseUnits("1", 18)
    },
]

export const flipAmounts = [{
        token: addresses[56].bnb,
        values: bnbFlipAmounts
    },
    {
        token: addresses[97].safemoon2,
        values: bnbFlipAmounts
    },
    {
        token: addresses[97].bscF,
        values: bscfFlipAmounts
    },
    {
        token: addresses[97].bnb,
        values: bnbFlipAmounts
    },
    {
        token: addresses[56].bscF,
        values: bscfFlipAmounts
    },
    {
        token: addresses[56].safemoon2,
        values: bnbFlipAmounts
    },
    {
        token: addresses[97].muuinu,
        values: bnbFlipAmounts
    },
    {
        token: addresses[56].muuinu,
        values: bnbFlipAmounts
    },
];

export const headsOrTails = [{
        id: 0,
        name: "HEADS",
        value: 0
    },
    {
        id: 1,
        name: "TAILS",
        value: 1
    },
];