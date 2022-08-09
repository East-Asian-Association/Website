import React, { Component } from 'react';
import { Route } from 'react-router';

import './site.css'
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home';
import { Membership } from './components/Articles/Membership';
import { Contact } from './components/Articles/Contact';
import { Asienkunskap } from './components/Articles/Asienkunskap';
import { International } from './components/Articles/International';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/membership' component={Membership} />
        <Route exact path='/asienkunskap' component={Asienkunskap} />
        <Route exact path='/international-students' component={International} />
      </Layout>
    );
  }
}
