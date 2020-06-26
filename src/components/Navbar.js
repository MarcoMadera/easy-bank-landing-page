import React from "react";
import "./css/Navbar.css";
import logo from "../images/logo.svg";
import hamburgerMenuico from "../images/icon-hamburger.svg";

const Navbar = () => (
  <div className="Navbar">
    <div className="navbar__container">
      <div className="navbar__container__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__container__pages">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </div>
      <div className="navbar__container__hamburgerMenu">
        <img src={hamburgerMenuico} alt="Menu" />
      </div>
    </div>
  </div>
);

export default Navbar;
