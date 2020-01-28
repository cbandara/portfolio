import React from 'react';
import './Menu.css';
import '../SideDrawer/HamburgerToggleButton'
import HamburgerToggleButton from '../SideDrawer/HamburgerToggleButton';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__navigation">
          <div className="menu__toggle-button">
            <HamburgerToggleButton click={this.props.drawerClickHandler}></HamburgerToggleButton></div>

          <div className="spacer"></div>
        </div>
      </div>
    )
  }
}

export default Menu;