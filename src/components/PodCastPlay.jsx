import { useEffect, useRef, useState } from 'react';

import './PodCastPlay.scss'

import { useParams, Link } from "react-router-dom";

import { FaPlay, FaPause } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { TiArrowRightThick, TiArrowLeftThick } from 'react-icons/ti';

import axios from 'axios';

const PodCastPlay = ({ allEpisodes }) => {
    const { id } = useParams();

    // State
    const [episodeDetails, setEpisodeDetails] = useState(null)
    const [lerMais, setLerMais] = useState(false)


    const [play, setPlay] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)

    // Ref
    const AudioPlay = useRef()

    // Functions
    const tooglePlayPause = () => {
        setPlay(!play)

        if (play) {
            AudioPlay.current.play()
        } else {
            AudioPlay.current.pause()
        }
    }
    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }


    const filterEpisode = allEpisodes.filter(e => e.id == id)
    const episode = filterEpisode[0]

    useEffect(() => {
        axios.get(episode.details)
            .then(e => {
                setEpisodeDetails(e.data)
            })

        // Verificar e mover play de video
        let verifyBarProgress = setInterval(() => {
            setCurrentTime(AudioPlay?.current?.currentTime);
        }, 1000)

        return () => {
            clearInterval(verifyBarProgress)
        }

    }, [])




    return (
        <div className="containerPodCastPlayer" >

            <Link to='/' className="closetButton"><IoMdClose /></Link>

            {episodeDetails != null ?
                (
                    <div className="podCastDetails">
                        <img src={episodeDetails.cover} alt='Banner' />

                        <div className="podCastTexts">
                            <div className="descriptionPodCast">
                                <h1>Episódio {episodeDetails.episodeNumber} - {episodeDetails.name}</h1>
                                <h4 style={{
                                    height: lerMais ? '50%' : '47px',
                                    background: lerMais ? 'none' : null,
                                    overflow: lerMais ? 'scroll' : null
                                }}>
                                    {episodeDetails.description}
                                </h4>
                                <p className="lermais" onClick={() => {
                                    setLerMais(!lerMais)
                                }}>Ler {lerMais ? 'menos' : 'mais'} {lerMais ? <BsChevronUp /> : <BsChevronDown />}</p>
                                <p className='participantes'>
                                    Participantes: {episodeDetails.participants.map(e => {
                                        return <span key={e}> {e} -</span>
                                    })}
                                </p>
                            </div>

                        </div>


                    </div>
                ) : null
            }


            {episodeDetails != null ?
                (
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
                ) : null
            }
        </div>
    )
}

export default PodCastPlay