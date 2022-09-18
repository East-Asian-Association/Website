import React, { Component } from 'react';

import changePageContent from '../Article/Article.js';
import '../Article/Article.css';

import about from './text_about';
import styret from './text_styret';
import tekken  from './text_tekken';
import events from './text_events';


export class About extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: about };
  }

  render () {
    return (
      <div class="article">
        <nav class="sidenav gray-bg">
          <ul>
            <li id="firstPage" class="selected" onClick={ () => changePageContent(this, about, 'firstPage') }>About</li>
            <li id="secondPage" onClick={() => { changePageContent(this, events, 'secondPage'); } }>Events</li>
            <li id="thirdPage" onClick={() => { changePageContent(this, styret, 'thirdPage'); } }>Styret</li>
            <li id="forthPage" onClick={() => { changePageContent(this, tekken, 'forthPage'); } }>Tekken</li>                    
          </ul>
        </nav>

        <article class="article-content">
          { this.state.pageContent() }
        </article>
      </div>
    );
  }
}
