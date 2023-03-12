import React, {
    useEffect,
    useState
} from 'react'
import {
    closeBracket
} from '../../svgs/svgs';
export default function ActivityModal({
    setActivity,
    game
}) {

    const [timerState, setTimerState] = useState(0);
    const [previousGames, setPreviousGames] = useState(false)
    const [lastGame, setLastGame] = useState(0)
    useEffect(() => {
        const loadIntervalId = setInterval(() => {
            setTimerState(timerState + 1)
        }, 1000);
        return () => clearInterval(loadIntervalId)
    }, [timerState])

    async function readBetCount() {
        try {
            // This needs to read in the last game ID so that it can query those ids can get previous winnings
            let count = await game._queuedGames.end
            setLastGame(count)
        } catch {
            console.log("Could not call SC")
            setLastGame(lastGame + 1)
        }

    }


    useEffect(() => {
        console.log("Getting GAMES DATA")
        readBetCount()
        getGameData(lastGame)
    }, [timerState])

    async function getGameData(gameId) {
        let tempList = []
        while (true) {
            let gamedata = await game._games(gameId)
            if (!gamedata.finished) {
                gameId--
                console.log("Game Not Finished")
                continue
            }
            if (gamedata.id === 0) break
            if (tempList.length === 3) break
            let tempDataStruct = {
                better: gamedata.better,
                bet: parseInt(gamedata.wager),
                win: gamedata.winner
            }
            tempList.push(tempDataStruct)
            gameId--
        }
        if (tempList.length === 0) {
            setPreviousGames(false)
        } else {
            setPreviousGames(tempList)
        }
    }



    return ( <
            div className = "activityModal" > {
                previousGames && previousGames.map((_, index) => {
                    return <div key = {
                        index
                    }
                    className = "activityRow" >
                        <
                        p className = "addressText" > {
                            _.better.substring(0, 7)
                        } < /p> <
                        p className = "basic" > bet < /p> <
                        p className = "betText" > {
                            parseFloat(_.bet / 10 ** 18).toFixed(2)
                        } < /p> <
                        p className = "basic" > and < /p> {
                            _.win ? < p className = 'winnerText' > WON < /p> : <p className='loserText'>LOST</p >
                        } <
                        /div>
                })
            } {
                previousGames && < div className = 'closeBracket'
                onClick = {
                        () => {
                            setActivity(false)
                        }
                    } > {
                        closeBracket
                    } <
                    /div>} {
                        !previousGames && < h1 > LOADING... < /h1>}

                            <
                            /div>
                    )
            }