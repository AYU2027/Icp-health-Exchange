import React from 'react';
import './SolutionSection.css';
import solutionImage from '../assests/Salesforce-Healthcare-Apps.jpg';

function SolutionSection() {
  return (
    <section className="solution-section" id="solution" data-aos="fade-up">
      <h2>Introducing the ICP Integrated Health Data Exchange:</h2>
      <h3>Decentralized, Secure, Patient-Owned.</h3>
      <div className="solution-grid">
        <div className="solution-item" data-aos="zoom-in" data-aos-delay="100">
          <h4>Patient Centricity</h4>
          <p>You truly own and control your health data, making informed decisions about its use.</p>
        </div>
        <div className="solution-item" data-aos="zoom-in" data-aos-delay="200">
          <h4>Decentralized Security</h4>
          <p>Leveraging the Internet Computer's blockchain for unparalleled data integrity and resilience.</p>
        </div>
        <div className="solution-item" data-aos="zoom-in" data-aos-delay="300">
          <h4>Secure & Granular Sharing</h4>
          <p>Easily grant and revoke access to specific data points for researchers or providers.</p>
        </div>
        <div className="solution-item" data-aos="zoom-in" data-aos-delay="400">
          <h4>Data Monetization</h4>
          <p>Optionally monetize your anonymized data with explicit consent for research purposes.</p>
        </div>
        <div className="solution-item" data-aos="zoom-in" data-aos-delay="500">
          <h4>Accelerated Research</h4>
          <p>Provide researchers with access to diverse, high-quality, consented datasets.</p>
        </div>
      </div>
      <div className="solution-image" data-aos="fade-up">
        <img src={solutionImage} alt="Decentralized Solution" />
      </div>
    </section>
  );
}

export default SolutionSection;