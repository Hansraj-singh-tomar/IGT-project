import React from "react";
import "./cart.css";
import cartImg from "../../assets/cartImg.png";
import eye from "../../assets/eye.png";
const Cart = () => {
  return (
    <div className="cart">
      <img src={cartImg} alt="Cart Image" />
      <div className="cart-containt">
        <div className="rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="start-text">5.0 (392 reviews)</span>
        </div>
        <h2 className="cart-h2">
          How to work with prototype design with adobe xd featuring tools
        </h2>
        <p className="cart-p">
          <img src={eye} alt="" style={{ width: "20px", height: "18px" }} />
          <span style={{ marginLeft: "10px" }}>2,538 students watched</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
