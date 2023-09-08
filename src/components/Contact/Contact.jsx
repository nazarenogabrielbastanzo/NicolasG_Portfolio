import "./Contact.styles.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Message from "../../assets/img/undraw_mobile_messages_re_yx8wv2.svg";

const Contact = () => {
  const [t] = useTranslation("global");

  const { theme } = useSelector((state) => state.generalSlice);

  const { VITE_REACT_APP_URL, VITE_SOME_KEY } = import.meta.env;

  return (
    <div className={`container__contact p-4 ${theme}__contact `} id="Contact">
      <h3 className={`text-center ${theme}-text__contact`}>
        {t("contact.title")}
      </h3>
      <div className="d-flex flex-wrap container-forms__contact">
        <div className="image-container__contact d-flex justify-content-center">
          <img
            className={`m-1 image__contact ${theme}-image__contact`}
            src={Message}
            alt="nicolasProfile"
          />
        </div>
        <div className="contact-container__contact">
          <div className="type-contact-container__contact">
            <p className="text-center button-resend__contact">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://web.whatsapp.com/send?phone=573147974978&text=${t(
                  "contact.msj-wsp"
                )}`}
                className={`box__contact mt-2 ${theme}-text__contact wsp-desktop`}
              >
                {t("contact.whatsapp")}
                <i
                  className="fa-brands fa-whatsapp"
                  style={{ margin: "0.5rem" }}
                ></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://api.whatsapp.com/send?phone=573147974978&text=${t(
                  "contact.msj-wsp"
                )}`}
                className={`box__contact mt-2 ${theme}-text__contact wsp-mobile`}
              >
                {t("contact.whatsapp")}
                <i
                  className="fa-brands fa-whatsapp"
                  style={{ margin: "0.5rem" }}
                ></i>
              </a>
            </p>
            <p className={`text-center ${theme}-text__contact`}>
              {t("contact.or")}
            </p>
            <p className="text-center button-resend__contact">
              <a
                href="mailto:nicolasggdev@gmail.com"
                className={`box__contact mt-2 ${theme}-text__contact`}
              >
                {t("contact.email")}
                <i
                  className="fa-regular fa-envelope"
                  style={{ margin: "0.5rem" }}
                ></i>
              </a>
            </p>
          </div>
          <form action={`https://formsubmit.co/${VITE_SOME_KEY}`} method="POST">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="name"
                style={{ border: "1px solid #1083d6" }}
                name="name"
                required
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
                name="email"
                required
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
                name="phone"
                required
              />
              <label htmlFor="phone">{t("contact.form.phone")}</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="message"
                id="message"
                style={{ height: "100px", border: "1px solid #1083d6" }}
                name="message"
                required
              ></textarea>
              <label htmlFor="message">{t("contact.form.message")}</label>
            </div>
            <input type="hidden" name="_next" value={VITE_REACT_APP_URL} />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Contact to work from Portfolio"
            />
            <input type="hidden" name="_template" value="table" />
            <button className={`button__contact ${theme}-button__contact`}>
              {t("contact.form.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
