import SongIndex from "./songs";
import { connect } from 'react-redux';
import { fetchSongs, searchSongs } from '../../actions/song_actions';
import { playTrack } from '../../actions/player_queue_actions';
import { addSongToPlaylist } from '../../actions/playlist_actions';
const msp = (state) => {
  return { songs: state.entities.songs };
};

const mdp = () => dispatch => {
  return { fetchSongs: () => dispatch(fetchSongs()),
           searchSongs: (search) => dispatch(searchSongs(search)),
           playTrack: (track) => dispatch(playTrack(track)),
           addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId))
          }
};

export default connect(
  msp,
  mdp
)(SongIndex);