import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import AboutMe from './components/aboutMe/AboutMe';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Portofolio from './components/portofolio/Portofolio';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe/>
      <Services/>
      <Experience/>
      <Portofolio/>
      <Testimonials/>
    </>
  );
}

export default App;
