import React from 'react';
import './BenefitsSection.css'; // Create this CSS file
import benefitsImage from '../assests/hero-image.png'; // Make sure this path is correct

function BenefitsSection() {
  return (
    <section className="benefits-section" id="benefits" data-aos="fade-up">
      <h2>The Transformative Benefits</h2>
      <div className="benefits-grid">
        <div className="benefit-card" data-aos="flip-left" data-aos-delay="100">
          <h3>For Patients</h3>
          <ul>
            <li>Complete data ownership & privacy</li>
            <li>Potential for data monetization</li>
            <li>Improved continuity of care</li>
            <li>Peace of mind with secure storage</li>
          </ul>
        </div>
        <div className="benefit-card" data-aos="flip-left" data-aos-delay="300">
          <h3>For Researchers</h3>
          <ul>
            <li>Access to high-quality, consented datasets</li>
            <li>Faster, more impactful discoveries</li>
            <li>Reduced ethical and compliance hurdles</li>
            <li>Diverse and global data pools</li>
          </ul>
        </div>
        <div className="benefit-card" data-aos="flip-left" data-aos-delay="500">
          <h3>For Healthcare Providers</h3>
          <ul>
            <li>Streamlined, consent-driven data access</li>
            <li>Enhanced diagnostic capabilities</li>
            <li>Better patient outcomes through shared insights</li>
            <li>Reduced administrative burden</li>
          </ul>
        </div>
      </div>
      <div className="benefits-image" data-aos="fade-up">
        <img src={benefitsImage} alt="Benefits Illustration" />
      </div>
    </section>
  );
}

export default BenefitsSection;