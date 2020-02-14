import {RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN} from "../actions/session_actions";
import { CHANGE_LIKE } from "../actions/song_actions";
  
export default function(state = {}, action) {
    // let newState;
    switch (action.type) {
        // case RECEIVE_USER_SIGN_IN: 
        //     newState = Object.assign({}, state, {currentUser: action.user})
        //     return newState;
        // case RECEIVE_CURRENT_USER:
        //     // debugger;
        //     newState = Object.assign({}, state, {currentUser: action.currentUser.user})
        //     return newState;
        // case CHANGE_LIKE: 
        //     // debugger;
        //     newState = Object.assign({}, state);
        //     if(newState.currentUser.likedSongs.includes(action.likeData.data.songId)) {
        //         const index = newState.currentUser.likedSongs.indexOf(action.likeData.data.songId);
        //         newState.currentUser.likedSongs.splice(index,1);
        //     } else {
        //         newState.currentUser.likedSongs.push(action.likeData.data.songId);
        //     }
        //     return newState;
        // case DELETE_LIKE:
        //     newState = Object.assign({}, state);
        //     const index = newState.currentUser['likedSongs'].indexOf(action.likeData.songId);
        //     if (index >=0) {
        //         newState.currentUser['likedSongs'].splice(index,1);
        //     }
        //     return newState;
        default:
            return state;
    }
}