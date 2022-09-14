import React, { Component } from 'react';
import '../Article/Article.css';
import aboutUs from './about-us';

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: aboutUs };
  }aboutUs


  render () {
    return (
      <div class="article">
        <nav class="sidenav gray-bg">
          <ul>
          <li id="firstPage" class="redOnHover selected" onClick={ () => changePageContent(this, aboutUs, 'firstPage') }>Välkommen</li>
          </ul>
        </nav>

        <article class="article-content">
          { this.state.pageContent() }
        </article>
      </div>
    );
  }
}
