import axios from "axios";

export const fetchSongs = () => {
  return axios.get("/api/songs");
};

export const fetchSong = id => {
  return axios.get(`/api/songs/${id}`);
};

export const searchSongs = search => {
  return axios.get(`/api/songs/search/${search}`);
};