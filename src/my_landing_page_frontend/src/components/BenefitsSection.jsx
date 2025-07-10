import React from 'react';
import benefitsImage from '../assests/hero-image.png';

function BenefitsSection() {
  return (

    <section className="py-16 px-4 bg-white text-gray-800" id="benefits" data-aos="fade-up">
      { }
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-600 mb-12">The Transformative Benefits</h2>

      { }
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        { }
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300" data-aos="flip-left" data-aos-delay="100">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">For Patients</h3>
          <ul className="list-none p-0 space-y-2 text-gray-700">
            <li><span className="mr-2 text-green-500">&#10003;</span>Complete data ownership & privacy</li>
            <li><span className="mr-2 text-green-500">&#10003;</span>Potential for data monetization</li>
            <li><span className="mr-2 text-green-500">&#10003;</span>Improved continuity of care</li>
            <li><span className="mr-2 text-green-500">&#10003;</span>Peace of mind with secure storage</li>
          </ul>
        </div>

        { }
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300" data-aos="flip-left" data-aos-delay="300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">For Researchers</h3>
          <ul className="list-none p-0 space-y-2 text-gray-700">
            <li><span className="mr-2 text-green-500">&#10003;</span>Access to high-quality, consented datasets</li>
            <li><span className="mr-2 text-green-500">&#10003;</span>Faster, more impactful discoveries</li>
            <li><span className="mr-2 text-green-500">&#10003;</span>Reduced ethical and compliance hurdles</li>
            <li><span className="mr-2 text-green-500">&#10003;</span>Diverse and global data pools</li>
          </ul>
        </div>

        { }
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300" data-aos="flip-left" data-aos-delay="500">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">For Healthcare Providers</h3>
          <ul className="list-none p-0 space-y-2 text-gray-700">
            <li><span className="mr-2 text-green-500">&#10003;</span>Streamlined, consent-driven data access</li>
            <li><span className="mr-2 text-green-500">&#10003;</span>Enhanced diagnostic capabilities</li>
            <li><span className="mr-2 text-green-500">&#10003;</span>Better patient outcomes through shared insights</li>
            <li><span className="mr-2 text-green-500">&#10003;</span>Reduced administrative burden</li>
          </ul>
        </div>
      </div>

      { }
      <div className="mt-16 flex justify-center" data-aos="fade-up">
        { }
        <img src={benefitsImage} alt="Benefits Illustration" className="max-w-full h-auto rounded-lg shadow-xl" />
      </div>
    </section>
  );
}

export default BenefitsSection;
