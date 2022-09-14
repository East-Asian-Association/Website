import React, { Component } from 'react';
import $ from 'jquery';

import '../Article/Article.css';
import changePageContent from '../Article/Article';

import välkommenTillAsienkunskap from './välkommen-till-asienkunskap'
import asienkunskapsGuiden from './asienkunskaps-guiden'

export class Asienkunskap extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: välkommenTillAsienkunskap };
  }

  render () {
    return (
      <div class="article">
        <nav class="sidenav gray-bg">
          <ul>
            <li id="firstPage" class="redOnHover selected" onClick={ () => changePageContent(this, välkommenTillAsienkunskap, 'firstPage') }>Välkommen</li>
            <li id="seccondPage" class="redOnHover" onClick={() => { changePageContent(this, asienkunskapsGuiden, 'seccondPage'); } }>Asienkunskaps Guiden</li>
          </ul>
        </nav>

        <article class="article-content">
          { this.state.pageContent() }
        </article>
      </div>
    );
  }
}
