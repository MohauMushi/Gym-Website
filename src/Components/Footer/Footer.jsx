import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          GymFlex
        </div>
        {/* <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div> */}
        <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebookF /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.youtube.com"><FaYoutube /></a>
          <a href="mailto:info@gymflex.com"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
