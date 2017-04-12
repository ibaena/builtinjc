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
                <p className="alpha-text">I have learned that teamwork is the foundation to create a solid a product. In order to make the client happy you must willing to work side by side with them and have a thorough understanding of their business. These factors will allow them to be successful in the ever changing tech landscape.</p>
              </div>
              <div className="alphas ani-fade">
                <label>Design</label>
                <p className="alpha-text">Simple means clarity! But it can’t be that simple can it? I believe design should be simple, beautiful, intuitive and rational. Working like this can lead to pixel perfect design, not to mention clean, dry, and reuseable code.</p>
              </div>
              <div className="alphas ani-fade">
                <label>Content</label>
                <p className="alpha-text">Content is a make or break in web & design. For example great content will raise a designs appeal and vice versa. I encourage my clients to create engaging content that will keep users on the page (Even a few extra seconds counts!). I am also there step for step with them to assist in putting content together if help is needed.</p>
              </div>
              <div className="alphas ani-fade">
                <label>Environment</label>
                <p className="alpha-text">I come from a Javascript background. I have fully endorsed the node and meteor ecosystems and worked on apps that use MongoDb. Currently my preferred development environment setup is Meteor with React as my Front End and git for version control.  I also have experience working with content management systems such as Wordpress.  My whole philosophy is to use the right tool for job. You don’t bring a flathead screwdriver if a phillips will do right?</p>
              </div>
            </div>
          </div>

    );
  }
}
