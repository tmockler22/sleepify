(this["webpackJsonpfrontend"] = this["webpackJsonpfrontend"] || []).push([["main"],{

/***/ "./src/actions/artist_actions.js":
/*!***************************************!*\
  !*** ./src/actions/artist_actions.js ***!
  \***************************************/
/*! exports provided: RECEIVE_ARTIST, RECEIVE_ARTISTS, fetchArtist, fetchArtists, searchArtists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ARTIST", function() { return RECEIVE_ARTIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ARTISTS", function() { return RECEIVE_ARTISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArtist", function() { return fetchArtist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArtists", function() { return fetchArtists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchArtists", function() { return searchArtists; });
/* harmony import */ var _util_artist_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/artist_util */ "./src/util/artist_util.js");

const RECEIVE_ARTIST = "RECEIVE_ARTIST";
const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

const receiveArtist = artist => {
  return {
    type: RECEIVE_ARTIST,
    artist
  };
};

const receiveArtists = artists => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

const fetchArtist = id => dispatch => {
  return _util_artist_util__WEBPACK_IMPORTED_MODULE_0__["fetchArtist"](id).then(artist => {
    dispatch(receiveArtist(artist));
  });
};
const fetchArtists = () => dispatch => {
  return _util_artist_util__WEBPACK_IMPORTED_MODULE_0__["fetchArtists"]().then(artists => {
    dispatch(receiveArtists(artists));
  });
};
const searchArtists = search => dispatch => {
  return _util_artist_util__WEBPACK_IMPORTED_MODULE_0__["searchArtists"](search).then(artists => {
    dispatch(receiveArtists(artists));
  });
};

/***/ }),

/***/ "./src/actions/modal_actions.js":
/*!**************************************!*\
  !*** ./src/actions/modal_actions.js ***!
  \**************************************/
/*! exports provided: OPEN_MODAL, CLOSE_MODAL, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL", function() { return OPEN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MODAL", function() { return CLOSE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};
const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

/***/ }),

/***/ "./src/actions/player_actions.js":
/*!***************************************!*\
  !*** ./src/actions/player_actions.js ***!
  \***************************************/
/*! exports provided: RECEIVE_VOLUME, receiveVolume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_VOLUME", function() { return RECEIVE_VOLUME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveVolume", function() { return receiveVolume; });
const RECEIVE_VOLUME = 'RECEIVE_VOLUME';
const receiveVolume = volume => ({
  type: RECEIVE_VOLUME,
  volume
});

/***/ }),

/***/ "./src/actions/player_queue_actions.js":
/*!*********************************************!*\
  !*** ./src/actions/player_queue_actions.js ***!
  \*********************************************/
/*! exports provided: PLAY_TRACK, PLAY_ALL_TRACKS, ADD_TRACK, REMOVE_TRACK, REMOVE_ALL_TRACKS, NEXT_TRACK, PREV_TRACK, SHUFFLE_TRACKS, playTrack, playAllTracks, addTrack, removeTrack, removeAllTracks, nextTrack, prevTrack, shuffleTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_TRACK", function() { return PLAY_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_ALL_TRACKS", function() { return PLAY_ALL_TRACKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TRACK", function() { return ADD_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TRACK", function() { return REMOVE_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_TRACKS", function() { return REMOVE_ALL_TRACKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_TRACK", function() { return NEXT_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREV_TRACK", function() { return PREV_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHUFFLE_TRACKS", function() { return SHUFFLE_TRACKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playTrack", function() { return playTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAllTracks", function() { return playAllTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTrack", function() { return addTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTrack", function() { return removeTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllTracks", function() { return removeAllTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTrack", function() { return nextTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevTrack", function() { return prevTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleTracks", function() { return shuffleTracks; });
const PLAY_TRACK = 'PLAY_TRACK';
const PLAY_ALL_TRACKS = 'PLAY_ALL_TRACKS';
const ADD_TRACK = 'ADD_TRACK';
const REMOVE_TRACK = 'REMOVE_TRACK';
const REMOVE_ALL_TRACKS = 'REMOVE_ALL_TRACKS';
const NEXT_TRACK = 'NEXT_TRACK';
const PREV_TRACK = 'PREV_TRACK';
const SHUFFLE_TRACKS = 'SHUFFLE_TRACKS';
const playTrack = track => ({
  type: PLAY_TRACK,
  track
});
const playAllTracks = tracks => ({
  type: PLAY_ALL_TRACKS,
  tracks
});
const addTrack = track => ({
  type: ADD_TRACK,
  track
});
const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
});
const removeAllTracks = () => ({
  type: REMOVE_ALL_TRACKS
});
const nextTrack = () => ({
  type: NEXT_TRACK
});
const prevTrack = () => ({
  type: PREV_TRACK
});
const shuffleTracks = () => ({
  type: SHUFFLE_TRACKS
});

/***/ }),

/***/ "./src/actions/playlist_actions.js":
/*!*****************************************!*\
  !*** ./src/actions/playlist_actions.js ***!
  \*****************************************/
/*! exports provided: RECEIVE_PLAYLIST, createPlaylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_PLAYLIST", function() { return RECEIVE_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlaylist", function() { return createPlaylist; });
/* harmony import */ var _util_playlist_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/playlist_util */ "./src/util/playlist_util.js");

const RECEIVE_PLAYLIST = "CREATE_PLAYLIST";
const createPlaylist = playlist => dispatch => {
  return _util_playlist_util__WEBPACK_IMPORTED_MODULE_0__["createPlaylist"](playlist).then(playlist => dispatch(receivePlaylist(playlist)));
};

const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

/***/ }),

/***/ "./src/actions/session_actions.js":
/*!****************************************!*\
  !*** ./src/actions/session_actions.js ***!
  \****************************************/
/*! exports provided: RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN, receiveCurrentUser, receiveUserSignIn, receiveErrors, logoutUser, signup, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CURRENT_USER", function() { return RECEIVE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_SESSION_ERRORS", function() { return RECEIVE_SESSION_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USER_LOGOUT", function() { return RECEIVE_USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USER_SIGN_IN", function() { return RECEIVE_USER_SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveCurrentUser", function() { return receiveCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveUserSignIn", function() { return receiveUserSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveErrors", function() { return receiveErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/session_api_util */ "./src/util/session_api_util.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
// src/actions/session_actions.js


const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN"; // We'll dispatch this when our user signs in

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
}); // This will be used to redirect the user to the login page upon signup

const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
}); // We dispatch this one to show authentication errors on the frontend

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
}); // When our user is logged out, we will dispatch this action to set isAuthenticated to false

const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
}); // Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend

const signup = user => dispatch => _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["signup"](user).then(() => dispatch(receiveUserSignIn()), err => dispatch(receiveErrors(err.response.data))); // Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
//review of this on React 5 video

const login = user => dispatch => _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["login"](user).then(res => {
  const {
    token
  } = res.data; //allows you to save token on the client side so user can use the same token upon refresh

  localStorage.setItem("jwtToken", token);
  _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["setAuthToken"](token);
  const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
  dispatch(receiveCurrentUser(decoded));
}).catch(err => {
  dispatch(receiveErrors(err.response.data));
}); // We wrote this one earlier

