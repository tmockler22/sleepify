import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import NavigationArrows from "../navbar/navigation_arrows";
import { withRouter } from "react-router-dom";
class OpenHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="open-header-container">
        <NavigationArrows />
        <NavBarContainer />
      </div>
    );
  }
}

export default OpenHeader;
