import React, { Component } from 'react';
import { NavMenu } from './NavMenu';

export class Sidebar extends Component {
  static displayName = Sidebar.name;

  render (props) {
    const numbers = props.names;
    const listItems = names.map((name) =>
      <li><a href="/{name}">{name}</a></li>
    );

    return (
      <nav class="side-nav box-shadow">
          <ul>
              props.names
          </ul>
      </nav>
    );
  }
}
