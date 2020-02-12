import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    const artist = this.props.artist;
    return (
      <div className="artist">
        <li><img className="artist-photo" src={artist.imageUrl} /></li>
        <li className="artist-name">{artist.name}</li>
        <li className="artist-description">Artist</li>
        <li><div className="play-button"><i class="fas fa-play-circle"></i></div></li>
      </div>
    )
  }
};

export default ArtistIndexItem; 