import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Intro component
export default class SlideA extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  buildThirds() {
    return [
      {_id:1, name:'Tampas Downtown', src:'https://www.tampasdowntown.com/', expand:'left-ex', sub:'Downtown Tampa Is Happening!', location:'Tampa, Florida', description:'Fostering a vibrant, diverse, and multi-use Downtown Tampa area. Downtown Tampa has become a pinnacle of entertainment, drawing thousands of travelers to it\'s shops, restaurants and attractions.'},
      {_id:2, name:'Wine4Food', src:'https://wine4food.com/', expand:'middle-ex', sub:'Dedicated to bringing you the best wine and food.', location:'New York City', description:'Wine4Food is the number one destination for everything Wine & Food Related. Wine4food will provide you with information on Wine Tastings & Wine Dinner Party Ideas to Food & Wine Pairings and Recipes.'},
      {_id:3, name:'Mccaffreys', src:'http://mccaffreys.com/', expand:'right-ex', sub:'Mccaffreys Food Markets and Simply Fresh.', location:'New Jersey & Pennsylvania', description:'The highest quality fresh food, exceptional customer service, and commitment to community. Are you hungry for better? When it comes to what we put in and on our bodies, Mccaffreys believes in freshness & quality.'},
    ]
  }
  renderCol() {
    return this.buildThirds().map((item) => (
      <div className={"col-md-4 col-sm-12 img-wrapper "+ item.expand  }key={item._id}>
        <svg className="slide__overlay view-overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
           <path className="slide__overlay-path" d="M0,0 175,0 575,405 0,405" />
         </svg>

          <div className="viewports slide-anchor" id={item.src} >
            <div className="col-md-12 media-box">
              <h1 className="menu-title">{item.name}</h1>
              <p className="sub-text">{item.sub}</p>
              <p className="keyword-text">{item.location}</p>
            </div>
          </div>
          <div className="svg-box" key={item._id}>
            <div className="site-description col-md-4">
              <h1 className="site-header">{item.name}</h1>
              <p className="site-text">{item.description}</p>
              <p><a href={item.src} className="site-link" target="_blank">Launch</a></p>
            </div>
          </div>
      </div>
    ))
  }

  clickDelay() {
    /* $('.slide-anchor').on('click', function() {
      let currentSite = this.id;
      setTimeout(function() {
        FlowRouter.go(currentSite);
      },1400);
    }); */
  }
  componentDidMount(){

    this.clickDelay();
    setTimeout(function(){
      $('#slideA').addClass('fade-in');
    },100);

    $('#carousel-example-generic').carousel({
    pause: true,
    interval: false
});

      $('#carousel-example-generic').on('mousewheel DOMMouseScroll', function(e){
        if(triggerArrows){
          console.log("no scroll");

        }else {
          if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
              $(this).carousel('prev');
          }
          else{
              $(this).carousel('next');
          }
        }

        });

        let triggerLeft = false;
        let triggerRight = false;
        let triggerMiddle = false;
        let triggerArrows = false;

        $('.img-wrapper').on('click', function() {
          triggerArrows = !triggerArrows
          if(triggerArrows){
            $('#left-nav-btn').css({
              'transition':'all .3s ease-in-out',
              'left':'-50px',
              'opacity':'0'
            });
            $('#right-nav-btn').css({
              'transition':'all .3s ease-in-out',
              'right':'-50px',
              'opacity':'0'
            });

          }else {
            $('#left-nav-btn').css({
              'transition':'all .3s ease-in-out',
              'left':'100px',
              'opacity':'1'
            });
            $('#right-nav-btn').css({
              'transition':'all .3s ease-in-out',
              'right':'100px',
              'opacity':'1'
            });
          }
        });

        $('.left-ex').on('click', function() {
          let slideSVG = $(this).find('.view-overlay');
          let slideText = $(this).find('.svg-box');
          let slideMedia = $(this).find('.media-box');
          triggerLeft = !triggerLeft;

          if(triggerLeft === true){
            $(this).css({
              'width':'100%',
              'transition':'all .4s ease-in-out',
              'z-index':'9999',
              'position':'absolute',
              'top':'0',
              'left':'0'
            });
            slideMedia.css({
              'transition':'all .3s ease-in-out',
              'opacity':'0',
              'left':'200px'
            });
            setTimeout(function() {
              slideSVG.css({
                'transition':'all .5s ease-in-out',
                'opacity':'1',
                'left':'0px'
              });
            },200);
            setTimeout(function() {
              slideText.css({
                'transition':'all .3s ease-in-out',
                'opacity':'1',
                'top':'50%',
                'display':'block'
              });
            },600)
          }else {
            $(this).css({
              'width':'33.33333%',
              'transition':'all .4s ease-in-out',
              'z-index':'10',
              'position':'absolute',
              'top':'0',
              'left':'0'
            });
              slideSVG.css({
                'transition':'all .3s ease-in-out',
                'opacity':'0',
                'left':'-500px'
              });
            slideText.css({
              'transition':'all .1s ease-in-out',
              'opacity':'0',
              'top':'30%',
            });
            slideMedia.css({
              'transition':'all .8s ease-in-out',
              'opacity':'1',
              'left':'0'
            });
          }

        })
        $('.right-ex').on('click', function() {
          let slideSVG = $(this).find('.view-overlay');
          let slideText = $(this).find('.svg-box');
          let slideMedia = $(this).find('.media-box');
          triggerRight = !triggerRight;

          if(triggerRight === true){
            $(this).css({
              'width':'100%',
              'transition':'all .4s ease-in-out',
              'z-index':'9999',
              'position':'absolute',
              'top':'0',
              'right':'0'
            });
            slideMedia.css({
              'transition':'all .3s ease-in-out',
              'opacity':'0',
              'left':'200px'
            });
            setTimeout(function() {
              slideSVG.css({
                'transition':'all .5s ease-in-out',
                'opacity':'1',
                'left':'0'
              });
            },200);
            setTimeout(function() {
              slideText.css({
                'transition':'all .3s ease-in-out',
                'opacity':'1',
                'top':'50%',
                'display':'block'
              });
            },600)
          }else {
            $(this).css({
              'width':'33.333333%',
              'transition':'all .4s ease-in-out',
              'z-index':'10',
              'position':'absolute',
              'top':'0',
              'right':'0'
            });
            slideSVG.css({
              'transition':'all .3s ease-in-out',
              'opacity':'0',
              'left':'-500px'
            });
            slideText.css({
              'transition':'all .1s ease-in-out',
              'opacity':'0',
              'top':'30%',
            });
            slideMedia.css({
              'transition':'all .8s ease-in-out',
              'opacity':'1',
              'left':'0'
            });
          }
        })
        $('.middle-ex').on('click', function() {
          let slideSVG = $(this).find('.view-overlay');
          let slideText = $(this).find('.svg-box');
          let slideMedia = $(this).find('.media-box');
          triggerMiddle = !triggerMiddle;

          if(triggerMiddle === true){
            $(this).css({
              'z-index':'9999',
              'transition':'all .4s ease-in-out',
              'width':'100%'
            });
            slideMedia.css({
              'transition':'all .3s ease-in-out',
              'opacity':'0',
              'left':'200px'
            });
            setTimeout(function() {
              slideSVG.css({
                'transition':'all .5s ease-in-out',
                'opacity':'1',
                'left':'0'
              })
            },200);
            setTimeout(function() {
              slideText.css({
                'transition':'all .3s ease-in-out',
                'opacity':'1',
                'top':'50%',
                'display':'block'
              });
            },600)
          }else {
            $(this).css({
              'z-index':'10',
              'transition':'all .4s ease-in-out',
              'width':'33.8999%'
            });
            slideSVG.css({
              'transition':'all .3s ease-in-out',
              'opacity':'0',
              'left':'-500px'
            });
            slideText.css({
              'transition':'all .1s ease-in-out',
              'opacity':'0',
              'top':'30%',
            });
            slideMedia.css({
              'transition':'all .8s ease-in-out',
              'opacity':'1',
              'left':'0'
            });
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
