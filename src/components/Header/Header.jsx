import React, { useState } from "react";
import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // Track the active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
    showMenu(false); // Close the menu if needed after clicking a link
  };

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            TOKA
          </a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link
                 to="/home"
                  className={`nav__link ${
                    activeLink === "#home" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("#home")}
                >
                  <i className="uil uil-estate nav__icon"></i> Home
                </Link>
              </li>

              <li className="nav__item">
                <Link
                 to="/about"
                  className={`nav__link ${
                    activeLink === "#about" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("#about")}
                >
                  <i className="uil uil-user nav__icon"></i> About
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/skills"
                  className={`nav__link ${
                    activeLink === "#skills" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("#skills")}
                >
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </Link>
              </li>

              <li className="nav__item">
                <Link
                 to="/services"
                  className={`nav__link ${
                    activeLink === "#services" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("#services")}
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </Link>
              </li>

              <li className="nav__item">
                <Link
                 to="/portfolio"
                  className={`nav__link ${
                    activeLink === "#portfolio" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("#portfolio")}
                >
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/contact"
                  className={`nav__link ${
                    activeLink === "#contact" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("#contact")}
                >
                  <i className="uil uil-message nav__icon"></i> Contact
                </Link>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
