import React from "react";
import "./Header.css";
import logo from "../../assets/img/download.png";
import { Link } from "react-router-dom";

function Header() {
  const nav_title = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/courses",
      display: "Courses",
    },
    {
      path: "/aboutUs",
      display: "About Us",
    },
  ];
  return (
    <header className="header">
      <div className="container">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-img">
              <img src={logo} alt="img" />
            </div>
            <h2 className="title-vb">VB Educations</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav_title.map((item) => (
                <li className="nav-item">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
