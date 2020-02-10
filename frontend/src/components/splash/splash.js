import React from "react";
class Splash extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="colorsplash">
        <div id="splash-container">
          <h1>Music for sleepy people.</h1>
          <h4>Millions of songs. No credit card needed</h4>
          <button className="splash-download-bttn"> GET SLEEPIFY FREE</button>
        </div>
      </div>
    );
  }
}

export default Splash;
