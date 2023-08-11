import React from "react";
import "./playButton.css";
import playBtn from "../../assets/play-button.png";
import rectangle from "../../assets/Rectangle.png";
const PlayButton = () => {
  return (
    <>
      <div className="play-btn">
        <img src={rectangle} alt="img" />
        <img className="play-img" src={playBtn} alt="btnImg" />
      </div>
    </>
  );
};

export default PlayButton;
