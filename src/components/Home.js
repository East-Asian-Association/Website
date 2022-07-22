import React, { Component } from 'react';
import $ from 'jquery'
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  scrollToContent() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#about").offset().top - 80
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
        <div id="about" class="about">
          <div class="about-grid red-bg"> 
            <img src="/img/cc-fika.jpg" alt=""></img>
            <div>
              <h1>Conversation Corner</h1>
              <p>Every tuesday and thursday at <span class="red">17:15</span> we hosts Conversation Corners for culutural and language exchange. </p> 
              <p>We also offer <span class="red">free fika</span> for all our members!</p>
            </div>                  
          </div>
          <div class="about-grid dark-gray-bg">
            <div>
              <h1 class="dark-gray">Asienkunskap</h1>
              <p><a href="https://liu.se/utbildning/program/6asik">Asienkunskap</a>. </p> 
            </div>
            <img src="/img/cc-fika.jpg" alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}
