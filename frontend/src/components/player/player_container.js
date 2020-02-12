import { connect } from 'react-redux';
import Player from './player';
import { receiveVolume } from '../../actions/player_actions';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
    volume: state.player.volume,
    songs: Object.values(state.entities.songs)
});


const mapDispatchToProps = dispatch => ({
    changeVolume: volume => dispatch(receiveVolume(volume)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);