const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["setAuthToken"](false);
  dispatch(logoutUser());
}; //to root reducer
//or
//session_api_util.js to create actual request

/***/ }),

/***/ "./src/actions/song_actions.js":
/*!*************************************!*\
  !*** ./src/actions/song_actions.js ***!
  \*************************************/
/*! exports provided: RECEIVE_SONG, RECEIVE_SONGS, CHANGE_LIKE, fetchSong, fetchSongs, searchSongs, toggleLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_SONG", function() { return RECEIVE_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_SONGS", function() { return RECEIVE_SONGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LIKE", function() { return CHANGE_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSong", function() { return fetchSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSongs", function() { return fetchSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSongs", function() { return searchSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLike", function() { return toggleLike; });
/* harmony import */ var _util_song_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/song_util */ "./src/util/song_util.js");

const RECEIVE_SONG = "RECEIVE_SONG";
const RECEIVE_SONGS = "RECEIVE_SONGS";
const CHANGE_LIKE = "CHANGE_LIKE"; // export const DELETE_LIKE = "DELETE_LIKE"

const receiveSong = song => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

const changeLike = likeData => {
  return {
    type: CHANGE_LIKE,
    likeData
  };
}; // const deleteLike = (likeData) => {
//   return ({
//     type: DELETE_LIKE,
//     likeData
//   })
// }


const fetchSong = id => dispatch => {
  return _util_song_util__WEBPACK_IMPORTED_MODULE_0__["fetchSong"](id).then(song => {
    dispatch(receiveSong(song));
  });
};
const fetchSongs = () => dispatch => {
  return _util_song_util__WEBPACK_IMPORTED_MODULE_0__["fetchSongs"]().then(songs => {
    dispatch(receiveSongs(songs));
  });
};
const searchSongs = search => dispatch => {
  return _util_song_util__WEBPACK_IMPORTED_MODULE_0__["searchSongs"](search).then(songs => {
    dispatch(receiveSongs(songs));
  });
};
const toggleLike = likeData => dispatch => {
  return _util_song_util__WEBPACK_IMPORTED_MODULE_0__["toggleLike"](likeData).then(data => {
    dispatch(changeLike(data));
  });
}; // export const unlikeSong = likeData => dispatch => {
//   return SongApiUtil.unlikeSong(likeData).then(data => dispatch(deleteLike(data)));
// }

/***/ }),

/***/ "./src/assets/images/home-icon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/home-icon.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/home-icon.8a80c615.png";

/***/ }),

/***/ "./src/assets/images/library-icon.png":
/*!********************************************!*\
  !*** ./src/assets/images/library-icon.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAeNQTFRFRERA7u7u/v7+////////////////+vr6RERARERA5eXl/////////////////////v7+////////////+/v7+/v7////+fn5/f391dXU/f39////8PDw/v7+/v7+V1dU/f39/////v799vb19vb19fX19vb29vb2/v7+////8PDv/f39/////////f39/f39////9fX19/f3/v7++fn59/f39/f39vb2+Pj4+Pj49vb2+Pj3+vr6////6Ojn/v7+////ubm36enp////6OjowMC+6eno/v7+vr69VlZS4ODf+/v7/v7+3t7d/v7+////w8PBwcG//f39////////6Ojou7u5/f39/Pz89/f2/f386urp6Ojovb28/v7+/v7+5eXkW1tY/Pz8/v7+/v79R0dD6Ojo/f39///+6eno/Pz8wMC/+/v7////wcHA6+vr/Pz8/v7+wcHA/////v7+6enovb2709PSoKCe/v7+////////////1tbW6Ojn/v7+vLy67e3t/Pz8/v7+/v7+7+/v/v7+/v7+8vLx6enpw8PC/v7+////////+vr6e3t4jo6M+vr69vb2c3Nw6urp////+vr65ubl/v7+/v7+/////v7+////6+vr/v7+///++Pj4mku2OgAAAKF0Uk5TAxqGuLm6tkwCBBnF/tfV1NfW6fxncfRbqBGN6Cm2wQSP/aE+PDs9PLLlKZH1/4WQ4zlEzUlDQkNEQ0JEVuEcvNwLHeIdCx27CwQWWbgVut0LDLDn4B8Lp44/kx8cC7fFGgWNvrgEHp7hHpALVu8LJorkDNCrHwsRCMru5MMRG70LJIPSsCakqDMeDMz2+W8GBlxBBR7zVxrH2vrY2huEuk10OTaVAAABqUlEQVR4nGNgYGBgZGJmYWZhYQYCViAFhGzsDBwMDJxc3Dy8fPx8/AKCgoL8fIICfAJCwiKcQB2comLinKhAgl+SEyjFKSUtgyYjKycP1qOgqKSsoqqiqqairqKqrq6mqqahqQXUw8mpLayjiw70wHr0DQyNjDVNTM3MTc0tzCytrK1shPRB1nBq29px2js4Itnj5KwA0ePsApRxRZJxc9aHyrhxujt4gMU8vbx97H1doDIKzk6cfv4BQPFAm6BgXZ6QUDtbbbB/9IH2uDuEAWXCdQUiIqNso2NsofbYxgDtiQXKxMUnJHJK2Ua7wVwA1xMXBySSEHq0gXqSwS5IieNMTUvPiM50zoK6wI3TzyEboicnVxHkAoSr7f3zOPMLCuOKHIpLbEvdgDIgtykA7fFzKCsX0NWNq6isqq6prUOyp96hoVGnqbmFs7WtvYOzE+o2qJ6u7p7ePk7O/gmcnGh6OH0nTpoMCTeYHinnKUD/xCKFqAtURnTqNLAeBIDpmT5DcWbPLD5g4uET4Bfkn803e44wSIaDgXPuPFAaYwWlt/nQ9LaAgQEAtoJldeUqNUEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/magnifying-glass-icon.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/magnifying-glass-icon.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/magnifying-glass-icon.2444b5ff.png";

/***/ }),

/***/ "./src/assets/images/plus-icon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/plus-icon.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9UAAAPVCAMAAABflDktAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAATwAAAE8BY4r91wAAAfhQTFRFAAAA6Ojo1dXVwcHBrq6um5ubhYWFcnJyX19fXV1dqqqqxsbG0NDQ////c3NzhoaGr6+vwsLC6enp7u7uzMzMsrKymZmZd3d3VVVVe3t7ZmZmiIiIw8PD3d3d8vLyxcXFl5eXaGhooaGhkJCQbGxsmpqaycnJ9PT06urqsLCwfn5+UFBQU1NTgYGBtLS01NTU/v7+zs7Oi4uLVFRU1tbW8PDwysrKfHx809PTf39/39/f3t7e+Pj49vb219fXnp6epKSk9/f35eXl6+vr0tLSu7u7/f39pqamsbGxvr6+h4eHa2tr5ubm+fn5s7Ozg4ODZGRk2tra+vr65OTk9fX18/Pztra2ubm5WlpaYmJi+/v729vb8fHx2dnZ3Nzc/Pz87Ozs7e3ttbW1lpaWbm5uWVlZ4uLixMTEvLy8vb29x8fHy8vL2NjY4+PjuLi4W1tbdnZ2nJyck5OT0dHReXl5n5+fnZ2deHh4YGBgV1dX7+/vcHBwZ2dnq6urjY2N4eHhXFxcqKioVlZWyMjIWFhYo6OjlZWVlJSUZWVlz8/PgoKCenp6ampqfX19oKCgj4+PgICAUlJSb29vmJiYwMDAra2tXl5ebW1tcXFxhISEv7+/5+fnp6enkpKSt7e3YWFhoqKiurq6kZGRUVFRioqKdHR0aWlpzc3N/kzZLwAAAKh0Uk5TAP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////bgStxwAAG0VJREFUeJzt3QmbXVWVgOFNELQSxEgGSAKoFTWgYAoFJAwqU1AhAQIIRgXEqCASbRxAwYG2VWy7nafuRrvbnv5mG0PMtKpyh3P3qnXv+/6Ctfet76mqc885u7X17bwN57/hggvf+KaljZsuejOk2bBp49KbLn7LBZvfuuGS7Cqq2rJ12/ZL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"

