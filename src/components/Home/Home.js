import React from 'react';
import { Link } from 'react-router-dom';
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
        <section className="section">
          <div className="container">
            <h2>Core Compentencies</h2>
            <ul className="flex-list">
              <li>
                <div className="core-div">
                  <img src={reactjs} alt="reactjs" className="core-img" />
                  <p>React</p>
                </div>
              </li>
              <li>
                <div className="core-div">
                  <img src={nodeimg} alt="nodejs" className="core-img" />
                  <p>Node</p>
                </div>
              </li>
              <li>
                <div className="core-div">
                  <img src={jqueryimg} alt="jquery" className="core-img" />
                  <p>jQuery</p>
                </div>
              </li>
              <li>
                <div className="core-div">
                  <img src={mongoimg} alt="mongodb" className="core-img" />
                  <p>MongoDB</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section projects-section">
          <div className="container">
            <h2>Work</h2>
            <ul className="flex-list">
              <li className="projects-div">
                <h3>Fortnite LFG</h3>
                <p className="work-preview">Helps connect players together and form squads for the Fortnite Game</p>
                <p className="project-tech">jQuery</p>
                <Link to={'/work/fortnitelfg'}><button className="work-button">More Info</button></Link>
              </li>
              <li className="projects-div">
                <h3>Hamburger Menu</h3>
                <p className="work-preview">Simple, reusable navigation menu for both desktop and mobile views</p>
                <p className="project-tech">React</p>
                <Link to={'/work/hamburger-menu'}><button className="work-button">More Info</button></Link>
              </li>
            </ul>
            <Link to={'/work'}><button className="work-button">All Work</button></Link>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2>Things I Know</h2>
            <ul className="tech-section">
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
        </section>
        <section className="section contact-section">
          <div className="container">
            <h2>Get in Touch</h2>
            <a href="mailto:mail@charuthabandara@gmail.com"><button className="work-button">Contact Me</button></a>
          </div>
        </section>
      </div>

    )
  }
}

export default Home;