import AlbumIndex from "./album_index";
import { connect } from 'react-redux';
import { fetchAlbums, searchAlbums } from '../../actions/album_actions';

const msp = (state) => {
  return { albums: state.entities.albums };
};

const mdp = () => dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    searchAlbums: (search) => dispatch(searchAlbums(search))
  };
};

export default connect(
  msp,
  mdp
)(AlbumIndex);