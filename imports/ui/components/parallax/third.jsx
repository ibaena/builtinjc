import React, { Component } from 'react';

// Intro component
export default class Third extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

    /* let height = $('.p-slide').height();
    $('.third-para').css({
      'top': height
    })
    $(window).resize(function() {
      height = $('.p-slide').height();
      $('.third-para').css({
        'top': height
      })
    }); */
  }


  render() {
    return (
      <div className="third-para secondary col-sm-12 col-md-12">
        <div className="col-sm-12 col-md-4 black-vertical">
          <div className="alphas">
            <label>BUILDER</label>
          </div>
          <div className="alphas push-right">
            <label>NERD</label>
          </div>
          <div className="alphas push-right">
            <label>KNICKS FAN</label>
          </div>
          <div className="alphas push-right">
            <label>XBOX GAMER</label>
          </div>
          <div className="alphas push-right">
            <label>HORROR MOVIE BUFF</label>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 white-block"></div>
      </div>

    );
  }
}
