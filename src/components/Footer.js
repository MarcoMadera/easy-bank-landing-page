import React from "react";
import Button from "./Button";
import "./css/Footer.css";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer__container">
        <div className="footer__container__elements">
          <div className="footer__container__logo"></div>
          <div className="footer__container__socialMedia">
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
          <Button link="#" cont="Request Invite" />
          <span>© Easybank. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
