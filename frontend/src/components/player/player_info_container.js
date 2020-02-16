import PlayerInfo from './player_info';
import { connect } from 'react-redux';
import {toggleLike} from '../../actions/song_actions'

const mapStateToProps = state => ({
    currentTrack: state.queue[0],
    tracks: state.queue,
    nextTrack: state.queue[1],
    currentUser: state.session.user.currentUser,
    // currentSongLiked: state.session.user.currentUser.likedSongs.includes(state.queue[0])
})

const mapDispatchToProps = dispatch => ({
    toggleLike: (likeData)=> dispatch(toggleLike(likeData))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);