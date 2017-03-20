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
    Scrollbar.initAll({
      'speed':'1.5',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });
  }


  render() {
    return (
      <div className="container-fluid" id="parallax-wrapper" >

      <div id="parallax"  data-scrollbar>
        <div className="col-sm-12 col-md-4 p-info"></div>
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
          <div className="secondary col-sm-12 col-md-12">
            <div className="col-sm-12 col-md-6 add-p-top" >
                <p className="about-header">What I can do.</p>
            </div>
            <div className="col-sm-12 col-md-6 add-p-top-b" >
              <div className="alphas">
                <label>Web</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
              <div className="alphas">
                <label>Design</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
              <div className="alphas">
                <label>Content</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
              <div className="alphas">
                <label>I.T.</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
            </div>
          </div>
        </div>
      <div className="col--sm-12 col-md-12 black">Black</div>
      </div>

    </div>
    );
  }
}
