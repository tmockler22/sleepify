import * as PlaylistUtil from "../util/playlist_util";
export const RECEIVE_PLAYLIST = "CREATE_PLAYLIST";
export const RECEIVE_USER_PLAYLISTS = "RECEIVE_USER_PLAYLISTS";

export const createPlaylist = playlist => dispatch => {
  return PlaylistUtil.createPlaylist(playlist).then(playlist =>
    dispatch(receivePlaylist(playlist))
  );
};

const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

export const fetchUserPlaylists = userId => dispatch => {
  return PlaylistUtil.fetchUserPlaylists(userId).then(playlists =>
    dispatch(receivePlaylists(playlists))
  );
};

const receivePlaylists = playlists => {
  return {
    type: RECEIVE_USER_PLAYLISTS,
    playlists
  };
};
