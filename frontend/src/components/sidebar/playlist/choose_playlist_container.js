import { connect } from "react-redux";
import ChoosePlaylist from "./choose_playlist";
import { openModal, closeModal } from "../../../actions/modal_actions";

const mapStateToProps = state => {
 debugger; 
  return {currentUser: state.session.user,
          playlists: state.entities.playlists}
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePlaylist);