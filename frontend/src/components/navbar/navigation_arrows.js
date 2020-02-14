import React from "react";

class NavigationArrows extends React.Component {
  constructor(props) {
    super(props);
  }

  goForward = () => {
    window.history.forward();
  };

  handleBack = () => {
    window.history.backward();
  };

  render() {
    return (
      <div id="navigation-arrows-container">
        <button
          className="navigation-arrow-circle"
          title="Go forward"
          onClick={this.goForward}
        >
          <svg viewBox="0 0 24 24" className="arrow">
            <path
              fill="currentColor"
              d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
            ></path>
          </svg>
        </button>

        <button className="navigation-arrow-circle" title="Go Backward">
          <svg viewBox="0 0 24 24" className="arrow" onClick={this.goBackward}>
            <path
              fill="currentColor"
              d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
            ></path>
          </svg>
        </button>
      </div>
    );
  }
}

export default NavigationArrows;
