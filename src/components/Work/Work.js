import React from 'react';
import './Work.css';
import fortnitelfg from '../../img/fortnitelfg.png'
import hamburgerpic from '../../img/hamburger.png'
import myinventory from '../../img/myinventory.png'
import hotcold from '../../img/hotcold.png'
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
                <img src={fortnitelfg} alt="fortnitelfg" className="project-img-main"></img>
                <h3>Fortnite LFG</h3>
                <p className="work-preview">Helps connect players together and form squads for the Fortnite Game</p>
                <p className="project-tech">jQuery</p>
                <a href="https://github.com/cbandara/FortNiteLFG" target="_blank" rel="noopener noreferrer"><div className="work-button">Code</div></a>
                <a href="https://fierce-tundra-18202.herokuapp.com" target="_blank" rel="noopener noreferrer" ><div className="work-button">Live App</div></a>
                <Link to={'/work/fortnitelfg'}><div className="work-button">More Info</div></Link>
              </li>
              <li className="projects-div">
                <img src={hamburgerpic} alt="hamburger-menu" className="project-img-main"></img>
                <h3>Hamburger Menu</h3>
                <p className="work-preview">Simple, reusable navigation menu for both desktop and mobile views</p>
                <p className="project-tech">React</p>
                <a href="https://github.com/cbandara/hamburger-menu" target="_blank" rel="noopener noreferrer"><div className="work-button">Code</div></a>
                <a href="https://pacific-waters-32549.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><div className="work-button">Live App</div></a>
                <Link to={'/work/hamburger-menu'}><div className="work-button">More Info</div></Link>
              </li>
              <li className="projects-div">
                <img src={myinventory} alt="myinventory" className="project-img-main"></img>
                <h3>myInventory</h3>
                <p className="work-preview">Catalog app that allows users to manage inventory</p>
                <p className="project-tech">React</p>
                <a href="https://github.com/cbandara/my-inventory-app" target="_blank" rel="noopener noreferrer"><div className="work-button">Code</div></a>
                <a href="https://github.com/cbandara/my-inventory-app-api" target="_blank" rel="noopener noreferrer"><div className="work-button">API</div></a>
                <a href="https://my-inventory-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><div className="work-button">Live App</div></a>
                <Link to={'/work/myinventory'}><div className="work-button">More Info</div></Link>
              </li>
              <li className="projects-div">
                <img src={hotcold} alt="hot and cold" className="project-img-main"></img>
                <h3>Hot and Cold</h3>
                <p className="work-preview">A guessing game of numbers</p>
                <p className="project-tech">React</p>
                <a href="https://github.com/cbandara/redux-hot-and-cold-tested" target="_blank" rel="noopener noreferrer"><div className="work-button">Code</div></a>
                <a href="https://guarded-refuge-84830.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><div className="work-button">Live App</div></a>
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