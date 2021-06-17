import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import HomeCard from './HomeCard/HomeCard';
import PodCastPlay from './PlayPodCasts/PodCastPlay';


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact render={() => {
          return (
            <div className='container'>
              <HomeCard />
            </div>
          )
        }} />
      </Switch>

      <Switch>
        <Route path="/:id" render={() => {
          return (
            <PodCastPlay />
          )
        }} />
      </Switch>

    </Router>
  );
}

export default App;
