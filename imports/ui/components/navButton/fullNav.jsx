import React, { Component } from 'react';


// Intro component
export default class FullNav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  navThirds() {
    return [
      {_id:1, name:'Item 1'},
      {_id:2, name:'Item 2'},
      {_id:3, name:'Item 3'},
    ]
  }
  renderNav() {
    return this.navThirds().map((item) => (
      <div className="col-md-4 col-sm-12 nav-col" key={item._id}>
        <div className="nav-viewports">
          <div className="col-md-12 media-box">
            <h1 className="menu-title">{item._id}</h1>
          </div>
        </div>
      </div>
    ))
  }
  fireMenu() {
    let showNav = false;
    $('#fw-nav-btn').on('click', function() {
      showNav = !showNav;
      if(showNav === true) {
        $('.nav-col').css({
          "width":"33.3333%",
          'transition':'all 1s ease-in-out'
        });
        $('.nav-wrapper').css({
          'z-index':'1'
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
