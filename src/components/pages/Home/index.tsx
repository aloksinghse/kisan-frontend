import React from "react";
import Hero from "./Hero";
import Team from "./Team";
import Features from "./Features";
import Proof from "./Proof";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Team />
      <Proof />
      <ContactUs />
      <FAQ />
    </div>
  );
};

export default HomePage;
