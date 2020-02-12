import SongIndex from "./songs";
import { connect } from 'react-redux';
import { fetchSongs, searchSongs } from '../../actions/song_actions';

const msp = (state) => {
  return { songs: state.entities.songs };
};

const mdp = () => dispatch => {
  return { fetchSongs: () => dispatch(fetchSongs()),
           searchSongs: (search) => dispatch(searchSongs(search)) };
};

export default connect(
  msp,
  mdp
)(SongIndex);