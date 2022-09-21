import React, { Component } from 'react';
import '../Article/Article.css';

import membership from './text_membership';

export class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: membership };
  }
  

  render () {
    return (
      <div className="article">
        <article className="article-content">
          { this.state.pageContent() }
        </article>
      </div>
    );
  }
}
