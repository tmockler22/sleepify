import React from "react";

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
    this.showSongs = this.showSongs.bind(this);
  }


  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id)
  }

  showSongs() {
    if (!this.props.playlist) return null;
    // const songs = Object.values(this.props.playlist.songs);
    // if (songs.length === 0) return <div>Empty</div>
    // return <div>{songs[0].title}</div>
  }

  render() {

    return (
      <div className="open-player-body">
        <div className="ps-container">
          <div className="ps-left">
        
          </div>

          <div className="ps-right">
              {this.showSongs()}
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
