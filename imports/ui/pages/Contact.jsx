import React, { Component } from 'react';

import FullNav from '../../ui/components/navButton/fullNav.jsx';
import GetInTouch from '../../ui/components/getInTouch/getintouch.jsx';
import Scrollbar from 'smooth-scrollbar';

//Mobile Component
import NavMobile from '../../ui/components/mobile/NavMobile.jsx';
import GetInTouchMobile from '../../ui/components/mobile/getInTouchMobile.jsx';

// This component - represents a single page
export const Contact = () =>
<div>
  <div id="contact" className="desktop-sites">
    <FullNav />
    <GetInTouch />
    </div>
    <div id="contact-mobile" className="mobile-sites">
    <NavMobile />
    <GetInTouchMobile />
  </div>
</div>
