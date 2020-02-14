import {RECEIVE_CURRENT_USER} from "../actions/session_actions";
import { DELETE_LIKE, RECEIVE_LIKE } from "../actions/song_actions";
  
export default function(state = {}, action) {
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, {currentUser: action.currentUser.user})
            return newState;
        case RECEIVE_LIKE: 
            newState = Object.assign({}, state);
            newState.currentUser['likedSongs'].push(action.likeData.songId);
            return newState;
        case DELETE_LIKE:
            newState = Object.assign({}, state);
            const index = newState.currentUser['likedSongs'].indexOf(action.likeData.songId);
            if (index >=0) {
                newState.currentUser['likedSongs'].splice(index,1);
            }
            return newState;
        default:
            return state;
    }
}