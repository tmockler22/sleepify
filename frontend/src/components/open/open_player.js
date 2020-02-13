import React from "react";
import Player from '../player/player_container';
import SideBar from "../sidebar/sidebar";
import Header from "../header/header";
import { Route } from "react-router-dom";
import Search from "../index/search_container";
class Open extends React.Component {

  search() {
    if (this.props.history.location.pathname === "/open/search") {
      return <Search /> 
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.search()}
        <SideBar />
        <Player />
      </div>
    );
  }
}

export default Open;