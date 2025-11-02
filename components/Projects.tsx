import React from 'react';

const projects = [
  {
    location: 'Coastal Region',
    type: 'Wind Farm',
    capacity: '150 MW',
    achievement: 'Powers over 50,000 homes with clean wind energy.',
    imageUrl: 'https://www.apexcleanenergy.com/wp-content/uploads/2021/09/bg-home-2.jpg'
  },
  {
    location: 'Industrial Park',
    type: 'Solar EPC',
    capacity: '50 MW',
    achievement: 'Reduced carbon footprint for the entire industrial zone by 30%.',
    imageUrl: 'https://www.kobelcokaken.co.jp/img/carbon_neutral/intro.png'
  },
  {
    location: 'Urban Rooftops',
    type: 'Solar',
    capacity: '10 MW',
    achievement: 'A successful urban solar initiative delivering sustainable power to city businesses.',
    imageUrl: 'https://img.freepik.com/premium-photo/sustainable-cityscape-with-solar-panels-green-roofs_818261-30933.jpg'
  },
];

const LocationIcon = () => <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const CapacityIcon = () => <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Projects</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group" data-aos="zoom-in-up" data-aos-delay={index * 100}>
              <div className="relative h-64">
                <img src={project.imageUrl} alt={project.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                 <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white ">{project.type} Project</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-4">
                    <p className="flex items-center text-gray-600"><LocationIcon/> {project.location}</p>
                    <p className="flex items-center text-gray-600"><CapacityIcon/> {project.capacity}</p>
                </div>
                <p className="text-green-700 italic bg-green-50 p-3 rounded-md">"{project.achievement}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;