import React, { Component } from 'react';

import FullNav from '../../ui/components/navButton/fullNav.jsx';
import Parallax from '../../ui/components/parallax/parallax.jsx';

//Mobile Component
import NavMobile from '../../ui/components/mobile/NavMobile.jsx';
import ParallaxMobile from '../../ui/components/mobile/ParallaxMobile.jsx';

// This component - represents a single page
export const About = () =>
<div>
  <div id="about" className="desktop-sites" >
    <FullNav />
    <div className="col-sm-12 col-md-4 p-info"></div>
    <Parallax />
  </div>
  <div id="about-mobile" className="mobile-sites" >
    <NavMobile />
    <ParallaxMobile />
  </div>
</div>
