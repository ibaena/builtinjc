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
      $('#parallax-wrapper').css({
        'opacity':'1',
        'transition':'all .4s ease-in-out'
      })
    },100);

      var scrollbar = Scrollbar.init(document.getElementById('parallax'), {
      'speed':'1.5',
      'overscrollEffect':'bounce',
      'damping':'.05',
    });

    scrollbar.addListener(function() {
      let scrollPos = true;
      let aboutA = scrollbar.isVisible(document.querySelector('#first'));
      let aboutB = scrollbar.isVisible(document.querySelector('.secondary'));
      let aboutC = scrollbar.isVisible(document.querySelector('#three'));
      let aboutD = scrollbar.isVisible(document.querySelector('#four'));

      switch(scrollPos) {
        case aboutA:
          console.log('About One',aboutA);

        break;


        case aboutB:
          console.log('About Two',aboutB);
          $('.ani-fade').css({
            'opacity':'1',
            'top':'-50px',
            'transition':'all .6s ease-in'
          })
          $('.about-header').css({
            'opacity':'1',
            'top':'0px',
            'transition':'all .6s ease-in'
          })
        break;

        case aboutC:
          console.log('About Three', aboutC);
          $('.ani-right').css({
            'opacity':'1',
            'top':'0px',
            'transition':'all .6s ease-in'
          })
        break;

        case aboutD:
          console.log('About Four',aboutD);
          $('.th-headB').css({
            'opacity':'1',
            'top':'0px',
            'transition':'all .8s ease-in-out'
          })
          TweenMax.staggerTo(".brand-img", .2, {opacity:1}, 0.2);
        break;
      }

    });


  }


  render() {
    return (
      <div>
        <div className="container-fluid" id="parallax-wrapper-mobile" >
          <div className="col-sm-12 mobile-about"></div>
          <div className="col-sm-12 mobile-about"></div>
          <div className="col-sm-12 mobile-about"></div>
          <div className="col-sm-12 mobile-about"></div>
        </div>
      </div>
    );
  }
}
