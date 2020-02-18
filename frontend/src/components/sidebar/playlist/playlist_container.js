import { connect } from "react-redux";
import Playlist from "./playlist";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { fetchUserPlaylists, removePlaylist } from "../../../actions/playlist_actions";
import { playAllTracks } from '../../../actions/player_queue_actions';
const mapStateToProps = state => ({
  playlists: state.entities.playlist,
  currentUserId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchUserPlaylists: userId => dispatch(fetchUserPlaylists(userId)),
  playAllTracks: (songs) => dispatch(playAllTracks(songs)),
  removePlaylist: (playlistId) => dispatch(removePlaylist(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
