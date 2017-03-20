import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

import OnScreen from 'onscreen';
const os = new OnScreen();


// Intro component
export default class Parallax extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    os.on('enter', '.test', (element) => {

    });
    setTimeout(function(){
      $('#parallax-wrapper').css({
        'opacity':'1',
        'transition':'all .4s ease-in-out'
      })
    },100);
    Scrollbar.initAll();
  }


  render() {
    return (
      <div className="container-fluid" id="parallax-wrapper">
      <div className="col-sm-12 col-md-4 p-info">

      </div>
      <div id="parallax"  data-scrollbar>
        <div className="col-sm-12 col-md-8 p-slide" >
          <div className="color-bg col-sm-12 col-md-7" >
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
          <div className="secondary col-sm-12 col-md-12">Second</div>
        </div>

      </div>
    </div>
    );
  }
}
