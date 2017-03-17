import React, { Component } from 'react';

import SlideC from '../slides/slideC.jsx';
import SlideA from '../slides/slideA.jsx';
import SlideB from '../slides/slideB.jsx';
import NavButton from '..//navButton/navButton.jsx';

// Intro component
export default class GetInTouch extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    setTimeout(function(){
      $('#getInTouch').addClass('fade-in');
    },100);
  }


  render() {
    return (
      <div id="getInTouch" className="container-fluid">
        <div className="col-sm-12 col-md-8 c-slide">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                  <NavButton />
              <div className="carousel-inner" role="listbox">
                  <div className="item active">
                      <SlideA />
                  </div>
                  <div className="item">
                      <SlideB />
                  </div>
              </div>

          </div>
      </div>
        <div className="col-sm-12 col-md-4 c-info">

          <ul className="col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1" id="contact-list">
            <h3 className="contact-header">Contact</h3>
            <li className="contact-list-item">
              <h5 className="list-group-header">Email</h5>
              <div className="list-group"><a href="mailto: ivan.baena04@gmail.com" className="contact-link special-fx">ivan[dot]baena[at]gmail[dot]com</a></div>
            </li>
            <li className="contact-list-item">
              <h5 className="list-group-header">Telephone</h5>
              <div className="list-group">
                +1-555-555-5555
                <div className="censor"></div>
              </div>
            </li>
            <li className="contact-list-item">
              <h5 className="list-group-header">Location</h5>
              <div className="list-group">New York City</div>
              <div className="list-group">New York</div>
              <div className="list-group">USA</div>
            </li>
            <li className="contact-list-item">
              <h5 className="list-group-header">Social</h5>
              <div className="list-group"><a href="https://github.com/ibaena" target="_blank" className="contact-link special-fx">Github</a></div>
              <div className="list-group"><a href="https://codepen.io/ibaena/" target="_blank" className="contact-link special-fx">CodePen</a></div>
              <div className="list-group"><a href="https://twitter.com/NotThefakeIB" target="_blank" className="contact-link special-fx">Twitter</a></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
