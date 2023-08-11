import React from "react";
import './tutorial.css'
import Cart from '../../components/Cart/Cart';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Tutorial = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return(
    <div className="tutorial-container">
      <p className="tutorial-title">Quality features</p>
      <h2 className="tutorial-title-2">Tutorials that people love most</h2>
      {/* <div className="cart-div">
        <Cart />
        <Cart />
        <Cart />
      </div> */}

      <Slider {...settings}> 
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
        </Slider>
    </div>
  );
};

export default Tutorial;
