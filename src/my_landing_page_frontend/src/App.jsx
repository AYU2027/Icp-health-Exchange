// src/my_landing_page_frontend/src/App.jsx

import React, { useEffect } from 'react'; // Removed useCallback as it's no longer needed for particles
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

// REMOVE these tsParticles imports:
// import Particles from '@tsparticles/react';
// import { loadSlim } from '@tsparticles/slim';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
    // The particlesInit and particlesLoaded callbacks are also removed as they are no longer needed
  }, []);

  return (
    <div className="App">
      {/* REMOVE the entire <Particles> component block here */}
      {/*
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // ... your tsParticles config ...
        }}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      */}
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