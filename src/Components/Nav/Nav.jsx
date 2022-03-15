/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

// Import View
import About from "../../View/About/About";
import Home from "../../View/Home/Home";
import Portfolio from "../../View/Portfolio/Portfolio";
import Contact from "../../View/Contact/Contact";

// Styles
import "./Nav.styles.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-transparent">
      <div className="container-nav">
        <Link to={<Home />} className="navbar-brand">
          Nicolas G
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
                <Link
                  to={<Portfolio />}
                  className="nav-link active"
                  aria-current="page"
                >
                  Portfolio
                </Link>

                <Link to={<About />} className="nav-link" aria-current="page">
                  About
                </Link>

                <Link to={<Contact />} className="nav-link" aria-current="page">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
