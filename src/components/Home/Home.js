import React, { Component } from 'react';
import $ from 'jquery'
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  scrollToContent() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#learn-more").position().top - 60
      }, 600, "swing");
  }

  render () {
    return (
      <div>
        <div className="banner white">
          <div className="banner-background" style={{ backgroundImage: "url('./img/banner.jpg')" }}></div>
          <div className="banner-text centered">
            <p>Welcome To the</p>
            <p className="large"><b>EAST ASIAN</b> ASSOCIATION</p>
            <p>At Linköping University</p>
            <button className="banner-button white-bg" onClick={this.scrollToContent}><p>Learn more</p></button>
          </div>
        </div>
        <div id="learn-more" className="summary">
          <div className="summary-item white-bg black"> 
            <div className="summary-item-container">
              <div className="summary-image">
                <img src="./img/cc-fika.jpg" alt=""></img>
              </div>
              <div className="summary-spacer"></div>
              <div className="summary-text">
                <h1 className="red">Conversation Corner</h1>
                <p>CC is a place for <b className="red">Cultural Exchange</b>, <b className="red">Language Learning</b> and making new <b className="red">Friends</b>.</p>
                <p>We meet every <b className="red">Tuesday</b> and <b className="red bold">Thursday</b> at <b className="red">17:15</b> and all students at Linköping University are welcome! </p>
                <p><b className="red">Free Fika</b> is also available for all our members!</p>
              </div> 
            </div>                    
          </div>
          <div className="summary-item red-bg white">
            <div className="summary-item-container">
              <div className="summary-text">
                <h1>Asienkunskap</h1>
                <p>EAA is a sektion at Linköping University responsible for the program <b>Asienkunskap</b>.</p>
                <p>The program covers one year of language studies in either <b>Japanese</b> or <b>Chinese</b>, aswell as  <b>South-East Asian</b> <b>History</b> and <b>Politics</b></p>
              </div>
              <div className="summary-spacer"></div>
              <div className="summary-image">
                <img src="./img/asienkunskap.jpg" alt=""></img>
              </div>          
            </div>
          </div>
          <div className="summary-item white-bg black"> 
            <div className="summary-item-container">
              <div className="summary-image">
                <img src="./img/cc-fika.jpg" alt=""></img>
              </div>
              <div className="summary-spacer"></div>
              <div className="summary-text">
                <h1 className="red">Sponsorships</h1>
                <p>CC is a place for <b className="red">Cultural Exchange</b>, <b className="red">Language Learning</b> and making new <b className="red">Friends</b>.</p>
                <p>We meet every <b className="red">Tuesday</b> and <b className="red">Thursday</b> at <b className="red">17:15</b> and all students at Linköping University are welcome! </p>
                <p><b className="red">Free Fika</b> is also available for all our members!</p>
              </div> 
            </div>                    
          </div>
        </div>
      </div>
    );
  }
}
