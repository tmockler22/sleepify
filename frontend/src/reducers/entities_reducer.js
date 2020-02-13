import { combineReducers } from "redux";
import songsReducer from "./songs_reducer";
import artistsReducer from "./artists_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  songs: songsReducer,
  artists: artistsReducer,
  users: usersReducer,
});

export default entitiesReducer;