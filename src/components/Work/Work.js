import React from 'react';
import './Work.css';

class Work extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="section">
          <div className="container">
            <h1 className="work-heading">About Me</h1>
            <ul className="flex-list">
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
                  <p>Simple, reusable navigation menu for both desktop and mobile views</p>
                  <p className="project-tech">React</p>
                </li>
              </a>

              <li className="projects-div">
                <h3>myInventory</h3>
                <p>Catalog app that allows users to manage inventory</p>
                <p className="project-tech">React</p>
              </li>
              <li className="projects-div">
                <h3>Trello Board</h3>
                <p>Mockup of the popular todo application, Trello</p>
                <p className="project-tech">React</p>
              </li>
              <li className="projects-div">
                <h3>SimpleWeather</h3>
                <p>A minimal weather application</p>
                <p className="project-tech">jQuery</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default Work;