import React from 'react';
import "./Services.css";

const servicesData = [
  {
    title: "One-on-One Personal Training",
    description: "Get personalized attention and customized workouts tailored to your specific goals and needs.",
    image: "../../assets/one-on-one.jpg"
  },
  {
    title: "Small Group Training",
    description: "Enjoy the benefits of personal training in a motivating group setting with like-minded individuals.",
    image: "../../assets/Small-Group-Training.jpg"
  },
  {
    title: "Online Coaching",
    description: "Receive expert guidance and support from anywhere, with flexible programs that fit your schedule.",
    image: "../../assets/Online-Coaching.jpg"
  },
  {
    title: "Specialized Programs",
    description: "Target specific goals with our specialized programs, including weight loss, muscle gain, and sports performance.",
    image: "../../assets/Specialized-Programs.jpg"
  },
  {
    title: "Corporate Wellness Programs",
    description: "Boost employee health and productivity with our tailored corporate wellness solutions.",
    image: "../../assets/Corporate-Wellness-Programs.jpg"
  },
  {
    title: "Fitness Workshops and Seminars",
    description: "Expand your knowledge and skills with our educational workshops and seminars on various fitness topics.",
    image: "../../assets/Fitness-Workshops-and-Seminars.jpg"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h1>Services</h1>
      <p className="services-description">Discover the wide range of services i offer to help you achieve your fitness goals.</p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            {/* <button className="learn-more-btn">Learn More</button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;