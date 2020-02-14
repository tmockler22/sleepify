import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN
} from "../actions/session_actions";
import { CHANGE_LIKE } from "../actions/song_actions";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      debugger;
      return {
        ...state,
        isSignedIn: true,
      };
      case CHANGE_LIKE: 
      const newState = Object.assign({}, state);
      if(newState.user.currentUser.likedSongs.includes(action.likeData.data.songId)) {
          const index = newState.user.currentUser.likedSongs.indexOf(action.likeData.data.songId);
          newState.user.currentUser.likedSongs.splice(index,1);
      } else {
          newState.user.currentUser.likedSongs.push(action.likeData.data.songId);
      }
      return newState;
    default:
      return state;
  }
}

//to root component src/components/root.js
//prep