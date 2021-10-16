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
import Contacts from './components/contact/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe/>
      <Services/>
      <Experience/>
      <Portofolio/>
      <Testimonials/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
