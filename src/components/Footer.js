import React from "react";
import Button from "./Button";
import "./css/Footer.css";
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
            <a href="./#facebook">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="./#youtube">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="./#twitter">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="./#pinterest">
              <img src={pinterest} alt="pinterest" />
            </a>
            <a href="./#instagram">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="footer__container__links">
            <a href="./#about">About Us</a>
            <a href="./#contact">Contact</a>
            <a href="./#blog">Blog</a>
            <a href="./#careers">Careers</a>
            <a href="./#support">Support</a>
            <a href="./#privacy">Privacy Policy</a>
          </div>
          <Button link="./#" cont="Request Invite" />
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
