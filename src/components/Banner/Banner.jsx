import "./Banner.styles.css";
import Typed from "react-typed";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LogoDark from "../../assets/logo/Logo-dark.png";
import LogoLight from "../../assets/logo/Logo-ligth.png";

const Banner = () => {
  const [t] = useTranslation("global");

  const { theme } = useSelector((state) => state.generalSlice);

  const [themeSelected, setThemeSelected] = useState("dark");

  useEffect(() => {
    if (theme === "light") {
      setThemeSelected("light");
    } else {
      setThemeSelected("dark");
    }
  }, [theme]);

  return (
    <section
      className={`container__banner d-flex align-items-center p-4 ${theme}__banner`}
      id="Banner"
    >
      <div className="w-100 h-75 d-flex align-items-center ">
        <div
          className={`text-center w-100 m-0 animated-type__banner ${theme}-text__banner`}
        >
          <img
            className="logo__banner"
            src={themeSelected === "light" ? LogoLight : LogoDark}
            alt="nicolasggLogo"
          />
          <h1 className="title__banner">
            <b>{t("banner.title")}</b>
          </h1>
          <Typed
            strings={[t("banner.string1")]}
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
