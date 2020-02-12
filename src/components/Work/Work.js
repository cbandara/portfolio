import React from 'react';
import './Work.css';
import { Link } from 'react-router-dom';

class Work extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="section">
          <div className="container">
            <h1 className="work-heading">My Previous Work</h1>
            <ul className="flex-list">
              <Link to={'/work/fortnitelfg'}>
                <li className="projects-div">
                  <h3>Fortnite LFG</h3>
                  <p>Helps connect players together and form squads for the Fortnite Game</p>
                  <p className="project-tech">jQuery</p>
                </li>
              </Link>
              <Link to={'/work/hamburger-menu'}>
                <li className="projects-div">
                  <h3>Hamburger Menu</h3>
                  <p>Simple, reusable navigation menu for both desktop and mobile views</p>
                  <p className="project-tech">React</p>
                </li>
              </Link>
              <Link to={'/work/myinventory'}>
                <li className="projects-div">
                  <h3>myInventory</h3>
                  <p>Catalog app that allows users to manage inventory</p>
                  <p className="project-tech">React</p>
                </li>
              </Link>
              <Link to={'/work/hotcold'}>
                <li className="projects-div">
                  <h3>Hot and Cold</h3>
                  <p>A guessing game of numbers</p>
                  <p className="project-tech">React</p>
                </li>
              </Link>
              {/* <Link to={'/work/simpleweather'}>
                <li className="projects-div">
                  <h3>SimpleWeather</h3>
                  <p>A minimal weather application</p>
                  <p className="project-tech">jQuery</p>
                </li>
              </Link> */}
            </ul>
            <div className={"v-spacer"}></div>
          </div>
        </div>

      </div >
    )
  }
}

export default Work;