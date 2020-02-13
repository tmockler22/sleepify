import React from "react";
import Player from "../player/player_container";
import SideBar from "../sidebar/sidebar";
import Header from "../header/header";
import Search from "../index/search_container";
import OpenHeader from "../header/open_header";
class Open extends React.Component {
  search() {
    if (this.props.history.location.pathname === "/open/search") {
      return <Search />;
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.search()}
        <OpenHeader />
        <SideBar />
        <Player />
      </div>
    );
  }
}

export default Open;
