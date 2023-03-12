import {
    useState,
    useEffect
} from "react";
import {
    useAccount
} from "wagmi";
import {
    addresses,
    abis
} from "../../contract";
import {
    Centered,
    Image
} from "../Styles";
import {
    GameContainer,
    GlobalContainer,
    SideContainer
} from "./GameStyles";
import {
    DoubleOrNothing
} from "./DoubleOrNothing/DoubleOrNothing";
import {
    DropDown
} from "../DropDown/DropDown";
import {
    Winnings
} from "./Winnings/Winnings";

export const FlipGame = ({
    muuinu,
    safemoon2,
    flipCoinGif,
    chainId,
    wrongChain,
    bscF,
    game,
}) => {
    const tokens = ["BNB"];
    const toggling = () => setIsOpen(!isOpen);

    const [{
        data: account
    }] = useAccount({
        fetchEns: false
    });

    const [connected, setConnected] = useState(false);
    const [selectedToken, setSelectedToken] = useState(tokens[0]);
    const [selectedDecimals, setSelectedDecimals] = useState(18);
    const [selectedTokenAddress, setSelectedTokenAddress] = useState(
        addresses[chainId].bscF
    );
    const [isOpen, setIsOpen] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [betModal, openBetModal] = useState(false);

    const onOptionClicked = (value) => () => {
        setSelectedToken(value);
        setIsOpen(false);
    };

    useEffect(() => {
        const showAllowances = async () => {
            if (game && bscF && account && bscF.signer) {
                setConnected(true);
            } else {
                setConnected(false);
            }
        };
        showAllowances();
    }, [account, game, bscF]);

    useEffect(() => {
        if (selectedToken === "BNB") {
            setSelectedTokenAddress(addresses[chainId].bnb);
            setSelectedDecimals(18)
        }
        // else if (selectedToken === "BSCF") {
        //   setSelectedTokenAddress(addresses[chainId].bscF);
        //   setSelectedDecimals(18)
        // }
        // } else if (selectedToken === "SAFEMOON2") {
        //   setSelectedTokenAddress(addresses[chainId].safemoon2);
        //   setSelectedDecimals(9)
        // } else if (selectedToken === "MUUINU") {
        //   setSelectedTokenAddress(addresses[chainId].muuinu);
        //   setSelectedDecimals(9)
        // }
    }, [selectedToken, chainId]);

    return ( <
        GlobalContainer >
        <
        div className = "pancakeSwapDiv absolute top-0" >

        <
        /div> <
        div style = {
            {
                width: "95%"
            }
        } > {!connected && ( <
                Centered > CONNECT YOUR ACCOUNT TO START FLIPPING < /Centered>
            )
        } {
            connected && !wrongChain && ( <
                GameContainer > {!gameStarted && !betModal && ( <
                        DropDown options = {
                            tokens
                        }
                        onOptionClicked = {
                            onOptionClicked
                        }
                        selectedOption = {
                            selectedToken
                        }
                        isOpen = {
                            isOpen
                        }
                        toggling = {
                            toggling
                        }
                        />
                    )
                } <
                DoubleOrNothing selectedDecimals = {
                    selectedDecimals
                }
                muuinu = {
                    muuinu
                }
                safemoon2 = {
                    safemoon2
                }
                chainId = {
                    chainId
                }
                selectedToken = {
                    selectedToken
                }
                flipCoinGif = {
                    flipCoinGif
                }
                betModal = {
                    betModal
                }
                openBetModal = {
                    openBetModal
                }
                gameStarted = {
                    gameStarted
                }
                setGameStarted = {
                    setGameStarted
                }
                gameToken = {
                    selectedTokenAddress
                }
                bscF = {
                    bscF
                }
                game = {
                    game
                }
                /> <
                /GameContainer>
            )
        } {
            wrongChain && connected && ( <
                Centered > WRONG CHAIN!PLEASE CONNECT TO BSC < /Centered>
            )
        } <
        /div> <
        SideContainer / >
        <
        /GlobalContainer>
    );
};