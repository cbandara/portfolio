import React from 'react';
import './FortniteLFG.css';
import fortnitelfg from '../../../img/fortnitelfg.png'

class FortniteLFG extends React.Component {
  render() {
    return (
      <div className="work-background">
        <section className="section">
          <div className="container">
            <h1 className="work-heading">FortniteLFG</h1>
            <img src={fortnitelfg} alt="fortnitelfg" className="project-img"></img>
            <div className="work-flex-div">
              <a href="https://github.com/cbandara/FortNiteLFG" target="_blank" rel="noopener noreferrer" className="project-button">Code</a>
              <a href="https://fierce-tundra-18202.herokuapp.com" target="_blank" rel="noopener noreferrer" className="project-button">Live App</a>
            </div>
            <h2>Description</h2>
            <p className="work-description-ext">FortiniteLFG is an app I made to help players find other people to play with in the popular online game, Fortnite.
              There is a user authentication system using Passport.js and the app is a CRUD application so after users register and login,
              they may create, edit, delete and comment on posts. Anyone can read posts without having to login. Users can filter posts by platform in
              case they do not want crossplay enabled. In order to register, you must have a valid Fortnite username. This is so players
              will know who made the post and who to add on Fortnite. In the future this can be used to pull up player statistics and filter posts
              by player level. To build this application, I used jQuery, Node and MongoDB.
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default FortniteLFG;