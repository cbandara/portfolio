import React from 'react';
import './MyInventory.css';
import myinventory from '../../../img/myinventory.png'

class MyInventory extends React.Component {
  render() {
    return (
      <div className="work-background">
        <div className="section">
          <div className="container">
            <h1 className="work-heading">myInventory</h1>
            <img src={myinventory} alt="myinventory" className="project-img"></img>
            <div className="work-flex-div">
              <a href="https://github.com/cbandara/my-inventory-app" target="_blank" rel="noopener noreferrer"><button className="project-button">Code</button></a>
              <a href="https://github.com/cbandara/my-inventory-app-api" target="_blank" rel="noopener noreferrer"><button className="project-button">API</button></a>
              <a href="https://my-inventory-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="project-button">Live App</button></a>
            </div>
            <h2>Description</h2>
            <p className="work-description-ext">The myInventory application is a inventory management tool as well as a catalog.
            Users can look at existing inventory, as well as add, remove, or edit products. The practical uses of this app
             are very flexible. In the future this can be built out with a shopping cart feature, search, and payment processing.
             This will be more similar to an ecommerce application at that point. The API was made using Node.js and MongoDB. The frontend
              was created with React and Redux.
          </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MyInventory;