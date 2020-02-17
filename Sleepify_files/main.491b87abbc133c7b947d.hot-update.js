webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.491b87abbc133c7b947d.hot-update.js.map