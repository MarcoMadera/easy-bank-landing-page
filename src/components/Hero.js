import React from "react";
import "./css/Hero.css";
import Button from "./Button";

const Hero = () => (
  <div className="Hero">
    <div className="hero__container">
      <div className="hero__container__bg"></div>
      <div className="hero__container__title">
        <h1> Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button link="#" cont="Request Invite" />
      </div>
    </div>
  </div>
);

export default Hero;
