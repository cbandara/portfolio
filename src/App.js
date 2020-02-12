import React from 'react';

import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import SimpleWeather from './components/Work/SimpleWeather/SimpleWeather';
import FortniteLFG from './components/Work/FortniteLFG/FortniteLFG';
import HamburgerMenu from './components/Work/HamburgerMenu/HamburgerMenu';
import MyInventory from './components/Work/MyInventory/MyInventory';
import HotandCold from './components/Work/HotandCold/HotandCold';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    console.log("=======clicked")
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

      <BrowserRouter>
        <div className="flex-wrapper">
          <Menu drawerClickHandler={this.drawerToggleClickHandler} ></Menu>
          <div className="flex-wrapper-2">
            <header>
              <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
              {backdrop}
            </header>
            <main className="content">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/work" component={Work}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/work/simpleweather" component={SimpleWeather}></Route>
                <Route exact path="/work/fortnitelfg" component={FortniteLFG}></Route>
                <Route exact path="/work/hamburger-menu" component={HamburgerMenu}></Route>
                <Route exact path="/work/myinventory" component={MyInventory}></Route>
                <Route exact path="/work/hotcold" component={HotandCold}></Route>
              </Switch>
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
