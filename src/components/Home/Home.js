import React from 'react';
import './Home.css';
// import '../SideDrawer/HamburgerToggleButton'
// import HamburgerToggleButton from '../SideDrawer/HamburgerToggleButton';

import reactjs from '../../img/reactjs.png'
import nodeimg from '../../img/nodejs.png'
import jqueryimg from '../../img/jquery.png'
import mongoimg from '../../img/mongodb.png'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="banner-overlay">
            <h1>Charutha Bandara</h1>
            <h2 className="subheading">Full-Stack Web Developer</h2>
          </div>
        </div>
        <div className="section">
          <h2>Core Compentencies</h2>
          <ul className="flex-parent-section">
            <li>
              <div className="core-div">
                <img src={reactjs} alt="reactjs" className="core-img"></img>
                <p>React</p>
              </div>
            </li>
            <li>
              <div className="core-div">
                <img src={nodeimg} alt="nodejs" className="core-img"></img>
                <p>Node</p>
              </div>
            </li>
            <li>
              <div className="core-div">
                <img src={jqueryimg} alt="jquery" className="core-img"></img>
                <p>jQuery</p>
              </div>
            </li>
            <li>
              <div className="core-div">
                <img src={mongoimg} alt="mongodb" className="core-img"></img>
                <p>MongoDB</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Projects</h2>
          <ul className="flex-parent-section">
            <li>Fortnite LFG</li>
            <li>SimpleWeather</li>
            <li>myInventory</li>
            <li>Shopping List</li>
            <li>Hamburger Menu</li>
          </ul>
        </div>
        <div className="section">
          <h2>Projects</h2>
          <ul className="flex-parent-section">
            <li>Fortnite LFG</li>
            <li>SimpleWeather</li>
            <li>myInventory</li>
            <li>Shopping List</li>
            <li>Hamburger Menu</li>
          </ul>
        </div>

      </div>

    )
  }
}

export default Home;