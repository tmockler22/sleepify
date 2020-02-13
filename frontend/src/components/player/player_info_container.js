import PlayerInfo from './player_info';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentTrack: state.queue[0],
    tracks: state.queue,
    nextTrack: state.queue[1]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);