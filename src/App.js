import React from 'react';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


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

      <BrowserRouter>
        <div className="flex-wrapper">
          <Menu drawerClickHandler={this.drawerToggleClickHandler} ></Menu>
          <div className="flex-wrapper-2">
            <header>
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
            </header>
            <main className="content">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
              </Switch>

            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
