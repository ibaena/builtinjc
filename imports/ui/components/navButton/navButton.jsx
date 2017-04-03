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
    setInterval(function() {
      $('.left-arrow').css({
        'transition':'all .1s linear',
        'left':'-18px',
        'opacity':'0',
        'position':'relative'
      })
      setTimeout(function() {
        $('.left-arrow').css({
          'left':'20px',
          'opacity':'0',
          'position':'relative'
        })
      },1000);
      setTimeout(function() {
        $('.left-arrow').css({
          'transition':'all .1s linear',
          'left':'0px',
          'opacity':'1',
          'position':'relative'
        })
      },2000);
    },4000)
    setInterval(function() {
      $('.right-arrow').css({
        'transition':'all .1s linear',
        'right':'-18px',
        'opacity':'0',
        'position':'relative'
      })
      setTimeout(function() {
        $('.right-arrow').css({
          'right':'20px',
          'opacity':'0',
          'position':'relative'
        })
      },1000);
      setTimeout(function() {
        $('.right-arrow').css({
          'transition':'all .1s linear',
          'right':'0px',
          'opacity':'1',
          'position':'relative'
        })
      },2000);
    },4000)

  }

  render() {
    return (
      <div id="navbtn">
          <ol className="carousel-indicators">
              <div id="left-nav-btn">
                <div className="hvr-overlay-left">BACK</div>
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active left-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></li>
              </div>
              <div id="right-nav-btn">
                <div className="hvr-overlay-right">MORE</div>
                  <li data-target="#carousel-example-generic" data-slide-to="1" className="right-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></li>
              </div>
          </ol>
      </div>
    );
  }
}
