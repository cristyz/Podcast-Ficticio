import './HomeCard.scss';

import { Link } from 'react-router-dom'

const HomeCard = ({ onEpisode, setOnEpisode, allEpisodes }) => {

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }



  return (
    <div className="containerListPodCast" style={{ opacity: onEpisode ? '0' : '1', display: onEpisode ? 'none' : 'flex' }}>
      <div className="banner">
        <div className="texts">
          <h1>Podlogic</h1>
          <h4>6 episódios</h4>
        </div>
      </div>
      <div className="listPodCast">

        <div className="descriptionPodCast">
          <p>SOBRE O PODCAST</p>
          <h4>
            Somos um grupo de amigos que gosta de se reunir e trocar ideias sobre
            como o mundo está transitando entre o antigo e o novo e tudo o que está mudando.
            Falamos sobre tecnologia, trabalho, lazer e nerdices.
          </h4>
          <p>Ler mais <i className="fas fa-chevron-down"></i></p>
        </div>

        <div className="listParagrafh">
          <p>LISTA DE EPISÓDIOS</p>
        </div>

        <div className="containerListEpisodes">


          <div className="listEpisodes">
            {allEpisodes.map(e => {
              return (
                <Link to={e.id.toString()} className="containerItem" key={e.name}>
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

      </div>
    </div>
  );
}

export default HomeCard;
