import React, { Component } from 'react';
import '../Article.css';
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
        <nav class="sidenav">
          <ul>
            <li> <button onClick={() => this.setState({ pageContent: welcomeToSweden }) }>Welcome-to-sweden</button></li>
            <li> <button onClick={() => this.setState({ pageContent: buyingThingsInLinköping }) }>Buying-things in Linköping</button></li>
            <li> <button onClick={() => this.setState({ pageContent: travelGuide }) }>Travel-guide</button></li>
          </ul>
        </nav>

        { this.state.pageContent() }
      </div>
    );
  }
}
