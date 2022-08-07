import React, { Component } from 'react';
import './Article.css';
import contactInfo from '../../contact.json';

export class Contact extends Component {
  static displayName = Contact.name;

  render () {
    return (
      <div class="article-content">
        <h1>Styrelsen</h1>
        {
          contactInfo.members.map((member) => 
            <div>
              <h2>{member.post}</h2>
              <h3>{member.name}</h3>
              <p>{member.gmail}</p>
            </div>
          )
        }
      </div>
    );
  }
}
