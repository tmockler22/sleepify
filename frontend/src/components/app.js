import React from "react";
import Splash from "./splash/splash";
import Header from "./header/header";
import Footer from "./footer/footer";
import SideBar from "./sidebar/sidebar";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

import { Switch } from "react-router-dom";

const App = () => (
  <div>
    {/* <Header />
    <Splash />
    <Footer /> */}
    <SideBar />
  </div>
);

export default App;
