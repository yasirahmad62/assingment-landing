import React from 'react';
import './css/Footer.css';
import { FaLinkedin, FaXing, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>©2024 Ahmad Yasir. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/information-security">Information Security</a>
          <a href="/accessibility">Accessibility</a>
        </div>
        <div className="footer-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.xing.com" target="_blank" rel="noopener noreferrer"><FaXing /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
