import { connect } from 'react-redux';
import Player from './player';
import { receiveVolume } from '../../actions/player_actions';
import { fetchSongs } from '../../actions/song_actions';
import {
    playAllTracks,
    nextTrack,
    prevTrack,
    shuffleTracks,

} 
from '../../actions/player_queue_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
    volume: state.player.volume,
    songs: Object.values(state.entities.songs),
    currentTrack: state.queue[0],
    tracks: state.queue,
    nextTrack: state.queue[1]
});


const mapDispatchToProps = dispatch => ({
    changeVolume: volume => dispatch(receiveVolume(volume)),
    fetchSongs: () => dispatch(fetchSongs()),
    playAllTracks: (tracks) => dispatch(playAllTracks(tracks)),
    nextTrack: () => dispatch(nextTrack()),
    prevTrack: () => dispatch(prevTrack()),
    shuffleTracks: () => dispatch(shuffleTracks()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));