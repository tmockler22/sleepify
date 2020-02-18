import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { withRouter } from "react-router-dom";
import { fetchPlaylist } from '../../actions/playlist_actions';
const mapStateToProp = (state, ownProps) => {
  return {
    currentUserId: state.session.user.id,
    playlist: state.entities.playlist[ownProps.match.params.id],
  };
};
const mapDispatchToProp = dispatch => {
  return {
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
  };
};
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(PlaylistShow));