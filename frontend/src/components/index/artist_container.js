import ArtistIndex from "./artist_index";
import { connect } from 'react-redux';
import { fetchArtists, searchArtists } from '../../actions/artist_actions';

const msp = (state) => {
  return { artists: state.entities.artists };
};

const mdp = () => dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
    searchArtists: (search) => dispatch(searchArtists(search))
  };
};

export default connect(
  msp,
  mdp
)(ArtistIndex);