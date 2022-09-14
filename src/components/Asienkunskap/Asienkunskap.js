import React, { Component } from 'react';
import $ from 'jquery';

import '../Article/Article.css';
import changePageContent from '../Article/Article.js';

import antagen from './text_antagen';
import plugg from './text_plugg';
import tekken from './text_tekken';
import efter from './text_efter';


export class Asienkunskap extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: antagen };
  }

  render () {
    return (
      <div class="article">
        <nav class="sidenav gray-bg">
          <ul>
            <li id="firstPage" class="selected" onClick={ () => changePageContent(this, antagen, 'firstPage') }>Antagen</li>
            <li id="seccondPage" onClick={() => { changePageContent(this, plugg, 'seccondPage'); } }>Studietips</li>
            <li id="thirdPage" onClick={() => { changePageContent(this, tekken, 'thirdPage'); } }>Fadderiet Tekken</li>
            <li id="fourthPage" onClick={() => { changePageContent(this, efter, 'fourthPage'); } }>Efter Asienkunskap</li>
          </ul>
        </nav>

        <article class="article-content">
          { this.state.pageContent() }
        </article>
      </div>
    );
  }
}
