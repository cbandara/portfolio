import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="about-banner">

        </div>
        <div className="section">
          <div className="container">
            <h1 className="about-heading">About Me</h1>
            <p className="about-me">My first experience with making websites came out of necessity.
              I had just started high school and I wanted to sell t-shirts
              I made with my friend. The t-shirt business
              didn't take off as we expected but I learned that in almost every business,
              the biggest barrier of entry
              is a solid looking website. From there on I started learning about different
              website design tools like Wordpress and Wix. Using the knowledge I had of HTML and CSS I
             was able to make some genuinely good looking websites.
              </p>
            <p className="about-me"> I quickly realized that
              this was very fun and rewarding for me. Since then I have gone to Indiana University
              to study Computer Science and Finance. On top of that I kept up to date with
              the persistently changing environment of web development by studying new languages.
              In order to hone in my skills after college I attended a full-stack web development
              bootcamp called Thinkful. There, I acquired up-to-date development skills
              that I can use to create powerful web applications. I look forward to working on a team of other great developers
              so I can gain valuable insights about the industry.</p>
            <p className="about-me">My stack currently consists of Node.js to build back end API's, MongoDB
            for the databases, and React.js for the front end application. Accompanied with modern CSS and
              web accessibility practices, I have a well rounded skillset that makes me an asset to any development team.</p>
            <p className="about-me">Outside of web development my hobbies include aquariums, motorcycles and hiking. I currently
            maintain 8 aquariums and I find it very relaxing. When it comes to adrenaline, I ride a Kawasaki Ninja 650 but I plan on switching to a Yamaha soon.
            Hiking is somewhere in the middle of this. You never know what's around the corner. Getting lost always makes for a good story too.</p>

          </div>
        </div>

      </div>
    )
  }
}

export default About;