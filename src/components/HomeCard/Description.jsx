import { useState } from "react"

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


export default function DescriptionPodCast({data}) {

  const [readMode, setReadMode] = useState(false)
    return (
        <div className="descriptionPodCast">
          <p>SOBRE O PODCAST</p>
          <h4 style={{
            height: readMode ? '110px' : '67px',
            background: readMode ? 'none' : null
          }}>
            {data?.description}
          </h4>
          <p onClick={() => {
            setReadMode(!readMode)
          }}>Ler {readMode ? 'menos' : 'mais'} {readMode ? <BsChevronUp /> : <BsChevronDown />}</p>
        </div>
    )
}