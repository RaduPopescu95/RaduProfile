import React from "react";
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
       <div className="container">  
        {/* <a className="navbar-brand" href="#"><img className="logo" src="assets/logo.png" alt="logo..." /></a> */}
        <div className="myName">
        <h1>Popescu Radu-Adrian</h1>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
          

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-55} className="nav-link" href="#">About me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-55}  className="nav-link" href="#">Services</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} offset={-55} to="experience" className="nav-link" href="#">Experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="testimonials" offset={-55} className="nav-link" href="#">Testimonials</Link>
            </li>            
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-55} className="nav-link" href="#">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contactu" offset={-55} className="nav-link" href="#">Contact</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
