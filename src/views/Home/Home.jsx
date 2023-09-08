import "./Home.styles.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import About from "../../components/About/About";
import Loader from "../../components/Loader/Loader";
import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import Switches from "../../components/Switches/Switches";
import Projects from "../../components/Projects/Projects";
import StarsToUp from "../../utils/backgrounds/StarsToUp/StarsToUp";
import StarsToDown from "../../utils/backgrounds/StarsToDown/StarsToDown";

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
