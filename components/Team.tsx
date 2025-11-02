import React from 'react';

const teamMembers = [
  { name: 'A Christopher', role: 'Director' },
  { name: 'Suriyanarayan', role: 'Director' },
];

const TeamMemberIcon = () => (
    <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center mb-4 ring-4 ring-gray-300 group-hover:ring-green-500 transition-all duration-300">
        <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
    </div>
)

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Team</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-lg">
            Our team of dedicated professionals is the driving force behind our success. We combine expertise, passion, and a shared commitment to a sustainable future.
          </p>
        </div>
        <div className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center group" data-aos="fade-up" data-aos-delay={index * 150}>
              <TeamMemberIcon />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-green-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;