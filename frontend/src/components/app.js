import React from "react";
import Splash from "./splash/splash";
import Header from "./header/header";
import { Route } from "react-router-dom";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import OpenPlayer from './open/open_player'
const App = () => (
  <div>
    <Header />
    <Route exact path ="/" component={Splash} />
    <Route path ="/open" component ={OpenPlayer} />
  </div>
);

export default App;
