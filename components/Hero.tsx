import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0"></div>
      <img src="https://img.freepik.com/premium-photo/green-energy-sustainable-future-esg-concept-environmental-generative-ai_825385-82.jpg" alt="Solar panels and wind turbines in a beautiful landscape" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 text-center p-4">
        <div data-aos="fade-up">
           <svg className="h-28 w-28 mx-auto text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8.5 8.5C9.9 7 14.1 7 15.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8.5 15.5C9.9 17 14.1 17 15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold my-4 text-shadow-lg" data-aos="fade-up" data-aos-delay="200">
          NST Global Solar and Wind Energy Pvt Ltd
        </h1>
        <p className="text-xl md:text-2xl font-light text-shadow-md" data-aos="fade-up" data-aos-delay="400">
          Empowering a Sustainable Tomorrow.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;