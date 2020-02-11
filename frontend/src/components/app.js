import React from 'react';
import Splash from './splash/splash';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Player from './player/player';

const App = () => (
    <div>
        <Splash />
        <Player />
    </div>
)

export default App;