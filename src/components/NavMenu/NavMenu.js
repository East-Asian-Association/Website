import React, { Component } from 'react';
import './NavMenu.css';
import $ from "jquery";

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
    }, function () {
      if (this.state.collapsed) {
        $(".navbar ul").animate({
          top: -400
        }, 500);
      }
      else {
        $(".navbar ul").animate({
          top: 60
        }, 500);
      }
    });
  } 

  render () {
    return (
      <header class="box-shadow white-bg">
        <nav class="navbar">
            <a href={process.env.PUBLIC_URL} class="navbar-logo-wrapper">
              <img class="navbar-logo" src="./img/navbar-logo.svg"/>
            </a>

            <div class="navbar-spacer"/>

            <button class="navbar-toggle" onClick={this.toggleNavbar}>
              <img class="navbar-toggle-icon" src="./img/navbar-toggle-icon.svg"/>
            </button>

            <ul class="black white-bg">
                <li>
                    <a class="redOnHover" href={process.env.PUBLIC_URL + '/about'}>About</a>
                </li>
                <li>
                    <a class="redOnHover" href={process.env.PUBLIC_URL + '/contact'}>Contact</a>
                </li>
                <li>
                    <a class="redOnHover" href={process.env.PUBLIC_URL + '/sponsors'}>Sponsors</a>
                </li>
                <li>
                    <a class="redOnHover" href={process.env.PUBLIC_URL + '/membership'}>Membership</a>
                </li>
                <li>
                    <a class="redOnHover" href={process.env.PUBLIC_URL + '/asienkunskap'}>Asienkunskap</a>
                </li>
                <li>
                    <a class="redOnHover" href={process.env.PUBLIC_URL + '/international-students'}>International Students</a>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
}
