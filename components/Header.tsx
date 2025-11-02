import React, { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Vision & Mission', href: '#vision-mission' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Contact', href: '#contact' },
];

const AnimatedLogo = () => (
  <svg className="h-12 w-12 text-green-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C72.0914 10 90 27.9086 90 50C90 72.0914 72.0914 90 50 90C27.9086 90 10 72.0914 10 50C10 27.9086 27.9086 10 50 10Z" stroke="currentColor" strokeWidth="8"/>
    <g className="animate-spin-slow" style={{ transformOrigin: '50% 50%' }}>
      <path d="M50 25V75" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
      <path d="M25 50H75" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    </g>
    <circle cx="50" cy="50" r="8" fill="currentColor"/>
    <path d="M75 25C80 30 80 40 75 45" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    <path d="M25 75C20 70 20 60 25 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
  </svg>
)

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <AnimatedLogo />
              <span className="font-bold text-xl text-gray-800 hidden sm:block">NST Global</span>
            </a>
          </div>
          <nav className="hidden lg:flex lg:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium relative group">
                {link.name}
                 <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            ))}
          </nav>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-green-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;