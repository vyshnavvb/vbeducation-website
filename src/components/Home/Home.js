import React from "react";
import "./Home.css";
import meta from "../../assets/img/meta.jpeg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Courses from "../Courses/Courses";
import Community from "../Community/Community"
import Plans from "../Plans/Plans";

function Home() {
  const handleClick = () => {
    window.open(
      "https://www.youtube.com/watch?v=AcKEdVNGibA&list=PLfr2dcuyA2s1pkIq1jLOUl9aJC4P0bxt5&index=14",
      "_blank"
    );
  };
  return (
    <>
      <div className="container">
        <div className="home-container">
          <div className="home-content">
            <h2 className="section-title">Learn everything for free!!</h2>
            <p>
              Education is the passport to the future, for tomorrow belongs to
              those who prepare for it today.
            </p>

            <div className="home-btns">
              <button className="register-btn" onClick={handleClick}>
                Get Started
              </button>
              <button className="register-btn" onClick={handleClick}>
                Watch now
              </button>
            </div>
          </div>
          <div className="home-img"></div>
          <div className="home-img-wrapper">
            <div className="box-1">
              <div className="box-img">
                <img src={meta} alt="" />
              </div>
            </div>
            <div className="whatsapp-container">
              <h5>500+ students</h5>
              <AiOutlineWhatsApp color="green" />
            </div>
            <div className="support">
              <h5>active support</h5>
            </div>
          </div>
        </div>
      </div>
      <Courses/>
      <Community/>
      <Plans/>
    </>
  );
}

export default Home;
