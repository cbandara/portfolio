import React from 'react';
import './Work.css';
import { Link } from 'react-router-dom';

class Work extends React.Component {
  render() {
    return (
      <div className="background">
        <section className="section">
          <div className="container">
            <h1 className="work-heading">My Previous Work</h1>
            <ul className="flex-list">
              <li className="projects-div">
                <h3>Fortnite LFG</h3>
                <p className="work-preview">Helps connect players together and form squads for the Fortnite Game</p>
                <p className="project-tech">jQuery</p>
                <Link to={'/work/fortnitelfg'}><div className="work-button">More Info</div></Link>
              </li>
              <li className="projects-div">
                <h3>Hamburger Menu</h3>
                <p className="work-preview">Simple, reusable navigation menu for both desktop and mobile views</p>
                <p className="project-tech">React</p>
                <Link to={'/work/hamburger-menu'}><div className="work-button">More Info</div></Link>
              </li>
              <li className="projects-div">
                <h3>myInventory</h3>
                <p className="work-preview">Catalog app that allows users to manage inventory</p>
                <p className="project-tech">React</p>
                <Link to={'/work/myinventory'}><div className="work-button">More Info</div></Link>
              </li>
              <li className="projects-div">
                <h3>Hot and Cold</h3>
                <p className="work-preview">A guessing game of numbers</p>
                <p className="project-tech">React</p>
                <Link to={'/work/hotcold'}><div className="work-button">More Info</div></Link>
              </li>

            </ul>
            <div className={"v-spacer"}></div>
          </div>
        </section>

      </div >
    )
  }
}

export default Work;