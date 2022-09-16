import React, { Component } from 'react';

import changePageContent from '../Article/Article';
import '../Article/Article.css';

import buy from './text_buy';
import linkoping from './text_linkoping';
import travel from './text_travel';
import tickets from './text_tickets';

export class International extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: buy };
  }

  render () {
    return (
      <div class="article">
        <nav class="sidenav gray-bg">
          <ul>
            <li id="firstPage" class="selected" onClick={() => changePageContent(this, buy, 'firstPage') }>Welcome to Sweden</li>
            <li id="seccondPage" onClick={() => changePageContent(this, buy, 'seccondPage') }>Buying things in Linköping</li>
            <li id="thirdPage" onClick={() => changePageContent(this, travel, 'thirdPage') }>Travel guide</li>
            <li id="fourthPage" onClick={() => changePageContent(this, tickets, 'fourthPage') }>Event Tickets</li>
          </ul>
        </nav>

        <article class="article-content">
          { this.state.pageContent() }
        </article>
      </div>
    );
  }
}
