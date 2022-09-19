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
        <div class="banner white">
          <div class="banner-background" style={{ backgroundImage: "url('./img/banner.jpg')" }}></div>
          <div class="banner-text centered">
            <p>Welcome To the</p>
            <p class="large"><b>EAST ASIAN</b> ASSOCIATION</p>
            <p>At Linköping University</p>
            <button class="banner-button white-bg" onClick={this.scrollToContent}><p>Learn more</p></button>
          </div>
        </div>
        <div id="learn-more" class="summary">
          <div class="summary-item white-bg black"> 
            <div class="summary-item-container">
              <div class="summary-image">
                <img src="./img/cc-fika.jpg" alt=""></img>
              </div>
              <div class="summary-spacer"></div>
              <div class="summary-text">
                <h1 class="red">Conversation Corner</h1>
                <p>CC is a place for <b class="red">Cultural Exchange</b>, <b class="red">Language Learning</b> and making new <b class="red">Friends</b>.</p>
                <p>We meet every <b class="red">Tuesday</b> and <b class="red bold">Thursday</b> at <b class="red">17:15</b> and all students at Linköping University are welcome! </p>
                <p><b class="red">Free Fika</b> is also available for all our members!</p>
              </div> 
            </div>                    
          </div>
          <div class="summary-item red-bg white">
            <div class="summary-item-container">
              <div class="summary-text">
                <h1>Asienkunskap</h1>
                <p>EAA is a sektion at Linköping University responsible for the program <b>Asienkunskap</b>.</p>
                <p>The program covers one year of language studies in either <b>Japanese</b> or <b>Chinese</b>, aswell as  <b>South-East Asian</b> <b>History</b> and <b>Politics</b></p>
              </div>
              <div class="summary-spacer"></div>
              <div class="summary-image">
                <img src="./img/asienkunskap.jpg" alt=""></img>
              </div>          
            </div>
          </div>
          <div class="summary-item white-bg black"> 
            <div class="summary-item-container">
              <div class="summary-image">
                <img src="./img/cc-fika.jpg" alt=""></img>
              </div>
              <div class="summary-spacer"></div>
              <div class="summary-text">
                <h1 class="red">Sponsorships</h1>
                <p>CC is a place for <b class="red">Cultural Exchange</b>, <b class="red">Language Learning</b> and making new <b class="red">Friends</b>.</p>
                <p>We meet every <b class="red">Tuesday</b> and <b class="red">Thursday</b> at <b class="red">17:15</b> and all students at Linköping University are welcome! </p>
                <p><b class="red">Free Fika</b> is also available for all our members!</p>
              </div> 
            </div>                    
          </div>
        </div>
      </div>
    );
  }
}
