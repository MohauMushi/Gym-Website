import React from "react";
import AboutImage from "../../assets/gym-lady.jpg";
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
            <p>
              Hi there! I'm a dedicated personal trainer and fitness expert,
              passionate about helping individuals achieve their fitness goals
              and lead healthier lives. With a strong background in fitness
              training and a commitment to personalized workout plans, expert
              guidance, and diet chart assistance, I strive to provide an
              engaging and user-friendly fitness experience for my clients.
            </p>
            <p>
              I am dedicated to providing high-performance training and guidance
              to individuals seeking to improve their fitness levels and overall
              well-being. With a focus on personalized workouts, expert
              nutritional guidance, and dedicated trainer support, I am
              committed to helping my clients achieve their fitness goals.
            </p>
            <p>
              Feel free to reach out to me for personalized fitness programs and
              expert guidance on your fitness journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
