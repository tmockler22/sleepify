import { connect } from 'react-redux';
import PlayerQueue from './player_queue';

const mapStateToProps = state => ({
    currentTrack: state.queue[0],
    nextTrack: state.queue[1],
    tracks: state.queue,
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(PlayerQueue);