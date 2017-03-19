import React, { Component } from 'react';

import OnScreen from 'onscreen';
const os = new OnScreen();


// Intro component
export default class Parallax extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    os.on('enter', '.grow-intro', (element) => {
      setTimeout(function(){
        $('.grow-intro').css({
          'transform':'translate3d(0,-20,0)',
          'transition':'all .8s ease-in-out',

        })
      }, 200)

    });
  }


  render() {
    return (
      <div id="parallax" className="container-fluid">
        <div className="col-sm-12 col-md-4 p-info">

        </div>
        <div className="col-sm-12 col-md-8 p-slide">
          <div className="color-bg" id="target">
            <div className="col-sm-12 col-md-6">
              <p className="about-header">I like to build things.</p>
            </div>
          </div>
          <div className="color-bg grow-intro">
              <h1>BLAH BLAH BLAH BLAH</h1>

          </div>
        </div>
      </div>
    );
  }
}
