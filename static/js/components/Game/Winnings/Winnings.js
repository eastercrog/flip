import React, {
    useState,
    useEffect,
    useCallback
} from "react";
import {
    useAccount
} from 'wagmi';
import {
    formatUnits
} from "@ethersproject/units";

import {
    addresses,
    abis
} from "../../../contract";
import {
    WinningsListContainer,
    WinningsList,
    WinningsListItem,
    SmallText,
    MediumText
} from "./WinningsStyles";
import {
    Centered
} from "../../Styles";

export const Winnings = (({
    selectedDecimals,
    game,
    bscF,
    chainId
}) => {
    const [{
        data: account
    }, disconnect] = useAccount({
        fetchEns: false,
    });
    const [unclaimedBSCF, setUnclaimedBSCF] = useState(0);
    const [unclaimedBNB, setUnclaimedBNB] = useState(0);
    const [unclaimedSAFEMOON2, setUnclaimedSAFEMOON2] = useState(0);
    const [unclaimedMUUINU, setUnclaimedMUUINU] = useState(0);
    const [tokenBalance, setTokenBalance] = useState(0);

    const gameFinishedListener = useCallback((better, token, winner, wager, id) => {
        if (account.address === better) {
            refreshWinnings();
            refreshTokenBalance();
        }
    }, [game, account, chainId]);

    const payoutCompleteListener = useCallback((better, token, winnings) => {
        if (account.address === better) {
            refreshWinnings();
            refreshTokenBalance();
        }
    }, [game, account, chainId]);

    useEffect(() => {
        refreshTokenBalance();
    }, [game, account, chainId]);

    const refreshTokenBalance = async () => {
        if (bscF && account && bscF.signer) {
            try {
                const tokenBalance = await bscF.balanceOf(account.address);
                setTokenBalance(formatUnits(tokenBalance.toString()));
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        if (game && game.signer) {
            game.on("GameFinished", gameFinishedListener);
            game.on("PayoutComplete", payoutCompleteListener);
        }

        return () => {
            game.off("GameFinished", gameFinishedListener);
            game.off("PayoutComplete", payoutCompleteListener);
        }
    }, [gameFinishedListener, payoutCompleteListener]);

    useEffect(() => {
        refreshTokenBalance();
    }, [bscF, account]);

    const refreshWinnings = async () => {
        if (game.signer && account) {
            try {
                const bscf = await game._winnings(account.address, addresses[chainId].bscF);
                const bnb = await game._winnings(account.address, addresses[chainId].bnb);
                // const safemoon2 = await game._winnings(account.address, addresses[chainId].safemoon2);
                // const muuinu = await game._winnings(account.address, addresses[chainId].muuinu);
                setUnclaimedBSCF(formatUnits(bscf.toString()));
                setUnclaimedBNB(formatUnits(bnb.toString()));
                // setUnclaimedSAFEMOON2(formatUnits(safemoon2.toString(),"9"));
                // setUnclaimedMUUINU(formatUnits(muuinu.toString(),"9"));
            } catch (err) {
                console.log(err);
            }
        }
    }

    useEffect(() => {
        refreshWinnings();
    }, [game, account, chainId]);

    useEffect(() => {
        if (game && game.signer) {
            game.on("GameFinished", gameFinishedListener);
            game.on("PayoutComplete", payoutCompleteListener);
        }

        return () => {
            game.off("GameFinished", gameFinishedListener);
            game.off("PayoutComplete", payoutCompleteListener);
        }
    }, [gameFinishedListener, payoutCompleteListener]);

    // Ethers has been doing a poor job of estimating gas,
    // so increase the limit by 30% to ensure there are fewer
    // failures on transactions
    async function getGasPrice(address) {
        const estimate = await game.estimateGas.claimWinnings(address);
        return estimate.mul(13).div(10);
    }

    const claimWinnings = async (address) => {
        try {
            var options = {
                gasLimit: await getGasPrice(address)
            };
            await game.claimWinnings(address, options);
            refreshWinnings();
        } catch (err) {
            console.log(err);
        }
    };

    return ( <
        WinningsListContainer >
        <
        Centered > WINNINGS < /Centered> <
        MediumText > CLICK TO CLAIM < /MediumText> <
        WinningsList >
        <
        WinningsListItem onClick = {
            () => claimWinnings(addresses[chainId].bnb)
        } >
        BNB: {
            parseFloat(unclaimedBNB).toFixed(2)
        } <
        /WinningsListItem> {
            /* <WinningsListItem onClick={() => claimWinnings(addresses[chainId].safemoon2)}>
                      SAFEMOON2: {parseFloat(unclaimedSAFEMOON2).toFixed(2)}
                    </WinningsListItem>
                    <WinningsListItem onClick={() => claimWinnings(addresses[chainId].muuinu)}>
                      MUUINU: {parseFloat(unclaimedMUUINU).toFixed(2)}
                    </WinningsListItem> */
        } <
        /WinningsList> <
        /WinningsListContainer>
    );
});