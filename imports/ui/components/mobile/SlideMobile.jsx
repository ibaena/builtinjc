import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Intro component
export default class SLideMobile extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  buildThirds() {
    return [
      {_id:1, name:'Tampas Downtown', src:'https://www.tampasdowntown.com/', expand:'left-ex', sub:'Downtown Tampa Is Happening!', location:'Tampa, Florida', description:'Fostering a vibrant, diverse, and multi-use Downtown Tampa area. Downtown Tampa has become a pinnacle of entertainment, drawing thousands of travelers to it\'s shops, restaurants and attractions.'},
      {_id:2, name:'Wine4Food', src:'https://wine4food.com/', expand:'middle-ex', sub:'Bringing you the best wine and food.', location:'New York City', description:'Wine4Food is the number one destination for everything Wine & Food Related. Wine4food will provide you with information on Wine Tastings & Wine Dinner Party Ideas to Food & Wine Pairings and Recipes.'},
      {_id:3, name:'Mccaffreys', src:'http://mccaffreys.com/', expand:'right-ex', sub:'Mccaffreys Food Markets and Simply Fresh.', location:'New Jersey & Pennsylvania', description:'The highest quality fresh food, exceptional customer service, and commitment to community. Are you hungry for better? When it comes to what we put in and on our bodies, Mccaffreys believes in freshness & quality.'},
      {_id:4, name:'Finlandia', src:'https://finlandiafoods.wpengine.com/', expand:'left-ex', sub:'Discover The Legendary Taste', description:'Finlandia makes great tasting cheese and butter. It’s what Finlandia does. In fact, it’s the only thing Finlandia has done for more than a century. And when you’ve been passionately perfecting your craft for so long, you end up creating something very special!', location:'New Jersey, USA'},
      {_id:5, name:'Amloid Toys', src:'http://amloid.com/', expand:'middle-ex', sub:'Turning Hard Work into Child’s Play', description:' Innovative design and exacting attention to detail Amloid Toys continue to produce unique product lines that have delighted generations of children around the world. Always insisting on premium quality, Amloid Toys continue to push the limits of toy innovation and product development.', location:'New Jersey, USA'},
      {_id:6, name:'Tuckers Point', src:'http://tuckerspoint.com/', expand:'right-ex', sub:'Two Hours Away. A World Apart', description:'Tucker\'s Point is world-renowned. Tuckers Point is Bermuda\'s premier residential community and is defined by the prestigious Tucker\'s Point Golf, Beach & Tennis Club and the award-winning Rosewood Tucker\'s Point Hotel & Spa.', location:'Bermuda'}
    ]
  }
  renderColMobile() {
    return this.buildThirds().map((item) => (
      <div className="col-sm-12 img-wrapper-mobile" key={item._id}>
        <div className="mobile-viewports">
          <p className="title-mobile">
            {item.name}
          </p>
        </div>
      </div>
    ))
  }

  componentDidMount(){

  }

  render() {
    return (
      <div id="slideMobile" className="container-fluid">
          {this.renderColMobile()}
      </div>
    );
  }
}
