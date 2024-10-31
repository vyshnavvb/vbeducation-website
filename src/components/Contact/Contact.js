import React, { useState } from "react";
import "./Contact.css"

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="contact-body">
      <h2 className="c-heading">Contact Us</h2>
      <form className="cform" onSubmit={handleSubmit}>
        <div className="cdiv">
          <label className="clabel">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="clabel">
          <label className="clabel">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button  type="submit" className="cbutton">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
