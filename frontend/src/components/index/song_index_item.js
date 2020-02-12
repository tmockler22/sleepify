import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    const song = this.props.song;
    return (
        <div className="song">
          <li><img className="song-photo" src={song.imageUrl}/></li> 
          <li className="song-title">{song.title}</li>
          <li className="song-artist">{song.artist.name}</li>
        <li><div className="play-button"><i class="fas fa-play-circle"></i></div></li>
        </div>
    )
  }
};

export default SongIndexItem; 