import React from "react";
import { Link } from "react-router-dom";
import plusIcon from "../../../assets/images/plus-icon.png";
class Playlist extends React.Component {
  render() {
    return (
      <div className="playlist-container">
        {/* <Modal /> */}
        <h4>Playlist</h4>
        <div className="navBar-item">
          <Link className="navBar-link" to="/playlist">
            <img className="plus-icon" src={plusIcon} alt=""></img>
            Create Playlist
          </Link>
        </div>
        <ul id="playlist">
          <li>HardRock ZzZzzzz</li>
          <li>Softrock ZzZzzzz</li>
          <li>Smooth Jazz ZzZzzzz</li>
        </ul>
      </div>
    );
  }
}

export default Playlist;
