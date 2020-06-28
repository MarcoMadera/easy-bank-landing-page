import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contents from "./components/Contents";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  if (show) {
    document.body.classList.add("block-overflow");
  } else {
    document.body.classList.remove("block-overflow");
  }
  return (
    <Fragment>
      <Modal closeModal={closeModal} show={show} />
      <Navbar openModal={openModal} closeModal={closeModal} show={show} />
      <Hero />
      <Contents />
      <Articles />
      <Footer />
    </Fragment>
  );
};

export default App;
