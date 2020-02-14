import React from "react";
import Player from "../player/player_container";
import SideBar from "../sidebar/sidebar";
import Search from "../index/search_container";
import ArtistShow from "../show/artist_show_container";
import OpenHeader from "./open_header";
// import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import { Switch, Route } from "react-router-dom";
import Mainview from "./mainview";

class Open extends React.Component {
  componentDidMount = () => {
    this.props.history.replace("/open");
  };
  render() {
    return (
      <div className="open-player">
        <Mainview />
        <OpenHeader />
        <SideBar />
        <Player />
        <Switch>
          <Route path="/open/search" component={Search} />
          <Route
            path="/open/artist/:id"
            component={ArtistShow}
            id={this.props.id}
          />
        </Switch>
      </div>
    );
  }
}

export default Open;
