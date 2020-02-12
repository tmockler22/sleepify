import React from "react";
import Splash from "./splash/splash";
import Header from "./header/header";

import SearchContainer from "./index/search_container";
import { Route } from "react-router-dom";
=======
import Footer from "./footer/footer";

// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import PlayerContainer from './player/player_container';

const App = () => (
  <div>

    <Route path="/player" component={PlayerContainer} />

    <Header />
    <Route exact path ="/" component={Splash} />
    <Route exact path="/search" component={SearchContainer} />
    <Splash />
    <Footer />

  </div>
);

export default App;
