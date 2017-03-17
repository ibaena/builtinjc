import React, { Component } from 'react';


// Intro component
export default class SlideC extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  buildThirds() {
    return [
      {_id:2, name:'two', class:'item'},
      {_id:3, name:'three', class:'item'},
    ]
  }
  renderCol() {



    return this.buildThirds().map((item) => (
      <div className="item" key={item._id}>
      <div className="col-md-12 col-sm-12 img-wrapper" >
        <div className="viewports">
          <div className="col-md-12 media-box">
            <h1 className="menu-title">Title</h1>
            <p className="sub-text">Sub</p>
            <p className="keyword-text">Keyword</p>
          </div>
        </div>
      </div>
      </div>
    ))
  }
  componentDidMount(){
    /*setTimeout(function(){
      $('#slideC').addClass('fade-in');
    },100);*/

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
  }

  render() {
    return (
      <div id="slideC" className="container-fluid">
        {this.renderCol()}
      </div>
    );
  }
}
