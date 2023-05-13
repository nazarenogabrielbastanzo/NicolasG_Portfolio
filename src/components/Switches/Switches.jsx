import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setLanguage as setLanguageAction,
  setTheme
} from "../../store/slices/generalSlice";
import { useTranslation } from "react-i18next";
import "./Switches.styles.css";

const Switches = ({ id }) => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState(false);
  const [isLigth, setIsLigth] = useState(true);

  const dispatch = useDispatch();

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
    <div className="d-flex">
      <div className="theme-switch__switch mx-3">
        <input
          type="checkbox"
          id={`theme-toggle-${id}`}
          className="theme-toggle__switch"
          onChange={() => setIsLigth(!isLigth)}
        />
        <label
          htmlFor={`theme-toggle-${id}`}
          className="theme-switch-label__switch"
        >
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
        </label>
      </div>

      <div className="switch__switch mx-3">
        <input
          className="form-check-input switch-input__switch"
          type="checkbox"
          role="switch"
          id={`language-${id}`}
          onChange={() => setLanguage(!language)}
        />
        <label htmlFor={`language-${id}`}></label>
      </div>
    </div>
  );
};

export default Switches;
