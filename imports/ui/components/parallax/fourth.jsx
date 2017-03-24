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
    });
    $(window).resize(function() {
      heightB = $('.p-slide').height() + $('.third-para').height();
      $('.fourth-para').css({
        'top': heightB,
      });
    })
  }


  render() {
    return (
      <div className="fourth-para  col-sm-12 col-md-12">
        <p className="th-headA">I believe in thinking outside the box,</p>
        <p className="th-headB">while pushing the limit of what I can do.</p>
      </div>

    );
  }
}
