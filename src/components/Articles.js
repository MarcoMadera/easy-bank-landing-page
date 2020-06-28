import React from "react";
import "./css/Articles.css";
import Article from "./Article";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

const Articles = () => {
  return (
    <div className="Articles">
      <h2 className="Articles__title">Latest Articles</h2>
      <Article
        cover={currency}
        author="Claire Robinson"
        title="Receive money in any currency with no fees"
        excerpt="The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …"
      />
      <Article
        cover={restaurant}
        author="Wilson Hutton"
        title="Treat yourself without worrying about money"
        excerpt="Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …"
      />
      <Article
        cover={plane}
        author="Wilson Hutton"
        title="Take your Easybank card wherever you go"
        excerpt="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …"
      />
      <Article
        cover={confetti}
        author="Claire Robinson"
        title="Our invite-only Beta accounts are now live!"
        excerpt="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ..."
      />
    </div>
  );
};

export default Articles;
