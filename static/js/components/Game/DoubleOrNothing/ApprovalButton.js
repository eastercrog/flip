import {
    parseUnits
} from "@ethersproject/units";
import {
    GameButton
} from "./FlipStyles";

export const ApprovalButton = (({
            muuinu,
            selectedTokenAddress,
            safemoon2,
            bscF,
            game
        }) => {
            const requestAllowance = parseUnits("1", 25);
            const approveContract = async () => {
                try {
                    if (selectedTokenAddress === bscF.address) {
                        await bscF.approve(game.address, requestAllowance);
                    }

                } catch (err) {
                    console.log(err);
                }
            }
            if (selectedTokenAddress === "0x0000000000000000000000000000000000000000") {
                return < > < />
            }
            return ( <
                > {
                    bscF && selectedTokenAddress === bscF.address &&
                    <
                    GameButton
                    wide = {
                        true
                    }
                    onClick = {
                        approveContract
                    } > APPROVE $BSCF <
                    /GameButton>} {
                        /* {safemoon2 && selectedTokenAddress === safemoon2.address && 
                                <GameButton 
                                wide={true}
                                onClick={approveContract}>APPROVE $SAFEMOON2
                              </GameButton>}
                            {muuinu && selectedTokenAddress === muuinu.address && 
                                <GameButton 
                                wide={true}
                                onClick={approveContract}>APPROVE $MUUINU
                              </GameButton>} */
                    } <
                    />

                );
            });