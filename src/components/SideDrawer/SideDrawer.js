import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

class SideDrawer extends React.Component {

  render() {
    let drawerClasses = ['side-drawer'];
    if (this.props.show) {
      drawerClasses = ['side-drawer', 'open'];
    }
    return (
      <nav className={drawerClasses.join(' ')}>
        <ul>
          <li onClick={this.props.drawerClickHandler}><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default SideDrawer;