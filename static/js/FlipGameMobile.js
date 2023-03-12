import flipCoinGif from "./img/1.gif";
import SwitchMobile from "./SwitchMobile";
import "./index.css";
import {
    useEffect,
    useState
} from "react";
import SetBetModal from "./SetBetModal";
import Winnings from "./Winnings";
import {
    useAccount
} from "wagmi";
import {
    addresses,
    abis
} from "./contract";
import DoubleOrNothingMobile from "./DoubleOrNothingMobile";

export default function FlipGameMobile({
    chainId,
    wrongChain,
    bscF,
    game
}) {
    const tokens = ["BNB", "BSCF"];
    const [enabled, setEnabled] = useState(true);
    const [open, setOpen] = useState(false);
    const [{
        data: account
    }] = useAccount({
        fetchEns: false
    });
    const [connected, setConnected] = useState(false);
    const [selectedToken, setSelectedToken] = useState(tokens[0]);
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
        } else if (selectedToken === "BSCF") {
            setSelectedTokenAddress(addresses[chainId].bscF);
        }
    }, [selectedToken, chainId]);

    useEffect(() => {
        if (enabled === true) {
            setSelectedToken("BNB");
        } else setSelectedToken("BSCF");
    }, [enabled]);

    return ( <
        > {!connected && ( <
                div className = "flex items-center justify-center flex-col h-[calc(100vh-64px)] text-white" >
                CONNECT YOUT WALLET TO START FLIPPING <
                /div>
            )
        } {
            connected && !wrongChain && ( <
                div className = "flex items-center justify-center flex-col h-[calc(100vh-64px)]" >
                <
                div className = "mx-auto flex-grow-[1] flex items-end" >
                <
                Winnings selectedToken = {
                    selectedToken
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
                DoubleOrNothingMobile flipCoinGif = {
                    flipCoinGif
                }
                open = {
                    open
                }
                setOpen = {
                    setOpen
                }
                enabled = {
                    enabled
                }
                setEnabled = {
                    setEnabled
                }
                chainId = {
                    chainId
                }
                selectedToken = {
                    selectedToken
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
                /div>
            )
        } {
            wrongChain && connected && ( <
                div className = "text-white flex items-center justify-center flex-col h-[calc(100vh-64px)]" >
                WRONG CHAIN!PLEASE CONNECT TO BSC <
                /div>
            )
        } <
        />
    );
}