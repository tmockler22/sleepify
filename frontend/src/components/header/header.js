import React from "react";
import logo from "../../assets/images/white-logo-black-music.png";
import Greeting from "../greeting/greeting_container";
class Header extends React.Component {
  render() {
    return (
      <div id="header-container">
        <img className="white-logo" src={logo} alt="logo" />
        <Greeting />
      </div>
    );
  }
}

export default Header;
