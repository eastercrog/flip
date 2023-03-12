import HeaderMobile from "./HeaderMobile";
import FlipGameMobile from "./FlipGameMobile";
import {
    useEffect,
    useState
} from "react";
import {
    useContract,
    useNetwork,
    useSigner
} from "wagmi";
import {
    addresses,
    abis
} from "./contract";
import {
    Page,
    PageCanvas
} from "./components/Styles";

export default function HomePageMobile() {
    const [{
            data: network,
            error: networkError,
            loading: loadingNetwork
        },
        switchNetwork,
    ] = useNetwork();
    const [{
            data: signer,
            error: signerError,
            loading: loadingSigner
        },
        getSigner,
    ] = useSigner();
    const [appEntered, setAppEntered] = useState(false);
    const [chainId, setChainId] = useState(56);
    const [wrongChain, setWrongChain] = useState(false);
    const [gameMode, setGameMode] = useState("coinflip");

    const bscF = useContract({
        addressOrName: addresses[chainId].bscF,
        contractInterface: abis.bscF,
        signerOrProvider: signer,
    });
    const game = useContract({
        addressOrName: addresses[chainId].bscCoinFlip,
        contractInterface: abis.bscCoinFlip,
        signerOrProvider: signer,
    });

    useEffect(() => {
        const getData = localStorage.getItem("appEntered");
        setAppEntered(getData);
    }, []);

    const handleEnterApp = (e) => {
        e.stopPropagation();
        localStorage.setItem("appEntered", true);
        setAppEntered(true);
    };

    useEffect(() => {
        const showAllowances = async () => {
            if (network.chain ? .id === 56) {
                setChainId(56);
                setWrongChain(false);
            } else if (network.chain ? .id === 97) {
                setChainId(97);
                setWrongChain(false);
            } else {
                setWrongChain(true);
            }
        };
        showAllowances();
    }, [network]);

    return ( <
        Page >
        <
        HeaderMobile / >
        <
        FlipGameMobile chainId = {
            chainId
        }
        wrongChain = {
            wrongChain
        }
        bscF = {
            bscF
        }
        game = {
            game
        }
        /> <
        /Page>
    );
}