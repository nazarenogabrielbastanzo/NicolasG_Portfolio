import React from "react";
import Message from "../../assets/img/undraw_Mobile_messages_re_yx8w.png";
import "./Contact.styles.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t] = useTranslation("global");

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container__contact p-3" id="Contact">
      <h3 className="text-center">{t("contact.title")}</h3>
      <div className="d-flex flex-wrap">
        <div className="image-container__contact d-flex justify-content-center">
          <img className="m-1" src={Message} alt="nicolasProfile" />
        </div>
        <div className="contact-container__contact">
          <p className="text-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/573147974978"
              style={{ color: "#000" }}
              className="box__contact"
            >
              {t("contact.whatsapp")}
              <i
                className="fa-brands fa-whatsapp"
                style={{ margin: "0.5rem" }}
              ></i>
            </a>
          </p>
          <p className="text-center">{t("contact.or")}</p>
          <p className="text-center ">
            <a
              href="mailto:nicolasggdev@gmail.com"
              style={{ color: "#000" }}
              className="box__contact"
            >
              {t("contact.email")}
              <i
                className="fa-regular fa-envelope"
                style={{ margin: "0.5rem" }}
              ></i>
            </a>
          </p>
          <form onSubmit={(e) => sendEmail(e)}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="name"
                style={{ border: "1px solid #1083d6" }}
              />
              <label htmlFor="name">{t("contact.form.name")}</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                style={{ border: "1px solid #1083d6" }}
              />
              <label htmlFor="email">{t("contact.form.email")}</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="phone"
                style={{ border: "1px solid #1083d6" }}
              />
              <label htmlFor="phone">{t("contact.form.phone")}</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="message"
                id="message"
                style={{ height: "100px", border: "1px solid #1083d6" }}
              ></textarea>
              <label htmlFor="message">{t("contact.form.message")}</label>
            </div>
            <button
              className="button__contact"
              style={{ position: "relative", zIndex: "3" }}
            >
              {t("contact.form.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
