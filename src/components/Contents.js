import React from "react";
import "./css/Contents.css";
import Facility from "./Facility";

import onlineBankingImg from "../images/icon-online.svg";
import simpleBudgetingImg from "../images/icon-budgeting.svg";
import fastOnboardingImg from "../images/icon-onboarding.svg";
import openAPI from "../images/icon-api.svg";

const Contents = () => {
  return (
    <div className="Contents">
      <h2 className="contents__title">Why choose Easybank?</h2>
      <p className="contents__desc">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="contents__facilities">
        <Facility
          name="Online Banking"
          desc="Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world."
          img={onlineBankingImg}
        />
        <Facility
          name="Simple Budgeting"
          desc="See exactly where your money goes each month. Receive notifications when you’re 
  close to your hitting limits."
          img={simpleBudgetingImg}
        />
        <Facility
          name="Fast Onboarding"
          desc="We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away."
          img={fastOnboardingImg}
        />
        <Facility
          name="Open API"
          desc="Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier."
          img={openAPI}
        />
      </div>
    </div>
  );
};

export default Contents;