/***/ }),

/***/ "./src/assets/images/white-logo-black-music.png":
/*!******************************************************!*\
  !*** ./src/assets/images/white-logo-black-music.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _splash_splash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash/splash */ "./src/components/splash/splash.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/route_util */ "./src/util/route_util.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _session_login_form_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session/login_form_container */ "./src/components/session/login_form_container.js");
/* harmony import */ var _session_signup_form_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session/signup_form_container */ "./src/components/session/signup_form_container.js");
/* harmony import */ var _open_open_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open/open_player */ "./src/components/open/open_player.js");
/* harmony import */ var _sidebar_playlist_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/playlist/modal */ "./src/components/sidebar/playlist/modal.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/app.js";









const App = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidebar_playlist_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  exact: true,
  path: "/",
  component: _splash_splash__WEBPACK_IMPORTED_MODULE_1__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_2__["AuthRoute"], {
  exact: true,
  path: "/login",
  component: _session_login_form_container__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_2__["AuthRoute"], {
  exact: true,
  path: "/signup",
  component: _session_signup_form_container__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/open",
  component: _open_open_player__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/white-logo-black-music.png */ "./src/assets/images/white-logo-black-music.png");
/* harmony import */ var _assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/footer/footer.js";



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "footer-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      id: "footer-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "white-logo",
      src: _assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "footer-nav-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "COMPANY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Jobs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "For the Record")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "COMMUNITIES"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "For Artist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Developers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Brands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Investors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Vendors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "USEFUL LINKS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Help"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Web Player"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Free Mobile App"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "social-network-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.instagram.com/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "social-icon",
      src: "https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/instagram-512.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.twitter.com/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "social-icon",
      src: "https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/twitter-512.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.facebook.com/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "social-icon",
      src: "https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/facebook-512.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "country",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "USA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://icons.iconarchive.com/icons/wikipedia/flags/1024/US-United-States-Flag-icon.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "bottom-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Legal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Privacy Center"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, " Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Cookies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "About Ads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Additional CA Privacy Disclosure")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "2020 Sleepify"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/white-logo-black-music.png */ "./src/assets/images/white-logo-black-music.png");
/* harmony import */ var _assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar */ "./src/components/navbar/navbar.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/header/header.js";




class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "header-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "white-logo",
      src: _assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header/open_header.js":
/*!**********************************************!*\
  !*** ./src/components/header/open_header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar */ "./src/components/navbar/navbar.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/header/open_header.js";



class OpenHeader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "open-header-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OpenHeader);

/***/ }),

/***/ "./src/components/index/artist_container.js":
/*!**************************************************!*\
  !*** ./src/components/index/artist_container.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _artist_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist_index */ "./src/components/index/artist_index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/artist_actions */ "./src/actions/artist_actions.js");




const msp = state => {
  return {
    artists: state.entities.artists
  };
};

const mdp = () => dispatch => {
  return {
    fetchArtists: () => dispatch(Object(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["fetchArtists"])()),
    searchArtists: search => dispatch(Object(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["searchArtists"])(search))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_artist_index__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/components/index/artist_index.js":
/*!**********************************************!*\
  !*** ./src/components/index/artist_index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _artist_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist_index_item */ "./src/components/index/artist_index_item.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/index/artist_index.js";



class ArtistsIndex extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    this.props.searchArtists(this.props.search);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.props.searchArtists(this.props.search);
    }
  }

  render() {
    let liArtists;
    if (!this.props.artists || this.props.artists.length === 0) return null;
    let artists = this.props.artists;
    liArtists = Object.values(artists).map(artist => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_artist_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: artist.id,
      artist: artist,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "artists-list-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Artists"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "artists-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, liArtists));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (ArtistsIndex);

/***/ }),

/***/ "./src/components/index/artist_index_item.js":
/*!***************************************************!*\
  !*** ./src/components/index/artist_index_item.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/index/artist_index_item.js";



class ArtistIndexItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const artist = this.props.artist;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `/open/artist/${artist._id}`,
      id: artist._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "artist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "artist-photo",
      src: artist.imageUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "artist-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, artist.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "artist-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Artist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "play-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-play-circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }))))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (ArtistIndexItem);

/***/ }),

/***/ "./src/components/index/search.js":
/*!****************************************!*\
  !*** ./src/components/index/search.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _songs_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./songs_container */ "./src/components/index/songs_container.js");
/* harmony import */ var _artist_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artist_container */ "./src/components/index/artist_container.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/index/search.js";




class Search extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.update = this.update.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({
      search: e.currentTarget.value
    });
    this.getResults();
  }

  getResults() {
    return this.state.search ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "open-player-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_songs_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      search: this.state.search,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_artist_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      search: this.state.search,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "search-input",
      placeholder: "Search for Artists or Songs",
      value: this.state.search,
      onChange: e => this.update(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), this.getResults());
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/index/search_container.js":
/*!**************************************************!*\
  !*** ./src/components/index/search_container.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/components/index/search.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/song_actions */ "./src/actions/song_actions.js");




const msp = state => {
  return {
    songs: state.entities.songs
  };
};

const mdp = () => dispatch => {
  return {
    fetchSongs: () => dispatch(Object(_actions_song_actions__WEBPACK_IMPORTED_MODULE_2__["fetchSongs"])())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_search__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/components/index/song_index_item.js":
/*!*************************************************!*\
  !*** ./src/components/index/song_index_item.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/player_queue_actions */ "./src/actions/player_queue_actions.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/index/song_index_item.js";




class SongIndexItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const song = this.props.song;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "song",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "song-photo",
      src: song.imageUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "song-item-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "song-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, song.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `/open/artist/${song.artist._id}`,
      id: song.artist._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "song-artist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, song.artist.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "play-button",
      onClick: e => this.props.playTrack(song),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-play-circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (SongIndexItem);

/***/ }),

/***/ "./src/components/index/songs.js":
/*!***************************************!*\
  !*** ./src/components/index/songs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _song_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song_index_item */ "./src/components/index/song_index_item.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/index/songs.js";



