import React from "react";
import "./Plans.css"

function Plans() {
  const planData = [
    {
      title: "Regular Member",
      price: "1000rs",
      duration: "/month",
      color: "#fff",
      features: [
        "unlimited access to courses",
        "customer support",
        "personal mentor",
        "standard options",
        "5 classes per week",
      ],
    },
    {
      title: "Premium Member",
      price: "2000rs",
      duration: "/month",
      color: "#6793AC",
      features: [
        "unlimited access to courses",
        "customer support",
        "personal mentor",
        "standard options",
        "10 classes per week",
      ],
    },
    {
      title: "Exclusive Member",
      price: "300rs",
      duration: "/month",
      color: "#fff",
      features: [
        "unlimited access to courses",
        "customer support",
        "personal mentor",
        "standard options",
        "15 classes per week",
      ],
    },
  ];
  return (
    <div className="container">
      <div className="pricing-top">
        <h2 className="section-title">Premium Pricing Plan</h2>
        <p>
          Unlock elite tech services with our Premium Pricing Plan and soar
          ahead of the competition
        </p>
      </div>
      <div className="pricing-wrapper">
        {planData.map((data, index) => (
          <div className="pricing-item" key={index}>
            <div
              className="pricing-card-top"
              style={{ background: data.color }}
            >
              <h2 className="section-title">{data.title}</h2>
              <h2 className="pricing-section-title">
                {data.price} <span>{data.duration}</span>
              </h2>
            </div>
            <div className="services">
              <ul >
                {data.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button className="register-btn">Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
