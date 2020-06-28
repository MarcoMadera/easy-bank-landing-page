import React from "react";
import "./css/Facility.css";

const Facility = (props) => {
  return (
    <div className="Facility">
      <div className="facility__container">
        <img src={props.img} alt={props.name} />
        <h3 className="facility__container__title">{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Facility;
