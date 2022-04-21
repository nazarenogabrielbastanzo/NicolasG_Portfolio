import React from "react";
import { motion } from "framer-motion";

// Utils
import blackIcon from "../../Utils/Img/Black-Icon.png";

// Styles
import "./Home.styles.css";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img className="icon margin-home" src={blackIcon} alt="Icon" />
      <h1 className="margin-home text-center title-home">
        Hi, I'm Nicolas Gonzalez G.
      </h1>
      <div className="margin-home text-center">
        <p className="text-home">
          I'm a
          <span className="role">
            <b> Backend Developer</b>
          </span>
        </p>
        <p className="text-home">
          I like to create things with web techonologies
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
