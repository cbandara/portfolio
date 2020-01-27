import React from 'react';
import './SideDrawer.css';

class SideDrawer extends React.Component {

  render() {
    let drawerClasses = ['side-drawer'];
    if (this.props.show) {
      drawerClasses = ['side-drawer', 'open'];
    }
    return (
      <nav className={drawerClasses.join(' ')}>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default SideDrawer;