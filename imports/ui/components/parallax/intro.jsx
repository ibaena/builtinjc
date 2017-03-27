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
            <p className="about-text">Simple things. Beautiful things. Crazy things. Intuitive things. Things that don't exist yet. Things that make even the most cynical, seen-it-before people say "hey that's pretty cool". We make things 100% tailored for the project at hand. We dig deep to build things that are actually useful instead of things that just lay there and look pretty. We build these things because we love to build. What can we build for you?
            </p>
            <p className="about-text">Simple things. Beautiful things. Crazy things. Intuitive things. Things that don't exist yet. Things that make even the most cynical, seen-it-before people say "hey that's pretty cool". We make things 100% tailored for the project at hand. We dig deep to build things that are actually useful instead of things that just lay there and look pretty. We build these things because we love to build. What can we build for you?
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
