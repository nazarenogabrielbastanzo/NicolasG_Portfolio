import React from "react";
import Css from "../../assets/icon/Css.png";
import Git from "../../assets/icon/Git.png";
import Github from "../../assets/icon/Githubv3.png";
import Html from "../../assets/icon/Html.png";
import JavaScript from "../../assets/icon/JavaScript.png";
import Laravel from "../../assets/icon/Laravel.png";
import MongoDB from "../../assets/icon/MongoDB.png";
import Netlify from "../../assets/icon/Netlify.png";
import ExpressJs from "../../assets/icon/ExpressJs.png";
import PHP from "../../assets/icon/PHP.png";
import SQL from "../../assets/icon/SQL.png";
import Railway from "../../assets/icon/Railway.png";
import ReactIcon from "../../assets/icon/React.png";
import "./Skills.styles.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [t] = useTranslation("global");

  const skills = [
    {
      name: "Html",
      icon: Html
    },
    {
      name: "CSS",
      icon: Css
    },
    {
      name: "JS",
      icon: JavaScript
    },
    {
      name: "PHP",
      icon: PHP
    },
    {
      name: "Express",
      icon: ExpressJs
    },
    {
      name: "Laravel",
      icon: Laravel
    },
    {
      name: "SQL",
      icon: SQL
    },
    {
      name: "Mongo",
      icon: MongoDB
    },
    {
      name: "Git",
      icon: Git
    },
    {
      name: "Github",
      icon: Github
    },
    {
      name: "React",
      icon: ReactIcon
    },
    {
      name: "Netlify",
      icon: Netlify
    },

    {
      name: "Railway",
      icon: Railway
    }
  ];

  const controls = [
    {
      name: "options",
      class: "control-options__skills"
    },
    {
      name: "home",
      class: "control-home__skills"
    },
    {
      name: "back",
      class: "control-back__skills"
    }
  ];

  return (
    <section className="container__skills p-3" id="Skills">
      <h3 className="text-center mb-4">{t("skills.title")}</h3>
      <div className="container-computer__skills d-flex justify-content-center">
        <div className="computer__skills m-2">
          <div className="container-display__skills d-flex flex-wrap p-2">
            {skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="container-icon-skills d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    className="icons__skills rounded-circle"
                    src={skill.icon}
                    alt={`${skill.name}-icon`}
                  />
                  <p className="text-light m-0"> {skill.name} </p>
                </div>
              );
            })}
          </div>
          <div className="container-controls__skills d-flex">
            {controls.map((control, index) => {
              return (
                <div
                  className="controls__skills d-flex justify-content-center align-items-center"
                  key={index}
                >
                  <div className={control.class}></div>;
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
