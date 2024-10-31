import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";
import Plans from "../components/Plans/Plans";
import Courses from "../components/Courses/Courses";
import Header from "../components/Header/Header";
import AboutUs from "../components/AboutUs/AboutUs";

function PageRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vb-education-react-website" element={<Home />} />
        <Route path="/services" element={<Plans />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default PageRoutes;
