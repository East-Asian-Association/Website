import React, { Component } from 'react';
import '../Article/Article.css';
import membershipInfo from './membership-info';


export class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: this.welcomeToSweden };
  }
  

  render () {
    return (
      <div class="article">
          { membershipInfo() }
      </div>
    );
  }
}
