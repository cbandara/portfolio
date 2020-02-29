import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-background">
        <section className="section">
          <div className="container">
            <h1 className="work-heading">Shoot me an email!</h1>
            <a href="mailto:mail@charuthabandara@gmail.com" target="_blank" rel="noopener noreferrer"><div className="work-button">Contact Me</div></a>
            <a href="https://www.linkedin.com/in/cbandara/" target="_blank" rel="noopener noreferrer"><div className="work-button">LinkedIn</div></a>
            <a href="https://github.com/cbandara" target="_blank" rel="noopener noreferrer"><div className="work-button">Github</div></a>
          </div>
        </section>
      </div>
    )
  }
}

export default Contact;