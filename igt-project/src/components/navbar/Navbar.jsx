import React from "react";
import "./navbar.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <div className="logo1">
            <img src={logo1} alt="logo1" />
          </div>
          <img src={logo2} alt="logo1" style={{ marginLeft: "10px" }} />
        </div>
        <ul className="menu-list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Advertise</a>
          </li>
          <li>
            <a href="">Supports</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <Button text="Try for Free" />
      </div>
    </nav>
  );
};

export default Navbar;
