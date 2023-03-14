import React from "react";
import "./Navbar.styles.css";

const Navbar = () => {
  const navigation = [
    {
      name: "Home",
      to: "#Banner"
    },
    {
      name: "About me",
      to: "#About"
    },
    {
      name: "Skills",
      to: "#Skills"
    },
    {
      name: "Projects",
      to: "#Projects"
    },
    {
      name: "Contact me",
      to: "#Contact"
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
            {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Nicolas GG
            </h5> */}
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
                  <li key={index}>
                    <a
                      className="nav-link text-end"
                      aria-current="page"
                      href={element.to}
                    >
                      {element.name}
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
