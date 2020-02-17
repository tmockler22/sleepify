import { connect } from "react-redux";
import CreatePlaylistForm from "./create_playlist";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { createPlaylist } from "../../../actions/playlist_actions";
const mapStateToProps = state => ({
  currentUser: state.entities.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistForm);
