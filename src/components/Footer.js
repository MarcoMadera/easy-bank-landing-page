import React from "react";
import Button from "./Button";
import "./css/Footer.css";
import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
} from "./Icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer__container">
        <div className="footer__container__elements">
          <div>
            <div className="footer__container__logo"></div>
            <div className="footer__container__socialMedia">
              <a href="./#facebook">
                <FacebookIcon />
              </a>
              <a href="./#youtube">
                <YoutubeIcon />
              </a>
              <a href="./#twitter">
                <TwitterIcon />
              </a>
              <a href="./#pinterest">
                <PinterestIcon />
              </a>
              <a href="./#instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="footer__container__links">
            <a href="./#about">About Us</a>
            <a href="./#contact">Contact</a>
            <a href="./#blog">Blog</a>
            <a href="./#careers">Careers</a>
            <a href="./#support">Support</a>
            <a href="./#privacy">Privacy Policy</a>
          </div>
          <div className="footer__container__buttonRights">
            <Button link="./#RequestInvite" cont="Request Invite" />
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
