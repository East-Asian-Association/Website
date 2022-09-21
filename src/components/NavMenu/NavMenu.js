import React, { Component } from 'react';
import './NavMenu.css';
import $ from "jquery";
import { Link } from 'react-router-dom'

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
                    <Link className="redOnHover" to={process.env.PUBLIC_URL + '/about'}>About</Link>
                </li>
                <li>
                    <Link className="redOnHover" to={process.env.PUBLIC_URL + '/contact'}>Contact</Link>
                </li>
                <li>
                    <Link className="redOnHover" to={process.env.PUBLIC_URL + '/sponsors'}>Sponsors</Link>
                </li>
                <li>
                    <Link className="redOnHover" to={process.env.PUBLIC_URL + '/membership'}>Membership</Link>
                </li>
                <li>
                    <Link className="redOnHover" to={process.env.PUBLIC_URL + '/asienkunskap'}>Asienkunskap</Link>
                </li>
                <li>
                    <Link className="redOnHover" to={process.env.PUBLIC_URL + '/international-students'}>International Students</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
}
