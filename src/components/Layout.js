import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu/>
        <main class="main">
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}
