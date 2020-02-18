import React from "react";
import { Link } from "react-router-dom";
import plusIcon from "../../../assets/images/plus-icon.png";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.renderPlaylists = this.renderPlaylists.bind(this);
    this.renderOptions = this.renderOptions.bind(this)
    this.Playlaylist = this.renamePlaylist.bind(this)
    this.renamePlaylist = this.renamePlaylist.bind(this)
    this.deletePlaylist = this.deletePlaylist.bind(this)
    this.state = {
      showDropDown: false,
      mouseCoordsleft: 0,
      currentTargetPlaylistId: null
    }
  }

  componentDidMount() {
    if (this.props.currentUserId) {
      this.props.fetchUserPlaylists(this.props.currentUserId);
    }
  }


  renderOptions(e) {
    let show
    if (e.target.dataset.playlistid) {
      show = true
    }

    this.setState({
      showDropDown: show,
      mouseCoordsLeft: e.pageX,
      mouseCoordsTop: e.pageY,
      currentTargetPlaylistId: e.target.dataset.playlistid
    })
  }

  playPlaylist(playlist) {
    console.log("playlist has been added to the queue")
  }

  renamePlaylist() {
    console.log("playlist has been renamed")
  }

  deletePlaylist(playlistId) {
    const data = {
      playlistId: playlistId,
      userId: this.props.currentUserId
    }
    return () => {
      this.props.removePlaylist(data)
      this.setState({
        showDropDown: !this.state.showDropDown
      })
    }
  }



  renderPlaylists() {
    if (this.props.playlists) {
      let playlists = Object.assign({}, this.props.playlists);
      if (playlists['current']) delete playlists['current'];
      return (
        <div id="playlists-items-container" onContextMenu={this.renderOptions} >
          {
            this.state.showDropDown && <div className="playlist-options-popup" style={{ left: this.state.mouseCoordsLeft, top: this.state.mouseCoordsTop }}>
              <p className="option-choice" onClick={this.playPlaylist}>Play Playlist</p>
              <p className="option-choice" onClick={this.renamePlaylist}>Rename Playlist </p>
              <p className="option-choice" onClick={this.deletePlaylist(this.state.currentTargetPlaylistId)}>Delete Playlist</p>
            </div>
          }
          {
            Object.values(playlists).map((playlist, i) => (
              <Link
                to={`/open/playlist/${playlist._id}`}
                className="playlists-item-container"
                key={playlist._id}
                data-playlistId={playlist._id}
                onContextMenu={this.renderOptions}
              >
                {playlist.title}
              </Link>
            ))
          }
        </ div >
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
