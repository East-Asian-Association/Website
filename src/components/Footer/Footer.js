import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {
  static displayName = Footer.name;

  render () {
    return (
      <footer className="gray-bg">
        <div className="footer-grid">
          <div id="Contact" className="footer-grid-item">
            <h1 className="red">Contact</h1>
            <hr/>
            <p>Tekniska Högskolan</p>
            <p>581 83 Linköping</p>
            <p>info@eastasian.studorg.liu.se</p>
          </div>
          <div className="footer-grid-item">
            <h1 className="red">EAA</h1>
            <hr/>
            <a href="https://www.facebook.com/eastasianassociation" className="fa fa-facebook red-bg gray"></a>
            <a href="https://www.instagram.com/east_asian_association/" className="fa fa-instagram red-bg gray"></a>
          </div>
          <div className="footer-grid-item">
            <h1 className="red">Tekken</h1>
            <hr/>
            <a href="https://www.facebook.com/FadderietTekken" className="fa fa-facebook red-bg gray"></a>
            <a href="https://www.instagram.com/fadderiet_tekken/" className="fa fa-instagram red-bg gray"></a>
          </div>
        </div>
      </footer>
    );
  }
}
