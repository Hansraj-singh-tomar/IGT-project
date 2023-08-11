import React from "react";
import "./heroTwo.css";
import heroImg from "../../assets/heroImg.png";
import patternImg from "../../assets/pattern.png";
const HeroTwo = () => {
  return (
    <div className="hero-two">
      <img
        className="img1"
        src={patternImg}
        alt="img"
        style={{
          zIndex: 1,
          width: "313px",
          height: "239px",
          alignSelf: "flex-end",
        }}
      />

      <img
        className="img2"
        src={heroImg}
        alt="img"
        width={408}
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

export default HeroTwo;
