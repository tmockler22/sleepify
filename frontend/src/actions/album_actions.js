import * as AlbumApiUtil from "../util/album_util";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

const receiveAlbums = (albums) => {
  return ({
    type: RECEIVE_ALBUMS,
    albums,
  })
};

export const fetchAlbum = id => dispatch => {
  return AlbumApiUtil.fetchAlbum(id)
    .then(album => { dispatch(receiveAlbum(album)) })
};

export const fetchAlbums = () => (dispatch) => {
  return AlbumApiUtil.fetchAlbums()
    .then((albums) => { dispatch(receiveAlbums(albums)) })
};

export const searchAlbums = (search) => (dispatch) => {
  return AlbumApiUtil.searchAlbums(search)
    .then((albums) => { dispatch(receiveAlbums(albums)) })
};