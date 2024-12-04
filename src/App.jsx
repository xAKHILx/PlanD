import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Clientwork from "./components/Clientwork";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Clientwork />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
