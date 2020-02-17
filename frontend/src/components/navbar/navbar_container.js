//will use isAuthenticated boolean in our state to determine which set of links to render (thus the need for map state to props)

import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {fetchUser} from "../../actions/user_actions"

import NavBar from "./navbar";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.user.id,
    currentUser: state.entities.users[state.session.user.id],
    loggedIn: state.session.isAuthenticated
  };
};

const mdp = dispatch => {
  return {
    logout, 
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(mapStateToProps, mdp)(NavBar);
