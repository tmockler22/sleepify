import React from 'react';
import { Link } from 'react-router-dom';
class LikedIndex extends React.Component {
  render() {
    const title = <h1 className="artists-list-title">Liked Songs</h1>
    return (
      <div>
        {title}
        <div className="playlists-list">
          <div>
            <Link to="/open/likedsongs" id="likesongs">
              <div className="album">
                <li><img className="album-photo" src='/static/images/playlist.png' /></li>
                <li className="album-name">Your Liked Songs</li>
                <li><div className="play-button-album"><i class="fas fa-play-circle"></i></div></li>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  };
};

export default LikedIndex; 