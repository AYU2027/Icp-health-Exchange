import React from 'react';
import './CallToAction.css'; // Create this CSS file

function CallToAction() {
  return (
    <section className="cta-section" data-aos="fade-up">
      <h2>Be a Part of the Health Data Revolution!</h2>
      <p>Join our mission to empower patients and accelerate medical breakthroughs.</p>
      <div className="cta-buttons">
        <button className="cta-button primary">Join Our Waitlist</button>
        <button className="cta-button">Read the Whitepaper</button>
      </div>
    </section>
  );
}

export default CallToAction;