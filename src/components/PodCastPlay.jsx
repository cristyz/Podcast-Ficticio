import './PodCastPlay.scss'

import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";


import axios from 'axios';

const PodCastPlay = ({ onEpisode, setOnEpisode, allEpisodes }) => {
    const { id } = useParams();

    const [episodeDetails, setEpisodeDetails] = useState(null)

    const filterEpisode = allEpisodes.filter(e => e.id == id)
    const episode = filterEpisode[0]

    useEffect(() => {
        axios.get(episode.details)
            .then(e => {
                setEpisodeDetails(e.data)
                console.log(e.data);
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
                                    return <span> {e} -</span>
                                })}
                            </p>
                        </div>


                    </div>
                ) : null
            }
        </div>
    )
}

export default PodCastPlay