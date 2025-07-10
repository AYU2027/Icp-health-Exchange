// src/my_landing_page_frontend/src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Make sure this CSS exists and is styled
import heroImage from '../assests/1.jpg'; // Placeholder image

function HeroSection() {
  return (
    <section id="home" className="hero-section" data-aos="fade-up">
      <div className="hero-content">
        <h1>Your Health Data, Your Wealth, Your Control.</h1>
        <p>A secure, patient-centric health data exchange platform on the Internet Computer Protocol (ICP), enabling individuals to own, share, and monetize their health data with researchers and healthcare providers.</p>
        <div className="hero-buttons">
          <a href="#solution" className="cta-button">Discover Our Solution</a>
          <a href="#contact" className="cta-button secondary">Join the Network</a>
        </div>
      </div>
      <div className="hero-image" data-aos="fade-left">
        <img src={heroImage} alt="Secure Health Data Exchange" />
      </div>
    </section>
  );
}

export default HeroSection;