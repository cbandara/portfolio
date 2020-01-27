import React from 'react';
import './Menu.css';
import '../SideDrawer/HamburgerToggleButton'
import HamburgerToggleButton from '../SideDrawer/HamburgerToggleButton';

class Menu extends React.Component {
  render() {
    return (
      <header className="menu">
        <nav className="menu__navigation">
          <div className="menu__toggle-button">
            <HamburgerToggleButton click={this.props.drawerClickHandler}></HamburgerToggleButton></div>
          <div className="menu__logo"><a href="/">The Logo</a></div>
          <div className="spacer"></div>
          <div className="menu_navigation_items">
            <ul>
              <li><a href="/">About</a></li>
              {/* Replace with react router links later*/}
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Menu;