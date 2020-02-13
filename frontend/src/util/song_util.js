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

export const likeSong = (id) => {
  return axios.post(`/api/songs/like/${id}`)
};

export const unlikeSong = (id) => {
  return axios.delete(`/api/songs/like/delete/${id}`)
};