import { useState } from "react"

import './DescriptionEpisode.scss'

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export default function DescriptionEpisode({ episodeDetails }) {

    const [readMore, setReadMore] = useState(false)

    return (
        <div className="podCastDetails">
            <img src={episodeDetails.cover} alt='Banner' />
            <div className="podCastTexts">
                <div className="PodCastDescription">
                    <h1>Episódio {episodeDetails.episodeNumber} - {episodeDetails.name}</h1>
                    <div style={{
                        height: readMore ? '80%' : '20%',
                        background: readMore ? 'none' : null,
                        overflow: readMore ? 'scroll' : null
                    }}>
                        {/* Transforma a descrição em um array dividido pelos '.' e adiciona a ela quebra de linha */}
                        {episodeDetails.description.split('.').slice(0, -1).map(e => <span key={e}>  {e + '.'} <br></br> <br></br> </span>)} {episodeDetails.description.split('.').slice(-1).map(e => <span key={e}> {e} </span>)}
                    </div>
                    <p className="readMode" onClick={() => {
                        setReadMore(!readMore)
                    }}>Ler {readMore ? 'menos' : 'mais'} {readMore ? <BsChevronUp /> : <BsChevronDown />}</p>
                    <p className='participantes'>
                        {/* Primeiro cochete retorna todos os participantes até o antepenultimo */}
                        {/* Segundo cochete retorna o penultimo participante */}
                        {/* Terceito cochete retorna a letra 'e' caso o array seja maior que 1 */}
                        Participantes: {episodeDetails.participants.slice(0, -2,).map(e => `${e},`)} {episodeDetails.participants.slice(-2, -1)} {episodeDetails.participants.length <= 1 ? null : 'e'} {episodeDetails.participants.slice(-1)}
                    </p>
                </div>
            </div>
        </div>
    )
}