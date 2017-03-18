import React, { Component } from 'react';


// Intro component
export default class SlideC extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  buildVideo() {
    return [
      {_id:1, name:'IFRAME'},
    ]
  }
  renderCol() {
    return this.buildVideo().map((item) => (
      <div className="col-md-12 col-sm-12 iframe-wrapper" key={item._id}>
        <div className="viewports">
          <div className="embed-responsive embed-responsive-16by9 cs-iframe">
            <video className="embed-responsive-item cs-video" autoPlay loop >
              <source src="/videos/traffic.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    ))
  }

  componentDidMount(){


  }

  render() {
    return (
      <div id="slideC" className="container-fluid">
        {this.renderCol()}
      </div>
    );
  }
}
