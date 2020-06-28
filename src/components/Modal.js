import React, { Fragment } from "react";
import "./css/Modal.css";
import ReactDOM from "react-dom";

function Modal(props) {
  const { show, closeModal } = props;

  const modal = (
    <Fragment>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <div className="modal__container__links">
          <a href="./#home">Home</a>
          <a href="./#about">About</a>
          <a href="./#contact">Contact</a>
          <a href="./#blog">Blog</a>
          <a href="./#careers">Careers</a>
        </div>
      </div>
    </Fragment>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
}

export default Modal;
