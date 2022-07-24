import React, { Component } from 'react';
import $ from 'jquery'
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  scrollToContent() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#learn-more").offset().top
      }, 600, "swing");
  }

  render () {
    return (
      <div>
        <div class="banner">
          <div class="banner-background" style={{ backgroundImage: "url('/img/tekken-2021.jpg')" }}></div>
          <div class="centered">
            <p>Welcome To the</p>
            <p class="large">East Asian Association</p>
            <p>林雪平大学東亞協会</p>
            <button id="learn-more" onClick={this.scrollToContent}><p>Learn more</p></button>
          </div>
        </div>
        <div id="learn-more" class="summary">
          <div class="summary-item dark-gray-bg"> 
            <div class="summary-item-container">
              <div class="summary-image">
                <img src="/img/cc-fika.jpg" alt=""></img>
              </div>
              <div class="summary-spacer"></div>
              <div class="summary-text">
                <h1>Conversation Corner</h1>
                <p>Every tuesday and thursday at <span class="red">17:15</span> we hosts Conversation Corners for culutural and language exchange. </p> 
                <p>We also offer <span class="red">free fika</span> for all our members!</p>
              </div> 
            </div>                    
          </div>
          <div class="summary-item red-bg">
            <div class="summary-item-container">
              <div class="summary-text">
                <h1>Tekken</h1>
                <p>Every tuesday and thursday at <span class="dark-gray">17:15</span> we hosts Conversation Corners for culutural and language exchange. </p> 
                <p>We also offer <span class="dark-gray">free fika</span> for all our members!</p>
              </div>
              <div class="summary-spacer"></div>
              <div class="summary-image">
                <img src="/img/cc-fika.jpg" alt=""></img>
              </div>          
            </div>
          </div>
          <div class="summary-item dark-gray-bg"> 
            <div class="summary-item-container">
              <div class="summary-image">
                <img src="/img/cc-fika.jpg" alt=""></img>
              </div>
              <div class="summary-spacer"></div>
              <div class="summary-text">
                <h1>Tekken</h1>
                <p>Every tuesday and thursday at <span class="red">17:15</span> we hosts Conversation Corners for culutural and language exchange. </p> 
                <p>We also offer <span class="red">free fika</span> for all our members!</p>
              </div>    
            </div>                             
          </div>
        </div>
      </div>
    );
  }
}
