import React from "react";
import Splash from "./splash/splash";
import Header from "./header/header";
import SearchContainer from "./index/search_container";
import { Route } from "react-router-dom";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id="app-container">
    <Header />
    <Route exact path ="/" component={Splash} />
    <Route exact path="/search" component={SearchContainer} />
  </div>
);


export default App;
