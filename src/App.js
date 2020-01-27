import React from 'react';
import Menu from './components/Menu/Menu';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
      // This is to prevent batch updates messing up !state
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}></Backdrop>
    }
    return (
      <div className="flex-wrapper">
        <Menu drawerClickHandler={this.drawerToggleClickHandler} ></Menu>
        <div classname="flex-wrapper">
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main className="content">
            <p>Resize to mobile to view hamburger menu</p>
          </main>
        </div>


      </div>
    );
  }
}

export default App;
