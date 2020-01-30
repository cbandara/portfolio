import React from 'react';
import './Home.css';
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
          <div className="container">
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
        </div>
        <div className="section projects-section">
          <div className="container">
            <h2>Projects</h2>
            <ul className="flex-parent-section">
              <a href="/">
                <li className="projects-div">
                  <h3>Fortnite LFG</h3>
                  <p>Helps connect players together and form squads for the Fortnite Game</p>
                  <p className="project-tech">jQuery</p>
                </li>
              </a>
              <a href="/">
                <li className="projects-div">
                  <h3>Hamburger Menu</h3>
                  <p>A simple, reusable navigation menu for both desktop and mobile views</p>
                  <p className="project-tech">React</p>
                </li>
              </a>

              <li className="projects-div">
                <h3>myInventory</h3>
                <p>A catalog app that allows users to manage inventory</p>
                <p className="project-tech">React</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <h2>Things I Know</h2>
            <ul className="tech-section">
              <li className="tech-li">Fortnite LFG</li>
              <li>Node</li>
              <li>React</li>
              <li>Redux</li>
              <li>jQuery</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MongoDB</li>
              <li>Mocha</li>
              <li>Javascript</li>
              <li>Adobe Illustrator</li>
            </ul>
          </div>
        </div>

      </div>

    )
  }
}

export default Home;