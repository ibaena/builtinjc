import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

//Layouts and Pages
import { App } from '../../ui/layouts/App.jsx'
import { Home } from '../../ui/pages/Home.jsx'
import { Cases } from '../../ui/pages/Cases.jsx'
import { About } from '../../ui/pages/About.jsx'
import { Contact } from '../../ui/pages/Contact.jsx'
import { Projects } from '../../ui/pages/Projects.jsx'


FlowRouter.route('/', {
    action() {
        mount(App, {
            content: <Home />
        });
    }
});
FlowRouter.route('/cases', {
    action() {
        mount(App, {
            content: <Cases />
        });
    }
});
FlowRouter.route('/about', {
    action() {
        mount(App, {
            content: <About />
        });
    }
});
FlowRouter.route('/contact', {
    action() {
        mount(App, {
            content: <Contact />
        });
    }
});
FlowRouter.route('/cases/:site', {
    action() {
        mount(App, {
            content: <Projects />
        });
    }
});
