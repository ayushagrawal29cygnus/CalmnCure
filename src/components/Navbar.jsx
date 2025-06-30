import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpeg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Calm n Cure" />
      </div>
      <ul className="nav-links">
        <li>Physical Care</li>
        <li>Mental Health</li>
        <li>Insomnia Therapy</li>
        <li>Health Plans</li>
        <li>About Us</li>
      </ul>
      <div className="nav-actions">
        <button className="btn">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
