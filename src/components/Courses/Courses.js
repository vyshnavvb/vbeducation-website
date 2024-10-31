import React from "react";
import "./Courses.css";
import ai from "../../assets/img/ai.png";
import dg from "../../assets/img/dg.png";
import sd from "../../assets/img/sd.png";
import hacker from "../../assets/img/hacking.png";

function Courses() {
  const courseData = [
    {
      title: "AI Development",
      description: "Master AI Development",
      image: ai,
    },
    {
      title: "Digital marketing",
      description: "Master AI Development",
      image: dg,
    },
    {
      title: "Software Development",
      description: "Master AI Development",
      image: sd,
    },
    {
      title: "Ethical Hacking",
      description: "Master AI Development",
      image: hacker,
    },
  ];
  return (
    <div className="container course-container">
      <div className="course-top">
        <h2 className="Course-title">Our free Courses</h2>
        <p>we are providing trending course for free of cost</p>
        <div className="course-wrapper">
          {courseData.map((course, index) => (
            <div className="course-item" key={index}>
              <span className="course-icon">
                <img src={course.image} alt="" />
              </span>
              <div className="course-content">
                <h4>{course.title}</h4>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
