import axios from "axios";

export const createPlaylist = playlist => {
  return axios.post("/api/playlists/create", playlist);
};

export const fetchUserPlaylists = userId => {
  return axios.get(`/api/users/${userId}/playlists`);
};
//to routes
