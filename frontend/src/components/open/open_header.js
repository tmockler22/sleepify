import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import NavigationArrows from "./navigation_arrows";
import { withRouter } from "react-router-dom";
class OpenHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="open-header-container">
        <NavigationArrows />
        <GreetingContainer />
      </div>
    );
  }
}

export default OpenHeader;
