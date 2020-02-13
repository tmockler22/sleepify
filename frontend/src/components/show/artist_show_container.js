import ArtistShow from "./artist_show";
import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';

const msp = (state) => {
  return { artist: state.entities.artists };
};

const mdp = () => dispatch => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
  };
};

export default connect(
  msp,
  mdp
)(ArtistShow);