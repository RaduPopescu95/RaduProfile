import React from "react";
import Typed from "react-typed";
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";



const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
      <div class="hero-content">
        <div class="hero-text">
        <p>I'm</p>
        <h1>Radu</h1>
        <h2></h2>
        <Typed
          className="typed-text"
          strings={["Web Designer", "Web Developer", "Facebook Ads SMM", "Google Ads"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        </div>
        <div class="hero-btn">
            <a class="btn" href="">Hire Me</a>
            <a class="btn" href="">Contact Me</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
