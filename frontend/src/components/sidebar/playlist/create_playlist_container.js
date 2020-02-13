import { connect } from "react-redux";
import CreatePlaylistForm from "./create_playlist";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { createPlaylist } from "../../../actions/playlist_actions";
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  createPlaylist: playlist => dispatch(createPlaylist)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistForm);
