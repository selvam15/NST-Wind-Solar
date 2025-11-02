import React from 'react';

const services = [
  {
    title: 'Solar Power Solutions',
    description: 'Customized solar panel installations for residential, commercial, and industrial use.',
    icon: (
      <div className="animate-pulse-glow">
        <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM12 4V2m0 20v-2m8-10h2m-20 0h2m14.142-5.142l1.414-1.414M4.444 20.556l1.414-1.414m12.728 0l-1.414-1.414M5.858 5.858l-1.414-1.414"></path>
        </svg>
      </div>
    ),
  },
  {
    title: 'Wind Energy Projects',
    description: 'Developing and managing large-scale wind farms to harness the power of wind.',
    icon: (
      <div className="animate-spin-slow">
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12c-4 0-4 4-4 4m4-4c4 0 4 4 4 4m-4-4V5a2 2 0 0 1 4 0v3m-4 4c-4 0-4-4-4-4m4 4c4 0 4-4 4-4m-4-4a2 2 0 0 0-4 0v3m8 1h.01M6 16h.01M18 16h.01M12 21v-2"></path>
        </svg>
      </div>
    ),
  },
  {
    title: 'EPC Services',
    description: 'Full-cycle Engineering, Procurement, and Construction services for seamless project delivery.',
    icon: (
      <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
      </svg>
    ),
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing operational support and maintenance to ensure peak performance and longevity.',
    icon: (
       <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
       </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-green-500">
              <div className="mb-4 h-12 w-12 flex items-center justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;