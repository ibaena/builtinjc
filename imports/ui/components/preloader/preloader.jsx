import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {TweenMax, Power2, TimelineLite} from "gsap";

import SlideA from '../slides/slideA';
// Intro component
export default class Preloader extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    this.centerBox();
    setTimeout(function(){
      //$('.preload-text').addClass('pre-fade-up');
      TweenMax.staggerTo(".preload-letter", .4, {top:'25%', ease:Cubic.easeInOut, opacity:1,}, .1);
    },600)
    setTimeout(function(){
      TweenMax.to(".preload-box", .6, {width:'0%', ease:Cubic.easeInOut});
      TweenMax.to(".preload-letter", .4, {left:'40%', ease:Cubic.easeInOut, opacity:0});
    },4500)
    setTimeout(function(){
      FlowRouter.go('/cases');
    },5000)
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
      <div id="preloader" className="container-fluid">
        <div className="preload-text">
          <span className="preload-letter">I</span>
          <span className="preload-letter">V</span>
          <span className="preload-letter">A</span>
          <span className="preload-letter">N</span>
          <span className="preload-letter"> </span>
          <span className="preload-letter">B</span>
          <span className="preload-letter">A</span>
          <span className="preload-letter">E</span>
          <span className="preload-letter">N</span>
          <span className="preload-letter">A</span>
          <br />
          <span className="preload-letter">W</span>
          <span className="preload-letter">E</span>
          <span className="preload-letter">B</span>
          <span className="preload-letter"> </span>
          <span className="preload-letter">D</span>
          <span className="preload-letter">E</span>
          <span className="preload-letter">V</span>
          <span className="preload-letter">E</span>
          <span className="preload-letter">L</span>
          <span className="preload-letter">O</span>
          <span className="preload-letter">P</span>
          <span className="preload-letter">E</span>
          <span className="preload-letter">R</span>
        </div>
        <div className="col-sm-12 col-md-4 preload-box" id=""></div>
        <div className="col-sm-12 col-md-4 preload-box" id=""></div>
        <div className="col-sm-12 col-md-4 preload-box" id=""></div>
        <SlideA />
      </div>
    );
  }
}
