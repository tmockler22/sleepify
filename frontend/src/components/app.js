import React from "react";
import Splash from "./splash/splash";
import Header from "./header/header";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from "react-router-dom";

const App = () => (
  <div id="app-container">
    <Header />
    <Splash />
  </div>
);

export default App;
