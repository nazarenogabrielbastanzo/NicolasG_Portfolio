import React from "react";

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
  return (
    <div className="container-about">
      <section className="section-about">
        <h3>
          <b>About me </b>
        </h3>
        <p>
          📌 Hey there, I'm Nicolas! Thanks for visiting my personal website.
        </p>
      </section>
      <section>
        <article>
          <h2 className="titles">Who Am I?</h2>
          <p>
            I'm a developer from Colombia who is mainly interested in web
            technologies, especially in backend development.
          </p>
          <p>
            Developing my skills as a self-taught person online platforms (like
            <img className="icons" src={Academlo} alt="Academlo-Icon" />
            Academlo Bootcamp and
            <img className="icons" src={Youtube} alt="Academlo-Icon" />
            Youtube). Currenlly I'am studing in the university (UTP) in the
            colombian government program MisionTic 2022.
          </p>
          <p>
            My curiosity makes me able to learn quickly new tools and
            technologies when I needed. I enjoy sharing my knowledge and helping
            others when is possible.
          </p>
          <h2 className="titles">My Stack</h2>
          <p>These are the technologies I like to use in my projects:</p>
          <ul className="ul-tecnologies">
            <li>
              <img className="icons" src={Html} alt="Html-Icon" />
              <span>HTML</span>
            </li>
            <li>
              <img className="icons" src={Css} alt="Css-Icon" />
              <span>CSS</span>
            </li>
            <li>
              <img className="icons" src={JavaScript} alt="JavaScript-Icon" />
              <span>JavaScript</span>
            </li>
            <li>
              <img className="icons" src={NodeJs} alt="NodeJs-Icon" />
              <span>NodeJs</span>
            </li>
            <li>
              <img className="icons" src={Reacticon} alt="React-Icon" />
              <span>React</span>
            </li>
            <li>
              <img className="icons" src={Git} alt="Git-Icon" />
              <span>Git</span>
            </li>
            <li>
              <img className="icons" src={Github} alt="Github-Icon" />
              <span>Github</span>
            </li>
            <li>
              <img className="icons" src={PostgresQL} alt="PostgresQL-Icon" />
              <span>PostgresQL</span>
            </li>
            <li>
              <img className="icons" src={MongoDB} alt="MongoDB-Icon" />
              <span>MongoDB</span>
            </li>
            <li>
              <img className="icons" src={Netlify} alt="Netlify-Icon" />
              <span>Netlify</span>
            </li>
            <li>
              <img className="icons" src={Heroku} alt="MongoDB-Icon" />
              <span>Heroku</span>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default About;
