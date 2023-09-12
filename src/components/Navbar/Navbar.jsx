import "./Navbar.styles.css";
import { useSelector } from "react-redux";
import Switches from "../Switches/Switches";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t] = useTranslation("global");

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

  const id = "navbar";

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  return (
    <section>
      <nav className="navbar fixed-top p-3 container__navbar">
        <div className="container-fluid">
          <Switches id={id} />
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
      <nav className="container__navbar-desktop">
        <div className="d-flex flex-wrap">
          <ul
            className={`navbar-nav justify-content-end flex-grow-1 desktop__navbar ${theme}-desktop__navbar`}
          >
            {navigation.map((element, index) => {
              return (
                <li key={index}>
                  <a
                    className="nav-link text-end d-flex justify-content-center align-items-center"
                    aria-current="page"
                    href={element.to}
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-title={element.name}
                  >
                    <i
                      className={element.icon}
                      style={{
                        color: "#1083d6",
                        margin: "0.3rem",
                        textAlign: "center"
                      }}
                    ></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
