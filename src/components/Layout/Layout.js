import React, { Component } from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import { Footer } from '../Footer/Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu/>
        <main className="main">
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}
