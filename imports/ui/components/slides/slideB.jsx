import React, { Component } from 'react';


// Intro component
export default class SlideB extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  buildThirdsB() {
    return [
      {_id:4, name:'Feverall', src:'/cases/feverall', expand:'left-ex'},
      {_id:5, name:'Amloid Toys', src:'/cases/amloid', expand:'middle-ex'},
      {_id:6, name:'Tuckers Point', src:'/cases/tuckerspoint', expand:'right-ex'},
    ]
  }
  renderColB() {
    return this.buildThirdsB().map((item) => (
      <div className={"col-md-4 col-sm-12 img-wrapper "+ item.expand  }key={item._id}>
          <div className="viewports slide-anchor" id={item.src} >
            <div className="col-md-12 media-box">
              <h1 className="menu-title">{item.name}</h1>
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
