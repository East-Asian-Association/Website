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
      <header className="box-shadow white-bg">
        <nav className="navbar">
            <a href={process.env.PUBLIC_URL} className="navbar-logo-wrapper">
              <img className="navbar-logo" src="./img/navbar-logo.svg"/>
            </a>

            <div className="navbar-spacer"/>

            <button className="navbar-toggle" onClick={this.toggleNavbar}>
              <img className="navbar-toggle-icon" src="./img/navbar-toggle-icon.svg"/>
            </button>

            <ul className="black white-bg">
                <li>
                    <a className="redOnHover" href={process.env.PUBLIC_URL + '/about'}>About</a>
                </li>
                <li>
                    <a className="redOnHover" href={process.env.PUBLIC_URL + '/contact'}>Contact</a>
                </li>
                <li>
                    <a className="redOnHover" href={process.env.PUBLIC_URL + '/sponsors'}>Sponsors</a>
                </li>
                <li>
                    <a className="redOnHover" href={process.env.PUBLIC_URL + '/membership'}>Membership</a>
                </li>
                <li>
                    <a className="redOnHover" href={process.env.PUBLIC_URL + '/asienkunskap'}>Asienkunskap</a>
                </li>
                <li>
                    <a className="redOnHover" href={process.env.PUBLIC_URL + '/international-students'}>International Students</a>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
}
