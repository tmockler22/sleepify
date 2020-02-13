import { RECEIVE_LIKE, DELETE_LIKE } from "../actions/like_actions";


const likesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_LIKE: 
            return;
        case DELETE_LIKE:
            return;
        default:
            return oldState;
    }
}

export default likesReducer;