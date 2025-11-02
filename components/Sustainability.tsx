import React from 'react';

const stats = [
    { value: '1M+', label: 'Tons of CO₂ Reduced', icon: <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> },
    { value: '200k+', label: 'Households Powered', icon: <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
    { value: '99.8%', label: 'Energy Uptime', icon: <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> }
];

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Commitment to Sustainability</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex items-center space-x-4 border-l-4 border-green-500" data-aos="fade-right" data-aos-delay={index * 150}>
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">{stat.icon}</div>
              <div>
                <p className="text-3xl font-bold text-green-600">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <p className="text-gray-600 text-lg mb-8">
                We actively engage in community outreach and educational programs to promote renewable energy adoption. Our collaborations with local communities and environmental organizations are at the heart of our mission.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-6 italic">
              <p className="text-xl font-semibold text-gray-700">
                  "We are committed to a cleaner, greener tomorrow—one project at a time."
              </p>
            </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;