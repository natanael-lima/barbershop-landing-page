import React from 'react'
// Sample data for team members
const teamMembers = [
    {
      name: 'John Doe',
      image: 'https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727395200&semt=ais_hybrid',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Dany Smith',
      image: 'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=',
      description: 'Pellentesque habitant morbi tristique senectus et netus.',
    },
    {
      name: 'Emily Johnson',
      image: 'https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg',
      description: 'Nullam vel magna nec nisi sagittis sagittis a non nunc.',
    },
    {
      name: 'Emily Johnson',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s',
      description: 'Nullam vel magna nec nisi sagittis sagittis a non nunc.',
    },
  ];
export default function Team() {
  return (
    <section className="w-full py-10">
      <h2 className="text-4xl font-bold text-center mb-8">OUR TEAM</h2>
      <div className='w-full'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative rounded-full overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-64 object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-stone-800 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="text-white text-center px-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="mt-2">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  

  )
}
