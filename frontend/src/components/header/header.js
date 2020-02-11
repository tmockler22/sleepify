import React from "react";
import logo from "../../assets/images/white-logo-black-music.png";
import Navbar from "../navbar/navbar";
class Header extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="header-container">
        <img id="white-logo" src={logo} alt="logo" />
        <Navbar />
      </div>
    );
  }
}

export default Header;
