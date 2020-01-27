import React from 'react';
import './HamburgerToggleButton.css'

class HamburgerToggleButton extends React.Component {

  render() {
    return (
      <button className="toggle-button" onClick={this.props.click}>
        <div className="toggle__line"></div>
        <div className="toggle__line"></div>
        <div className="toggle__line"></div>
      </button>
    );
  }
}

export default HamburgerToggleButton;