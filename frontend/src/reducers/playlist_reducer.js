import {
  RECEIVE_PLAYLIST,
  RECEIVE_USER_PLAYLISTS
} from "../actions/playlist_actions";

const playlistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, oldState, {
        [action.playlist.data.playlist._id]: action.playlist.data.playlist
      });
    case RECEIVE_USER_PLAYLISTS:
      return action.playlists.data;
    default:
      return oldState;
  }
};

export default playlistReducer;
