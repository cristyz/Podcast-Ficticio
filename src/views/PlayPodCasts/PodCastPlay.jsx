import { useEffect, useRef, useState } from 'react';

import './PodCastPlay.scss'

import { useParams, Link } from "react-router-dom";

import { IoMdClose } from 'react-icons/io';


// Functions
import getEpisodeDetails from '../../functions/getEpisodeDetails';

// Components
import DescriptionEpisode from '../../components/PodCastPlay/DescriptionEpisode';
import Player from '../../components/PodCastPlay/Player';


const PodCastPlay = () => {
    const { id } = useParams();

    // State
    const [episodeDetails, setEpisodeDetails] = useState(null)


    // Ref
    const AudioPlay = useRef()


    useEffect(() => {
        getEpisodeDetails(setEpisodeDetails, id)
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

                <Player AudioPlay={AudioPlay} episodeDetails={episodeDetails} />
                : null
            }
        </div>
    )
}

export default PodCastPlay