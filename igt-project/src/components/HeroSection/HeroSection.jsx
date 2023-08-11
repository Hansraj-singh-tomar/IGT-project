import React from "react";
import "./herosection.css";
import HeroOne from "../heroOne/HeroOne";
import HeroTwo from "../heroTwo/HeroTwo";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <HeroOne />
      <HeroTwo />
    </div>
  );
};

export default HeroSection;
