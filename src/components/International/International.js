import React, { Component } from 'react';

import changePageContent from '../Article/Article';
import '../Article/Article.css';

import welcomeToSweden from './welcome-to-sweden';
import buyingThingsInLinköping from './buying-things-in-linköping';
import travelGuide from './travel-guide';

export class International extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: welcomeToSweden };
  }

  render () {
    return (
      <div class="article">
        <nav class="sidenav gray-bg">
          <ul>
            <li id="firstPage" class="redOnHover selected" onClick={() => changePageContent(this, welcomeToSweden, 'firstPage') }>Welcome to Sweden</li>
            <li id="seccondPage" class="redOnHover" onClick={() => changePageContent(this, buyingThingsInLinköping, 'seccondPage') }>Buying things in Linköping</li>
            <li id="thirdPage" class="redOnHover" onClick={() => changePageContent(this, travelGuide, 'thirdPage') }>Travel guide</li>
          </ul>
        </nav>

        { this.state.pageContent() }
      </div>
    );
  }
}
