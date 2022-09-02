import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Introduction from "./components/introduction/Introduction";

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Portfolio />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
