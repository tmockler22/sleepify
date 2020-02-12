import React from "react";
import logo from "../../assets/images/white-logo-black-music.png";
import NavBar from "../navbar/navbar";
class Header extends React.Component {
  render() {
    return (
      <div id="header-container">
        <img id="white-logo" src={logo} alt="logo" />
        <NavBar />
      </div>
    );
  }
}

export default Header;