class SongsIndex extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    this.props.searchSongs(this.props.search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.search && prevProps.search !== this.props.search) {
      this.props.searchSongs(this.props.search);
    }
  }

  render() {
    let liSongs;
    if (!this.props.songs || this.props.songs.length === 0) return null;
    let songs = this.props.songs;
    liSongs = Object.values(songs).map(song => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_song_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: song.id,
      song: song,
      playTrack: this.props.playTrack,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "songs-list-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Songs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "songs-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, liSongs));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (SongsIndex);

/***/ }),

/***/ "./src/components/index/songs_container.js":
/*!*************************************************!*\
  !*** ./src/components/index/songs_container.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _songs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songs */ "./src/components/index/songs.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/song_actions */ "./src/actions/song_actions.js");
/* harmony import */ var _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/player_queue_actions */ "./src/actions/player_queue_actions.js");





const msp = state => {
  return {
    songs: state.entities.songs
  };
};

const mdp = () => dispatch => {
  return {
    fetchSongs: () => dispatch(Object(_actions_song_actions__WEBPACK_IMPORTED_MODULE_2__["fetchSongs"])()),
    searchSongs: search => dispatch(Object(_actions_song_actions__WEBPACK_IMPORTED_MODULE_2__["searchSongs"])(search)),
    playTrack: track => dispatch(Object(_actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_3__["playTrack"])(track))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_songs__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/components/navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/navbar/navbar.js";



class NavBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.logoutUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Logout"));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "nav-link",
        to: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Signup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "nav-link",
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Login"));
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navbar-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, this.getLinks());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/open/mainview.js":
/*!*****************************************!*\
  !*** ./src/components/open/mainview.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/open/mainview.js";



class Mainview extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Mainview);

/***/ }),

/***/ "./src/components/open/open_player.js":
/*!********************************************!*\
  !*** ./src/components/open/open_player.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player_player_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/player_container */ "./src/components/player/player_container.js");
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar */ "./src/components/sidebar/sidebar.js");
/* harmony import */ var _index_search_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index/search_container */ "./src/components/index/search_container.js");
/* harmony import */ var _show_artist_show_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../show/artist_show_container */ "./src/components/show/artist_show_container.js");
/* harmony import */ var _header_open_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/open_header */ "./src/components/header/open_header.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _mainview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainview */ "./src/components/open/mainview.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/open/open_player.js";





 // import { AuthRoute, ProtectedRoute } from "../../util/route_util";




class Open extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "open-player",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainview__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_open_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_player_player_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/open/search",
      component: _index_search_container__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/open/artist/:id",
      component: _show_artist_show_container__WEBPACK_IMPORTED_MODULE_4__["default"],
      id: this.props.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Open);

/***/ }),

/***/ "./src/components/player/player.js":
/*!*****************************************!*\
  !*** ./src/components/player/player.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player_info_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player_info_container */ "./src/components/player/player_info_container.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/player/player.js";



class Player extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      time: 0,
      duration: 0,
      mute: false,
      repeat: false,
      shuffle: false
    };
    this.audio = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.play = this.play.bind(this);
    this.handleonPlay = this.handleonPlay.bind(this);
    this.pause = this.pause.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.volumeBtn = this.volumeBtn.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);
    this.fetchy = this.fetchy.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.prevTrack = this.prevTrack.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.volume !== this.props.volume) {
      this.audio.volume = this.props.volume;
    }

    if (prevProps.currentTrack !== this.props.currentTrack) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchy(e) {
    e.preventDefault();
    this.props.fetchSongs().then(() => {
      this.props.playAllTracks(this.props.songs);
    });
  }

  play(e) {
    e.preventDefault();
    if (!this.props.currentTrack) return null;
    this.handleonPlay();
    this.audio.play();
  }

  handleonPlay() {
    this.setState({
      play: true
    });
    this.audio.volume = this.props.volume;
    this.interval = setInterval(() => {
      this.setState({
        time: this.audio.currentTime,
        duration: this.audio.duration
      });
    }, 500);
  }

  handleEnded() {
    if (this.state.shuffle) {
      this.props.shuffleTracks();
    } else if (!this.props.nextTrack) {
      this.setState({
        play: false
      });
      this.audio.pause();
    } else {
      this.props.nextTrack();
    }
  }

  pause(e) {
    e.preventDefault();
    this.setState({
      play: false
    });
    this.audio.pause();
  }

  nextTrack(e) {
    e.preventDefault();
    this.props.nextTrack();
  }

  prevTrack(e) {
    e.preventDefault();
    this.props.prevTrack();
  }

  updateTime(e) {
    this.audio.currentTime = e.target.value;
    this.setState({
      time: e.target.value
    });
  }

  updateVolume(e) {
    this.props.changeVolume(e.target.value / 100);
  }

  toggleRepeat(e) {
    e.preventDefault();
    this.setState({
      repeat: !this.state.repeat
    }, () => {
      this.audio.loop = this.state.repeat;
    });
  }

  toggleShuffle(e) {
    e.preventDefault();
    this.setState({
      shuffle: !this.state.shuffle
    });
  }

  toggleMute(e) {
    this.setState({
      mute: !this.state.mute
    }, () => {
      if (this.props.volume > 0) this.prevVolume = this.props.volume;

      if (this.state.mute) {
        this.props.changeVolume(0);
        this.audio.volume = 0;
      } else {
        this.props.changeVolume(this.prevVolume);
        this.audio.volume = this.prevVolume;
      }
    });
  }

  parseTime(time) {
    if (!time) return "0:00";
    let min = Math.floor(time / 60);
    let seconds = Math.floor(time - min * 60);
    if (seconds < 10) seconds = `0${seconds}`;
    return `${min}:${seconds}`;
  }

  volumeBtn() {
    let button;
    const volume = this.props.volume;

    if (volume >= 0.5) {
      button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-volume-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      });
    } else if (volume < 0.5 && volume > 0) {
      button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-volume-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      });
    } else {
      button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-volume-mute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.toggleMute,
      className: "p-volume-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, button);
  }

  render() {
    const playBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "p-button-circle",
      onClick: this.play,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-play",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }));
    const pauseBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "p-button-circle",
      onClick: this.pause,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-pause",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }));
    const shuffling = this.state.shuffle ? "-shuffling" : null;
    const shuffle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.toggleShuffle,
      className: `p-button-shuffle${shuffling} pbtn`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-random",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }));
    const active = this.state.repeat ? "-active" : null;
    const repeat = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: `p-button-repeat${active} pbtn`,
      onClick: this.toggleRepeat,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-redo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }));
    const prevTrackBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.prevTrack,
      className: "p-button-prev pbtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-step-backward",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }));
    const nextTrackBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.nextTrack,
      className: "p-button-fwd pbtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-step-forward",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }));
    const {
      play,
      time,
      duration
    } = this.state;
    const {
      currentTrack
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_player_info_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      shuffle: this.state.shuffle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-audio-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-buttons-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
      src: currentTrack ? currentTrack.songUrl : null,
      ref: audio => this.audio = audio,
      onPlay: this.handleonPlay,
      onEnded: this.handleEnded,
      autoPlay: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }), shuffle, prevTrackBtn, !play && playBtn, play && pauseBtn, nextTrackBtn, repeat, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.fetchy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, "Fetch Songs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-timeline-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "p-current-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, this.parseTime(time)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "p-timeline",
      type: "range",
      onChange: this.updateTime,
      value: time,
      max: duration,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "p-duration",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, this.parseTime(duration)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-volume-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, this.volumeBtn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "p-volume",
      type: "range",
      onChange: this.updateVolume,
      value: this.props.volume * 100,
      max: "100",
      style: {
        backgroundImage: '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + this.props.volume + ', #13db1d), ' + 'color-stop(' + this.props.volume + ', #666666)' + ')'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/components/player/player_container.js":
/*!***************************************************!*\
  !*** ./src/components/player/player_container.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/components/player/player.js");
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/player_actions */ "./src/actions/player_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/song_actions */ "./src/actions/song_actions.js");
/* harmony import */ var _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/player_queue_actions */ "./src/actions/player_queue_actions.js");






