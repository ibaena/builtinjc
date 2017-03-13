import React, { Component } from 'react';


// Intro component
export default class SlideA extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  centerBox() {
    $('#box').css({
       position:'absolute',
       left: ($(window).width() - $('#box').outerWidth())/2,
       top: ($('#home').height() - $('#box').outerHeight())/2
     });
  }
  buildThirds() {
    return [
      {_id:1, name:'one'},
      {_id:2, name:'two'},
      {_id:3, name:'three'},
    ]
  }
  renderCol() {
    return this.buildThirds().map((item) => (
        <div className="col-md-4 viewports" key={item._id}>
          <div className="col-md-12 media-box">
            <h1 className="menu-title">Title</h1>
          </div>
        </div>
    ))
  }
  componentDidMount(){

  }

  render() {
    return (
      <div id="slideA" className="container-fluid">
        {this.renderCol()}
      </div>
    );
  }
}
