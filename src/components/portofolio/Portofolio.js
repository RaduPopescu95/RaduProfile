import React,{useEffect} from "react";
import netflix from "./netflix.png";
import cityGuide from "./city-guide-app.png";
import portfolio from "./portfolio.png";
import taskManager from "./task-manager.png";
import './portofolio.css';
import Aos from "aos";
import "aos/dist/aos.css";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

   useEffect(() => {
    Aos.init();
    
  }, [])

  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <div className='row justify-content-center'>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
        </div>
      </>
    )
    PopupboxManager.open({ 
      content,
      config:{
        titleBar: {
      enable: true,
      text: "Netflix clone project."
    },
      fadeIn: true,
      fadeInSpeed: 500
       }
     })
  }



  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <div className='row justify-content-center'>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide App Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://city-guide-app-project.herokuapp.com/", "_blank")}>https://city-guide-app-project.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a>
        </div>
      </>
    )
    PopupboxManager.open({ 
      content,
       config:{
        titleBar: {
      enable: true,
      text: "City Guide App project."
    },
      fadeIn: true,
      fadeInSpeed: 500
       }
     })
  }



  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <div className='row justify-content-center'>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}>https://github.com/8020Coding/portfilio</a>
        </div>
      </>
    )
    PopupboxManager.open({ 
      content,
      config:{
        titleBar: {
      enable: true,
      text: "Poftfolio React and Material UI project."
    },
      fadeIn: true,
      fadeInSpeed: 500
       }
     })
  }

  
  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <div className='row justify-content-center'>
        <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a>
        </div>
      </>
    )
    PopupboxManager.open({
       content,
       config:{
        titleBar: {
      enable: true,
      text: "Task Manager React and Redux project."
    },
      fadeIn: true,
      fadeInSpeed: 500
       } 
    })
  }

  


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div data-aos="fade-in" data-aos-easing="ease-in-sine" className="portfolio-image-box" data-aos-duration="1000" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div data-aos="fade-in" data-aos-easing="ease-in-sine"className="portfolio-image-box" data-aos-duration="1000" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div data-aos="fade-in"  data-aos-easing="ease-in-sine"className="portfolio-image-box" data-aos-duration="1000" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div data-aos="fade-in" data-aos-easing="ease-in-sine"className="portfolio-image-box" data-aos-duration="1000" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer/>
    </div>
  )
}

export default Pofrfolio;
