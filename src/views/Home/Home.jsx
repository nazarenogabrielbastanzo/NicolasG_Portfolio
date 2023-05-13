import React from "react";
import "./Home.styles.css";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import StarsToUp from "../../utils/backgrounds/StarsToUp/StarsToUp";
import StarsToDown from "../../utils/backgrounds/StarsToDown/StarsToDown";
import useRequest from "../../hooks/useRequest";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Switches from "../../components/Switches/Switches";
import "./Home.styles.css";

const Home = () => {
  useRequest();

  const { isLoading } = useSelector((state) => state.generalSlice);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setLoader(true);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const id = "home";

  return (
    <div className="container__home">
      {loader && <Loader />}
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <StarsToDown />
      <StarsToUp />
      <div className="container-switch__home">
        <Switches id={id} />
      </div>
    </div>
  );
};

export default Home;
