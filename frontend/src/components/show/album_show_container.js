import AlbumShow from "./album_show";
import { connect } from 'react-redux';
import { fetchAlbum, toggleAlbumLike } from '../../actions/album_actions';
import { playTrack } from '../../actions/player_queue_actions';
import {fetchUser} from '../../actions/user_actions'
import { addSongToPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return { 
    album: state.entities.albums, 
    currentUserId: state.session.user.id,
    currentUser: state.entities.users[state.session.user.id],
  };
};

const mdp = () => dispatch => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    playTrack: (song) => dispatch(playTrack(song)),
    toggleAlbumLike: (likeData) => dispatch(toggleAlbumLike(likeData)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(AlbumShow);