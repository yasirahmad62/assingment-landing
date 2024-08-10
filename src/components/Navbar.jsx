import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import logo from '../assets/images/sportlogo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Data Insights Logo" />
      </div>
      <ul className="navbar-menu">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <div className="navbar-contact">
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </div>
      </ul>
     
    </nav>
  );
}

export default Navbar;
