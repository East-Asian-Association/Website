import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './site.css'
import { Membership } from './components/Membership';
import { Asienkunskap } from './components/Asienkunskap';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/membership' component={Membership} />
        <Route exact path='/asienkunskap' component={Asienkunskap} />
      </Layout>
    );
  }
}
