import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    const playlist = this.props.playlist;
    return (
      <div>
        <Link to={`/open/playlist/${playlist._id}`} id={playlist._id}>
          <div className="album">
            <li><img className="album-photo" src='/static/images/playlist.png' /></li> 
            <li className="album-name">{playlist.title}</li>
            <li><div className="play-button-album"><i class="fas fa-play-circle"></i></div></li>

          </div>
        </Link>
      </div>
    )
  }
};

export default PlaylistIndexItem; 