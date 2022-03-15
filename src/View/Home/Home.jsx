import React from "react";

// Utils
import blackIcon from "../../Utils/Img/Black-Icon.png";

// Styles
import "./Home.styles.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="icon margin-top-home margin-bottom-home"
        src={blackIcon}
        alt="Icon"
      />
      <h1 className="margin-top-home margin-bottom-home text-center">
        Hi, I'm Nicolas Gonzalez G.
      </h1>
      <div className="margin-top-home margin-bottom-home text-center">
        <p>
          I'm a
          <span className="role">
            <b> Backend Developer</b>
          </span>
        </p>
        <p>I like create things with web techonologies</p>
      </div>
    </div>
  );
};

export default Home;
