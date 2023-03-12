import {
    Fragment,
    useEffect,
    useState
} from "react";
import {
    Disclosure,
    Menu,
    Transition
} from "@headlessui/react";
import {
    AiFillHome,
    AiOutlineClose
} from "react-icons/ai";
import {
    GiHamburgerMenu
} from "react-icons/gi";
import bscflogo from "./img/beanlogo.png";
import WalletModal from "./WalletModal";
import {
    useAccount,
    useNetwork,
    useSigner
} from "wagmi";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const [wrongChain, setWrongChain] = useState(false);
    const [{
        data: account
    }, disconnect] = useAccount({
        fetchEns: false
    });
    const [openModal, setOpenModal] = useState(false);
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


    useEffect(() => {
        const getData = localStorage.getItem("appEntered");
        setAppEntered(getData);
    }, []);

    useEffect(() => {
        if (account) {
            setOpenModal(false)
        }
    }, [account])

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
        Disclosure as = "nav"
        className = "bg-black" > {
            ({
                open
            }) => ( <
                >
                <
                WalletModal openModal = {
                    openModal
                }
                setOpenModal = {
                    setOpenModal
                }
                /> <
                div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <
                div className = "flex items-center justify-between h-16" >
                <
                div className = "flex items-center" >
                <
                div className = "flex-shrink-0" >
                <
                img className = "block lg:hidden h-[2.5rem] w-auto"
                src = {
                    bscflogo
                }
                alt = "Workflow" /
                >
                <
                /div> <
                /div> <
                div className = "hidden sm:ml-6 sm:block" >
                <
                div className = "flex items-center" >
                <
                button type = "button"
                className = "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" >
                <
                span className = "sr-only" > View notifications < /span> <
                AiFillHome className = "h-6 w-6"
                aria - hidden = "true" / >
                <
                /button>

                { /* Profile dropdown */ } <
                Menu as = "div"
                className = "ml-3 relative" >
                <
                div >
                <
                Menu.Button className = "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" >
                <
                span className = "sr-only" > Open user menu < /span> <
                img className = "h-8 w-8 rounded-full"
                src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt = "" /
                >
                <
                /Menu.Button> <
                /div> <
                Transition as = {
                    Fragment
                }
                enter = "transition ease-out duration-100"
                enterFrom = "transform opacity-0 scale-95"
                enterTo = "transform opacity-100 scale-100"
                leave = "transition ease-in duration-75"
                leaveFrom = "transform opacity-100 scale-100"
                leaveTo = "transform opacity-0 scale-95" >
                <
                Menu.Items className = "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
                <
                Menu.Item > {
                    ({
                        active
                    }) => ( <
                        a href = "#"
                        className = {
                            classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                            )
                        } >
                        Your Profile <
                        /a>
                    )
                } <
                /Menu.Item> <
                Menu.Item > {
                    ({
                        active
                    }) => ( <
                        a href = "#"
                        className = {
                            classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                            )
                        } >
                        Settings <
                        /a>
                    )
                } <
                /Menu.Item> <
                Menu.Item > {
                    ({
                        active
                    }) => ( <
                        a href = "#"
                        className = {
                            classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                            )
                        } >
                        Sign out <
                        /a>
                    )
                } <
                /Menu.Item> <
                /Menu.Items> <
                /Transition> <
                /Menu> <
                /div> <
                /div> <
                div className = "-mr-2 flex sm:hidden z-10" > { /* Mobile menu button */ } {
                    !account ? ( <
                        button onClick = {
                            (e) => {
                                e.stopPropagation();
                                setOpenModal(true);
                            }
                        }
                        className = "text-white text-sm border-[#3A3A3A] border-[1px] inline-flex items-center px-4 py-2 rounded-md bg-black hover:bg-[#2F3236] mr-2" >
                        Connect Wallet <
                        /button>
                    ) : !wrongChain ? ( <
                        button onClick = {
                            disconnect
                        }
                        className = "text-white text-sm border-[#3A3A3A] border-[1px] inline-flex items-center px-4 py-2 rounded-md bg-black hover:bg-[#2F3236] mr-2" >
                        <
                        svg className = "-ml-0.5 mr-1.5 h-2 w-2 text-[#24FF00]"
                        fill = "currentColor"
                        viewBox = "0 0 8 8" >
                        <
                        circle cx = {
                            4
                        }
                        cy = {
                            4
                        }
                        r = {
                            3
                        }
                        /> <
                        /svg> {
                            account.address.substring(0, 6)
                        }...{
                            account.address.substring(38)
                        } <
                        /button>
                    ) : ( <
                        button className = "text-white text-sm border-[#3A3A3A] border-[1px] inline-flex items-center px-4 py-2 rounded-md bg-black hover:bg-[#2F3236]" >
                        WRONG CHAIN <
                        /button>
                    )
                } <
                Disclosure.Button className = "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
                <
                span className = "sr-only" > Open main menu < /span> {
                    open ? ( <
                        AiOutlineClose className = "block h-6 w-6 text-white"
                        aria - hidden = "true" /
                        >
                    ) : ( <
                        GiHamburgerMenu className = "block h-6 w-6 text-white"
                        aria - hidden = "true" /
                        >
                    )
                } <
                /Disclosure.Button> <
                /div> <
                /div> <
                /div>

                <
                Disclosure.Panel className = "sm:hidden" >
                <
                div className = "px-2 pt-2 pb-3 space-y-1" > { /* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */ } <
                Disclosure.Button as = "a"
                href = "https://bean-machine.site/"
                target = "_blank"
                rel = "noreferrer"
                className = "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                Project <
                /Disclosure.Button> <
                Disclosure.Panel className = "text-left w-full text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                <
                div > Disclaimer < /div> <
                div className = "w-full mt-1" >
                <
                p > Online gambling, even bean flip, is illegal in many countries and jurisdictions.It is your responsibility to ensure that online gambling is legal in your jurisdiction. < /p> <
                p > Bean Flip does not accept responsibility
                for any errors on this website and we do not accept liability
                for
                any financial losses incurred as a result of using this website.This is your typical double or nothing coin flip BNB betting dapp you can win double or loss your bet completely 3 % taxes goes to feed bean machine. < /p> <
                /div> <
                /Disclosure.Panel> <
                Disclosure.Panel className = "text-left w-full text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                <
                div > Affiliate < /div> <
                div className = "w-full flex mt-1" >
                <
                input id = "affiliateLink"
                className = "w-full p-2 rounded-xl text-black"
                value = {
                    `https://beanflip.pro?ref=${
                      account !== undefined ? account.address : "0x"
                    }`
                } >
                < /input> <
                button onClick = {
                    (e) => {
                        e.stopPropagation();
                        const affLink = document.getElementById("affiliateLink");
                        if (!document.queryCommandSupported("copy")) return;
                        affLink.select();
                        document.execCommand("copy");
                    }
                }
                id = "copyButton" >
                COPY <
                /button> <
                /div> <
                /Disclosure.Panel> <
                /div> <
                div className = "pt-4 pb-3 border-t border-gray-700" > < /div> {
                    /*<div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                      />
                                    </div>
                                    <div className="ml-3">
                                      <div className="text-base font-medium text-white">
                                        Tom Cook
                                      </div>
                                      <div className="text-sm font-medium text-gray-400">
                                        tom@example.com
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                      <span className="sr-only">View notifications</span>
                                      <AiFillHome className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                  </div>
                                  <div className="mt-3 px-2 space-y-1">
                                    <Disclosure.Button
                                      as="a"
                                      href="#"
                                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                      Your Profile
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                      as="a"
                                      href="#"
                                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                      Settings
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                      as="a"
                                      href="#"
                                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                      Sign out
                                    </Disclosure.Button>
                                  </div>
                                </div> */
                } <
                /Disclosure.Panel> <
                />
            )
        } <
        /Disclosure>
    );
}