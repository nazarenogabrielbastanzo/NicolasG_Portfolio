import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Profile from "../../assets/img/profile/My project-1(JPG)LowSize.jpg";
import "./About.styles.css";

const About = () => {
  const [documents, setDocuments] = useState([]);
  const [urlDownload, setUrlDownload] = useState("");

  const { language, theme } = useSelector((state) => state.generalSlice);

  const [t] = useTranslation("global");

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
      string: t("about.string1")
    },
    {
      string: t("about.string2")
    }
  ];

  return (
    <section className={`container__about p-3 ${theme}__about`} id="About">
      <h3 className={`text-center ${theme}-text__about`}>{t("about.title")}</h3>
      <div className="d-flex flex-wrap">
        <div className="profile-container__about d-flex justify-content-center">
          <img className="m-1" src={Profile} alt="nicolasProfile" />
        </div>
        <div>
          {texts.map((element, index) => {
            return (
              <p className={`${theme}-text__about`} key={index}>
                {element.string}
              </p>
            );
          })}
          <a
            className={`download__about ${theme}-button__about`}
            onClick={() => download(language)}
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
