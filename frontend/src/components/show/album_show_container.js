import AlbumShow from "./album_show";
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import { playTrack } from '../../actions/player_queue_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return { album: state.entities.albums };
};

const mdp = () => dispatch => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    playTrack: (song) => dispatch(playTrack(song)),
    openModal: (modal, songId) => dispatch(openModal(modal, songId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(AlbumShow);