import {
    Fragment,
    useState
} from "react";
import {
    Dialog,
    Transition
} from "@headlessui/react";
import {
    AiOutlineWallet
} from "react-icons/ai";
import metamasksvg from "./img/MetaMask_Fox.svg";
import coinbasesvg from "./img/Coinbase.svg";
import walletconnectsvg from "./img/WalletConnect.svg";
import {
    useAccount,
    useConnect
} from "wagmi";

const svgMapper = {
    injected: metamasksvg,
    walletConnect: walletconnectsvg,
    walletLink: coinbasesvg,
};

export default function WalletModal({
    openModal,
    setOpenModal
}) {
    const [{
        data: connectData,
        error: connectError
    }, connect] = useConnect();
    const [connector, setConnector] = useState(connectData.connectors[0]);

    return ( <
        Transition.Root show = {
            openModal
        }
        as = {
            Fragment
        } >
        <
        Dialog as = "div"
        className = "relative z-10 w-full"
        onClose = {
            setOpenModal
        } >
        <
        Transition.Child as = {
            Fragment
        }
        enter = "ease-out duration-300"
        enterFrom = "opacity-0"
        enterTo = "opacity-100"
        leave = "ease-in duration-200"
        leaveFrom = "opacity-100"
        leaveTo = "opacity-0" >
        <
        div className = "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" / >
        <
        /Transition.Child>

        <
        div className = "fixed z-10 inset-0 overflow-y-auto" >
        <
        div className = "flex items-center justify-center min-h-full p-4 text-center sm:p-0" >
        <
        Transition.Child as = {
            Fragment
        }
        enter = "ease-out duration-300"
        enterFrom = "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo = "opacity-100 translate-y-0 sm:scale-100"
        leave = "ease-in duration-200"
        leaveFrom = "opacity-100 translate-y-0 sm:scale-100"
        leaveTo = "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
        <
        Dialog.Panel className = "w-full relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6" >
        <
        div className = "hidden sm:block absolute top-0 right-0 pt-4 pr-4" >
        <
        button type = "button"
        className = "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick = {
            () => setOpenModal(false)
        } >
        <
        span className = "sr-only" > Close < /span> { /* <AiOutlineClose className="h-6 w-6" aria-hidden="true" /> */ } <
        /button> <
        /div> <
        div className = "sm:flex sm:items-start" >
        <
        div className = "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10" >
        <
        AiOutlineWallet className = "h-6 w-6 text-gray-600"
        aria - hidden = "true" /
        >
        <
        /div> <
        div className = "w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" >
        <
        Dialog.Title as = "h3"
        className = "text-lg leading-6 font-medium text-gray-900" >
        Choose your Wallet <
        /Dialog.Title> <
        /div> <
        /div> <
        div className = "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse" > {
            connectData.connectors.map((connector) => ( <
                button type = "button"
                className = "mt-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick = {
                    () => connect(connector)
                } >
                <
                img src = {
                    svgMapper[connector.id]
                }
                alt = "metamask_logo"
                className = "mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria - hidden = "true" /
                > {
                    connector.name
                } {
                    !connector.ready && " (unsupported)"
                } <
                /button>
            ))
        } <
        /div> <
        /Dialog.Panel> <
        /Transition.Child> <
        /div> <
        /div> <
        /Dialog> <
        /Transition.Root>
    );
}