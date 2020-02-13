import { combineReducers } from "redux";
import songsReducer from "./songs_reducer";
import artistsReducer from "./artists_reducer";
import usersReducer from "./users_reducer";
import playlistReducer from "./playlist_reducer";

const entitiesReducer = combineReducers({
  playlist: playlistReducer,
  songs: songsReducer,
  artists: artistsReducer,
  users: usersReducer,
});

export default entitiesReducer;
