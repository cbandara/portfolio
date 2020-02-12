import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-background">
        <div className="section">
          <div className="container">
            <h1 className="work-heading">Shoot me an email!</h1>
            <a href="mailto:mail@charuthabandara@gmail.com"><button className="work-button">Contact Me</button></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;