

import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';


import 'aos/dist/aos.css';
import AOS from 'aos';





function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

  }, []);

  return (
    <div className="App">
      { }
      { }
      <Navbar />
      <div className="App-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default App;