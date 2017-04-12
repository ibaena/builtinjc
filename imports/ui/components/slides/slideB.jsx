import React, { Component } from 'react';


// Intro component
export default class SlideB extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  buildThirdsB() {
    return [
      {_id:4, name:'Finlandia', src:'https://finlandiafoods.wpengine.com/', expand:'left-ex', sub:'Discover The Legendary Taste', description:'Finlandia makes great tasting cheese and butter. It’s what Finlandia does. In fact, it’s the only thing Finlandia has done for more than a century. And when you’ve been passionately perfecting your craft for so long, you end up creating something very special!', location:'New Jersey, USA'},
      {_id:5, name:'Amloid Toys', src:'http://amloid.com/', expand:'middle-ex', sub:'Turning Hard Work into Child’s Play', description:' Innovative design and exacting attention to detail Amloid Toys continue to produce unique product lines that have delighted generations of children around the world. Always insisting on premium quality, Amloid Toys continue to push the limits of toy innovation and product development.', location:'New Jersey, USA'},
      {_id:6, name:'Tuckers Point', src:'http://vcgftp.com/Stage_TP/index.html', expand:'right-ex', sub:'Two Hours Away. A World Apart', description:'Tucker\'s Point is world-renowned. Tuckers Point is Bermuda\'s premier residential community and is defined by the prestigious Tucker\'s Point Golf, Beach & Tennis Club and the award-winning Rosewood Tucker\'s Point Hotel & Spa.', location:'Bermuda'},
    ]
  }
  renderColB() {
    return this.buildThirdsB().map((item) => (
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

  componentDidMount(){

  }

  render() {
    return (
      <div id="slideB" className="container-fluid">
        {this.renderColB()}
      </div>
    );
  }
}
