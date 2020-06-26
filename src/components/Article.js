import React from "react";
import "./css/Article.css";

const Article = (props) => {
  return (
    <div className="Article">
      <div className="article__container">
        <div className="article__container__cover">
          <img src={props.cover} alt={props.title} />
        </div>
        <div className="article__container__data">
          <span>{props.by}</span>
          <h2>{props.title}</h2>
          <p>{props.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
