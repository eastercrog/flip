/* This example requires Tailwind CSS v2.0+ */
import {
    Fragment
} from "react";
import {
    Dialog,
    Transition
} from "@headlessui/react";
import {
    AiOutlineClose
} from "react-icons/ai";

export default function SetBetModal({
    open,
    setOpen,
    betLimits = {
        BNB: [(0.05 * 100) / 100, (1 * 10) / 10],
        BSCF: [(500 * 10) / 10, (100000 / 10) * 10],
    },
    selectedToken,
    activeBetAmount,
    setActiveBetAmount,
    openBetModal,
}) {
    const lowerLimit = Number(betLimits[selectedToken][0]);
    const upperLimit = Number(betLimits[selectedToken][1]);
    console.log(lowerLimit);
    console.log(upperLimit);
    return ( <
        Transition.Root show = {
            open
        }
        as = {
            Fragment
        } >
        <
        Dialog as = "div"
        className = "relative z-10"
        onClose = {
            setOpen
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
        Dialog.Panel className = "relative w-full bg-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6" >
        <
        AiOutlineClose onClick = {
            () => setOpen(false)
        }
        className = "absolute cursor-pointer top-5 right-5 text-white"
        aria - hidden = "true" /
        >
        <
        div className = "hidden sm:block absolute top-0 right-0 pt-4 pr-4" >
        <
        button type = "button"
        className = "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick = {
            () => setOpen(false)
        } >
        <
        span className = "sr-only" > Close < /span> <
        AiOutlineClose className = "h-6 w-6"
        aria - hidden = "true" / >
        <
        /button> <
        /div> <
        div className = "sm:flex sm:items-start" >
        <
        div className = "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" >
        <
        Dialog.Title as = "h3"
        className = "text-lg leading-6 font-medium text-white mb-4" >
        Select bet amount <
        /Dialog.Title> <
        /div> <
        /div> <
        div className = "mt-5 justify-center flex flex-col" >
        <
        ul className = "grid gap-6 grid-cols-2" >
        <
        li className = "mx-auto" >
        <
        button onClick = {
            () => setActiveBetAmount(lowerLimit)
        }
        className = "pushable-mobile" >
        <
        span className = "front-mobile font-bold text-[8px]" > {
            `${lowerLimit} ${selectedToken}`
        } <
        /span> <
        /button> <
        /li> <
        li className = "mx-auto" >
        <
        button onClick = {
            () => setActiveBetAmount(upperLimit * 0.1)
        }
        className = "pushable-mobile" >
        <
        span className = "front-mobile font-bold text-[8px]" > {
            `${upperLimit * 0.1} ${selectedToken}`
        } <
        /span> <
        /button> <
        /li> <
        li className = "mx-auto" >
        <
        button onClick = {
            () => {
                setActiveBetAmount(upperLimit * 0.25);
            }
        }
        className = "pushable-mobile" >
        <
        span className = "front-mobile font-bold text-[8px]" > {
            `${upperLimit * 0.25} ${selectedToken}`
        } <
        /span> <
        /button> <
        /li> <
        li className = "mx-auto" >
        <
        button onClick = {
            () => {
                setActiveBetAmount(upperLimit * 0.5);
            }
        }
        className = "pushable-mobile" >
        <
        span className = "front-mobile font-bold text-[8px]" > {
            `${upperLimit * 0.5} ${selectedToken}`
        } <
        /span> <
        /button> <
        /li> <
        li className = "mx-auto" >
        <
        button onClick = {
            () => {
                setActiveBetAmount(upperLimit * 0.75);
            }
        }
        className = "pushable-mobile" >
        <
        span className = "front-mobile font-bold text-[8px]" > {
            `${upperLimit * 0.75} ${selectedToken}`
        } <
        /span> <
        /button> <
        /li> <
        li className = "mx-auto" >
        <
        button onClick = {
            () => {
                setActiveBetAmount(upperLimit);
            }
        }
        className = "pushable-mobile" >
        <
        span className = "front-mobile font-bold text-[8px]" > {
            `${upperLimit} ${selectedToken}`
        } <
        /span> <
        /button> <
        /li> <
        /ul> <
        input type = "text"
        value = {
            activeBetAmount
        }
        placeholder = "Type your bet amount"
        onChange = {
            (e) => setActiveBetAmount(e.target.value)
        }
        className = "mx-auto bg-black px-5 text-xs w-[75%] h-10 rounded-xl border-white border-[1px] mt-4 text-white" /
        >
        <
        button onClick = {
            () => setOpen(false)
        }
        className = "pushable-mobile pushable-gold mt-10" >
        <
        span className = "front-mobile front-gold font-bold text-[8px]" >
        CONFIRM <
        /span> <
        /button> {
            /* <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(false)}
                              >
                                Deactivate
                              </button>
                              <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(false)}
                              >
                                Cancel
                              </button> */
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