import React, { Component } from 'react';
import './NavMenu.css';
import MenuIcon from '@mui/icons-material/Menu';
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
          top: 0
        }, 500);
      }
    });
  } 

  render () {
    return (
      <header class="box-shadow light-gray-bg">
        <nav class="navbar light-gray-bg">
            <a href="/" class="navbar-logo-wrapper">
              <img class="navbar-logo" src="/img/navbar-logo.png"/>
            </a>
            <button class="navbar-toggle" onClick={this.toggleNavbar}><MenuIcon/></button>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
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
            </ul>
        </nav>
      </header>
    );
  }
}
