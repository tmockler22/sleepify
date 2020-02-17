import GenreShow from "./genre_show";
import { connect } from 'react-redux';
import { fetchSongsByGenre } from '../../actions/song_actions';
import { playTrack } from '../../actions/player_queue_actions';
import { addSongToPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return { songs: state.entities.songs }
};

const mdp = () => dispatch => {
  return {
    fetchSongsByGenre: (genre) => dispatch(fetchSongsByGenre(genre)),
    playTrack: (song) => dispatch(playTrack(song)),
    addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(GenreShow);