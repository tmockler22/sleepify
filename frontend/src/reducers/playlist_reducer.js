import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";

const playlistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, oldState, {
        [action.playlist.data.playlist._id]: action.playlist.data.playlist
      });
    default:
      return oldState;
  }
};

export default playlistReducer;
