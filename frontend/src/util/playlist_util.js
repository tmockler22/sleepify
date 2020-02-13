import axios from "axios";

export const createPlaylist = playlist => {
  return axios.post("/api/playlist", playlist);
};
