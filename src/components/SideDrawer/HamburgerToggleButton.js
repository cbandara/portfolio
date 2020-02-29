import React from 'react';
import './HamburgerToggleButton.css'

class HamburgerToggleButton extends React.Component {

  render() {
    return (
      <div className="toggle-button" onClick={this.props.click}>
        <div className="toggle__line"></div>
        <div className="toggle__line"></div>
        <div className="toggle__line"></div>
      </div>
    );
  }
}

export default HamburgerToggleButton;