import React from "react";
import "./list.css";
import PlayButton from "../playButton/PlayButton";
import eye from "../../assets/eye.png"

const List = () => {
  return (
    <div className="list-cart">

      <div className="playBtn-div">
        <PlayButton />
      </div>

      <div className="list-containt">
        <div className="list-rating">
            <div>
              <span className="list-star">&#9733;</span>
              <span className="list-star">&#9733;</span>
              <span className="list-star">&#9733;</span>
              <span className="list-star">&#9733;</span>
              <span className="list-star">&#9733;</span>
              <span className="list-start-text">5.0 (392 reviews)</span>
            </div>
            <div style={{marginLeft: "8px"}}>
              <p className="list-p">
                <img src={eye} alt="" style={{ width: "20px", height: "18px" }} />
                <span style={{ marginLeft: "10px" }}>2,538 students watched</span>
              </p>
            </div>
        </div>
        <div>
          <h2 className="list-h2">Professional graphic design tutorial full course with exercise file</h2>
          <p className="list-p">Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
        </div>
      </div>

      <div className="list-btn">
        <button>7 Video Classes | 5 hrs</button>
      </div>
    </div>
  );
};

export default List;
