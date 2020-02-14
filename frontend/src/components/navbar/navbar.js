import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <greeting>
            <h2 className="header-name">
              Hi, {this.props.currentUser.username}!
            </h2>
            <Link className="nav-link" onClick={this.logoutUser}>
              Logout
            </Link>
          </greeting>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="nav-link" to={"/signup"}>
            Signup
          </Link>
          <Link className="nav-link" to={"/login"}>
            Login
          </Link>
        </div>
      );
    }
  }

  render() {
    return <div className="navbar-container">{this.getLinks()}</div>;
  }
}

export default NavBar;
