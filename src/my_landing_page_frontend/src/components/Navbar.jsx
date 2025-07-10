import React, { useState, useEffect } from 'react';
import logo from '../assests/reshot-icon-flickr-PTXY7M2H6V.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the height of the navbar dynamically
      const headerOffset = document.querySelector('.fixed-navbar')?.clientHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  return (
    // Main Navbar container: fixed position, full width, padding, background, shadow, transition
    <nav className={`fixed top-0 w-full px-4 py-4 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Text */}
        <a href="#home" className="flex items-center space-x-2" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="ICP Health Data Exchange Logo" className="h-10 w-auto rounded-full" />
          <span className="text-xl font-bold text-gray-800">Health Exchange</span>
        </a>

        {/* Mobile Menu Icon (Hamburger/Close) */}
        <div className="lg:hidden text-gray-800 text-2xl cursor-pointer" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        {/* Navigation Menu */}
        <ul className={`lg:flex lg:items-center lg:space-x-8 ${isOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-md py-4 transition-all duration-300' : 'hidden'} lg:static lg:w-auto lg:shadow-none lg:py-0`}>
          <li className="nav-item lg:my-0 my-2 text-center">
            <a className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg font-medium block px-4 py-2" onClick={() => scrollToSection('home')}>
              Home
            </a>
          </li>
          <li className="nav-item lg:my-0 my-2 text-center">
            <a className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg font-medium block px-4 py-2" onClick={() => scrollToSection('problem')}>
              The Problem
            </a>
          </li>
          <li className="nav-item lg:my-0 my-2 text-center">
            <a className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg font-medium block px-4 py-2" onClick={() => scrollToSection('solution')}>
              Our Solution
            </a>
          </li>
          <li className="nav-item lg:my-0 my-2 text-center">
            <a className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg font-medium block px-4 py-2" onClick={() => scrollToSection('how-it-works')}>
              How It Works
            </a>
          </li>
          <li className="nav-item lg:my-0 my-2 text-center">
            <a className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg font-medium block px-4 py-2" onClick={() => scrollToSection('benefits')}>
              Benefits
            </a>
          </li>
          <li className="nav-item lg:my-0 my-2 text-center">
            <a className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-medium block mx-auto lg:mx-0 w-max" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
