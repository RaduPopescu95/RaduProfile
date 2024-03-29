import React,{useEffect} from "react";
import './experience.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {

   useEffect(() => {
    Aos.init();
    
  }, [])
  
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1  >experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <p class="timeline-event-thumbnail">April 2016 - Present</p>
            <h3>Freelancer</h3>
            <h4>FrontEnd Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <p class="timeline-event-thumbnail">April 2016 - Present</p>
            <h3>Freelancer</h3>
            <h4>FrontEnd Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <p class="timeline-event-thumbnail">April 2016 - Present</p>
            <h3>Freelancer</h3>
            <h4>FrontEnd Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <p class="timeline-event-thumbnail">April 2016 - Present</p>
            <h3>Freelancer</h3>
            <h4>FrontEnd Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <p class="timeline-event-thumbnail">April 2016 - Present</p>
            <h3>Freelancer</h3>
            <h4>FrontEnd Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <p class="timeline-event-thumbnail">April 2016 - Present</p>
            <h3>Freelancer</h3>
            <h4>FrontEnd Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
