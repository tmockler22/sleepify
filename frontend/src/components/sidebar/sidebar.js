import React from "react";
import { Link } from "react-router-dom";
import SideBarNav from "./navbar/navbar";
import Playlist from "./playlist/playlist";
class SideBar extends React.Component {
  render() {
    return (
      <div className="root-navBar">
        <div className="sidebar-container">
          <SideBarNav />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default SideBar;
