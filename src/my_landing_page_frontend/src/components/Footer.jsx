import React from 'react';

function Footer() {
  return (

    <footer className="bg-gray-800 text-gray-300 py-12 px-4 w-full">
      { }
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        { }
        <div className="footer-column">
          <h4 className="text-xl font-bold text-white mb-4">ICP Health Data Exchange</h4>
          <p className="text-sm">Revolutionizing healthcare through decentralized, patient-owned data.</p>
        </div>

        { }
        <div className="footer-column">
          <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#solution"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('solution').scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        { }
        <div className="footer-column">
          <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            { }
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      { }
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} ICP Health Data Exchange. All rights reserved.</p>
        <p className="mt-2">Built on the Internet Computer</p>
      </div>
    </footer>
  );
}

export default Footer;
