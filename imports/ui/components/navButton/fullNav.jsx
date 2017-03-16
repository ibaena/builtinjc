import React, { Component } from 'react';


// Intro component
export default class FullNav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  navThirds() {
    return [
      {_id:1, smallName:'Cases', name:'CASES', src:'/cases', info:'I let my work speak for itself.'},
      {_id:2, smallName:'About', name:'ABOUT', src:'/about', info:'I am a Front End Developer with Agency expirience.'},
      {_id:3, smallName:'Contact', name:'CONTACT', src:'/contact', info:'Want to work together? Lets get in touch.'},
    ]
  }
  renderNav() {
    return this.navThirds().map((item) => (
      <div className="col-md-4 col-sm-12 nav-col" key={item._id}>
        <div className="nav-viewports">
          <div className="col-md-12 media-box">
            <a href="" className="menu-link" id={"link-"+item._id}>
            <p className="menu-title-top">{item.name}</p>
            <p className="menu-title-btm">{item.name}</p>
            <p className="btm-text">{item.info}</p>
            <p className="btm-text btm-text-lg">Go to {item.smallName}</p>
          </a>
          </div>
        </div>
      </div>
    ))
  }
  triggerLinks() {
    $('.menu-link').on('click', function() {
      let clicked = this.id;
      switch(clicked){
        case 'link-1':
        window.showNav = !window.showNav;
        $('.nav-col').css({
          "width":"0px",
          'transition':'all 1s ease-in-out'
        });
        setTimeout(function(){
          $('.nav-wrapper').css({
            'z-index':'-1'
          });
          FlowRouter.go('/cases');
        },1100);
        break;

        case 'link-2':
        window.showNav = !window.showNav;
        $('.nav-col').css({
          "width":"0px",
          'transition':'all 1s ease-in-out'
        });
        setTimeout(function(){
          $('.nav-wrapper').css({
            'z-index':'-1'
          });
          FlowRouter.go('/about');
        },1100);
        break;

        case 'link-3':
        window.showNav = !window.showNav;
        $('.nav-col').css({
          "width":"0px",
          'transition':'all 1s ease-in-out'
        });
        setTimeout(function(){
          $('.nav-wrapper').css({
            'z-index':'-1'
          });
          FlowRouter.go('/contact');
        },1100);
        break;
      }
    })
  }
  fireMenu() {
    window.showNav = false;
    $('#fw-nav-btn').on('click', function() {
      window.showNav = !window.showNav;
      if(window.showNav === true) {
        $('.nav-col').css({
          "width":"33.3333%",
          'transition':'all 1s ease-in-out'
        });
        $('.nav-wrapper').css({
          'z-index':'99'
        });
      }else {
        $('.nav-col').css({
          "width":"0px",
          'transition':'all 1s ease-in-out'
        });
        setTimeout(function(){
          $('.nav-wrapper').css({
            'z-index':'-1'
          });
        },1100);
      }
  });
}

  componentDidMount() {
      this.fireMenu();
      this.triggerLinks();
  }

  render() {
    return (
      <div id="nav">
        <div id="fw-nav-btn">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <div className="hvr-overlay">Menu</div>
        </div>
        <div className="nav-wrapper container-fluid">
          {this.renderNav()}
        </div>
      </div>
    );
  }
}
