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
                <p>CC is a place for <span class="red bold">Cultural Exchange</span>, <span class="red bold">Language Learning</span> and making new <span class="red bold">Friends</span>.</p>
                <p>We meet every <span class="red bold">Tuesday</span> and <span class="red bold">Thursday</span> at <span class="red bold">17:15</span> and all students at Linköping University are welcome! </p>
                <p><span class="red bold">Free Fika</span> is also available for all our members!</p>
              </div> 
            </div>                    
          </div>
          <div class="summary-item red-bg white">
            <div class="summary-item-container">
              <div class="summary-text">
                <h1>Asienkunskap</h1>
                <p>EAA is a sektion at Linköping University responsible for the program <span class="bold">Asienkunskap</span>.</p>
                <p>The program covers one year of language studies in either <span class="bold">Japanese</span> or <span class="bold">Chinese</span>, aswell as  <span class="bold">South-East Asian</span> <span class="bold">History</span> and <span class="red bold">Politics</span></p>
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
                <p>CC is a place for <span class="red bold">Cultural Exchange</span>, <span class="red bold">Language Learning</span> and making new <span class="red bold">Friends</span>.</p>
                <p>We meet every <span class="red bold">Tuesday</span> and <span class="red bold">Thursday</span> at <span class="red bold">17:15</span> and all students at Linköping University are welcome! </p>
                <p><span class="red bold">Free Fika</span> is also available for all our members!</p>
              </div> 
            </div>                    
          </div>
        </div>
      </div>
    );
  }
}
