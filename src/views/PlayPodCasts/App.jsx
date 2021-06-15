import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import HomeCard from '../../components/HomeCard';
import PodCastPlay from '../../components/PodCastPlay';

import axios from 'axios';


function App() {
  const [onEpisode, setOnEpisode] = useState(false)

  const [allEpisodes, setAllEpisodes] = useState([])

  useEffect(() => {

    getAllDetails()

  }, [])

  async function getAllDetails() {
    axios.get('https://api-frontend-test.brlogic.com/podcast/details.json')
      .then((e) => {
        setAllEpisodes(e.data.episodes)
      })
  }
  

  return (
    <Router>

      <Switch>
        <Route path="/" exact render={() => {
          return (
            <div className='container'>
              <HomeCard onEpisode={onEpisode} setOnEpisode={setOnEpisode} allEpisodes={allEpisodes} />
            </div>
          )
        }} />
      </Switch>

      <Switch>
        <Route path="/:id" render={() => {
          return (
            <PodCastPlay onEpisode={onEpisode} setOnEpisode={setOnEpisode} allEpisodes={allEpisodes} />
          )
        }} />
      </Switch>
    </Router>
  );
}

export default App;
