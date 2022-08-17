import React, { Component } from 'react';
import '../Article.css';
import aboutUs from './about-us';

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: aboutUs };
  }aboutUs


  render () {
    return (
      <div class="article">
        <nav class="sidenav">
          <ul>
            <li> <button onClick={() => this.setState({ pageContent: aboutUs }) }>About Us</button></li>
          </ul>
        </nav>

        <article class="article-content">
          { this.state.pageContent() }
        </article>
      </div>
    );
  }
}
