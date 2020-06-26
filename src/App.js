import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Contents />
      <Footer />
    </Fragment>
  );
};

export default App;
