import React from "react";
import "./heroOne.css";
import rating from "../../assets/rating.png";
import searchIcon from "../../assets/searchImg.png";
import DropboxLogo from "../../assets/logos/Dropbox_logo.png";
import googleLogo from "../../assets/logos/google.png";
import paypalLogo from "../../assets/logos/paypal.png";
import textLogo from "../../assets/logos/text.png";

const HeroOne = () => {
  return (
    <div className="hero-one">
      <div className="hero-rating">
        <img
          src={rating}
          alt="rating"
          style={{
            color: "yellow",
            width: "90px",
            height: "15px",
            alignSelf: "center",
          }}
        />
        <p>Trused by over 4,332 students</p>
      </div>
      <h1 className="hero-h1">
        Learn Design <br />
        with <span className="path-frame">Nia Matos</span>
      </h1>
      <p className="hero-p">
        Get your blood tests delivered at let home collect sample <br /> from
        the victory of the managments that supplies best <br /> design system
        guidelines ever.
      </p>

      <div className="input-box">
        <input type="text" placeholder="Search Cource Name" />
        <img
          src={searchIcon}
          alt="search-icon"
          style={{ width: "17px", height: "17px", alignSelf: "center" }}
        />
      </div>

      <div className="hero-logos">
        <img
          src={textLogo}
          alt="logo"
          style={{ width: "70px", height: "20px" }}
        />
        <img
          src={paypalLogo}
          alt="logo"
          style={{ width: "70px", height: "20px" }}
        />
        <img
          src={googleLogo}
          alt="logo"
          style={{ width: "60px", height: "20px" }}
        />
        <img
          src={DropboxLogo}
          alt="logo"
          style={{ width: "70px", height: "20px" }}
        />
      </div>
    </div>
  );
};

export default HeroOne;
