import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

import Intro from './intro.jsx';
import Second from './second.jsx';
import Third from './third.jsx';
import Fourth from './fourth.jsx';

// Intro component
export default class Parallax extends Component {
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
      let aboutB = scrollbar.isVisible(document.querySelector('.secondary'));
      let aboutC = scrollbar.isVisible(document.querySelector('#three'));
      let aboutD = scrollbar.isVisible(document.querySelector('#four'));

      switch(scrollPos) {

        case aboutB:
          console.log('About Two',aboutB);
        break;

        case aboutC:
          console.log('About Three', aboutC);
        break;

        case aboutD:
          console.log('About Four',aboutD);
        break;
      }

    });


  }


  render() {
    return (
      <div  >
      <div className="container-fluid" id="parallax-wrapper" >
      <div className="col-sm-12 col-md-4 p-info"></div>
        <div id="parallax" >


          <div className="col-sm-12 col-md-8  p-slide" >
            <Intro />
            <Second />
          </div>
          <div className="col-sm-12 col-md-12 b-slide">
            <Third />
            <Fourth />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
