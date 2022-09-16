import React, { Component } from 'react';
import './Contact.css';
import '../Article/Article.css'
import contactInfo from './contact.json';

export class Contact extends Component {
  static displayName = Contact.name;

  render () {
    return (
      <div class="article">
        <nav class="sidenav gray-bg">
          <ul>
          </ul>
        </nav>
        <div class="article-content">
          <div class="members">
            {
              contactInfo.members.map((member) => 
                <div class="member">
                  <div class="member-flex">
                    <div class="member-info">
                      <h2>{member.post}</h2>
                      <h3>{member.name}</h3>
                      <p>E-mail: {member.gmail}</p>
                    </div>
                    <div class="member-photo">
                        <img src="/img/profile.png"></img>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
