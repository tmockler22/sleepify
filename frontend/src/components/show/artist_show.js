import React from 'react';

class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  render() {
    if (!this.props.artist) return null;
    let artist = this.props.artist;
    return (
      <div>
        <img className="artist-show-photo" src={artist.imageUrl} />
        <h1 className="artist-show-title">{artist.name}</h1>
      </div>
    )
  };
};

export default ArtistShow; 