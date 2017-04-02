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
      $('.preload-text').addClass('pre-fade-up');
    },600)
    setTimeout(function(){
      TweenMax.to(".preload-box", .4, {width:'0%', ease:Cubic.easeInOut});
    },3000)
    setTimeout(function(){
      FlowRouter.go('/cases');
    },3300)
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
        <div className="col-sm-12 col-md-4 preload-box" id=""></div>
        <div className="col-sm-12 col-md-4 preload-box" id=""></div>
        <div className="col-sm-12 col-md-4 preload-box" id=""></div>
        <SlideA />
      </div>
    );
  }
}
