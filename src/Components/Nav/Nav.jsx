/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

// Utils
import blackIcon from "../../Utils/Img/Black-Icon.png";
// import NicolasCv from "../../Utils/Cv/NicolasGGCV.pdf";

// Styles
import "./Nav.styles.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-transparent">
      <div className="container-nav">
        <Link to="/" className="navbar-brand">
          <span>Nicolas G</span>
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
                  to="/portfolio"
                  className="nav-link active"
                  aria-current="page"
                >
                  Portfolio
                </Link>

                <Link to="/about" className="nav-link" aria-current="page">
                  About
                </Link>

                <Link to="/contact" className="nav-link" aria-current="page">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                {/* <a
                  download="CV-NicolasGonzalezGiraldo"
                  className="nav-link"
                  href={NicolasCv}
                >
                  Download CV
                </a> */}
                <a className="nav-link" href="#">
                  Download CV
                </a>
              </li>
            </ul>
            <div className="container-icon-nav">
              <Link to="/">
                <img className="icon-nav" src={blackIcon} alt="Icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
