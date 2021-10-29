import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos";
import "aos/dist/aos.css";


const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <h1>my happy clients</h1>
      <div className="container">
        
        <div className="testimonials-content">
          <TestimonialsCarousel />
        </div>
        
      </div>
    </div>
  )
}

export default Testimonials;
