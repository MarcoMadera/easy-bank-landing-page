import React from "react";
import "./css/Contents.css";
import Facility from "./Facility";
import Article from "./Article";
import onlineBankingImg from "../images/icon-online.svg";
import simpleBudgetingImg from "../images/icon-budgeting.svg";
import fastOnboardingImg from "../images/icon-onboarding.svg";
import openAPI from "../images/icon-api.svg";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

const Contents = () => {
  return (
    <div className="Contents">
      <h1>Why choose Easybank?</h1>
      <p>
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
  close to hitting your limits."
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

      <div className="contents__articles">
        <h2>Latest Articles</h2>
        <Article
          cover={currency}
          by="Claire Robinson"
          title="Receive money in any currency with no fees"
          excerpt="The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …"
        />
        <Article
          cover={restaurant}
          by="Wilson Hutton"
          title="Treat yourself without worrying about money"
          excerpt="Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …"
        />
        <Article
          cover={plane}
          by="Wilson Hutton"
          title="Take your Easybank card wherever you go"
          excerpt="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …"
        />
        <Article
          cover={confetti}
          by="Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          excerpt="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ..."
        />
      </div>
    </div>
  );
};

export default Contents;
