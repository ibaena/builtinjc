import React, { Component } from 'react';


// Intro component
export default class Fourth extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  logoImages() {
    return [
      {_id:1, name:'Amloid Toys', image:'/images/sites-logos/amloid-bw.png'},
      {_id:2, name:'Amloid Toys', image:'/images/sites-logos/ferrero-bw.png'},
      {_id:3, name:'Amloid Toys', image:'/images/sites-logos/feverall-bw.png'},
      {_id:4, name:'Amloid Toys', image:'/images/sites-logos/finlandia-bw.png'},
      {_id:5, name:'Amloid Toys', image:'/images/sites-logos/g-shock-bw.png'},
      {_id:6, name:'Amloid Toys', image:'/images/sites-logos/leafguard-bw.png'},
      {_id:7, name:'Amloid Toys', image:'/images/sites-logos/mccaffreys-bw.png'},
      {_id:8, name:'Amloid Toys', image:'/images/sites-logos/nicenclean-bw.png'},
      {_id:9, name:'Amloid Toys', image:'/images/sites-logos/bellowstech-bw.png'},
      {_id:10, name:'Amloid Toys', image:'/images/sites-logos/servometer-bw.png'},
      {_id:11, name:'Amloid Toys', image:'/images/sites-logos/tdp-logo-bw.png'},
      {_id:12, name:'Amloid Toys', image:'/images/sites-logos/thermoactive-bw.png'},
    ]
  }
  renderLogos() {
    return this.logoImages().map((logo) => (
      <div className="col-sm-12 col-md-4 brand-logos" key={logo._id}>
        <div className="logo-wrapper">
          <img src={logo.image} className="img-responsive brand-img center-block" />
        </div>
      </div>
    ))
  }
  componentDidMount(){

    /* let heightB = $('.p-slide').height() + $('.third-para').height();
    $('.fourth-para').css({
      'top': heightB - 1
    });
    $(window).resize(function() {
      heightB = $('.p-slide').height() + $('.third-para').height();
      $('.fourth-para').css({
        'top': heightB -1 ,
      });
    }); */

  }


  render() {
    return (
      <div className="fourth-para  col-sm-12 col-md-12"  id="four">
        <p className="th-headA">I believe in thinking outside the box,</p>
        <p className="th-headB">while pushing the limit of what I can do.</p>
          <div className="container-fluid logo-container">
            {this.renderLogos()}
          </div>
      </div>

    );
  }
}
