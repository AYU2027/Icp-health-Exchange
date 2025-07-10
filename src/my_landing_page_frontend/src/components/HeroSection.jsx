import React from 'react';
import heroImage from '../assests/1.jpg';

function HeroSection() {
  return (
    <section id="home" className="flex flex-col lg:flex-row items-center justify-between py-16 px-4 bg-gray-50 min-h-screen" data-aos="fade-up">
      <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
          Your Health Data, Your Wealth, Your Control.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg mx-auto lg:mx-0">
          A secure, patient-centric health data exchange platform on the Internet Computer Protocol (ICP), enabling individuals to own, share, and monetize their health data with researchers and healthcare providers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <a href="#solution" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
            Discover Our Solution
          </a>
          <a href="#contact" className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300 shadow-lg">
            Join the Network
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
        <img src={heroImage} alt="Secure Health Data Exchange" className="max-w-full h-auto rounded-lg shadow-xl" />
      </div>
    </section>
  );
}

export default HeroSection;