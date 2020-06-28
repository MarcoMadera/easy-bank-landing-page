import React from "react";
import "./css/Navbar.css";
import logo from "../images/logo.svg";
import hamburgerMenuico from "../images/icon-hamburger.svg";
import closeMenuico from "../images/icon-close.svg";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__container__hamburgerMenu">
          {!props.show ? (
            <img
              onClick={() => props.openModal()}
              src={hamburgerMenuico}
              alt="Menu"
            />
          ) : (
            <img
              onClick={() => props.closeModal()}
              src={closeMenuico}
              alt="Menu"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
