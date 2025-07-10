import React from 'react';
import './ProblemSection.css'; // Create this CSS file
import problemImage from '../assests/2.jpg'; // Make sure this path is correct

function ProblemSection() {
  return (
    <section className="problem-section" id="problem" data-aos="fade-up">
      <div className="problem-image" data-aos="fade-right">
        <img src={problemImage} alt="Fragmented Health Data" />
      </div>
      <div className="problem-content">
        <h2>The Current Health Data Landscape:</h2>
        <h3>Fragmented, Insecure, and Disempowering.</h3>
        <p>Today, your valuable health data is scattered across multiple systems, difficult to access, prone to breaches, and largely outside of your control. This fragmentation hinders effective care and slows down life-saving research.</p>
      </div>
    </section>
  );
}

export default ProblemSection;