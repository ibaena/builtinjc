import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

import {TweenMax, Power2, TimelineLite} from "gsap";

// Intro component
export default class ParallaxMobile extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    setTimeout(function(){
      $('#parallax-wrapper-mobile').css({
        'opacity':'1',
        'transition':'all .3s ease-in-out'
      });
    },100);
  }
  logoImagesMobile() {
    return [
      {_id:1, name:'Amloid Toys', image:'/images/sites-logos/amloid-bw.png'},
      {_id:2, name:'Amloid Toys', image:'/images/sites-logos/ferrero-bw.png'},
      {_id:3, name:'Amloid Toys', image:'/images/sites-logos/feverall-bw.png'},
      {_id:4, name:'Amloid Toys', image:'/images/sites-logos/finlandia-bw.png'},
      {_id:5, name:'Amloid Toys', image:'/images/sites-logos/g-shock-bw.png'},
      {_id:6, name:'Amloid Toys', image:'/images/sites-logos/leafguard-bw.png'},
      {_id:7, name:'Amloid Toys', image:'/images/sites-logos/mccaffreys-bw.png'},
      {_id:8, name:'Amloid Toys', image:'/images/sites-logos/nicenclean-bw.png'},
      {_id:9, name:'Amloid Toys', image:'/images/sites-logos/bellowstech-bw.png'},
      {_id:10, name:'Amloid Toys', image:'/images/sites-logos/servometer-bw.png'},
      {_id:11, name:'Amloid Toys', image:'/images/sites-logos/tdp-logo-bw.png'},
      {_id:12, name:'Amloid Toys', image:'/images/sites-logos/thermoactive-bw.png'},
    ]
  }
  renderLogosMobile() {
    return this.logoImagesMobile().map((logo) => (
      <div className="col-sm-6 col-xs-6 brand-logos" key={logo._id}>
        <div className="logo-wrapper">
          <img src={logo.image} className="img-responsive brand-img center-block" />
        </div>
      </div>
    ))
  }


  render() {
    return (
      <div>
        <div className="container-fluid" id="parallax-wrapper-mobile" >
          <div className="col-sm-12 mobile-about"></div>
          <div className="col-sm-12 mobile-about">
          <div className="color-bg col-sm-12 col-xs-12 padding-mobile" id="first-mobile">
              <p className="about-header">I build things.</p>
              <p className="about-text">I am a web developer that enjoys coding. I code, Simple things, Beautiful things, Interactive things and sometimes I tinker to build things that don’t even exist yet. My goal is to make the end user say “hey that’s awesome!’. I make all my web apps/sites tailored to the the project goals making sure that the client is 100% satisfied. I don’t want the app/site to just look pretty, I want it to be useful as well. I build these things because I have a passion for coding and desire to keep learning. What can I build for you?
              </p>
              <p className="about-text">I began my journey as Web developer because I wanted to create my site. Eventually the joy I found in creating that site led me to pursue this as career. I have been working professionally with many talented individuals such as designers, developers, writers, and creative directors delivering a high quality product to clients that bridges the gap between design, technology and creative ideas.
              </p>
              <p className="about-header-sm-mobile">View my profile and connect with me on LinkedIn.</p>
              <p className="about-link"><a href="https://github.com/ibaena" target="_blank" className="contact-link special-fx">View LinkedIn Profile</a></p>
          </div>
        </div>
          <div className="col-sm-12 mobile-about">
          <div className="secondary-mobile col-sm-12 col-md-12">
            <div className="col-sm-12 col-md-6 add-p-top " >
                <p className="about-header ani-fade-mobile">What I can do.</p>
            </div>
            <div className="col-sm-12 col-md-6 add-p-top-b" >
              <div className="alphas ani-fade-mobile">
                <label>Web</label>
                <p className="alpha-text">I have learned that teamwork is the foundation to create a solid a product. In order to make the client happy you must willing to work side by side with them and have a thorough understanding of their business. These factors will allow them to be successful in the ever changing tech landscape.</p>
              </div>
              <div className="alphas ani-fade-mobile">
                <label>Design</label>
                <p className="alpha-text">Simple means clarity! But it can’t be that simple can it? I believe design should be simple, beautiful, intuitive and rational. Working like this can lead to pixel perfect design, not to mention clean, dry, and reuseable code.</p>
              </div>
              <div className="alphas ani-fade-mobile">
                <label>Content</label>
                <p className="alpha-text">Content is a make or break in web & design. For example great content will raise a designs appeal and vice versa. I encourage my clients to create engaging content that will keep users on the page (Even a few extra seconds counts!). I am also there step for step with them to assist in putting content together if help is needed.</p>
              </div>
              <div className="alphas ani-fade-mobile">
                <label>Environment</label>
                <p className="alpha-text">I come from a Javascript background. I have fully embraced the node and meteor ecosystems and worked on apps that use MongoDb. Currently my preferred development environment setup is Meteor with React as my Front End and git for version control.  I also have experience working with content management systems such as Wordpress.  My whole philosophy is to use the right tool for job. You don’t bring a flathead screwdriver if a phillips will do the job right?</p>
              </div>
            </div>
          </div>
          </div>
          <div className="col-sm-12 mobile-about image-mobile"></div>
          <div className="col-sm-12 mobile-about">
          <div className="col-sm-12 col-xs-12 black-vertical">
            <div className="alphas ani-right-mobile">
              <label>BUILDER</label>
            </div>
            <div className="alphas ani-right-mobile">
              <label>NERD</label>
            </div>
            <div className="alphas ani-right-mobile">
              <label>KNICKS FAN</label>
            </div>
            <div className="alphas  ani-right-mobile">
              <label>XBOX GAMER</label>
            </div>
            <div className="alphas ani-right-mobile">
              <label>HORROR MOVIE BUFF</label>
            </div>
          </div>
          </div>
          <div className="col-sm-12 mobile-about" id="fourth-para-mobile">
            <div className="col-sm-12 col-xs-12 fourth-header">
            <p className="th-headA">I believe in thinking outside the box,</p>
            <p className="th-headB">while pushing the limit of what I can do.</p>
            </div>
            <div className="col-sm-12 col-xs-12 logo-container">
              {this.renderLogosMobile()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
