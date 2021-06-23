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
import LoaderComponent from '../../components/LoaderComponent/LoaderComponent';

const PodCastPlay = () => {
    const { id } = useParams();

    // State
    const [episodeDetails, setEpisodeDetails] = useState(null)
    const [nextEpisode, setNextEpisode] = useState(null)
    const [previousEpisode, setPreviousEpisode] = useState(null)

    // Ref
    const AudioPlay = useRef()

    useEffect(() => {
        setTimeout(() => {
            getEpisodeDetails(setEpisodeDetails, id)
            getEpisodeNumber(id, setPreviousEpisode, setNextEpisode)
        }, 1500)
    }, [id])

    return (
        <div className="containerPodCastPlayer" >

            <Link to='/' className="closetButton"><IoMdClose /></Link>

            {episodeDetails ?
                (
                    <>
                    <div className="podCastDetails">
                        <img src={episodeDetails.cover} alt='Banner' />

                        <DescriptionEpisode episodeDetails={episodeDetails} />

                    </div>
                    <Player AudioPlay={AudioPlay} episodeDetails={episodeDetails} nextEpisode={nextEpisode} previousEpisode={previousEpisode} />
                    </>
                ) 
                :
                <LoaderComponent />
            }
            
        </div>
    )
}

export default PodCastPlay