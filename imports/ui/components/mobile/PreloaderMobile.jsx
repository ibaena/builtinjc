import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {TweenMax, Power2, TimelineLite} from "gsap";

import SlideMobile from './SlideMobile.jsx';
// Intro component
export default class PreloaderMobile extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    this.centerBox();
    /*setTimeout(function(){
      //$('.preload-text').addClass('pre-fade-up');
      TweenMax.staggerTo(".preload-letter-mobile", .4, {top:'25%', ease:Cubic.easeInOut, opacity:1,}, .1);
    },600)
   setTimeout(function(){
      TweenMax.to(".preload-box-mobile", .6, {width:'0%', ease:Cubic.easeInOut});
      TweenMax.to(".preload-letter-mobile", .4, {left:'40%', ease:Cubic.easeInOut, opacity:0});
    },4500)
    setTimeout(function(){
      FlowRouter.go('/cases');
    },5000)*/
  }
  centerBox(){
    $(window).resize(function(){
      $('#preload-box').css({
        position:'absolute',
        left: ($(window).width() - $('#preload-box').outerWidth())/2,
        top: ($(window).height() - $('#preload-box').outerHeight())/2
      });
    });
    // To initially run the function:
    $(window).resize();
  }

  render() {
    return (
      <div id="preloader-mobile" className="container-fluid">
        <div className="preload-text-mobile col-sm-12">
          <span className="preload-letter-mobile">I</span>
          <span className="preload-letter-mobile">V</span>
          <span className="preload-letter-mobile">A</span>
          <span className="preload-letter-mobile">N</span>
          <span className="preload-letter-mobile"> </span>
          <span className="preload-letter-mobile">B</span>
          <span className="preload-letter-mobile">A</span>
          <span className="preload-letter-mobile">E</span>
          <span className="preload-letter-mobile">N</span>
          <span className="preload-letter-mobile">A</span>
          <br />
          <span className="preload-letter-mobile">W</span>
          <span className="preload-letter-mobile">E</span>
          <span className="preload-letter-mobile">B</span>
          <span className="preload-letter-mobile"> </span>
          <span className="preload-letter-mobile">D</span>
          <span className="preload-letter-mobile">E</span>
          <span className="preload-letter-mobile">V</span>
          <span className="preload-letter-mobile">E</span>
          <span className="preload-letter-mobile">L</span>
          <span className="preload-letter-mobile">O</span>
          <span className="preload-letter-mobile">P</span>
          <span className="preload-letter-mobile">E</span>
          <span className="preload-letter-mobile">R</span>
        </div>
        <div className="col-sm-12 col-md-4 preload-box-mobile" id=""></div>
        <div className="col-sm-12 col-md-4 preload-box-mobile" id=""></div>
        <div className="col-sm-12 col-md-4 preload-box-mobile" id=""></div>
        <SlideMobile />
      </div>
    );
  }
}
