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
          <li onClick={this.props.drawerClickHandler}><Link to={'/about'}>About</Link></li>
          <li onClick={this.props.drawerClickHandler}><Link to={'/work'}>Work</Link></li>
          <li onClick={this.props.drawerClickHandler}><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
    )
  }
}

export default SideDrawer;