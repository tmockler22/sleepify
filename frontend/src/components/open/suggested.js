import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexContainer from '../index/playlist_index_container';
import LikedSongs from '../index/liked_index';
class Suggested extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="open-player-body">
        <div>
        <h1 className="genre-title">Sleepy Genres</h1>
        <div className="suggested-genres">
          <Link to="/open/genre/softrock"><div className="genre-1">
            Soft Rock
                <img className="genre-img" src="static/images/softrock.png" alt="" />
          </div>
          </Link>
          <Link to="/open/genre/altrock">
            <div className="genre-2">
              Alt Rock
                 <img className="genre-img" src="static/images/altrock.png" alt="" />
            </div>
          </Link>
          <Link to="/open/genre/classicrock">
            <div className="genre-3">
              Classic Rock
                <img className="genre-img" src="static/images/classicrock.png" alt="" />
            </div>
          </Link>
        </div>
            <PlaylistIndexContainer/>
            <LikedSongs/>
          </div>
      </div>
    )
  };
};

export default Suggested; 