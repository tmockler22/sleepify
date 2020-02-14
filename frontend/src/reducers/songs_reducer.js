import { RECEIVE_SONG, RECEIVE_SONGS, CHANGE_LIKE } from '../actions/song_actions';

const songsReducer = (oldState = {}, action) => {
  
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_SONG:
      return Object.assign({}, oldState, { [action.song._id]: action.song });
    case RECEIVE_SONGS: 
      return action.songs.data;
    // case CHANGE_LIKE: 
    //   newState = Object.assign({}, oldState);
    //   debugger;
    //   let songIdx = newState.findIndex(ele => ele.songId === action.likeData.data.songId)
    //   if(newState[songIdx].usersLiked.includes(action.likeData.data.userId)) {
    //     const index = newState[songIdx].usersLiked.indexOf(action.likeData.data.userId);
    //     // if(index >=0) {
    //     newState[songIdx].usersLiked.splice(index, 1);
    //     // }
    //   } else {
    //     newState[songIdx].usersLiked.push(action.likeData.data.userId);
    //   }
    //   return newState;
    // case DELETE_LIKE:
    //   newState = Object.assign({}, oldState);
    //   const index = newState[action.likeData.songId]['usersLiked'].indexOf(action.likeData.userId);
    //   if(index >=0) {
    //     newState[action.likeData.songId]['usersLiked'].splice(index, 1);
    //   }
      // return newState;
    default:
      return oldState;
  }
};

export default songsReducer;