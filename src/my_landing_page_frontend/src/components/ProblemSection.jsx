import React from 'react';
import problemImage from '../assests/2.jpg';

function ProblemSection() {
  return (

    <section className="flex flex-col lg:flex-row items-center justify-center py-16 px-4 bg-gray-100 text-gray-800" id="problem" data-aos="fade-up">
      { }
      <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0 lg:pr-8" data-aos="fade-right">
        { }
        <img src={problemImage} alt="Fragmented Health Data" className="max-w-full h-auto rounded-lg shadow-xl" />
      </div>
      { }
      <div className="lg:w-1/2 text-center lg:text-left">
        { }
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Current Health Data Landscape:</h2>
        { }
        <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Fragmented, Insecure, and Disempowering.</h3>
        { }
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
          Today, your valuable health data is scattered across multiple systems, difficult to access, prone to breaches, and largely outside of your control. This fragmentation hinders effective care and slows down life-saving research.
        </p>
      </div>
    </section>
  );
}

export default ProblemSection;
