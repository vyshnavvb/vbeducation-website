import React from "react";
import "./Community.css";
import tc from "../../assets/img/tc.png"

function Community() {
    const handleSubmit=()=>{
        window.open('https://web.whatsapp.com/','_blank')
    }
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={tc} alt="" />
        </div>
        <div className="start-content">
          <h2 className="section-title">Join our free Tech Community</h2>
          <p>
            Tech communities are groups of professionals with a common interest
            in technology and a shared passion for staying up-to-date with the
            latest industry news, trends, and developments
          </p>
          <buttton className="register-btn"onClick={handleSubmit} >Join Now</buttton>
        </div>
      </div>
    </div>
  );
}

export default Community;
