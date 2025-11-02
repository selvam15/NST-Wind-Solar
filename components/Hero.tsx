import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0"></div>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiisKpkaYhSno8Hen-_06JIRSd-a6L8QuKKIEEryQFvxQL_VGNuzxQo8ZAJUX0Nt-PYpNRHlLkeh22VjHwYHUr2OxFkD1M8u1Yc70kPyFNcDa6sZFb0HhB4V7uwgabxQWLliRpHN2za3FCivcE87K-KZKDA73qDHArdywD88UXj1CtGQ1pRdeuSD_O6uvvb/s1280/Group%20121.png" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 text-center p-4">
        <div data-aos="fade-up">
</div>
<br></br>
        <h1 className="text-4xl md:text-6xl font-extrabold my-4 text-shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <br></br><br></br>
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