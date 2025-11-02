import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';
import Footer from './components/Footer';

// @ts-ignore
import AOS from 'aos';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-['Poppins']">
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Projects />
        <Team />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;