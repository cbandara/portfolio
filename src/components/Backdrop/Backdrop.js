import React from 'react';
import './Backdrop.css';

class SideDrawer extends React.Component {

  render() {
    return (
      <div className="backdrop" onClick={this.props.click}>

      </div>
    )
  }
}

export default SideDrawer;