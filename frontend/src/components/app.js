import React from "react";
import Splash from "./splash/splash";
import Header from "./header/header";
import Footer from "./footer/footer";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import PlayerContainer from './player/player_container';

import { Switch } from "react-router-dom";

const App = () => (
  <div>

    <Route path="/player" component={PlayerContainer} />

    <Header />
    <Splash />
    <Footer />

  </div>
);

export default App;