const mapStateToProps = state => ({
  volume: state.player.volume,
  songs: Object.values(state.entities.songs),
  currentTrack: state.queue[0],
  tracks: state.queue,
  nextTrack: state.queue[1]
});

const mapDispatchToProps = dispatch => ({
  changeVolume: volume => dispatch(Object(_actions_player_actions__WEBPACK_IMPORTED_MODULE_2__["receiveVolume"])(volume)),
  fetchSongs: () => dispatch(Object(_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__["fetchSongs"])()),
  playAllTracks: tracks => dispatch(Object(_actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_4__["playAllTracks"])(tracks)),
  nextTrack: () => dispatch(Object(_actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_4__["nextTrack"])()),
  prevTrack: () => dispatch(Object(_actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_4__["prevTrack"])()),
  shuffleTracks: () => dispatch(Object(_actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_4__["shuffleTracks"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_player__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/player/player_info.js":
/*!**********************************************!*\
  !*** ./src/components/player/player_info.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/player/player_info.js";



class PlayerInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike() {
    const likeData = {
      songId: this.props.currentTrack._id,
      userId: this.props.currentUser.id
    };
    this.props.toggleLike(likeData);
  }

  render() {
    const {
      currentTrack,
      nextTrack
    } = this.props;
    if (!currentTrack) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pi-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
    let msg;

    if (this.props.shuffle) {
      msg = "Currently shuffling... ¯\\_(ツ)_/¯";
    } else if (!nextTrack) {
      msg = null;
    } else {
      msg = `Coming up next: ${nextTrack.title} By ${nextTrack.artist.name}`;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pi-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "pi-image",
      src: currentTrack.imageUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pi-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pi-details-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, currentTrack.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pi-details-artist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, currentTrack.artist.name)), nextTrack ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pi-details-next",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, msg) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.toggleLike,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PlayerInfo);

/***/ }),

/***/ "./src/components/player/player_info_container.js":
/*!********************************************************!*\
  !*** ./src/components/player/player_info_container.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player_info */ "./src/components/player/player_info.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/song_actions */ "./src/actions/song_actions.js");




const mapStateToProps = state => ({
  currentTrack: state.queue[0],
  tracks: state.queue,
  nextTrack: state.queue[1],
  currentUser: state.session.user.user,
  currentSongLiked: state.session.user.user.likedSongs.includes(state.queue[0])
});

const mapDispatchToProps = dispatch => ({
  toggleLike: likeData => dispatch(Object(_actions_song_actions__WEBPACK_IMPORTED_MODULE_2__["toggleLike"])(likeData))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_player_info__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/components/root.js":
/*!********************************!*\
  !*** ./src/components/root.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/components/app.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/root.js";





const Root = ({
  store
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./src/components/session/login_form.js":
/*!**********************************************!*\
  !*** ./src/components/session/login_form.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/session/login_form.js";



class LoginForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this); // this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidUpdate() {
    this.changeBorder();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    this.setState({
      errors: nextProps.errors
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.resetClasses();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
  }

  renderSignUp() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "render-signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Don't have an account?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "SIGN UP FOR SLEEPIFY")));
  }

  resetClasses() {
    let element = document.getElementById('email');
    let error = document.getElementById('email-error');

    if (element) {
      element.classList.remove("has-error");
      error.classList.remove("hidden");
    }

    element = document.getElementById('password');
    error = document.getElementById('password-error');

    if (element) {
      element.classList.remove("has-error");
      error.classList.remove("hidden");
    }
  }

  changeBorder(values = "all") {
    if (values === "all") {
      let element = document.getElementById('email');
      let error = document.getElementById('email-error');

      if (element) {
        if (!error.classList.contains("hidden") && !this.state.errors.login) {
          element.classList.add("has-error");
        }
      }

      element = document.getElementById('password');
      error = document.getElementById('password-error');

      if (element) {
        if (!error.classList.contains("hidden") && !this.state.errors.login) {
          element.classList.add("has-error");
        }
      }
    } else {
      let element = document.getElementById(values);
      const errorId = values + "-error";
      let error = document.getElementById(errorId); // debugger;

      if (element && error) {
        element.classList.remove("has-error");
        error.classList.add("hidden");
      }
    }
  }

  changeBorderonBlur(value) {
    let element = document.getElementById(value);

    if (element && !this.state[value]) {
      const errorId = value + "-error";
      let error = document.getElementById(errorId);
      error.classList.remove("hidden");
      element.classList.add("has-error");
    } else if (element && this.state[value]) {
      const errorId = value + "-error";
      let error = document.getElementById(errorId);
      error.classList.add("hidden");
      element.classList.remove("has-error");
    }
  }

  renderMismatchError() {
    if (this.state.errors.login) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, this.state.errors.login);
    } else {
      return null;
    }
  } // demoLogin(e) {
  //   e.preventDefault();
  //   this.resetClasses();
  //   let user = {
  //     username: "don",
  //     password: "123456"
  //   }
  //   this.props.login(user);
  // }


  render() {
    this.changeBorder();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "static/images/black-logo-white-music.png",
      alt: "sleepify-logo",
      height: "30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-form-error-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, this.renderMismatchError()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "email-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "email",
      className: "form-email login",
      type: "text",
      value: this.state.email,
      onChange: this.update('email'),
      placeholder: "Email address or username",
      onFocus: () => this.changeBorder('email'),
      onBlur: () => this.changeBorderonBlur('email'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "email-error",
      className: "login error-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, this.state.errors.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "password-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "password",
      className: "form-password login",
      type: "password",
      value: this.state.password,
      onChange: this.update('password'),
      placeholder: "Password",
      onFocus: () => this.changeBorder('password'),
      onBlur: () => this.changeBorderonBlur('password'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "password-error",
      className: "login error-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, this.state.errors.password)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "submit-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "LOG IN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    })))), this.renderSignUp(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "disclaimer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "By Signing in, you agree to Sleepify's strict Terms & Conditions and Privacy Policy")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LoginForm));

/***/ }),

/***/ "./src/components/session/login_form_container.js":
/*!********************************************************!*\
  !*** ./src/components/session/login_form_container.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_form */ "./src/components/session/login_form.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./src/actions/session_actions.js");




const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__["login"])(user))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_login_form__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/session/signup_form.js":
/*!***********************************************!*\
  !*** ./src/components/session/signup_form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/session/signup_form.js";



class SignupForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      email2: '',
      username: '',
      password: '',
      password2: '',
      birthdate: '',
      errors: {},
      error_touched: {
        email: false,
        email2: false,
        password: false,
        password2: false,
        username: false,
        birthdate: false
      },
      error_exists: {
        email: false,
        email2: false,
        password: false,
        password2: false,
        username: false,
        birthdate: false
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/open');
    }

    this.setState({
      errors: nextProps.errors
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email2: this.state.email2,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      birthdate: this.state.birthdate
    };
    this.resetErrorDisplay();
    this.props.signup(user, this.props.history);
  }

  resetErrorDisplay() {
    this.setState({
      error_touched: {
        email: false,
        email2: false,
        password: false,
        password2: false,
        username: false,
        birthdate: false
      }
    });
  }

  handleOnFocus(field) {
    const touchField = this.state.error_touched;
    touchField[field] = true;
    return () => this.setState({
      touchField
    });
  }

  renderError(field) {
    if (!this.state.error_touched[field]) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: `${field}-error`,
        className: "signup error-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.state.errors[field]);
    }
  }

  renderInputField(field) {
    let placeholder = field.charAt(0).toUpperCase() + field.substring(1);

    if (field.includes('2')) {
      placeholder = placeholder.substring(0, placeholder.length - 1) + ' Confirm';
    }

    let type;

    if (field.includes('email') || field === 'username') {
      type = 'text';
    } else if (field.includes('password')) {
      type = 'password';
    } else {
      type = 'Date';
    }

    if (!this.state.error_touched[field] && this.state.errors[field]) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: field,
        type: type,
        className: "signup-border has-error",
        value: this.state[field],
        onChange: this.update(field),
        placeholder: placeholder,
        onFocus: () => this.handleOnFocus(field),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: field,
        type: type,
        className: "signup-border",
        value: this.state[field],
        onChange: this.update(field),
        placeholder: placeholder,
        onFocus: () => this.handleOnFocus(field),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "static/images/black-logo-white-music.png",
      alt: "sleepify-logo",
      height: "30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-input email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, this.renderInputField('email'), this.renderError('email')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-input email2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, this.renderInputField('email2'), this.renderError('email2')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-input password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, this.renderInputField('password'), this.renderError('password')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-input password2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, this.renderInputField('password2'), this.renderError('password2')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-input username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, this.renderInputField('username'), this.renderError('username')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-input birthdate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "Date of Birth", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "birthdate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, this.renderInputField('birthdate'), this.renderError('birthdate')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-disclaimer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "By signing up, you agree to Sleepify's Terms and Conditions of Use")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "SIGN UP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-instead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Already have an account?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, " Log in "))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SignupForm));

/***/ }),

