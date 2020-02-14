import * as SongApiUtil from "../util/song_util";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";

export const CHANGE_LIKE = "CHANGE_LIKE";
// export const DELETE_LIKE = "DELETE_LIKE"

const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

const receiveSongs = (songs) => {
  return ({
    type: RECEIVE_SONGS,
    songs,
  })
};

const changeLike = (likeData) => {
  return ({
    type: CHANGE_LIKE,
    likeData
  })
}

// const deleteLike = (likeData) => {
//   return ({
//     type: DELETE_LIKE,
//     likeData
//   })
// }

export const fetchSong = id => dispatch => {
  return SongApiUtil.fetchSong(id)
    .then(song => { dispatch(receiveSong(song)) })
};

export const fetchSongs = () => (dispatch) => {
  return SongApiUtil.fetchSongs()
    .then((songs) => { dispatch(receiveSongs(songs)) })
};

export const searchSongs = (search) => (dispatch) => {
  return SongApiUtil.searchSongs(search)
    .then((songs) => { dispatch(receiveSongs(songs)) })
};

export const toggleLike = likeData => dispatch => {
  return SongApiUtil.toggleLike(likeData).then((likeData) => { dispatch(changeLike(likeData))});
}

// export const unlikeSong = likeData => dispatch => {
//   return SongApiUtil.unlikeSong(likeData).then(data => dispatch(deleteLike(data)));
// }