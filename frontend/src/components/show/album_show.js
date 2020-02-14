import React from 'react';
import AlbumSongIndexItem from '../index/album_song_index_item';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }

  render() {

    let liSongs;
    if (!this.props.album[this.props.match.params.id]) return null;
    let album = this.props.album[this.props.match.params.id];
    let songs = album.songs;
    if (album) {
      liSongs = songs.map(song => <AlbumSongIndexItem key={song.id} song={song} playTrack={this.props.playTrack} />);
    }
    return (
        <div className="album-page"> 
          <img className="album-background-photo" src="static/images/gradient.jpg" alt=""></img>
          <div className="open-player-body">
          <div className="artist-show-header">
            <img className="album-show-photo" src={album.imageUrl} />
            <div className="album-header-info">
            <h1 className="album-show-title">{album.title}</h1>
            <div className="album-by">By <Link className="album-artist-name" to={`/open/artist/${album.artist._id}`} id={album.artist._id}>{album.artist.name}</Link></div>
            <p className="album-year">{album.year}  •  {songs.length} SONGS</p>
            <div className="album-show-interactive">
                <button className="album-show-play">PLAY</button>
                <p className="like-album"><i class="far fa-heart" aria-hidden="true"></i></p>
                <p className="album-options"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></p>
            </div>
            </div>
          </div>
          <div className="album-show-songs">
            {liSongs}
          </div>
        </div>
      </div>
    )
  };
};

export default AlbumShow; 