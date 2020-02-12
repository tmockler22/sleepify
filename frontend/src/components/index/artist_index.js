import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistsIndex extends React.Component {
  componentDidMount() {
    this.props.searchArtists(this.props.search);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.props.searchArtists(this.props.search);
    }
  }

  render() {
    let liArtists;
    if (!this.props.artists || this.props.artists.length === 0) return null;
    let artists = this.props.artists;
  
    liArtists = Object.values(artists).map(artist => <ArtistIndexItem key={artist.id} artist={artist} />);

    return (
      <div>
        <h1 className="artists-list-title">Artists</h1>
        <div className="artists-list">
          {liArtists}
        </div>
      </div>
    )
  };
};

export default ArtistsIndex; 