/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Utils
import blackIcon from "../../Utils/Img/Black-Icon.png";
import Spanish from "../../Utils/Img/Spanish.png";
import English from "../../Utils/Img/English.png";

// Styles
import "./Nav.styles.css";

const Nav = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <nav className="navbar navbar-light bg-transparent">
      <div className="container-nav">
        <Link to="/" className="navbar-brand">
          <span className="name">Nicolas G</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
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
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <div data-bs-dismiss="offcanvas" aria-label="Close">
                  <Link
                    to="/projects"
                    className="nav-link active"
                    aria-current="page"
                  >
                    {t("nav.projects")}
                  </Link>
                </div>
                <div data-bs-dismiss="offcanvas" aria-label="Close">
                  <Link to="/about" className="nav-link" aria-current="page">
                    {t("nav.about")}
                  </Link>
                </div>
                <div data-bs-dismiss="offcanvas" aria-label="Close">
                  <a className="nav-link" aria-current="page" href="#">
                    {t("nav.download-cv")}
                  </a>
                </div>
                <div
                  className="container-lenguaje"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <button
                    className="nav-link button-lenguaje-icon"
                    aria-current="page"
                    onClick={() => i18n.changeLanguage("es")}
                  >
                    <img
                      className="lenguaje-icon"
                      src={Spanish}
                      alt="spanish-lenguaje"
                    />
                  </button>
                  <button
                    className="nav-link button-lenguaje-icon"
                    aria-current="page"
                    onClick={() => i18n.changeLanguage("en")}
                  >
                    <img
                      className="lenguaje-icon"
                      src={English}
                      alt="spanish-lenguaje"
                    />
                  </button>
                </div>
              </li>
            </ul>
            <div className="container-icon-nav">
              <Link to="/">
                <img
                  className="icon-nav"
                  src={blackIcon}
                  alt="Icon"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
