import { connect } from "react-redux";
import Playlist from "./playlist";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { fetchUserPlaylists } from "../../../actions/playlist_actions";

const mapStateToProps = state => ({
  playlists: state.entities.playlist,
  currentUser: state.session.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchUserPlaylists: userId => dispatch(fetchUserPlaylists(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
