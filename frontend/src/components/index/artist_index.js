import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.search !== this.props.search) {
  //     this.props.searchArtists(this.props.search);
  //   }
  // }

  render() {
    let liArtists;
    if (!this.props.artists) return null;
    let artists = this.props.artists;

    liArtists = Object.values(artists).map(artist => <ArtistIndexItem key={artist.id} artist={artist} />);

    return (
      <div className="artists-list">
        {liArtists}
      </div>
    )
  };
};

export default ArtistsIndex; 