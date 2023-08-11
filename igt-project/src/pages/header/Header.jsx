import React from "react";
import "./header.css";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
