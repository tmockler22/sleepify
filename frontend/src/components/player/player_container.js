import { connect } from 'react-redux';
import Player from './player';
import { receiveVolume } from '../../actions/player_actions';

const mapStateToProps = state => ({
    volume: state.player.volume
});


const mapDispatchToProps = dispatch => ({
    changeVolume: volume => dispatch(receiveVolume(volume))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);