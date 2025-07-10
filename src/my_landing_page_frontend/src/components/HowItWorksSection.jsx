import React from 'react';
import howItWorksImage from '../assests/3.jpg';

function HowItWorksSection() {
  return (
    <>
      { }
      <section id="how-it-works" data-aos="fade-up" className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">A Glimpse into the Future of Health Data.</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 px-4 max-w-7xl mx-auto">
          { }
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-white p-6 rounded-xl shadow-lg border border-transparent hover:border-blue-400 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer" data-aos="fade-right" data-aos-delay="100">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">1. Data Ingestion</h4>
            <p className="text-gray-700">Securely upload health records from various sources: wearables, clinics, personal input.</p>
          </div>
          { }
          <div className="text-4xl text-gray-400 hidden md:block" data-aos="zoom-in" data-aos-delay="200">→</div>
          { }
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-white p-6 rounded-xl shadow-lg border border-transparent hover:border-blue-400 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer" data-aos="fade-right" data-aos-delay="300">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">2. Encrypted ICP Storage</h4>
            <p className="text-gray-700">Your data is encrypted client-side and stored immutably on ICP blockchain canisters.</p>
          </div>
          { }
          <div className="text-4xl text-gray-400 hidden md:block" data-aos="zoom-in" data-aos-delay="400">→</div>
          { }
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-white p-6 rounded-xl shadow-lg border border-transparent hover:border-blue-400 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer" data-aos="fade-right" data-aos-delay="500">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">3. Granular Consent</h4>
            <p className="text-gray-700">You manage permissions, deciding precisely who can access what specific data points.</p>
          </div>
          { }
          <div className="text-4xl text-gray-400 hidden md:block" data-aos="zoom-in" data-aos-delay="600">→</div>
          { }
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-white p-6 rounded-xl shadow-lg border border-transparent hover:border-blue-400 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer" data-aos="fade-right" data-aos-delay="700">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">4. Secure Access & Research</h4>
            <p className="text-gray-700">Authorized researchers and providers access data under your defined consent, accelerating insights.</p>
          </div>
        </div>
      </section>

      { }
      <section className="py-16 bg-blue-50 flex justify-center items-center px-4">
        <div className="max-w-4xl w-full" data-aos="fade-up">
          <img
            src={howItWorksImage}
            alt="Health Data Flow"
            className="w-full h-auto rounded-lg shadow-2xl border-4 border-blue-300"
          />
        </div>
      </section>
    </>
  );
}

export default HowItWorksSection;
