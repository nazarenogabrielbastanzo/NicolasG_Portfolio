import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage as setLanguageAction } from "../../store/slices/languageSlice";

import "./Navbar.styles.css";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState(false);

  const dispatch = useDispatch();

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

  return (
    <nav className="navbar fixed-top p-3">
      <div className="container-fluid">
        <div className="d-flex">
          <div className="form-switch switch__navbar mx-4">
            <input
              className="form-check-input swtich-input__navbar"
              type="checkbox"
              role="switch"
              id="language"
            />
          </div>
          <div className="form-switch switch__navbar mx-4">
            <input
              className="form-check-input swtich-input__navbar"
              type="checkbox"
              role="switch"
              id="language"
              onChange={() => setLanguage(!language)}
            />
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          style={{ backgroundColor: "#ffffff" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <div></div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {navigation.map((element, index) => {
                return (
                  <li key={index} data-bs-dismiss="offcanvas">
                    <a
                      className="nav-link text-end d-flex justify-content-end align-items-center"
                      aria-current="page"
                      href={element.to}
                    >
                      <span>{element.name}</span>
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
