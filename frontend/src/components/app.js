import React from "react";
import Splash from "./splash/splash";
import Header from "./header/header";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import PlayerContainer from './player/player_container';

import { Switch } from "react-router-dom";

const App = () => (
  <div>
    {/* <Header />
    <Splash /> */}
    <Route path="/player" component={PlayerContainer} />
  </div>
);


export default App;
