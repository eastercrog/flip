import {
    Provider,
    chain,
    defaultChains
} from "wagmi";
import {
    InjectedConnector
} from "wagmi/connectors/injected";
import {
    WalletConnectConnector
} from "wagmi/connectors/walletConnect";
import {
    WalletLinkConnector
} from "wagmi/connectors/walletLink";
import {
    HomePage
} from "./HomePage";
import HomePageMobile from "./HomePageMobile";

function App() {
    // API key for Ethereum node
    // Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
    const infuraId = process.env.INFURA_ID;

    // Chains for connectors to support
    const chains = defaultChains;

    // Set up connectors
    const connectors = ({
        chainId
    }) => {
        const rpcUrl =
            chains.find((x) => x.id === chainId) ? .rpcUrls ? .[0] ? ?
            chain.mainnet.rpcUrls[0];
        return [
            new InjectedConnector({
                chains,
                options: {
                    shimDisconnect: true
                },
            }),
            new WalletConnectConnector({
                options: {
                    infuraId,
                    qrcode: true,
                },
            }),
            new WalletLinkConnector({
                options: {
                    appName: "BeanFlip",
                    jsonRpcUrl: `${rpcUrl}/${infuraId}`,
                },
            }),
        ];
    };

    return ( <
        Provider autoConnect connectors = {
            connectors
        } >
        <
        div className = "sm:hidden" >
        <
        HomePageMobile / >
        <
        /div> <
        div className = "hidden sm:block" >
        <
        HomePage / >
        <
        /div> <
        /Provider>
    );
}

export default App;