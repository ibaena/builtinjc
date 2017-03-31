import React, { Component } from 'react';

// Intro component
export default class Single extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();


  }
  imgObj() {
    return [
      {_id:1, background:'/images/golf.png', name:'Tampas Downtown', src:'/cases/tampasdowntown'},
      {_id:2, background:'/images/basketball.png', name:'Wine4Food', src:'/cases/wine4food'},
      {_id:3, background:'/images/shoe.png', name:'Mccaffreys', src:'/cases/mccaffreys'},
    ]
  }
  renderImg() {
    return this.imgObj().map((item) => (
      <div className="project-bg" id={"site-"+item._id} key={item._id}></div>
    ))
  }

  componentDidMount(){
    setTimeout(function(){
      let pathname = window.location.pathname;

      if(pathname === '/cases/tampasdowntown'){
        $('#site-1').css({
          'z-index':'10',
          'transition':'all .2s ease-in-out',
          'opacity':'1'
        })

      }else if( pathname === '/cases/wine4food') {
        $('#site-2').css({
          'z-index':'10',
          'transition':'all .2s ease-in-out',
          'opacity':'1'
        })
      }else if(pathname === '/cases/mccaffreys') {
        $('#site-3').css({
          'z-index':'10',
          'transition':'all .2s ease-in-out',
          'opacity':'1'
        })
      }
    },100);
  }


  render() {
    return (
      <div id="single" className="container-fluid">
          {this.renderImg()}
      </div>
    );
  }
}
