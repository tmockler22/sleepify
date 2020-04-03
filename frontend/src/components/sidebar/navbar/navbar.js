import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/white-logo-black-music.png";
// import homeIcon from "../../../assets/images/home-icon.png";
// import magGlassIcon from "../../../assets/images/magnifying-glass-icon.png";
// import libraryIcon from "../../../assets/images/library-icon.png";
class SideBarNav extends React.Component {
  render() {
    // const search = "";
    return (
      <nav id="navBar">
        <Link className="navBar-link" to="/open">
          <img className="nav-logo white-logo" src={logo} alt=""></img>
        </Link>
        <div id="navBar-header">
          <ul id="navBar-entry-points">
            <li>
              <div className="navBar-item">
                <Link className="navBar-link" to="/open">
                  <i class="fas fa-home home-icon"></i>
                  {/* <img className="home-icon" src={homeIcon} alt=""></img> */}
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div className="navBar-item">
                <Link className="navBar-link" to="/open/search">
                  <i class="fas fa-search magGlass-icon"></i>
                  {/* <img className="magGlass-icon" src={magGlassIcon} alt=""></img> */}
                  Search
                </Link>
              </div>
            </li>
            <li>
              <div className="navBar-item">
                <Link className="navBar-link" to="/open/library">
                  <i class="fas fa-book libary-icon"></i>
                  {/* <img className="library-icon" src={libraryIcon} alt=""></img> */}
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
