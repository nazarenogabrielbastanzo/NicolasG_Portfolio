import React from "react";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="container__footer">
      <div className="menu__footer">
        <div className="form-switch switch__footer">
          <input
            className="form-check-input swtich-input__footer"
            type="checkbox"
            role="switch"
            id="theme"
          />
        </div>
        <div className="form-switch switch__footer">
          <input
            className="form-check-input swtich-input__footer"
            type="checkbox"
            role="switch"
            id="language"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
