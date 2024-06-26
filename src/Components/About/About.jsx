import React from "react";
import AboutImage from "../../assets/Image.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1>About Us</h1>
        <div className="about-container">
          <div className="image-container">
            <img src={AboutImage} alt="About Me" className="about-image" />
          </div>
          <div className="text-container">
            <p>Learn more about our gym, our mission, and our values.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
