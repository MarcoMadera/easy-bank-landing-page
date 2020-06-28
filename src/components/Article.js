import React from "react";
import "./css/Article.css";

const Article = (props) => {
  return (
    <div className="Article">
      <img className="article__cover" src={props.cover} alt={props.title} />
      <div className="article__data">
        <span className="article__data__author">By {props.author}</span>
        <h4 className="article__data__title">{props.title}</h4>
        <p className="article__data__excerpt">{props.excerpt}</p>
      </div>
    </div>
  );
};

export default Article;
