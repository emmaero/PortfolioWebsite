import React from "react";

import logo from "../assets/images/logo.svg";
import logoMobile from "../assets/images/logo-mobile.svg";

export default function NavigationBar() {
  return (
    <nav>
      <div className="navigation-menu">
        <a className="menu-link" href="#hero">
          <img
            src={logo}
            alt="Emmanuel Imhontu"
            className="logo logo-desktop"
          />
          <img
            src={logoMobile}
            alt="Emmanuel Imhontu"
            className="logo logo-mobile"
          />
        </a>
        <a className="menu-link" href="#about">
          About
        </a>
        <a className="menu-link" href="#portfolio">
          Portfolio
        </a>
        <a className="menu-link" href="#tech">
          Tech
        </a>
        <a className="menu-link" href="#contacts">
          Contact
        </a>
      </div>
    </nav>
  );
}
