import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../../assets/img/profile/My project-1(JPG)LowSize.jpg";
import "./About.styles.css";

const About = () => {
  const [documents, setDocuments] = useState([]);
  const [urlDownload, setUrlDownload] = useState("");

  useEffect(() => {
    axios
      .get("https://portfolio-api-nodejs-production.up.railway.app/api/v1/user")
      .then((res) => setDocuments(res.data.data.document)) // Pending loader and modal when is success
      .catch((err) => console.log(err));
  }, []);

  const download = (language) => {
    documents?.forEach((document) => {
      if (language === document.language) {
        setUrlDownload(document.document);
      }
    });
  };

  const texts = [
    {
      string:
        "I am a developer from Colombia who is interested in web technologies, especially backend development. I was graduated of Academlo Bootcamp as a Full Stack Developer and the University (UTP) in the MisionTic 2022 government program."
    },
    {
      string:
        "I develop my skills as an autodidact in online platforms as Udemy, Official Documentation and Stack OverFlow (Youtube too but Shh! 🤫). I participated in the No Country program developing the backend of the Fashion Hunter app and I worked for eight months for the company BRM as a full stack developer."
    }
  ];

  return (
    <section className="container__about p-3" id="About">
      <h3 className="text-center text-light">About me</h3>
      <div className="d-flex flex-wrap">
        <div className="profile-container__about d-flex justify-content-center">
          <img className="m-1" src={Profile} alt="nicolasProfile" />
        </div>
        <div>
          {texts.map((element, index) => {
            return (
              <p className="text-light" key={index}>
                {element.string}
              </p>
            );
          })}
          <a
            className="download__about"
            onClick={() => download("en")} // Pending do it dinamic
            href={urlDownload}
            download
          >
            <i
              className="fa-solid fa-download"
              style={{ margin: "0.5rem" }}
            ></i>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
