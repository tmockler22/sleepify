import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import entitiesReducer from "./entities_reducer";
import player from "./player_reducer";
import uiReducer from "./ui_reducer";
const RootReducer = combineReducers({
  session,
  errors,
  player,
  entities: entitiesReducer,
  ui: uiReducer
});

export default RootReducer;
