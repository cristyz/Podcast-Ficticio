import './App.scss';

function App() {
  return (
    <div className="containerListPodCast">
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

        <div className="listEpisodes">
          <p>LISTA DE EPISÓDIOS</p>
        </div>

      </div>
    </div>
  );
}

export default App;