/***/ "./src/components/session/signup_form_container.js":
/*!*********************************************************!*\
  !*** ./src/components/session/signup_form_container.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup_form */ "./src/components/session/signup_form.js");




const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["signup"])(user))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_signup_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/show/artist_show.js":
/*!********************************************!*\
  !*** ./src/components/show/artist_show.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_song_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index/song_index_item */ "./src/components/index/song_index_item.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/show/artist_show.js";



class ArtistShow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  render() {
    let liSongs;
    if (!this.props.artist) return null;
    let artist = this.props.artist;
    let songs = artist.songs;

    if (songs) {
      liSongs = songs.map(song => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_song_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: song.id,
        song: song,
        playTrack: this.props.playTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "artist-page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "artist-show-photo",
      src: artist.imageUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "open-player-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "artist-show-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, artist.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "artist-show-songs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, liSongs)));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (ArtistShow);

/***/ }),

/***/ "./src/components/show/artist_show_container.js":
/*!******************************************************!*\
  !*** ./src/components/show/artist_show_container.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _artist_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist_show */ "./src/components/show/artist_show.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/artist_actions */ "./src/actions/artist_actions.js");
/* harmony import */ var _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/player_queue_actions */ "./src/actions/player_queue_actions.js");





const msp = state => {
  return {
    artist: state.entities.artists
  };
};

const mdp = () => dispatch => {
  return {
    fetchArtist: id => dispatch(Object(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["fetchArtist"])(id)),
    playTrack: song => dispatch(Object(_actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_3__["playTrack"])(song))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(msp, mdp)(_artist_show__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/components/sidebar/navbar/navbar.js":
/*!*************************************************!*\
  !*** ./src/components/sidebar/navbar/navbar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/white-logo-black-music.png */ "./src/assets/images/white-logo-black-music.png");
/* harmony import */ var _assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_home_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/home-icon.png */ "./src/assets/images/home-icon.png");
/* harmony import */ var _assets_images_home_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_home_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_magnifying_glass_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/magnifying-glass-icon.png */ "./src/assets/images/magnifying-glass-icon.png");
/* harmony import */ var _assets_images_magnifying_glass_icon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_magnifying_glass_icon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_library_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/library-icon.png */ "./src/assets/images/library-icon.png");
/* harmony import */ var _assets_images_library_icon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_library_icon_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/sidebar/navbar/navbar.js";







class SideBarNav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      id: "navBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "navBar-link",
      to: "/open",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "white-logo",
      src: _assets_images_white_logo_black_music_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "navBar-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      id: "navBar-entry-points",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navBar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "navBar-link",
      to: "/open",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "home-icon",
      src: _assets_images_home_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navBar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "navBar-link",
      to: "/open/search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "magGlass-icon",
      src: _assets_images_magnifying_glass_icon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), "Search"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navBar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "navBar-link",
      to: "/library",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "library-icon",
      src: _assets_images_library_icon_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), "Your Library"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideBarNav);

/***/ }),

/***/ "./src/components/sidebar/playlist/create_playlist.js":
/*!************************************************************!*\
  !*** ./src/components/sidebar/playlist/create_playlist.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/sidebar/playlist/create_playlist.js";


class CreatePlaylist extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.props.closeModal.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let playlist = {
      title: this.state.title,
      user: this.props.currentUser
    };
    this.props.createPlaylist(playlist);
    this.props.closeModal();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "create-playlist-modal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-transparent",
      onClick: this.handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143",
      fill: "#fff",
      fill0rule: "evenodd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "transparant-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Create New Playlist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "create-playlist-input-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "create-playlist-input-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "playlist-name-spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "playlist-name-input-field",
      type: "text",
      name: "playlist-name",
      onChange: this.update("title"),
      placeholder: "New Playlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "form-buttons-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "cancel-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "cancel-button",
      onClick: this.handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "create-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "create-button",
      onClick: e => this.handleSubmit(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "create"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CreatePlaylist);

/***/ }),

/***/ "./src/components/sidebar/playlist/create_playlist_container.js":
/*!**********************************************************************!*\
  !*** ./src/components/sidebar/playlist/create_playlist_container.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _create_playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_playlist */ "./src/components/sidebar/playlist/create_playlist.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/modal_actions */ "./src/actions/modal_actions.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/playlist_actions */ "./src/actions/playlist_actions.js");





