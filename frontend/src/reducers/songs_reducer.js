import { RECEIVE_SONG, RECEIVE_SONGS } from '../actions/song_actions';

const songsReducer = (oldState = {}, action) => {
  
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SONG:
      return Object.assign({}, oldState, { [action.song._id]: action.song });
    case RECEIVE_SONGS: 
      return action.songs.data;
    case RECEIVE_LIKE: 
      const newState = Object.assign({}, oldState);
      newState[action.likeData.songId]['usersLiked'].push(action.likeData.userId);
      return newState;
    case DELETE_LIKE:
      const newState = Object.assign({}, oldState);
      const index = newState[action.likeData.songId]['usersLiked'].indexOf(action.likeData.userId);
      if(index >=0 ) {
        newState[action.likeData.songId]['usersLiked'].splice(index, 1);
      }
      return newState;
    default:
      return oldState;
  }
};

export default songsReducer;