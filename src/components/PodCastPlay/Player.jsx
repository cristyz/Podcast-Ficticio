import { useEffect, useState } from "react"
import calculateTime from "../../functions/calculateTime"

import { FaPlay, FaPause } from 'react-icons/fa';
import { TiArrowRightThick, TiArrowLeftThick } from 'react-icons/ti';

export default function Player({AudioPlay, episodeDetails}) {
    const [currentTime, setCurrentTime] = useState(0)
    const [play, setPlay] = useState(true)


    const tooglePlayPause = () => {
        setPlay(!play)

        if (play) {
            AudioPlay.current.play()
        } else {
            AudioPlay.current.pause()
        }
    }
    useEffect(() => {
        // Verificar e mover play de video
        let verifyBarProgress = setInterval(() => {
            setCurrentTime(AudioPlay?.current?.currentTime);
        }, 1000)

        return () => {
            clearInterval(verifyBarProgress)
        }
    })
    return (
        <div className="containerPlayer">
            <div className="countTime">
                <p>{calculateTime(currentTime)}</p>
                <div className="progressBar">
                    <div style={{ width: `${currentTime / AudioPlay?.current?.duration * 100}%` }} className="progressBarTime"></div>

                    <input className="InputProgressBar" type="range" onChange={(e) => {
                        setCurrentTime(e.target.value)
                        AudioPlay.current.currentTime = e.target.value
                    }} max={AudioPlay?.current?.duration} />

                </div>
                <p>{calculateTime(episodeDetails.duration)}</p>
            </div>

            <audio ref={AudioPlay} src={episodeDetails.audio} ></audio>


            <div className="playerButtons">
                <button className="secondsButtons">
                    <TiArrowLeftThick />
                </button>

                <button
                    className="playButton"
                    onClick={tooglePlayPause}
                >
                    {play ? <FaPlay /> : <FaPause />}
                </button>

                <button className="secondsButtons">
                    <TiArrowRightThick />
                </button>

            </div>
        </div>
    )
}