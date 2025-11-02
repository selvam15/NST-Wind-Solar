import React from 'react';

const VisionIcon = () => (
  <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12C21 12 18.5 16 12 16C5.5 16 3 12 3 12" />
  </svg>
);

const MissionIcon = () => (
  <svg className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" />
  </svg>
);


const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="py-20 bg-white" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300" data-aos="fade-up">
            <div className="flex justify-center mb-4">
              <VisionIcon />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To lead a global transition toward sustainability and renewable innovation, creating a positive impact worldwide.
            </p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="flex justify-center mb-4">
              <MissionIcon />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              Deliver efficient and clean solar and wind energy solutions, driving accessible, high-quality power for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;