import React, { Component } from 'react';


// Intro component
export default class NavButton extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  scrollTo() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }

  componentDidMount(){
    $('#right-nav-btn').on('click', function() {

    })
    $('#left-nav-btn').on('click', function() {

    })

    this.scrollTo();
  }

  render() {
    return (
      <div id="navbtn">
          <ol className="carousel-indicators">
              <div id="left-nav-btn">
                <div className="hvr-overlay-left">BACK</div>
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></li>
              </div>
              <div id="right-nav-btn">
                <div className="hvr-overlay-right">MORE</div>
                  <li data-target="#carousel-example-generic" data-slide-to="1"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></li>
              </div>
          </ol>
      </div>
    );
  }
}
