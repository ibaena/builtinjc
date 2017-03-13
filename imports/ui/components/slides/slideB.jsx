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
        <div className="col-md-4 viewports" key={item._id}>{item.name}</div>
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
