import { Link } from 'react-router-dom'


import calculateTime from '../../functions/calculateTime'


export default function ListEpisodes({ allEpisodes }) {
    return (
        <div className="containerListEpisodes">

        <div className="listEpisodes">

            {allEpisodes.map(e => {
                return (
                    <Link to={e.id.toString()} className="containerItem" key={e.id}>
                        <img src={e.cover} alt="cover" />

                        <div className="detailsItem">
                            <h4>Episódio {e.episodeNumber} - {e.name}</h4>
                            <p>{calculateTime(e.duration)}</p>
                        </div>
                    </Link>
                )
            })}
        </div>

        </div>
    )
}