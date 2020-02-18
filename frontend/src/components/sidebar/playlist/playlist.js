import React from "react";
import { Link } from "react-router-dom";
import plusIcon from "../../../assets/images/plus-icon.png";
// import ContextMenu from "react-context-menu";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.renderPlaylists = this.renderPlaylists.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUserId) {
      this.props.fetchUserPlaylists(this.props.currentUserId);
    }
  }

  renderPlaylists() {
    if (this.props.playlists) {
      return (
        <ul id="playlists-items-container">
          {Object.values(this.props.playlists).map((playlist, i) => (
            <div draggable="true" className="playlists-item-container">
              <Link
                to={`/playlist/${playlist.id}`}
                className="playlist"
                key={`playlist-${i}`}
              >
                {playlist.title}
              </Link>
            </div>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="playlist-container">
        <h4>Playlists</h4>
        <div className="navBar-item">
          <div
            className="navBar-link"
            onClick={() => this.props.openModal("createPlaylist")}
          >
            <img className="plus-icon" src={plusIcon} alt=""></img>
            Create Playlist
          </div>
        </div>
        <hr className="divider"></hr>
        {this.renderPlaylists()}
      </div>
    );
  }
}

export default Playlist;
