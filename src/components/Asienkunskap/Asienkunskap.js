import React, { Component } from 'react';
import '../Article.css';
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
        <nav class="sidenav">
          <ul>
            <li> <button onClick={() => this.setState({ pageContent: välkommenTillAsienkunskap }) }>Välkommen</button></li>
            <li> <button onClick={() => this.setState({ pageContent: asienkunskapsGuiden }) }>Asienkunskaps Guiden</button></li>
          </ul>
        </nav>

        <article class="article-content">
          { this.state.pageContent() }
        </article>
      </div>
    );
  }
}
