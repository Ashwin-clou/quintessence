import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Careers from './Careers';
import logo from "./images/logo.jpg";
import "./App.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="QUINTESSENCE SEARCH LABS" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
            <li><NavLink to="/Contact">Contact us</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};





const Hamburger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24">
    <g transform="translate(-294 -47)">
      <rect width="42" height="4" rx="2" transform="translate(304 47)" fill="#574c4c" />
      <rect width="42" height="4" rx="2" transform="translate(304 67)" fill="#574c4c" />
      <rect width="52" height="4" rx="2" transform="translate(294 57)" fill="#574c4c" />
    </g>
  </svg>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
