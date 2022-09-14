import React, { Component } from 'react';
import $ from 'jquery';

import '../Article/Article.css';
import changePageContent from '../Article/Article.js';

import sponsors from './text_sponsors';

export class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: sponsors };
  }

  render () {
    return (
      <div class="article">
        <article class="article-content">
          { this.state.pageContent() }
        </article>
      </div>
    );
  }
}
