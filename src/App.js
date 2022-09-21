import React, { Component } from 'react';
import { Route } from 'react-router';

import './site.css'
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';

import { Membership } from './components/Membership/Membership';
import { Asienkunskap } from './components/Asienkunskap/Asienkunskap';
import { International } from './components/International/International';
import { About } from './components/About/About';
import { Sponsor } from './components/Sponsor/Sponsor';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/sponsors'} component={Sponsor} />
        <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
        <Route path={process.env.PUBLIC_URL + '/membership'} component={Membership}   />
        <Route path={process.env.PUBLIC_URL + '/asienkunskap'} component={Asienkunskap}   />
        <Route path={process.env.PUBLIC_URL + '/international-students'} component={International} />
      </Layout>
    );
  }
}
