import { useEffect, useRef, useState } from 'react';

import './PodCastPlay.scss'

import { useParams, Link } from "react-router-dom";

import { IoMdClose } from 'react-icons/io';


// Functions
import getEpisodeDetails from '../../functions/getEpisodeDetails';
import getEpisodeNumber from '../../functions/getEpisodeNumber';

// Components
import DescriptionEpisode from '../../components/PodCastPlay/DescriptionEpisode';
import Player from '../../components/PodCastPlay/Player';


const PodCastPlay = () => {
    const { id } = useParams();

    // State
    const [episodeDetails, setEpisodeDetails] = useState(null)
    const [proxEpi, setProxEpi] = useState(null)
    const [antEpi, setAntEpi] = useState(null)


    // Ref
    const AudioPlay = useRef()


    useEffect(() => {
        getEpisodeDetails(setEpisodeDetails, id)
        getEpisodeNumber(id, setAntEpi, setProxEpi)
    }, [id])


    return (
        <div className="containerPodCastPlayer" >

            <Link to='/' className="closetButton"><IoMdClose /></Link>

            {episodeDetails?
                (
                    <div className="podCastDetails">
                        <img src={episodeDetails.cover} alt='Banner' />

                        <DescriptionEpisode episodeDetails={episodeDetails} />

                    </div>
                ) : null
            }


            {episodeDetails?

                <Player AudioPlay={AudioPlay} episodeDetails={episodeDetails} proxEpi={proxEpi} antEpi={antEpi} />
                : null
            }
        </div>
    )
}

export default PodCastPlay