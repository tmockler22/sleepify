import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { fetchSongs } from '../../actions/'

const mapStateToProp = state => {
  debugger
  return { songs: state.entities.playlist };
};

const mapDispatchToProp = () => dispatch => {
  return {};
};

export default connect(mapStateToProp, mapDispatchToProp)(PlaylistShow);
