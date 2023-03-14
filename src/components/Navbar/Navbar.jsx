import React from "react";
import "./Navbar.styles.css";

const Navbar = () => {
  const navigation = [
    {
      name: "Home",
      to: "#Banner",
      icon: "fs-1 fa-solid fa-square-h"
    },
    {
      name: "About me",
      to: "#About",
      icon: "fs-1 fa-solid fa-address-card"
    },
    {
      name: "Skills",
      to: "#Skills",
      icon: "fs-1 fa-sharp fa-solid fa-gears"
    },
    {
      name: "Projects",
      to: "#Projects",
      icon: "fs-1 fa-solid fa-boxes-stacked"
    },
    {
      name: "Contact me",
      to: "#Contact",
      icon: "fs-1 fa-solid fa-envelope"
    }
  ];

  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Banner">
          Nicolas GG
        </a>
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
            <a className="navbar-brand" href="#Banner">
              Nicolas GG
            </a>
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
                      <span className="me-2">{element.name}</span>
                      <i
                        className={element.icon}
                        style={{ color: "#1083d6" }}
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
