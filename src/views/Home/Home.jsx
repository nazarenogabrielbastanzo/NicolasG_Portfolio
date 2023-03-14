import React from "react";
import "./Home.styles.css";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Stars from "../../assets/backgrounds/Stars/Stars";

const Home = () => {
  return (
    <div className="container__home">
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Stars />
    </div>
  );
};

export default Home;
