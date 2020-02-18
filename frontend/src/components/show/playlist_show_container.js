import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { playTrack } from "../../actions/player_queue_actions";

const mapStateToProp = state => {
  return { songs: state.entities.playlist };
};

const mapDispatchToProp = () => dispatch => {
  return {};
};

export default connect(mapStateToProp, mapDispatchToProp)(PlaylistShow);
