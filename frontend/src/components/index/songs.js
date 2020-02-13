import React from 'react';
import SongIndexItem from './song_index_item';

class SongsIndex extends React.Component {
  componentDidMount() {
    this.props.searchSongs(this.props.search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.search && prevProps.search !== this.props.search) {
    this.props.searchSongs(this.props.search);
    }
  }

  render() {
    let liSongs;
    if (!this.props.songs || this.props.songs.length === 0) return null;
    let songs = this.props.songs;
    liSongs = Object.values(songs).map(song => <SongIndexItem key={song.id} song={song} playTrack={this.props.playTrack} />);

    return (
      <div>
        <h1 className="songs-list-title">Songs</h1>
        <div className="songs-list">
          {liSongs}
        </div>
      </div>
    )
  };
};

export default SongsIndex; 