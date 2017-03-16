import React, { Component } from 'react';


// Intro component
export default class SlideB extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  buildThirdsB() {
    return [
      {_id:1, name:'one'},
      {_id:2, name:'two'},
      {_id:3, name:'three'},
    ]
  }
  renderColB() {
    return this.buildThirdsB().map((item) => (
      <div className="col-md-4 col-sm-12 img-wrapper" key={item._id}>
        <div className="viewports">
          <div className="col-md-12 media-box">
            <h1 className="menu-title">Title</h1>
            <p className="sub-text">Sub</p>
            <p className="keyword-text">Keyword</p>
          </div>
        </div>
      </div>
    ))
  }

  componentDidMount(){

  }

  render() {
    return (
      <div id="slideB" className="container-fluid">
        {this.renderColB()}
      </div>
    );
  }
}
