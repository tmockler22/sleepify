import { 
    PLAY_TRACK,
    PLAY_ALL_TRACKS,
    ADD_TRACK,
    REMOVE_TRACK,
    REMOVE_ALL_TRACKS,
    NEXT_TRACK,
    PREV_TRACK,
} from '../actions/player_queue_actions';

const playerQueueReducer = (state=[], action) => {
    Object.freeze(state);
    let nextState = [...state]
    switch (action.type) {
        case PLAY_TRACK:
            return [action.track];
        case PLAY_ALL_TRACKS:
            return action.tracks;
        case ADD_TRACK: 
            nextState.push(action.track);
            return nextState;
        case REMOVE_TRACK:
            //to be added
        case REMOVE_ALL_TRACKS:
            return [];
        case NEXT_TRACK:
            nextState.push(nextState.shift());
            return nextState;
        case PREV_TRACK:
            nextState.unshift(nextState.pop());
            return nextState;
        default: 
            return state;
    }
}

export default playerQueueReducer;

