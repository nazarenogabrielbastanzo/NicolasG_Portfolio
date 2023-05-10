import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setLanguage as setLanguageAction,
  setTheme
} from "../../store/slices/generalSlice";

import "./Navbar.styles.css";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState(false);
  const [isLigth, setIsLigth] = useState(true);

  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.generalSlice);

  const navigation = [
    {
      name: t("nav.home"),
      to: "#Banner",
      icon: "fs-1 fa-solid fa-square-h"
    },
    {
      name: t("nav.about"),
      to: "#About",
      icon: "fs-1 fa-solid fa-address-card"
    },
    {
      name: t("nav.skills"),
      to: "#Skills",
      icon: "fs-1 fa-sharp fa-solid fa-gears"
    },
    {
      name: t("nav.projects"),
      to: "#Projects",
      icon: "fs-1 fa-solid fa-boxes-stacked"
    },
    {
      name: t("nav.contact"),
      to: "#Contact",
      icon: "fs-1 fa-solid fa-envelope"
    }
  ];

  useEffect(() => {
    if (language) {
      dispatch(setLanguageAction("es"));
      i18n.changeLanguage("es");
    } else {
      dispatch(setLanguageAction("en"));
      i18n.changeLanguage("en");
    }
  }, [language, i18n, dispatch]);

  useEffect(() => {
    if (isLigth) {
      dispatch(setTheme("light"));
    } else {
      dispatch(setTheme("dark"));
    }
  }, [isLigth, dispatch]);

  return (
    <nav className="navbar fixed-top p-3">
      <div className="container-fluid">
        <div className="d-flex">
          <div className="theme-switch__navbar mx-3">
            <input
              type="checkbox"
              id="theme-toggle"
              className="theme-toggle__navbar"
              onChange={() => setIsLigth(!isLigth)}
            />
            <label
              htmlFor="theme-toggle"
              className="theme-switch-label__navbar"
            >
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
            </label>
          </div>

          <div className="switch__navbar mx-3">
            <input
              className="form-check-input switch-input__navbar"
              type="checkbox"
              role="switch"
              id="language"
              onChange={() => setLanguage(!language)}
            />
            <label htmlFor="language"></label>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className={`offcanvas-header ${theme}-offcanvas-header`}>
            <div></div>
            <button
              type="button"
              className="button__navbar"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <span
                className={`button-text__navbar ${theme}-button-text__navbar`}
              >
                X
              </span>
            </button>
          </div>
          <div className={`offcanvas-body ${theme}-offcanvas-body`}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {navigation.map((element, index) => {
                return (
                  <li key={index}>
                    <a
                      className="nav-link text-end d-flex justify-content-end align-items-center"
                      aria-current="page"
                      href={element.to}
                    >
                      <span className={`item__navbar ${theme}-item__navbar`}>
                        {element.name}
                      </span>
                      <i
                        className={element.icon}
                        style={{
                          color: "#1083d6",
                          margin: "0.3rem",
                          width: "2rem",
                          textAlign: "center"
                        }}
                      ></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
