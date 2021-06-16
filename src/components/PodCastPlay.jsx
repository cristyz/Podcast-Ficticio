import './PodCastPlay.scss'

import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { FaPlay, FaPause } from 'react-icons/fa';
import { TiArrowRightThick, TiArrowLeftThick } from 'react-icons/ti';


import axios from 'axios';

const PodCastPlay = ({ onEpisode, setOnEpisode, allEpisodes }) => {
    const { id } = useParams();
    // State
    const [episodeDetails, setEpisodeDetails] = useState(null)
    const [audio, setAudio] = useState(null)

    const [play, setPlay] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)
    const [inputRanger, setInputRanger] = useState(0)

    // Ref
    const AudioPlay = useRef()

    // Functions
    const tooglePlayPause = () => {
        setPlay(!play)

        let input = setInterval(() => {
            setCurrentTime(AudioPlay?.current?.currentTime);
        }, 1000)

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
                axios.get(e.data.audio).then(audio => {
                    setAudio(audio.data)
                })
            })
    }, [])


    return (
        <div className="containerPodCastPlayer" >

            <Link to='/' className="closetButton">X</Link>

            {episodeDetails != null ?
                (
                    <div className="podCastDetails">
                        <img src={episodeDetails.cover} alt='Banner' />

                        <div className="podCastTexts">
                            <div className="descriptionPodCast">
                                <h1>Episódio {episodeDetails.episodeNumber} - {episodeDetails.name}</h1>
                                <h4>
                                    {episodeDetails.description}
                                </h4>
                                <p>Ler mais <i className="fas fa-chevron-down"></i></p>
                            </div>
                            <p className='participantes'>
                                Participantes: {episodeDetails.participants.map(e => {
                                    return <span key={e}> {e} -</span>
                                })}
                            </p>

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
                                <div style={{width:`${currentTime/AudioPlay?.current?.duration*100}%`}} className="progressBarTime"></div>
                            <input style={{position:'absolute', width:'100%', left:0, bottom:-3, opacity:0}} type="range" onChange={(e) => {
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