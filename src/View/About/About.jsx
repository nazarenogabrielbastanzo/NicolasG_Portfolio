import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Styles
import "./About.styles.css";

// Utils
import Academlo from "../../Utils/Img/Academlo.png";
import Youtube from "../../Utils/Img/Youtube.png";
import Html from "../../Utils/Img/Html.png";
import Css from "../../Utils/Img/Css.png";
import JavaScript from "../../Utils/Img/JavaScript.png";
import NodeJs from "../../Utils/Img/NodeJs.png";
import Reacticon from "../../Utils/Img/React.png";
import Git from "../../Utils/Img/Git.png";
import Github from "../../Utils/Img/Github.png";
import PostgresQL from "../../Utils/Img/PostgresQL.png";
import MongoDB from "../../Utils/Img/MongoDB.png";
import Netlify from "../../Utils/Img/Netlify.png";
import Heroku from "../../Utils/Img/Heroku.png";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <motion.div
      className="container-about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <section className="section-about">
        <h3>
          <b>{t("about.title")} </b>
        </h3>
        <p className="about-text">📌 {t("about.gratitude")}</p>
      </section>
      <section>
        <article>
          <h2 className="titles">{t("about.who-am-i")}</h2>
          <p className="about-text">{t("about.who-am-i-content1")}</p>
          <p className="about-text">
            {t("about.who-am-i-content2")}
            <img className="icons" src={Academlo} alt="Academlo-Icon" />
            {t("about.who-am-i-content3")}
            <img className="icons" src={Youtube} alt="Academlo-Icon" />
            {t("about.who-am-i-content4")}
          </p>
          <p className="about-text">{t("about.who-am-i-content5")}</p>
          <h2 className="titles">{t("about.my-stack")}</h2>
          <p className="about-text">{t("about.tecnologies")}</p>
          <ul className="ul-tecnologies">
            <li>
              <img className="icons" src={Html} alt="Html-Icon" />
              <span className="about-text">HTML</span>
            </li>
            <li>
              <img className="icons" src={Css} alt="Css-Icon" />
              <span className="about-text">CSS</span>
            </li>
            <li>
              <img className="icons" src={JavaScript} alt="JavaScript-Icon" />
              <span className="about-text">JavaScript</span>
            </li>
            <li>
              <img className="icons" src={NodeJs} alt="NodeJs-Icon" />
              <span className="about-text">NodeJs</span>
            </li>
            <li>
              <img className="icons" src={Reacticon} alt="React-Icon" />
              <span className="about-text">React</span>
            </li>
            <li>
              <img className="icons" src={Git} alt="Git-Icon" />
              <span className="about-text">Git</span>
            </li>
            <li>
              <img className="icons" src={Github} alt="Github-Icon" />
              <span className="about-text">Github</span>
            </li>
            <li>
              <img className="icons" src={PostgresQL} alt="PostgresQL-Icon" />
              <span className="about-text">PostgresQL</span>
            </li>
            <li>
              <img className="icons" src={MongoDB} alt="MongoDB-Icon" />
              <span className="about-text">MongoDB</span>
            </li>
            <li>
              <img className="icons" src={Netlify} alt="Netlify-Icon" />
              <span className="about-text">Netlify</span>
            </li>
            <li>
              <img className="icons" src={Heroku} alt="MongoDB-Icon" />
              <span className="about-text">Heroku</span>
            </li>
          </ul>
        </article>
      </section>
    </motion.div>
  );
};

export default About;
