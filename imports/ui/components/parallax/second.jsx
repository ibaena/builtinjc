import React, { Component } from 'react';



// Intro component
export default class Second extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){


  }


  render() {
    return (
          <div className="secondary col-sm-12 col-md-12">
            <div className="col-sm-12 col-md-6 add-p-top " >
                <p className="about-header ani-fade">What I can do.</p>
            </div>
            <div className="col-sm-12 col-md-6 add-p-top-b" >
              <div className="alphas ani-fade">
                <label>Web</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
              <div className="alphas ani-fade">
                <label>Design</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
              <div className="alphas ani-fade">
                <label>Content</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
              <div className="alphas ani-fade">
                <label>I.T.</label>
                <p className="alpha-text">reat experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
              </div>
            </div>
          </div>

    );
  }
}
