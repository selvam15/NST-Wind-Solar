import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-500 mt-2">Pioneering a Greener Future</p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-gray-600 text-lg space-y-6" data-aos="fade-right">
            <p>
              NST Global is a premier company specializing in high-efficiency solar and wind energy solutions. We are driven by a passion for renewable technology and a commitment to creating a cleaner planet for future generations.
            </p>
            <p className="font-semibold text-green-700 bg-green-100 p-4 rounded-md border-l-4 border-green-500">
              With over 2 years of experience in delivering renewable solutions, we have established ourselves as a trusted partner in the energy sector.
            </p>
            <p>
              Founded on the principles of innovation and integrity, NST Global has grown by building lasting relationships with our clients, consistently delivering projects on time and to the highest standards of quality.
            </p>
             <p className="italic text-xl border-l-4 border-green-500 pl-4 text-gray-700">
                "Advancing the shift towards clean energy for future generations."
             </p>
          </div>
          <div className="relative order-first lg:order-last" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop" alt="Team discussing renewable energy solutions" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;