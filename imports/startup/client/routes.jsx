import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

//Layouts and Pages
import { App } from '../../ui/layouts/App.jsx'
import { Home } from '../../ui/pages/Home.jsx'
import { Cases } from '../../ui/pages/Cases.jsx'


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
