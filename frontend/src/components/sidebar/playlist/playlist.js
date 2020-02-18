import React from "react";
import { Link } from "react-router-dom";
import plusIcon from "../../../assets/images/plus-icon.png";
// import ContextMenu from "react-context-menu";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.renderPlaylists = this.renderPlaylists.bind(this);
    this.renderOptions = this.renderOptions.bind(this)
    this.state = {
      showDropDown: false,
      mouseCoordsleft: 0
    }
  }

  componentDidMount() {
    if (this.props.currentUserId) {
      this.props.fetchUserPlaylists(this.props.currentUserId);
    }
  }


  renderOptions(e) {
    this.setState({
      showDropDown: !this.state.showDropDown,
      mouseCoordsLeft: e.pageX,
      mouseCoordsTop: e.pageY
    })
  }


  renderPlaylists() {
    if (this.props.playlists) {
      return (
        <div id="playlists-items-container">
          {this.state.showDropDown && <div className="playlist-options-popup" style={{ left: this.state.mouseCoordsLeft, top: this.state.mouseCoordsTop }}>
            <p className="option-choice">Play Playlist</p>
            <p className="option-choice">Rename Playlist </p>
            <p className="option-choice">Delete Playlist</p>
          </div>}
          {
            Object.values(this.props.playlists).map((playlist, i) => (
              <Link
                to={`/open/playlist/${playlist._id}`}
                className="playlists-item-container"
                key={`playlist-${i}`}
                onContextMenu={this.renderOptions}
              >
                {playlist.title}
              </Link>
            ))
          }
        </div >
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
