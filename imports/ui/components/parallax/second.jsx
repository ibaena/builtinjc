import React, { Component } from 'react';

import OnScreen from 'onscreen';
const os = new OnScreen();



// Intro component
export default class Second extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    os.on('enter', '.test', (element) => {

    });
  }


  render() {
    return (
          <div className="secondary col-sm-12 col-md-12">
            <div className="col-sm-12 col-md-6 add-p-top" >
                <p className="about-header">What I can do.</p>
            </div>
            <div className="col-sm-12 col-md-6 add-p-top-b" >
              <div className="alphas">
                <label>Web</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
              <div className="alphas">
                <label>Design</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
              <div className="alphas">
                <label>Content</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
              <div className="alphas">
                <label>I.T.</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
            </div>
          </div>

    );
  }
}
