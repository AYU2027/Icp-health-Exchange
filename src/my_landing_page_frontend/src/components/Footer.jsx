import React from 'react';
import './Footer.css'; // Create this CSS file

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>ICP Health Data Exchange</h4>
          <p>Revolutionizing healthcare through decentralized, patient-owned data.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</a></li>
            <li><a href="#" onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })}>Features</a></li>
            <li><a href="#" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>How it Works</a></li>
            <li><a href="#" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ICP Health Data Exchange. All rights reserved.</p>
        <p>Built on the Internet Computer</p>
      </div>
    </footer>
  );
}

export default Footer; // <--- ADD THIS LINE