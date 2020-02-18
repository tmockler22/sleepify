import {
  RECEIVE_PLAYLIST,
  RECEIVE_USER_PLAYLISTS,
  SHOW_PLAYLIST,
  DELETE_PLAYLIST
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
    case SHOW_PLAYLIST:
      return Object.assign({}, oldState, { [action.playlist.data._id]: action.playlist.data })
    case DELETE_PLAYLIST:
      const newState = Object.assign({}, oldState)
      delete newState[action.playlist.data._id]
      return newState

    default:
      return oldState;
  }
};

export default playlistReducer;
