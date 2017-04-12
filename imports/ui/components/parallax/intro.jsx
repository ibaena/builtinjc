import React, { Component } from 'react';


// Intro component
export default class Intro extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }


  render() {
    return (
      <div >
        <div className="color-bg col-sm-12 col-md-7" id="first">
            <p className="about-header">I build things.</p>
            <p className="about-text">I am a web developer that enjoys coding. I code, Simple things, Beautiful things, Interactive things and sometimes I tinker to build things that don’t even exist yet. My goal is to make the end user say “hey that’s awesome!’. I make all my web apps/sites tailored to the the project goals making sure that the client is 100% satisfied. I don’t want the app/site to just look pretty, I want it to be useful as well. I build these things because I have a passion for coding and desire to keep learning. What can I build for you?
            </p>
            <p className="about-text">I began my journey as Web developer because I wanted to create my site. Eventually the joy I found in creating that site led me to pursue this as career. I have been working professionally with many talented individuals such as designers, developers, writers, and creative directors delivering a high quality product to clients that bridges the gap between design, technology and creative ideas.
            </p>
        </div>
        <div className="color-bg col-sm-12 col-md-5 special-padding" >
          <p className="about-header-sm">View my profile and connect with me on LinkedIn.</p>
          <p className="about-link"><a href="https://github.com/ibaena" target="_blank" className="contact-link special-fx">View LinkedIn Profile</a></p>
        </div>
      </div>
    );
  }
}
