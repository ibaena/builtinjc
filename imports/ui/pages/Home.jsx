import React, { Component } from 'react';

import Preloader from '../../ui/components/preloader/preloader.jsx';
import FullNav from '../../ui/components/navButton/fullNav.jsx';

//Mobile Component

import PreloaderMobile from '../../ui/components/mobile/PreloaderMobile.jsx';


// This component - represents a single page
export const Home = () =>

<div>
  <div id="home" className="desktop-sites">
    <FullNav />
    <Preloader />
  </div>
  <div id="home-mobile" className="mobile-sites">
    <PreloaderMobile />
  </div>
</div>
