import React from "react";
import "./popularCourse.css";
import List from "../../components/List/List";

const PopularCourse = () => {
  return (
    <div className="popular-course-container">
      <p className="popular-title">Quality features</p>
      <h2 className="popular-title-2">Popular Designing Course</h2>
      <div className="list-container">
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default PopularCourse;
