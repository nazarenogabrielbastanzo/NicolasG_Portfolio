import React from "react";
import "./Home.styles.css";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import StarsToUp from "../../assets/backgrounds/StarsToUp/StarsToUp";
import StarsToDown from "../../assets/backgrounds/StarsToDown/StarsToDown";
import useRequest from "../../hooks/useRequest";

const Home = () => {
  useRequest();

  return (
    <div className="container__home">
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <StarsToDown />
      <StarsToUp />
    </div>
  );
};

export default Home;
