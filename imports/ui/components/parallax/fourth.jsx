import React, { Component } from 'react';

import OnScreen from 'onscreen';
const os = new OnScreen();



// Intro component
export default class Fourth extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    os.on('enter', '.test', (element) => {

    });
    let heightB = $('.p-slide').height() + $('.third-para').height();
    $('.fourth-para').css({
      'top': heightB
    })
    $(window).resize(function() {
      height = $('.p-slide').height();
      $('.fourth-para').css({
        'top': heightB
      })
    })
  }


  render() {
    return (
      <div className="fourth-para  col-sm-12 col-md-12">

      </div>

    );
  }
}
