import React from 'react';

const teamMembers = [
  {
    name: 'A Christopher',
    role: 'Director',
    mn: '+91 9087 333 333',
    photo: 'https://img.freepik.com/premium-vector/green-circle-with-white-person-inside-icon_1076610-14570.jpg',
  },
  {
    name: 'Suriyanarayan',
    role: 'Director',
    mn: '+91 9940 403 911',
    photo: 'https://img.freepik.com/premium-vector/green-circle-with-white-person-inside-icon_1076610-14570.jpg',
  },
  {
    name: 'Hardhik',
    role: 'CEO & CFO',
    mn: '+91 9087 650 001',
    photo: 'https://img.freepik.com/premium-vector/green-circle-with-white-person-inside-icon_1076610-14570.jpg',
  },
  {
    name: 'Mansi',
    role: 'CRM Manager',
    mn: '+91 9087 650 009',
    photo: 'https://img.freepik.com/premium-vector/green-circle-with-white-person-inside-icon_1076610-14570.jpg',
  },
];

const TeamMemberIcon = ({ photo }: { photo: string }) => (
  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-lg ring-4 ring-gray-300 group-hover:ring-green-500 transition-all duration-500">
    <img src={photo} alt="Profile" className="w-full h-full object-cover" />
  </div>
);

const PhoneIcon = () => (
  <svg
    className="w-5 h-5 text-green-600 inline-block mr-1"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.41 2.39.81 3.5a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c1.11.4 2.29.68 3.5.81a2 2 0 012 2z"/>
  </svg>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 animate-pulse"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-lg animate-fadeIn">
            Our team of dedicated professionals is the driving force behind our
            success. We combine expertise, passion, and a shared commitment to a
            sustainable future.
          </p>
        </div>
        <div
          className="flex justify-center space-x-12 overflow-x-auto"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500 flex flex-col items-center group transform hover:scale-105 cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <TeamMemberIcon photo={member.photo} />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-green-600 mb-2">{member.role}</p>
              <p className="text-green-600">
                <PhoneIcon />
                {member.mn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;