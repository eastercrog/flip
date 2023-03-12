import React, {
    useState,
    useEffect,
    useCallback
} from "react";
import {
    useAccount
} from "wagmi";
import {
    parseUnits
} from "@ethersproject/units";
import ConfettiGenerator from "confetti-js";
import {
    addresses,
    abis
} from "../../../contract";
import {
    ApprovalButton
} from "./ApprovalButton";
import {
    flipAmounts,
    headsOrTails
} from "./FlipAmounts";
import {
    Centered,
    Image
} from "../../Styles";

import {
    Winnings
} from "../Winnings/Winnings";
import {
    DoubleOrNothingBtn,
    FlipContainer,
    SelectBet,
    BetOption,
    CoinFlip,
    BetButton,
    Green,
} from "./FlipStyles";

import flipCoinGifT from "../../../img/512tail-single.gif";
import flipCoinGifH from "../../../img/512head-single.gif";
import BetSelectModal from "./BetSelectModal";
import "./DoubleOrNothing.css";
import {
    wait
} from "@testing-library/user-event/dist/utils";
import {
    choiceButtonSVG
} from "../../../svgs/svgs";
import {
    DropDown
} from "../../DropDown/DropDown";

export const DoubleOrNothing = ({
        selectedDecimals,
        muuinu,
        safemoon2,
        selectedToken,
        flipCoinGif,
        betModal,
        openBetModal,
        setGameStarted,
        gameStarted,
        gameToken,
        bscF,
        game,
        chainId,
    }) => {
        const bnb = "0x0000000000000000000000000000000000000000";
        const requiredAllowance = parseUnits("5", 23);

        const [{
            data: account
        }] = useAccount({
            fetchEns: false
        });
        const [activeAmountButton, setActiveAmountButton] = useState(-1);
        const [activeChoiceButton, setActiveChoiceButton] = useState(-1);
        const [approved, setApproved] = useState(false);
        const [gameFlipAmounts, setGameFlipAmounts] = useState(null);
        const [gameReady, setGameReady] = useState(false);
        const [gameError, setGameError] = useState(null);
        const [gameFinished, setGameFinished] = useState(false);
        const [winner, setWinner] = useState(false);
        const [gameId, setGameId] = useState(-1);
        const [result, setResult] = useState(0);
        const [gameWager, setGameWager] = useState(0);

        const [flipFinished, setFlipFinished] = useState(false);
        const [flipCounter, setFlipCounter] = useState(false);
        const [coinFlipActive, setCoinFlipActive] = useState(false);
        const [betLimits, setBetLimits] = useState({
            BNB: [0.05, 1],
            BSCF: [0, 1]
        });

        const [activeBetAmount, setActiveBetAmount] = useState(0);
        const GameButton = ({
            id = "",
            name = "",
            isActive = false,
            onClick
        }) => {
            return ( <
                button value = {
                    id
                }
                name = {
                    name
                }
                onClick = {
                    () => onClick(id)
                }
                className = {
                    `pushable mt-6 tracking-[2px]`
                } >
                <
                span className = {
                    `front${isActive ? ` active` : ""}`
                } > {
                    name
                } < /span> <
                /button>
            );
        };

        var intervalId;

        useEffect(() => {
            setActiveBetAmount(0)
        }, [selectedToken])
        const handleAmountButtonClick = (event) => {
            setActiveAmountButton(Number(event.target.value));
        };

        const handleChoiceButtonClick = (id) => {
            setActiveChoiceButton(Number(id));
        };

        useEffect(() => {
            if (flipCounter === false) return;
            if (flipCounter !== 0) {
                let tempCount = flipCounter;
                setTimeout(() => {
                    setFlipCounter(tempCount - 1);
                }, 1000);
                return;
            }
            setCoinFlipActive(true);
            return;
        }, [flipCounter]);

        useEffect(() => {
            //When coinflipactive is true then this will wait 10 seconds to set flipfinished to true to show the rest of the outcome
            if (!coinFlipActive) return;
            setTimeout(() => {
                setFlipFinished(true);
            }, 10000);
        }, [coinFlipActive]);

        React.useEffect(() => {
            if (!flipFinished) return;
            const confettiSettings = {
                target: "canvas",
                colors: [
                    [241, 186, 19],
                    [232, 183, 32],
                    [194, 149, 12],
                ],
            };

            const confetti = new ConfettiGenerator(confettiSettings);
            if (winner) {
                confetti.render();
            }
            setTimeout(() => {
                confetti.clear();
            }, 5000);
            return () => confetti.clear();
        }, [flipFinished]); // add the var dependencies or not

        useEffect(() => {
            const showAllowances = async () => {
                if (game && bscF && account && bscF.signer) {
                    try {
                        if (gameToken === addresses[chainId].bscF) {
                            const allowance = await bscF.allowance(
                                account.address,
                                game.address
                            );
                            setApproved(
                                parseInt(allowance._hex, 16) >
                                parseInt(requiredAllowance._hex, 16)
                            );
                        } else if (gameToken === bnb) {
                            setApproved(true);
                        }
                        //  else if(gameToken === addresses[chainId].safemoon2){
                        //   const allowance = await safemoon2.allowance(
                        //     account.address,
                        //     game.address
                        //   );
                        //   setApproved(
                        //     parseInt(allowance._hex, 16) >
                        //       parseInt(requiredAllowance._hex, 16)
                        //   );
                        // }else if(gameToken === addresses[chainId].muuinu){
                        //   const allowance = await muuinu.allowance(
                        //     account.address,
                        //     game.address
                        //   );
                        //   setApproved(
                        //     parseInt(allowance._hex, 16) >
                        //       parseInt(requiredAllowance._hex, 16)
                        //   );
                        // }
                        else {
                            setApproved(true);
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            };
            showAllowances();
        }, [account, game, bscF]);

        useEffect(() => {
            setLimits();
        }, []);

        const setLimits = async () => {
            let minBNB = await game._minBetForToken(bnb);
            let minBSCF = await game._minBetForToken(bscF.address);
            minBNB = parseInt(minBNB._hex);
            minBSCF = parseInt(minBSCF._hex);
            let maxBNB = await game._maxBetForToken(bnb);
            let maxBSCF = await game._maxBetForToken(bscF.address);
            maxBNB = parseInt(maxBNB._hex);
            maxBSCF = parseInt(maxBSCF._hex);
            // let maxMOON = await game._maxBetForToken(safemoon2.address);
            // let minMOON = await game._minBetForToken(safemoon2.address);
            // maxMOON = parseInt(maxMOON._hex);
            // minMOON = parseInt(minMOON._hex);
            // let maxMUU = await game._maxBetForToken(muuinu.address);
            // let minMUU = await game._minBetForToken(muuinu.address);
            // maxMUU = parseInt(maxMUU._hex);
            // minMUU = parseInt(minMUU._hex);
            setBetLimits({
                BNB: [minBNB, maxBNB],
                BSCF: [minBSCF, maxBSCF]
            });
        };

        const approvedListener = async (owner, spender, value) => {
            try {
                if (owner === bscF.signer) {
                    const allowance = await bscF.allowance(account.address, game.address);
                    setApproved(allowance._hex > requiredAllowance._hex);
                }
            } catch (err) {
                console.log(err);
            }
        };

        const checkGameFinished = (gameId) => {
            intervalId = setInterval(async () => {
                if (game.signer) {
                    try {
                        const userGame = await game._games(gameId);
                        if (userGame.finished) {
                            setWinner(userGame.winner);
                            setGameFinished(true);
                            setGameWager(parseInt(userGame.wager._hex));
                            if (userGame.winner) {
                                setResult(userGame.predictedOutcome);
                            } else {
                                setResult((userGame.predictedOutcome + 1) % 2);
                            }
                            clearInterval(intervalId);
                            setFlipCounter(3);
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            }, 3000);
        };

        useEffect(() => {
            if (bscF && bscF.signer) {
                bscF.on("Approval", approvedListener);
            }

            return () => {
                if (bscF && bscF.signer) {
                    bscF.off("Approval", approvedListener);
                }
            };
        }, [bscF]);

        /*const gameFinishedListener = useCallback((better, token, winner, wager, id) => {
          console.log("Game finished: ", better, token, winner, wager, id);
          if (game.signer._address === better && id === gameId) {
            if (intervalId) {
              clearInterval(intervalId);
              intervalId = null;
            }
            setWinner(winner);
            setGameFinished(true);
          }
        }, [gameId, intervalId]);*/

        useEffect(() => {
            const amounts = flipAmounts.find((game) => game.token === gameToken);
            setGameFlipAmounts(amounts.values);
        }, [gameToken]);

        /*useEffect(() => {
          if (game && game.signer) {
            game.on("GameFinished", gameFinishedListener);
          }

          return () => {
            game.off("GameFinished", gameFinishedListener);
          }
        }, [gameFinishedListener]);*/

        useEffect(() => {
            if (activeBetAmount && activeChoiceButton >= 0) {
                setGameReady(true);
            } else {
                setGameReady(false);
            }
        }, [activeBetAmount, activeChoiceButton]);

        // Ethers has been doing a poor job of estimating gas,
        // so increase the limit by 30% to ensure there are fewer
        // failures on transactions
        async function getGasPrice(flipAmount, side, address, referrer, value) {
            var options = {
                value: value,
            };
            const estimate = await game.estimateGas.enterGame(
                flipAmount,
                side,
                address,
                referrer,
                options
            );
            return estimate.mul(13).div(10);
        }

        const startGame = async () => {
            setGameStarted(true);
            try {
                const params = new Proxy(new URLSearchParams(window.location.search), {
                    get: (searchParams, prop) => searchParams.get(prop),
                });
                let referrer = params.ref ? ? "0x0000000000000000000000000000000000000000";
                console.log("Referrer: ", referrer);

                // var flipAmount = gameFlipAmounts[activeAmountButton].value;

                // var flipAmount = parseUnits(`${(activeBetAmount - (activeBetAmount % 10000000000)) / 10000000000 }`, (gameToken === addresses[chainId].muuinu || gameToken === addresses[chainId].safemoon2 ? 1 : 10));

                if (selectedDecimals === 18) {
                    var flipAmount = parseUnits(`${(activeBetAmount - (activeBetAmount % 10000000)) / 10000000 }`, 7);
                } else {
                    var flipAmount = parseUnits(`${(activeBetAmount)}`, 0);
                }
                var side = headsOrTails[activeChoiceButton].value;
                console.log("Flip Bet:")
                console.log(flipAmount);
                var value = gameToken === bnb ? flipAmount : 0;
                var options = {
                    gasLimit: await getGasPrice(
                        flipAmount,
                        side,
                        gameToken,
                        referrer,
                        value
                    ),
                    value: value,
                };
                const transaction = await game.enterGame(
                    flipAmount,
                    side,
                    gameToken,
                    referrer,
                    options
                );
                const receipt = await transaction.wait();
                const gameStartedEvent = receipt ? .events.find(
                    (event) => event.event === "GameStarted"
                );
                const id = gameStartedEvent.args[4];
                checkGameFinished(id);
                setGameId(id);
                setGameFinished(false);
            } catch (err) {
                setGameError(err);
                console.log(err);
            }
        };

        const startOver = () => {
            setGameId(-1);
            setGameFinished(false);
            setWinner(false);
            setGameError(null);
            setActiveAmountButton(-1);
            setActiveChoiceButton(-1);
            setGameStarted(false);
            setFlipFinished(false);
            setFlipCounter(false);
        };

        return ( <
                div className = "mainDivContainer" > {!approved && < div className = "approvalButton" > < ApprovalButton muuinu = {
                        muuinu
                    }
                    selectedTokenAddress = {
                        gameToken
                    }
                    safemoon2 = {
                        safemoon2
                    }
                    bscF = {
                        bscF
                    }
                    game = {
                        game
                    }
                    /></div >
                } { /* Game not start */ } {
                    approved && account && !gameStarted && gameFlipAmounts && ( <
                            div style = {
                                {
                                    width: "100%"
                                }
                            } >
                            <
                            FlipContainer style = {
                                {
                                    marginBottom: 0,
                                }
                            } >
                            {!betModal && ( <
                                    div className = "mainBetDiv" >
                                    <
                                    div className = "winningsDiv" >
                                    <
                                    Winnings selectedDecimals = {
                                        selectedDecimals
                                    }
                                    game = {
                                        game
                                    }
                                    bscF = {
                                        bscF
                                    }
                                    chainId = {
                                        chainId
                                    }
                                    /> <
                                    /div> <
                                    div className = "betInputDiv" >
                                    <
                                    GameButton id = {
                                        headsOrTails[0].id
                                    }
                                    isActive = {
                                        headsOrTails[0].id === activeChoiceButton
                                    }
                                    name = {
                                        headsOrTails[0].name
                                    }
                                    onClick = {
                                        handleChoiceButtonClick
                                    }
                                    />

                                    <
                                    Image src = {
                                        flipCoinGif
                                    }
                                    alt = "bscflip-logo" / >

                                    <
                                    GameButton id = {
                                        headsOrTails[1].id
                                    }
                                    isActive = {
                                        headsOrTails[1].id === activeChoiceButton
                                    }
                                    name = {
                                        headsOrTails[1].name
                                    }
                                    onClick = {
                                        handleChoiceButtonClick
                                    }
                                    /> <
                                    /div> <
                                    div > < /div> <
                                    /div>
                                )
                            } <
                            /FlipContainer> <
                            FlipContainer > {
                                betModal && ( <
                                    BetSelectModal selectedDecimals = {
                                        selectedDecimals
                                    }
                                    betLimits = {
                                        betLimits
                                    }
                                    selectedToken = {
                                        selectedToken
                                    }
                                    activeBetAmount = {
                                        activeBetAmount
                                    }
                                    setActiveBetAmount = {
                                        setActiveBetAmount
                                    }
                                    openBetModal = {
                                        openBetModal
                                    }
                                    />
                                )
                            } {
                                !betModal && ( <
                                    BetButton className = "pushable"
                                    onClick = {
                                        () => {
                                            openBetModal(true);
                                        }
                                    } >
                                    {!activeBetAmount ? ( <
                                            span className = "front" > SELECT A BET SIZE < /span>
                                        ) : ( <
                                            >
                                            <
                                            span className = "front" > {
                                                parseFloat(activeBetAmount / 10 ** selectedDecimals).toFixed(2)
                                            } {
                                                " "
                                            } {
                                                selectedToken
                                            } <
                                            /span> <
                                            />
                                        )
                                    } <
                                    /BetButton>
                                )
                            } <
                            /FlipContainer> {
                                !betModal && ( <
                                    FlipContainer >
                                    <
                                    DoubleOrNothingBtn isDisabled = {!gameReady
                                    }
                                    onClick = {
                                        gameReady ? startGame : null
                                    } >
                                    {!gameReady && < span > CHOOSE YOUR OPTIONS < /span>} {
                                            gameReady && < span > FLIP < /span>} <
                                                /DoubleOrNothingBtn> <
                                                /FlipContainer>
                                        )
                                    } <
                                    /div>
                                )
                            } { /* Game is started */ } {
                                gameStarted && ( <
                                    div > {!gameFinished && !gameError && ( <
                                            div >
                                            <
                                            CoinFlip > { < Image src = {
                                                    flipCoinGif
                                                } > < /Image>}</CoinFlip > {
                                                    gameId === -1 && < Centered > WAITING FOR CONFIRMATION < /Centered>} {
                                                        gameId >= 0 && ( <
                                                            div > { /* <Centered spaced={true}>GAME {gameId} STARTED</Centered> */ } <
                                                            Centered spaced = {
                                                                true
                                                            } >
                                                            YOU CHOSE: {
                                                                headsOrTails[activeChoiceButton].name
                                                            } <
                                                            /Centered> <
                                                            Centered > WAITING FOR YOUR FLIP < /Centered> <
                                                            /div>
                                                        )
                                                    } <
                                                    /div>
                                                )
                                            } {
                                                !gameFinished && gameError && ( <
                                                    div >
                                                    <
                                                    Centered > ERROR WHEN STARTING GAME < /Centered> <
                                                    Centered > {
                                                        gameError.message.substring(0, 40) + "..."
                                                    } < /Centered> <
                                                    FlipContainer >
                                                    <
                                                    GameButton name = "TRY AGAIN"
                                                    onClick = {
                                                        startOver
                                                    } > < /GameButton> <
                                                    /FlipContainer> <
                                                    /div>
                                                )
                                            } { /* Game finishing means the bet was resolved. A gif animation of the side that was flipped will play out */ } {
                                                gameFinished && ( <
                                                    div > { /* Only shows the counter when the coinflip is not active. */ } {
                                                        !coinFlipActive && ( <
                                                            Centered spaced = {
                                                                true
                                                            } > Spinning in: {
                                                                flipCounter
                                                            } < /Centered>
                                                        )
                                                    } { /* Only shows this when the user is the winner */ } {
                                                        flipFinished && winner && ( <
                                                            Centered spaced = {
                                                                true
                                                            } >
                                                            YOU WON {
                                                                " "
                                                            } <
                                                            Green >
                                                            +{
                                                                parseFloat(gameWager / 10 ** selectedDecimals).toFixed(2)
                                                            } {
                                                                " "
                                                            } {
                                                                selectedToken
                                                            } <
                                                            /Green> <
                                                            /Centered>
                                                        )
                                                    } { /* Renders the coin flip gif only when coinflipactive is set to true */ } {
                                                        coinFlipActive && ( <
                                                            CoinFlip >
                                                            <
                                                            Image src = {
                                                                result === 0 ? flipCoinGifH : flipCoinGifT
                                                            } >
                                                            < /Image> <
                                                            /CoinFlip>
                                                        )
                                                    } <
                                                    Centered spaced = {
                                                        true
                                                    } >
                                                    YOU CHOSE: {
                                                        headsOrTails[activeChoiceButton].name
                                                    } <
                                                    /Centered> { /* flipfinished is set to true 10 seconds after flipactive is set to true. This is the wait mechanic to let the animation finish */ } {
                                                        flipFinished && ( <
                                                            >
                                                            <
                                                            Centered spaced = {
                                                                true
                                                            } >
                                                            YOUR FLIP: {
                                                                headsOrTails[result].name
                                                            } <
                                                            /Centered> {
                                                                winner ? ( <
                                                                    Centered spaced = {
                                                                        true
                                                                    } > WINNER < /Centered>
                                                                ) : ( <
                                                                    Centered spaced = {
                                                                        true
                                                                    } > RUGGED < /Centered>
                                                                )
                                                            } <
                                                            FlipContainer >
                                                            <
                                                            GameButton name = "FLIP AGAIN"
                                                            onClick = {
                                                                () => {
                                                                    setCoinFlipActive(false);
                                                                    startOver()
                                                                }
                                                            } >
                                                            < /GameButton> <
                                                            /FlipContainer> <
                                                            />
                                                        )
                                                    } <
                                                    /div>
                                                )
                                            } <
                                            /div>
                                        )
                                    } <
                                    /div>
                                );
                            };