import { useState } from "react"

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


export default function DescriptionEpisode({ episodeDetails }) {

    const [readMore, setReadMore] = useState(false)


    return (
        <div className="podCastTexts">
            <div className="descriptionPodCast">
                <h1>Episódio {episodeDetails.episodeNumber} - {episodeDetails.name}</h1>
                <h4 style={{
                    height: readMore ? '50%' : '47px',
                    background: readMore ? 'none' : null,
                    overflow: readMore ? 'scroll' : null
                }}>
                    {episodeDetails.description}
                </h4>
                <p className="lermais" onClick={() => {
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
    )
}