import React from 'react';

function CallToAction() {
  return (

    <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-4 text-center rounded-lg shadow-xl mx-auto max-w-4xl my-16" data-aos="fade-up">
      { }
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        Be a Part of the Health Data Revolution!
      </h2>
      { }
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Join our mission to empower patients and accelerate medical breakthroughs.
      </p>
      { }
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        { }
        <button className="bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition duration-300 shadow-md">
          Join Our Waitlist
        </button>
        { }
        <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-700 hover:scale-105 transition duration-300 shadow-md">
          Read the Whitepaper
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
