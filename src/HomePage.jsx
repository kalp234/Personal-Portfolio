import React from "react";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
// import Contact from "./components/Navbar/Contact";


function HomePage() {
  return (
    <div className="App">
   
      <Hero />
      <Skills />
      <Projects />
      <Education/>
      <Footer/>
    </div>
  );
}

export default HomePage;
