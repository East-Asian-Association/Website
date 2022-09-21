import React, { Component } from 'react';
import './Contact.css';
import '../Article/Article.css'
import contactInfo from './contact.json';

export class Contact extends Component {
  static displayName = Contact.name;

  render () {
    return (
      <div className="article">
        <nav className="sidenav gray-bg">
          <ul>
          </ul>
        </nav>
        <div className="article-content">
          <div className="members">
            {
              contactInfo.members.map((member) => 
                <div className="member">
                  <div className="member-flex">
                    <div className="member-info">
                      <h2>{member.post}</h2>
                      <h3>{member.name}</h3>
                      <p>E-mail: {member.gmail}</p>
                    </div>
                    <div className="member-photo">
                        <img src="./img/profile.png"></img>
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
