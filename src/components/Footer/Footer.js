import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="footer-img">
                <img src={footer} alt="" />
              </div>
              <h2>VB Educations</h2>
            </div>
            <p>
              VB education is a professional who provides suggestions and
              feedback to education professionals, students and their parents.
            </p>
          </div>
          <div className="footer-box">
            <div className="footer-title">
              <h4>Company</h4>
              <ui className="footer-links">
                <li>
                  <a href="">Our progress</a>
                </li>
                <li>
                  <a href="">Our program</a>
                </li>
                <li>
                  <a href="">become a member</a>
                </li>
              </ui>
            </div>
          </div>

          <div className="footer-box">
            <div className="footer-title">
              <h4>Quick Links</h4>
              <ui className="footer-links">
                <li>
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/terms">Terms and conditions</Link>
                </li>
              </ui>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