const mapStateToProps = state => ({
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])(modal)),
  closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])()),
  createPlaylist: playlist => dispatch(Object(_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__["createPlaylist"])(playlist))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_create_playlist__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/sidebar/playlist/modal.js":
/*!**************************************************!*\
  !*** ./src/components/sidebar/playlist/modal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/modal_actions */ "./src/actions/modal_actions.js");
/* harmony import */ var _create_playlist_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_playlist_container */ "./src/components/sidebar/playlist/create_playlist_container.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/sidebar/playlist/modal.js";





function Modal({
  modal,
  closeModal
}) {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal) {
    case "createPlaylist":
      component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_create_playlist_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
      break;

    default:
      return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-background",
    onClick: closeModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-child",
    onClick: e => e.stopPropagation(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, component));
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__["closeModal"])())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Modal));

/***/ }),

/***/ "./src/components/sidebar/playlist/playlist.js":
/*!*****************************************************!*\
  !*** ./src/components/sidebar/playlist/playlist.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_images_plus_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/plus-icon.png */ "./src/assets/images/plus-icon.png");
/* harmony import */ var _assets_images_plus_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_plus_icon_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/sidebar/playlist/playlist.js";




class Playlist extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "playlist-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Playlist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navBar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navBar-link",
      onClick: () => this.props.openModal("createPlaylist"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "plus-icon",
      src: _assets_images_plus_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), "Create Playlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      id: "playlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Playlist);

/***/ }),

/***/ "./src/components/sidebar/playlist/playlist_container.js":
/*!***************************************************************!*\
  !*** ./src/components/sidebar/playlist/playlist_container.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist */ "./src/components/sidebar/playlist/playlist.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/modal_actions */ "./src/actions/modal_actions.js");




const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])(modal)),
  closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_playlist__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/sidebar/sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/sidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar */ "./src/components/sidebar/navbar/navbar.js");
/* harmony import */ var _playlist_playlist_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist/playlist_container */ "./src/components/sidebar/playlist/playlist_container.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/sidebar/sidebar.js";




class SideBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "root-navBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_playlist_playlist_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./src/components/splash/splash.js":
/*!*****************************************!*\
  !*** ./src/components/splash/splash.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/components/splash/splash.js";





class Splash extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "app-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "colorsplash",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "splash-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Music for sleepy people."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Millions of songs. No credit card needed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/open",
      className: "launch-web-player-bttn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Launch Web Player"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Splash);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/root */ "./src/components/root.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/session_api_util */ "./src/util/session_api_util.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/session_actions */ "./src/actions/session_actions.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/index.js";






 // import * as apiUtil from "./util/session_api_util.js"
// used for testing

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (localStorage.jwtToken) {
    Object(_util_session_api_util__WEBPACK_IMPORTED_MODULE_5__["setAuthToken"])(localStorage.jwtToken);
    const decodedUser = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(localStorage.jwtToken);
    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodedUser
      }
    };
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(preloadedState);
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_6__["logout"])());
      window.location.href = '/login';
    }
  } else {
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } // TESTING START


  window.getState = store.getState; // window.dispatch = store.dispatch;
  // window.logout

  window.store = store; // TESTING END

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_root__WEBPACK_IMPORTED_MODULE_2__["default"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), root);
});

/***/ }),

/***/ "./src/reducers/artists_reducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/artists_reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/artist_actions */ "./src/actions/artist_actions.js");


const artistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case _actions_artist_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_ARTIST"]:
      return action.artist.data;

    case _actions_artist_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_ARTISTS"]:
      return action.artists.data;

    default:
      return oldState;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (artistsReducer);

/***/ }),

/***/ "./src/reducers/entities_reducer.js":
/*!******************************************!*\
  !*** ./src/reducers/entities_reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _songs_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./songs_reducer */ "./src/reducers/songs_reducer.js");
/* harmony import */ var _artists_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artists_reducer */ "./src/reducers/artists_reducer.js");
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users_reducer */ "./src/reducers/users_reducer.js");
/* harmony import */ var _playlist_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlist_reducer */ "./src/reducers/playlist_reducer.js");





const entitiesReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  playlist: _playlist_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  songs: _songs_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  artists: _artists_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  users: _users_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (entitiesReducer);

/***/ }),

/***/ "./src/reducers/errors_reducer.js":
/*!****************************************!*\
  !*** ./src/reducers/errors_reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_errors_reducer */ "./src/reducers/session_errors_reducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/modalReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/modalReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modalReducer; });
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/modal_actions */ "./src/actions/modal_actions.js");

function modalReducer(state = null, action) {
  switch (action.type) {
    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__["OPEN_MODAL"]:
      return action.modal;

    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__["CLOSE_MODAL"]:
      return null;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/player_queue_reducer.js":
/*!**********************************************!*\
  !*** ./src/reducers/player_queue_reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/player_queue_actions */ "./src/actions/player_queue_actions.js");


const playerQueueReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = [...state];

  switch (action.type) {
    case _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_0__["PLAY_TRACK"]:
      return [action.track];

    case _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_0__["PLAY_ALL_TRACKS"]:
      return action.tracks;

    case _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TRACK"]:
      nextState.push(action.track);
      return nextState;

    case _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TRACK"]: //to be added

    case _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ALL_TRACKS"]:
      return [];

    case _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_0__["NEXT_TRACK"]:
      nextState.push(nextState.shift());
      return nextState;

    case _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_0__["PREV_TRACK"]:
      nextState.unshift(nextState.pop());
      return nextState;

    case _actions_player_queue_actions__WEBPACK_IMPORTED_MODULE_0__["SHUFFLE_TRACKS"]:
      return shuffleArray(nextState);

    default:
      return state;
  }
};

const shuffleArray = arr => {
  let temp;
  let newPos;

  for (let i = 0; i < arr.length; i++) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }

  return arr;
};

/* harmony default export */ __webpack_exports__["default"] = (playerQueueReducer);

/***/ }),

/***/ "./src/reducers/player_reducer.js":
/*!****************************************!*\
  !*** ./src/reducers/player_reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/player_actions */ "./src/actions/player_actions.js");


const playerReducer = (state = {
  volume: 0.5
}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case _actions_player_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_VOLUME"]:
      return Object.assign({}, state, {
        volume: action.volume
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (playerReducer);

/***/ }),

/***/ "./src/reducers/playlist_reducer.js":
/*!******************************************!*\
  !*** ./src/reducers/playlist_reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/playlist_actions */ "./src/actions/playlist_actions.js");


const playlistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_PLAYLIST"]:
      return Object.assign({}, oldState, {
        [action.playlist.data.playlist._id]: action.playlist.data.playlist
      });

    default:
      return oldState;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (playlistReducer);

/***/ }),

/***/ "./src/reducers/root_reducer.js":
/*!**************************************!*\
  !*** ./src/reducers/root_reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_reducer */ "./src/reducers/session_reducer.js");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors_reducer */ "./src/reducers/errors_reducer.js");
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities_reducer */ "./src/reducers/entities_reducer.js");
/* harmony import */ var _player_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player_reducer */ "./src/reducers/player_reducer.js");
/* harmony import */ var _player_queue_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player_queue_reducer */ "./src/reducers/player_queue_reducer.js");
/* harmony import */ var _ui_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui_reducer */ "./src/reducers/ui_reducer.js");







const RootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _session_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  player: _player_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  entities: _entities_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  queue: _player_queue_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  ui: _ui_reducer__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (RootReducer);

/***/ }),

/***/ "./src/reducers/session_errors_reducer.js":
/*!************************************************!*\
  !*** ./src/reducers/session_errors_reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./src/actions/session_actions.js");
//new session errors replace old errors in state.
//if we successfully log the user in, we want to clear the session errors.

const _nullErrors = [];

const SessionErrorsReducer = function (state = _nullErrors, action) {
  // debugger;
  Object.freeze(state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SESSION_ERRORS"]:
      return action.errors;

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return _nullErrors;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SessionErrorsReducer); //to session_actions.js

/***/ }),

/***/ "./src/reducers/session_reducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/session_reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./src/actions/session_actions.js");

const initialState = {
  isAuthenticated: false,
  user: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return { ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_USER_LOGOUT"]:
      return {
        isAuthenticated: false,
        user: undefined
      };

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_USER_SIGN_IN"]:
      return { ...state,
        isSignedIn: true
      };

    default:
      return state;
  }
}); //to root component src/components/root.js
//prep

/***/ }),

/***/ "./src/reducers/songs_reducer.js":
/*!***************************************!*\
  !*** ./src/reducers/songs_reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/song_actions */ "./src/actions/song_actions.js");


const songsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SONG"]:
      return Object.assign({}, oldState, {
        [action.song._id]: action.song
      });

    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SONGS"]:
      return action.songs.data;

    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LIKE"]:
      newState = Object.assign({}, oldState);

      if (newState[action.likeData.songId]['usersLiked'].includes(action.likeData.userId)) {
        const index = newState[action.likeData.songId]['usersLiked'].indexOf(action.likeData.userId); // if(index >=0) {

        newState[action.likeData.songId]['usersLiked'].splice(index, 1); // }
      } else {
        newState[action.likeData.songId]['usersLiked'].push(action.likeData.userId);
      }

      return newState;
    // case DELETE_LIKE:
    //   newState = Object.assign({}, oldState);
    //   const index = newState[action.likeData.songId]['usersLiked'].indexOf(action.likeData.userId);
    //   if(index >=0) {
    //     newState[action.likeData.songId]['usersLiked'].splice(index, 1);
    //   }
    // return newState;

    default:
      return oldState;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (songsReducer);

/***/ }),

/***/ "./src/reducers/ui_reducer.js":
/*!************************************!*\
  !*** ./src/reducers/ui_reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _modalReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalReducer.js */ "./src/reducers/modalReducer.js");


const uiReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  modal: _modalReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (uiReducer);

/***/ }),

/***/ "./src/reducers/users_reducer.js":
/*!***************************************!*\
  !*** ./src/reducers/users_reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/song_actions */ "./src/actions/song_actions.js");


/* harmony default export */ __webpack_exports__["default"] = (function (state = {}, action) {
  let newState;

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      newState = Object.assign({}, state, {
        currentUser: action.currentUser.user
      });
      return newState;

    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_LIKE"]:
      newState = Object.assign({}, state);

      if (newState.currentUser.likedSongs.includes(action.likeData.songId)) {
        const index = newState.currentUser['likedSongs'].indexOf(action.likeData.songId);
        newState.currentUser['likedSongs'].splice(index, 1);
      } else {
        newState.currentUser['likedSongs'].push(action.likeData.songId);
      }

      return newState;
    // case DELETE_LIKE:
    //     newState = Object.assign({}, state);
    //     const index = newState.currentUser['likedSongs'].indexOf(action.likeData.songId);
    //     if (index >=0) {
    //         newState.currentUser['likedSongs'].splice(index,1);
    //     }
    //     return newState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/root_reducer */ "./src/reducers/root_reducer.js");





const configureStore = (preloadedState = {}) => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/util/artist_util.js":
/*!*********************************!*\
  !*** ./src/util/artist_util.js ***!
  \*********************************/
/*! exports provided: fetchArtists, fetchArtist, searchArtists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArtists", function() { return fetchArtists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArtist", function() { return fetchArtist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchArtists", function() { return searchArtists; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const fetchArtists = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/artists");
};
const fetchArtist = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/artists/${id}`);
};
const searchArtists = search => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/artists/search/${search}`);
};

/***/ }),

/***/ "./src/util/playlist_util.js":
/*!***********************************!*\
  !*** ./src/util/playlist_util.js ***!
  \***********************************/
/*! exports provided: createPlaylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlaylist", function() { return createPlaylist; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const createPlaylist = playlist => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/playlists/create", playlist);
}; //to routes

/***/ }),

/***/ "./src/util/route_util.js":
/*!********************************!*\
  !*** ./src/util/route_util.js ***!
  \********************************/
/*! exports provided: AuthRoute, ProtectedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return AuthRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedRoute", function() { return ProtectedRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/util/route_util.js";


 //We'll use our custom Protected component to ensure users can only access certain information if they are logged in.
//If the user visits a login or signup page, the Auth component will redirect them to tweets page if they are already logged in.
// Passed in from parent component or from mapStateToProps

const Auth = ({
  component: Component,
  path,
  loggedIn,
  exact
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: path,
  exact: exact,
  render: props => !loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })) : // Redirect to the home page if the user is authenticated
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }) //---------------------------------------------has not been created yet
  ,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
});

const Protected = ({
  component: Component,
  loggedIn,
  ...rest
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
  render: props => loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })) : // Redirect to the login page if the user is already authenticated
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})); // Use the isAuthenitcated slice of state to determine whether a user is logged in


const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const AuthRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Auth));
const ProtectedRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Protected));

/***/ }),

/***/ "./src/util/session_api_util.js":
/*!**************************************!*\
  !*** ./src/util/session_api_util.js ***!
  \**************************************/
/*! exports provided: setAuthToken, signup, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthToken", function() { return setAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //setAuthToken sets or deletes the common header dependent on whether the token is passed into the method.

const setAuthToken = token => {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"];
  }
};
const signup = userData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/register", userData);
};
const login = userData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/login", userData);
}; //back to session reducer to complete setting up the redux cycle

/***/ }),

/***/ "./src/util/song_util.js":
/*!*******************************!*\
  !*** ./src/util/song_util.js ***!
  \*******************************/
/*! exports provided: fetchSongs, fetchSong, searchSongs, toggleLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSongs", function() { return fetchSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSong", function() { return fetchSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSongs", function() { return searchSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLike", function() { return toggleLike; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const fetchSongs = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/songs");
};
const fetchSong = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/songs/${id}`);
};
const searchSongs = search => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/songs/search/${search}`);
};
const toggleLike = likeData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/api/songs/like/${likeData.songId}`, likeData);
}; // export const unlikeSong = (likeData) => {
//   return axios.patch(`/api/songs/like/delete/${likeData.songId}`, likeData)
// };

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /media/don/Data/Documents Data/_App_Academy/_1_Full Stack Projects/sleepify/frontend/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map