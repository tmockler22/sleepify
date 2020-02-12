import React from 'react';
import SongIndexItem from './song_index_item';

class SongsIndex extends React.Component {
  componentDidMount() {
    this.props.searchSongs(this.props.search);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
    this.props.searchSongs(this.props.search);
    }
  }

  render() {
    let liSongs;
    if (!this.props.songs) return null;
    let songs = this.props.songs;

    liSongs = Object.values(songs).map(song => <SongIndexItem key={song.id} song={song} />);

    return (
      <div className="songs-list">
        {liSongs}
      </div>
    )
  };
};

export default SongsIndex; 