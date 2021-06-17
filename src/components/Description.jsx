import { useState } from "react"

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


export default function DescriptionPodCast({data}) {

  const [lerMais, setLerMais] = useState(false)
    return (
        <div className="descriptionPodCast">
          <p>SOBRE O PODCAST</p>
          <h4 style={{
            height: lerMais ? '110px' : '67px',
            background: lerMais ? 'none' : null
          }}>
            {data?.description}
          </h4>
          <p onClick={() => {
            setLerMais(!lerMais)
          }}>Ler {lerMais ? 'menos' : 'mais'} {lerMais ? <BsChevronUp /> : <BsChevronDown />}</p>
        </div>
    )
}