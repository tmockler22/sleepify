import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import NavigationArrows from "../navbar/navigation_arrows";
class OpenHeader extends React.Component {
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
