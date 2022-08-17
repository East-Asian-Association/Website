import React, { Component } from 'react';
import { Route } from 'react-router';

import './site.css'
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home';
import { Contact } from './components/Contact/Contact';

import { Membership } from './components/Membership/Membership';
import { Asienkunskap } from './components/Asienkunskap/Asienkunskap';
import { International } from './components/International/International';
import { About } from './components/About/About';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={ About } />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/membership' component={Membership}   />
        <Route exact path='/asienkunskap' component={Asienkunskap}   />
        <Route exact path='/international-students' component={International} />
      </Layout>
    );
  }
}
