import React from "react";
import Splash from "./splash/splash";
import Header from "./header/header";
import Footer from "./footer/footer";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

import { Switch } from "react-router-dom";

const App = () => (
  <div>
    <Header />
    <Splash />
    <Footer />
  </div>
);

export default App;
