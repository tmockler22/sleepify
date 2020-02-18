import React from "react";

class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchplaylist(this.props.match.params.id);
  }

  render() {
    return <div className="playlist-page"></div>;
  }
}

export default PlaylistShow;
