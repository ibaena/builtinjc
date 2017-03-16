import React, { Component } from 'react';

import Preloader from '../../ui/components/preloader/preloader.jsx';
import FullNav from '../../ui/components/navButton/fullNav.jsx';



// This component - represents a single page
export const Home = () =>
<div id="home" className="">
  <FullNav />
  <Preloader />
</div>
