import React, { Component } from 'react';

import SlideA from '../../ui/components/slides/slideA.jsx';
import SlideB from '../../ui/components/slides/slideB.jsx';
import NavButton from '../../ui/components/navButton/navButton.jsx';
import FullNav from '../../ui/components/navButton/fullNav.jsx';



// This component - represents a single page
export const Home = () =>
<div id="home" className="">
  <FullNav />
    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

            <NavButton />

        <div className="carousel-inner" role="listbox">
            <div className="item active">
                <SlideA />
            </div>
            <div className="item">
                <SlideB />
            </div>
        </div>

    </div>
</div>
