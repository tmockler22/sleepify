import React from "react";
import { Route } from "react-router-dom";
import Splash from "./splash/splash";
import SearchContainer from "./index/search_container";

import SideBar from "./sidebar/sidebar";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PlayerContainer from "./player/player_container";

const App = () => (
  <div>
    <Route exact path="/" component={Splash} />
    <Route path="/player" component={PlayerContainer} />
    <Route exact path="/search" component={SearchContainer} />
    <SideBar />
  </div>
);

export default App;
