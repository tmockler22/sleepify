import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/white-logo-black-music.png";
import homeIcon from "../../../assets/images/home-icon.png";
import magGlassIcon from "../../../assets/images/magnifying-glass-icon.png";
import libraryIcon from "../../../assets/images/library-icon.png";
class SideBarNav extends React.Component {
  render() {
    return (
      <nav id="navBar">
        <div id="navBar-header">
          <Link to="/">
            <img className="white-logo-nav" src={logo} />
          </Link>
          <ul id="navBar-entry-points">
            <li>
              <div className="navBar-item">
                <Link className="navBar-link" to="/">
                  <img className="home-icon" src={homeIcon}></img>
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div className="navBar-item">
                <Link className="navBar-link" to="/search">
                  <img className="magGlass-icon" src={magGlassIcon}></img>
                  Search
                </Link>
              </div>
            </li>
            <li>
              <div className="navBar-item">
                <Link className="navBar-link" to="/library">
                  <img className="library-icon" src={libraryIcon}></img>
                  Your Library
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideBarNav;
