import React from "react";

import logo from "../assets/images/logo.svg";

export default function NavigationBar() {
  return (
    <nav>
      <div className="navigation-menu">
        <a className="menu-link" href="#hero">
          <img src={logo} alt="Emmanuel Imhontu" className="logo" />
        </a>
        <a className="menu-link" href="#about">
          About
        </a>
        <a className="menu-link" href="#projects">
          Projects
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
