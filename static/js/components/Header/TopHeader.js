import {
    useState,
    useEffect,
    useCallback
} from "react";
import {
    useAccount
} from 'wagmi';

import {
    AiOutlineClose
} from 'react-icons/ai';
import SoundOnIcon from "./SoundOn.png";
import SoundOffIcon from "./SoundOff.png";
import {
    Header,
    LeftHeader,
    SoundButton,
    SoundImage,
    StatusSVG
} from "./HeaderStyles";
import {
    WalletButton
} from "./WalletButton";
import GameModeDropDown from '../DropDown/GameModeDropDown'
import ActivityModal from "./ActivityModal";
import {
    headerButtonSVG
} from "../../svgs/svgs";
import "./TopHeader.css"

export const TopHeader = ({
        gameMode,
        setGameMode,
        game,
        bscF,
        chainId,
        wrongChain
    }) => {
        const [{
            data: account
        }, disconnect] = useAccount({
            fetchEns: false,
        });
        const [affiliateOpen, setAffiliate] = useState(false);
        const [activityOpen, setActivity] = useState(false);
        const [disclaimerOpen, setDisclaimer] = useState(false);
        const [volumeImg, setVolumeImg] = useState(SoundOnIcon);
        const [volumeOn, setVolumeOn] = useState(true);
        const [headerOption, setHeaderOption] = useState(true);


        const toggleVolume = () => {
            if (volumeOn) {
                setVolumeImg(SoundOffIcon);
            } else {
                setVolumeImg(SoundOnIcon);
            }
            setVolumeOn(!volumeOn);
        }

        return ( <
                div className = "headerDiv" >
                <
                LeftHeader >
                <
                GameModeDropDown setGameMode = {
                    setGameMode
                }
                gameMode = {
                    gameMode
                } > < /GameModeDropDown> {
                    /* <div className="headerOptionDiv">
                              <div  className="headerOptionButton" onClick={()=>{headerOption !== "learn" ? setHeaderOption("learn") : setHeaderOption(false)}}>{headerButtonSVG("learn",headerOption === "learn")}</div>
                              <div className="headerOptionButton" onClick={()=>{headerOption !== "activity" ? setHeaderOption("activity") : setHeaderOption(false)}}>{headerButtonSVG("activity",headerOption === "activity")}</div>
                              <div className="headerOptionButton" onClick={()=>{headerOption !== "stats" ? setHeaderOption("stats") : setHeaderOption(false)}}>{headerButtonSVG("stats",headerOption === "stats")}</div>

                            </div> */
                } {
                    /* <SoundButton onClick={toggleVolume}>
                              <SoundImage src={volumeImg} alt="sound" />
                            </SoundButton> */
                }


                <
                div className = "centerHeader" > { /* <a>CHAT</a> */ } { /* <a href="https://bscflip.gitbook.io/welcome-to-gitbook/wT7amzGpUl9nPLOYHxm7/" target="_blank" rel="noreferrer">PROJECT</a> */ } <
                div className = "affBtn" >
                <
                p onClick = {
                    () => {
                        setDisclaimer(!disclaimerOpen)
                    }
                } > DISCLAIMER < /p> {
                    disclaimerOpen && < div className = "affModal" >
                        <
                        div className = 'toprowAff' >
                        <
                        h1 > DISCLAIMER < /h1> <
                        AiOutlineClose onClick = {
                            () => setDisclaimer(false)
                        }
                    className = "absolute cursor-pointer w-5 h-5 top-5 right-5 text-white"
                    aria - hidden = "true" / >
                        <
                        /div> <
                        p > Online gambling, even bean flip, is illegal in many countries and jurisdictions.It is your responsibility to ensure that online gambling is legal in your jurisdiction. < /p> <
                        p > Bean Flip does not accept responsibility
                    for any errors on this website and we do not accept liability
                    for
                    any financial losses incurred as a result of using this website.This is your typical double or nothing coin flip BNB betting dapp you can win double or loss your bet completely 3 % taxes goes to feed bean machine. < /p> <
                        /div>} <
                        /div>

                        <
                        div className = "affBtn" >
                        <
                        p onClick = {
                            () => {
                                setAffiliate(!affiliateOpen)
                            }
                        } > AFFILIATE < /p>

                    {
                        affiliateOpen && < div className = "affModal" >
                            <
                            div className = 'toprowAff' >
                            <
                            h1 > YOUR AFFILIATE LINK < /h1> <
                            AiOutlineClose onClick = {
                                () => setAffiliate(false)
                            }
                        className = "absolute cursor-pointer w-5 h-5 top-5 right-5 text-white"
                        aria - hidden = "true" / >
                            <
                            /div> <
                            >
                            <
                            input id = 'affiliateLink'
                        defaultValue = {
                                `https://beanflip.pro?ref=${account!== undefined ? account.address:"0x"}`
                            } > < /input> <
                            button onClick = {
                                () => {
                                    const affLink = document.getElementById("affiliateLink")
                                    if (!document.queryCommandSupported('copy')) return;
                                    affLink.select();
                                    document.execCommand('copy')
                                }
                            }
                        id = 'copyButton' > COPY < /button> <
                            /> <
                            p > -earn 0.5 % of all flips made with your link < /p> <
                            /div>} <
                            /div> <
                            div className = "activityBtn" >
                            <
                            p onClick = {
                                () => {
                                    setActivity(!activityOpen)
                                }
                            } > ACTIVITY < /p> {
                                activityOpen && < ActivityModal setActivity = {
                                    setActivity
                                }
                                game = {
                                    game
                                }
                                />} <
                                /div> <
                                /div>

                                <
                                /LeftHeader> <
                                WalletButton wrongChain = {
                                    wrongChain
                                }
                                />

                                <
                                /div>    
                            );
                    };