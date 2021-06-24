import { useEffect, useRef, useState } from 'react';

import './PodCastPlay.scss'

import { useParams, Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

import { IoMdClose } from 'react-icons/io';

// Action
import { storeEpisode } from '../../store/storeEpisode/storeEpisode.actions'

// Functions
import getEpisodeDetails from '../../functions/getEpisodeDetails';
import getEpisodeNumber from '../../functions/getEpisodeNumber';

// Components
import DescriptionEpisode from '../../components/PodCastPlayComponents/DescriptionEpisode/DescriptionEpisode';
import Player from '../../components/PodCastPlayComponents/Player/Player';
import LoaderComponent from '../../components/LoaderComponent/LoaderComponent';

const PodCastPlay = () => {
    const { id } = useParams();

    const dispatch = useDispatch()
    const episodesLoaded = useSelector((state) => state.episodesLoaded)

    // State
    const [episodeDetails, setEpisodeDetails] = useState(null)
    const [nextEpisode, setNextEpisode] = useState(null)
    const [previousEpisode, setPreviousEpisode] = useState(null)

    // Ref
    const AudioPlay = useRef()

    /* Busca os dados do episódio na api e cria um novo objeto com os 
    atributos do episódio, nextEpisode, previousEpisode e armazena o novo objeto no store da aplicação (Redux)
    OBS 'setEpisodeDetails(null)' é para que o componente Loader seja mostrado enquando o episódio é carregado
    */
    function getEpisodeInAPI() {
        setEpisodeDetails(null)

        setTimeout(() => {

            getEpisodeDetails(id).then(e => {
                setEpisodeDetails(e.data)

                getEpisodeNumber(id).then(idnumbers => {
                    const epi = { ...e.data, nextEpisode: idnumbers.nextEpisode, previousEpisode: idnumbers.previousEpisode }
                    dispatch(storeEpisode(epi))
                    setPreviousEpisode(idnumbers.previousEpisode)
                    setNextEpisode(idnumbers.nextEpisode)
                })
            })

        }, 1500)

    }

    /* Pega o objeto (episódio) passado como parametro e adiciona no state da aplicação 
    OBS: Ele define o State com o episódio recebido como paramentro mas não adiciona nada a Store (Redux)
    */
    function getEpisodeInStore(thisEpisode) {
        setEpisodeDetails(thisEpisode)
        thisEpisode.previousEpisode ? setPreviousEpisode(thisEpisode.previousEpisode) : setPreviousEpisode(undefined)
        thisEpisode.nextEpisode ? setNextEpisode(thisEpisode.nextEpisode) : setNextEpisode(undefined)
    }

    // Função para checar se há algum episódio já pre-carregado no Store da aplicação
    // Caso sim a função getEpisodeInStore é chamada
    // Caso não a função getEpisodeInAPI é chamda
    function checkEpisode() {
        const thisEpisode = episodesLoaded.filter(epi => epi.id.toString() === id)
        thisEpisode[0] ? getEpisodeInStore(thisEpisode[0]) : getEpisodeInAPI()
    }

    useEffect(() => {

        checkEpisode()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <div className="containerPodCastPlayer" >
            <Link to='/' className="closetButton"><IoMdClose /></Link>
            {episodeDetails ?
                <>
                    <DescriptionEpisode episodeDetails={episodeDetails} />

                    <Player AudioPlay={AudioPlay} episodeDetails={episodeDetails} nextEpisode={nextEpisode} previousEpisode={previousEpisode} />
                </>
                :
                <LoaderComponent />
            }
        </div>
    )
}

export default PodCastPlay