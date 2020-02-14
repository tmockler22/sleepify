import AlbumShow from "./album_show";
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import { playTrack } from '../../actions/player_queue_actions';

const msp = (state) => {
  return { album: state.entities.albums };
};

const mdp = () => dispatch => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    playTrack: (song) => dispatch(playTrack(song))
  };
};

export default connect(
  msp,
  mdp
)(AlbumShow);