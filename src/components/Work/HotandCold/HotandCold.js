import React from 'react';
import './HotandCold.css';
import hotcold from '../../../img/hotcold.png'

class HotandCold extends React.Component {
  render() {
    return (
      <div className="work-background">
        <div className="section">
          <div className="container">
            <h1 className="work-heading">Hot and Cold</h1>
            <img src={hotcold} alt="hot and cold" className="project-img"></img>
            <div className="work-flex-div">
              <a href="https://github.com/cbandara/redux-hot-and-cold-tested" target="_blank" rel="noopener noreferrer"><button className="project-button">Code</button></a>
              <a href="https://guarded-refuge-84830.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="project-button">Live App</button></a>
            </div>
            <h2>Description</h2>
            <p className="work-description-ext"> Hot and Cold is a game made in React that asks the user to guess a number.
            Depending on the number given and the correct number, the game will respond with a hint.
            The hints will change the closer or further you are to the number. Once you guess the correct number, you can play again but
             the number will change.
          </p>
          </div>
        </div>
      </div>
    )
  }
}

export default HotandCold;