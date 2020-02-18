import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";

const mapStateToProp = state => {
  debugger
  return { songs: state.entities.playlist };
};

const mapDispatchToProp = () => dispatch => {
  return {};
};

export default connect(mapStateToProp, mapDispatchToProp)(PlaylistShow);
