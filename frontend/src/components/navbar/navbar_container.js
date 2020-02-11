//will use isAuthenticated boolean in our state to determine which set of links to render (thus the need for map state to props)

import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavBar);
