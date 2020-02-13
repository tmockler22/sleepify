import ArtistShow from "./artist_show";
import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import { playTrack } from '../../actions/player_queue_actions';

const msp = (state) => {
  return { artist: state.entities.artists };
};

const mdp = () => dispatch => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    playTrack: (song) => dispatch(playTrack(song))
  };
};

export default connect(
  msp,
  mdp
)(ArtistShow);