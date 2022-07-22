import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {
  static displayName = Footer.name;

  render () {
    return (
      <footer>
        <div class="footer-grid">
          <div class="footer-grid-item">
            <h1>Contact</h1>
            <hr/>
            <p>Tekniska Högskolan</p>
            <p>581 83 Linköping</p>
            <p>info@eastasian.studorg.liu.se</p>
          </div>
          <div class="footer-grid-item">
            <h1>EAA</h1>
            <hr/>
            <a href="#" class="fa fa-facebook dark-gray-bg red"></a>
            <a href="#" class="fa fa-instagram dark-gray-bg red"></a>
          </div>
          <div class="footer-grid-item">
            <h1>Tekken</h1>
            <hr/>
            <a href="#" class="fa fa-facebook dark-gray-bg red"></a>
            <a href="#" class="fa fa-instagram dark-gray-bg red"></a>
            <a href="#" class="fa fa-tiktok dark-gray-bg red">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26px" height="26px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
