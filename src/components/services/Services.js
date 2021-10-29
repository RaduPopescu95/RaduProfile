import React,{useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import './services.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
    
  }, [])


  return (
    <div id="services" className="services">
    <div className="header">
      <div className="header-text">
      <h2>Services</h2>
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Passion</h2>
    </div>
   
  </div>

  <div className="row1-container">
     
    <div data-aos="zoom-in" className="box box-down unu">
      <h2>Web Design</h2>
      <p>I approach each project individually and always focus on the result.</p> 
      <div className="circle cyan"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
    </div>


    <div data-aos="zoom-in" className="box doi">
      <h2>Web Development</h2>
      <p>Your website will be build with an new proven technologies.</p>
     <div className="circle red"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
    </div>

    <div data-aos="zoom-in" className="box box-down trei">
      <h2>Facebook Ads SMM</h2>
      <p>Your potential clients well see your services or product on Facebook</p>
      <div className="circle cyan"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>
    </div>
  </div>
  <div data-aos="zoom-in" className="row2-container">
    <div className="box patru">
      <h2>Google Ads</h2>
      <p>Your service or product will appear at the top of the Google search</p>
     <div className="circle red"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
    </div>
  </div>
      
    </div>

  )
}

export default Services;
