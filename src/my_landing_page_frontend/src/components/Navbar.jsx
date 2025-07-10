import React, { useState, useEffect } from 'react';
import './Navbar.css';
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

      const headerOffset = document.querySelector('.navbar').clientHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}> { }
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="ICP Health Data Exchange Logo" className="logo-img" />
          <span className="logo-text">Health Exchange</span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a className="nav-links" onClick={() => scrollToSection('home')}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={() => scrollToSection('problem')}>
              The Problem
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={() => scrollToSection('solution')}>
              Our Solution
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={() => scrollToSection('how-it-works')}>
              How It Works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={() => scrollToSection('benefits')}>
              Benefits
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links nav-button" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;