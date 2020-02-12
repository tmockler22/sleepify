import React from "react";
class Splash extends React.Component {
  render() {
    return (
      <div id="app-container">
        <div id="colorsplash">
          <div id="splash-container">
            <h1>Music for sleepy people.</h1>
            <h4>Millions of songs. No credit card needed</h4>
            <button className="splash-download-bttn"> GET SLEEPIFY FREE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
