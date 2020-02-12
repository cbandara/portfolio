import React from 'react';
import './HamburgerMenu.css';
import hamburgerpic from '../../../img/hamburger.png'

class HamburgerMenu extends React.Component {
  render() {
    return (
      <div className="work-background">
        <div className="section">
          <div className="container">
            <h1 className="work-heading">HamburgerMenu</h1>
            <img src={hamburgerpic} alt="hamburger-menu" className="project-img"></img>
            <div className="work-flex-div">
              <a href="https://github.com/cbandara/hamburger-menu" target="_blank"><button className="project-button">Code</button></a>
              <a href="https://pacific-waters-32549.herokuapp.com/" target="_blank"><button className="project-button">Live App</button></a>
            </div>
            <h2>Description</h2>
            <p className="work-description-ext">HamburgerMenu is a re-usable template that anyone can use. I created it when
            I was looking for an easy and responsive navigation template when building an app in React.js. There are two main views
            to this application. In the desktop view, there is a fixed sidebar on the left. This can be utilized in many different ways to
            add information about the app, a logo, and navigation links. In the mobile view, this sidebar is not displayed by default.
            Instead, there is a hamburger icon which the user can click to pull out the sidebar menu. I will be able to use this template
            in my further projects to save time. The app can be easily changed with simple CSS and media queries. As you can see my live app
            example I have the same app but configured differently to show the navbar on the top instead of the side.
          </p>
            <div className="v-spacer-short"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default HamburgerMenu;