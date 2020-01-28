import React from 'react';
import Menu from './components/Menu/Menu';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
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
        <div className="flex-wrapper-2">
          <header>
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          </header>
          <main className="content">
            <Home></Home>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
