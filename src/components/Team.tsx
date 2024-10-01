import React from 'react'
// Sample data for team members
const teamMembers = [
    {
      name: 'John Doe',
      image: 'https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Jane Smith',
      image: 'https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg',
      description: 'Pellentesque habitant morbi tristique senectus et netus.',
    },
    {
      name: 'Emily Johnson',
      image: 'https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg',
      description: 'Nullam vel magna nec nisi sagittis sagittis a non nunc.',
    },
  ];
export default function Team() {
  return (
    <section className="py-10 ">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover opacity-75 transition-opacity duration-300 hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="text-white text-center px-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mt-2">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
