import {RECEIVE_CURRENT_USER} from "../actions/session_actions";
import { REMOVE_LIKE, RECEIVE_LIKE } from "../actions/song_actions";
import { RECEIVE_ALL_USERS } from "../actions/user_actions";
  
export default function(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            const currentUser = state.currentUser;
            const newState = Object.assign({}, {currentUser: currentUser})
            return newState;
        case RECEIVE_CURRENT_USER:
            const newUser = {};
            newUser[action.currentUser.id] = action.currentUser;
            const newState = Object.assign({}, state, newUser, {currentUser: action.currentUser})
            return newState;
        case RECEIVE_LIKE: 
            const newState = Object.assign({}, state);
            newState[action.likeData.userId]['likedSongs'].push(action.likeData.songId);
            return newState;
        case REMOVE_LIKE:
            const newState = Object.assign({}, state);
            const index = newState[action.likeData.userId]['likedSongs'].indexOf(action.likeData.songId);
            if (index >=0) {
                newState[action.likeData.userId]['likedSongs'].splice(index,1);
            }
            return newState;
        default:
            return state;
    }
}