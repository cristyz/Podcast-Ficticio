import { useState } from "react"

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


export default function DescriptionEpisode({episodeDetails}) {

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
                    Participantes: {episodeDetails.participants.map(e => {
                        return <span key={e}> {e} -</span>
                    })}
                </p>
            </div>
        </div>
    )
}