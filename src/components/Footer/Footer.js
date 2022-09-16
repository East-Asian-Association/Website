import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {
  static displayName = Footer.name;

  render () {
    return (
      <footer class="gray-bg">
        <div class="footer-grid">
          <div id="Contact" class="footer-grid-item">
            <h1 class="red">Contact</h1>
            <hr/>
            <p>Tekniska Högskolan</p>
            <p>581 83 Linköping</p>
            <p>info@eastasian.studorg.liu.se</p>
          </div>
          <div class="footer-grid-item">
            <h1 class="red">EAA</h1>
            <hr/>
            <a href="https://www.facebook.com/eastasianassociation" class="fa fa-facebook red-bg gray"></a>
            <a href="https://www.instagram.com/east_asian_association/" class="fa fa-instagram red-bg gray"></a>
          </div>
          <div class="footer-grid-item">
            <h1 class="red">Tekken</h1>
            <hr/>
            <a href="https://www.facebook.com/FadderietTekken" class="fa fa-facebook red-bg gray"></a>
            <a href="https://www.instagram.com/fadderiet_tekken/" class="fa fa-instagram red-bg gray"></a>
          </div>
        </div>
      </footer>
    );
  }
}