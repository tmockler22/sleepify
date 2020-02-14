import axios from "axios";

export const createPlaylist = playlist => {
  return axios.post("/api/playlists/create", playlist);
};

//to routes
