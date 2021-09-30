import React from "react";
import Typed from "react-typed";


const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Lemigo Hotel</h1>
        <h2>Everything right where you need it</h2>
        <Typed
          className="typed-text"
          strings={["Cazare", "Fitness", "Spa", "Tratamente balneare"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">contactează-ne</a>
      </div>
    </div>
  )
}

export default Header;
