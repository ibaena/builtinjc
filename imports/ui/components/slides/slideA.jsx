import React, { Component } from 'react';


// Intro component
export default class SlideA extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  buildThirds() {
    return [
      {_id:1, name:'Tampas Downtown', src:'/tampasdowntown', expand:'left-ex'},
      {_id:2, name:'Wine4Food', src:'/wine4food', expand:'middle-ex'},
      {_id:3, name:'Mccaffreys', src:'/mccaffreys', expand:'right-ex'},
    ]
  }
  renderCol() {
    return this.buildThirds().map((item) => (
      <div className={"col-md-4 col-sm-12 img-wrapper "+ item.expand  }key={item._id}>
        <div className="viewports">
          <div className="col-md-12 media-box">
            <h1 className="menu-title">{item.name}</h1>
            <p className="sub-text">Sub</p>
            <p className="keyword-text">Keyword</p>
          </div>
        </div>
      </div>
    ))
  }
  componentDidMount(){
    setTimeout(function(){
      $('#slideA').addClass('fade-in');
    },100);

    $('#carousel-example-generic').carousel({
    pause: true,
    interval: false
});
      $('#carousel-example-generic').bind('mousewheel DOMMouseScroll', function(e){
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
                $(this).carousel('prev');
            }
            else{
                $(this).carousel('next');
            }
        });
        let triggerLeft = false;
        let triggerRight = false;
        let triggerMiddle = false;

        $('.left-ex').on('click', function() {
          triggerLeft = !triggerLeft;
          if(triggerLeft === true){
            $(this).css({
              'width':'100%',
              'transition':'all .2s ease-in',
              'z-index':'9999',
              'position':'absolute',
              'top':'0',
              'left':'0'
            });
          }else {
            $(this).css({
              'width':'33.33333%',
              'transition':'all .2s ease-in',
              'z-index':'10',
              'position':'absolute',
              'top':'0',
              'left':'0'
            });
          }

        })
        $('.right-ex').on('click', function() {
          triggerRight = !triggerRight;
          if(triggerRight === true){
            $(this).css({
              'width':'100%',
              'transition':'all .2s ease-in',
              'z-index':'9999',
              'position':'absolute',
              'top':'0',
              'right':'0'
            });
          }else {
            $(this).css({
              'width':'33.333333%',
              'transition':'all .2s ease-in',
              'z-index':'10',
              'position':'absolute',
              'top':'0',
              'right':'0'
            });
          }
        })
        $('.middle-ex').on('click', function() {
          triggerMiddle = !triggerMiddle;
          if(triggerMiddle === true){
            $(this).css({
              'z-index':'9999',
              'transition':'all .2s ease-in',
              'width':'100%'
            })
          }else {
            $(this).css({
              'z-index':'10',
              'transition':'all .2s ease-in',
              'width':'34%'
            })
          }
        })
  }

  render() {
    return (
      <div id="slideA" className="container-fluid">
        {this.renderCol()}
      </div>
    );
  }
}
