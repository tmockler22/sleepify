import { combineReducers } from "redux";
import songsReducer from "./songs_reducer";
import artistsReducer from "./artists_reducer";

const entitiesReducer = combineReducers({
  songs: songsReducer,
  artists: artistsReducer,
});

export default entitiesReducer;