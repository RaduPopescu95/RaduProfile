import React from "react";
import Typed from "react-typed";
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Web development and websites promotions</h1>
        
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Contact</a>
      </div>
    </div>
  )
}

export default Header;
