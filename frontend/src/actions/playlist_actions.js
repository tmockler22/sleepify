import * as PlaylistUtil from "../util/playlist_util";
export const RECEIVE_PLAYLIST = "CREATE_PLAYLIST";

export const createPlaylist = playlist => dispatch => {
  return PlaylistUtil.createPlaylist(playlist).then(() =>
    dispatch(receivePlaylist)
  );
};

const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};
