import { useState } from "react"

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


export default function DescriptionEpisode({ episodeDetails }) {

    const [lerMais, setLerMais] = useState(false)


    return (
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
                    {/* Primeiro cochete retorna todos os participantes até o antepenultimo */}
                    {/* Segundo cochete retorna o penultimo participante */}
                    {/* Terceito cochete retorna a letra 'e' caso o array seja maior que 1 */}
                    Participantes: {episodeDetails.participants.slice(0, -2,).map(e => `${e},`)} {episodeDetails.participants.slice(-2, -1)} {episodeDetails.participants.length <= 1 ? null : 'e'} {episodeDetails.participants.slice(-1)}
                </p>
            </div>
        </div>
    )
}