import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
class Splash extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Header />
        <div id="colorsplash">
          <div id="splash-container">
            <h1>Music for sleepy people.</h1>
            <h4>Millions of songs. No credit card needed</h4>
            <Link to="/player" className="splash-download-bttn">
              Launch Web Player
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Splash;
