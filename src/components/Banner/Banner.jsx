import React from "react";
import Typed from "react-typed";
import Logo from "../../assets/icon/Logo.png";
import { useTranslation } from "react-i18next";
import "./Banner.styles.css";

const Banner = () => {
  const [t] = useTranslation("global");

  return (
    <section
      className="container__banner d-flex align-items-center p-3"
      id="Banner"
    >
      <div className="w-100 h-75 d-flex align-items-center ">
        <div className="text-center w-100 m-0 animated-type__banner">
          <img className="logo__banner" src={Logo} alt="nicolasggLogo" />
          <h1 className="title__banner">
            <b>{t("banner.title")}</b>
          </h1>
          <Typed
            strings={[
              t("banner.string1"),
              t("banner.string2"),
              t("banner.string3")
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          ></Typed>
        </div>
      </div>
    </section>
  );
};

export default Banner;
