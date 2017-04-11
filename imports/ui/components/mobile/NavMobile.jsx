import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {TweenMax, Power2, TimelineLite} from "gsap";

// Intro component
export default class NavMobile extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  navThirds() {
    return [
      {_id:1, smallName:'Cases', name:'CASES', src:'/cases', info:'I let my work speak for itself.'},
      {_id:2, smallName:'About', name:'ABOUT', src:'/about', info:'I am a Front End Developer with Agency expirience.'},
      {_id:3, smallName:'Contact', name:'CONTACT', src:'/contact', info:'Want to work together? Lets get in touch.'},
    ]
  }
  renderNav() {
    return this.navThirds().map((item) => (
      <div className="col-md-4 col-sm-12 nav-col-mobile" key={item._id}>
        <div className="nav-viewports-mobile">
          <div className="col-md-12 media-box-mobile">
            <a href="" className="menu-link-mobile" id={"link-"+item._id}>
            <p className="menu-title-mobile">{item.name}</p>
            <p className="btm-text btm-text-lg">Go to {item.smallName}</p>
          </a>
          </div>
        </div>
      </div>
    ))
  }
  triggerLinks() {
    $('.menu-link-mobile').on('click', function() {
      let currentSpace = $(location).attr('href');
      let clicked = this.id;

      console.log(currentSpace);

      switch(clicked){
        case 'link-1':
        window.showNav = !window.showNav;
        $('.nav-col-mobile').css({
          "width":"0px",
          'transition':'all 1s ease-in-out'
        });
        setTimeout(function(){
          $('.nav-wrapper-mobile').css({
            'z-index':'-1'
          });
          FlowRouter.go('/cases');
        },1100);
        break;

        case 'link-2':
        window.showNav = !window.showNav;
        $('.nav-col-mobile').css({
          "width":"0px",
          'transition':'all 1s ease-in-out'
        });
        setTimeout(function(){
          $('.nav-wrapper-mobile').css({
            'z-index':'-1'
          });
          FlowRouter.go('/about');
        },1100);
        break;

        case 'link-3':
        window.showNav = !window.showNav;
        $('.nav-col-mobile').css({
          "width":"0px",
          'transition':'all 1s ease-in-out'
        });
        setTimeout(function(){
          $('.nav-wrapper-mobile').css({
            'z-index':'-1'
          });
          FlowRouter.go('/contact');
        },1100);
        break;
      }
    })
  }
  fireMenu() {
    window.showNav = false;
    $('#mobile-nav-btn').on('click', function() {
      window.showNav = !window.showNav;
      if(window.showNav === true) {

        TweenMax.staggerTo(".nav-col-mobile", .4, {width:'100%', ease:Cubic.easeInOut}, .1);
        $('.nav-wrapper').css({
          'z-index':'99'
        });
      }else {
TweenMax.staggerTo(".nav-col-mobile", .4, {width:'0%', ease:Cubic.easeInOut}, .1);
        setTimeout(function(){
          $('.nav-wrapper').css({
            'z-index':'-1'
          });
        },1100);
      }
  });
}

  componentDidMount() {
      this.fireMenu();
      this.triggerLinks();
  }

  render() {
    return (
      <div id="nav-mobile">
        <div id="mobile-nav-btn">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="nav-wrapper-mobile container-fluid">
          {this.renderNav()}
        </div>
      </div>
    );
  }
}
