import React from 'react';
import './HowItWorksSection.css'; // Create this CSS file
import howItWorksImage from '../assests/3.jpg'; // Make sure this path is correct

function HowItWorksSection() {
  return (
    <section className="how-it-works-section" id="how-it-works" data-aos="fade-up">
      <h2>A Glimpse into the Future of Health Data.</h2>
      <div className="flow-container">
        <div className="flow-step" data-aos="fade-right" data-aos-delay="100">
          <h4>1. Data Ingestion</h4>
          <p>Securely upload health records from various sources: wearables, clinics, personal input.</p>
        </div>
        <div className="flow-arrow" data-aos="zoom-in" data-aos-delay="200">→</div>
        <div className="flow-step" data-aos="fade-right" data-aos-delay="300">
          <h4>2. Encrypted ICP Storage</h4>
          <p>Your data is encrypted client-side and stored immutably on ICP blockchain canisters.</p>
        </div>
        <div className="flow-arrow" data-aos="zoom-in" data-aos-delay="400">→</div>
        <div className="flow-step" data-aos="fade-right" data-aos-delay="500">
          <h4>3. Granular Consent</h4>
          <p>You manage permissions, deciding precisely who can access what specific data points.</p>
        </div>
        <div className="flow-arrow" data-aos="zoom-in" data-aos-delay="600">→</div>
        <div className="flow-step" data-aos="fade-right" data-aos-delay="700">
          <h4>4. Secure Access & Research</h4>
          <p>Authorized researchers and providers access data under your defined consent, accelerating insights.</p>
        </div>
      </div>
      <div className="how-it-works-image" data-aos="fade-up">
        <img src={howItWorksImage} alt="Health Data Flow" />
      </div>
    </section>
  );
}

export default HowItWorksSection;