import PlaylistIndex from "./playlist_index";
import { connect } from 'react-redux';
import { fetchUserPlaylists } from '../../actions/playlist_actions';

const msp = (state) => {
  return { playlists: state.entities.playlist,
           currentUserId: state.session.user.id };
};

const mdp = () => dispatch => {
  return {
    fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
  };
};

export default connect(
  msp,
  mdp
)(PlaylistIndex);