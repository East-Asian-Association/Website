import React, { Component } from 'react';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header class="box-shadow light-gray-bg">
        <nav class="navbar">
                <a href="/" class="navbar-logo-wrapper">
                  <img class="navbar-logo" src="/img/navbar-logo.png"/>
                </a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/membership">Membership</a>
                </li>
                <li>
                    <a href="/asienkunskap">Asienkunskap</a>
                </li>
                <li>
                    <a href="/international-students">International Students</a>
                </li>
                <li>
                    <a href="/photos">Photos</a>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
}
