import React from "react";
import vb from "../../assets/img/vb.jpg";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="container">
      <div className="about-us-container">
        <div className="team-members">
          <h2>Our Team</h2>
          <div className="member-card">
            <img src={vb} alt="" className="member-image" />
            <h3 className="member-name">Vyshnav V B</h3>
            <p className="member-role">Founter</p>
          </div>
        </div>
        <div className="about-us-description">
          <h1 className="about-us-heading">Our Team</h1>
          <p>
            With a passion for empowering learners of all ages, our mission is
            to make education accessible, engaging, and personalized through our
            cutting-edge educational technology platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
