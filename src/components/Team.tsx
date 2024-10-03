import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
// Sample data for team members
const teamMembers = [
  {
    name: 'John Doe',
    image: 'https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727395200&semt=ais_hybrid',
    description: 'Barber',
    social1: 'https://www.facebook.com/johndoe',  // Enlace a Facebook
    social2: 'https://www.twitter.com/johndoe',   // Enlace a Twitter
    extraInfo: 'John is an experienced barber with over 10 years in the industry.'  // Información adicional
  },
  {
    name: 'Dany Smith',
    image: 'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=',
    description: 'Master Barber',
    social1: 'https://www.facebook.com/danysmith',  // Enlace a Facebook
    social2: 'https://www.twitter.com/danysmith',   // Enlace a Twitter
    extraInfo: 'Dany is a master barber specializing in modern and classic cuts.'  // Información adicional
  },
  {
    name: 'Emily Johnson',
    image: 'https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg',
    description: 'Pintor',
    social1: 'https://www.facebook.com/emilyjohnson',  // Enlace a Facebook
    social2: 'https://www.twitter.com/emilyjohnson',   // Enlace a Twitter
    extraInfo: 'Emily is a talented painter with a passion for artistic expression.'  // Información adicional
  },
  {
    name: 'Emily Johnson',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s',
    description: 'Cutter',
    social1: 'https://www.facebook.com/emilyjohnson',  // Enlace a Facebook
    social2: 'https://www.twitter.com/emilyjohnson',   // Enlace a Twitter
    extraInfo: 'Emily is an expert cutter with a focus on precision and detail.'  // Información adicional
  }
];

export default function Team() {
  return (
    <section className="w-full py-10">
      <h2 className="text-4xl font-bold text-center mb-8">OUR TEAM</h2>
      <div className='w-full'>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden w-44 "
            >
              {/* Imagen del miembro */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
              />

              {/* Íconos de redes sociales en la parte inferior centrados sobre la imagen */}
              <div className="absolute top-0 left-0 w-full flex justify-center space-x-3 p-2">
                <a href={member.social1} target="_blank" rel="noopener noreferrer" className="bg-stone-200 hover:bg-stone-300 p-1 rounded-md text-stone-700  transition-colors">
                  {/* Icono de Facebook */}
                  <i>
                    <FaFacebookF size={16} />
                  </i>
                </a>
                <a href={member.social2} target="_blank" rel="noopener noreferrer" className="bg-stone-200 hover:bg-stone-300 p-1 rounded-md text-stone-700  transition-colors">
                  {/* Icono de Instagram */}
                  <i>
                    <FaInstagram size={16} />
                  </i>
                </a>
              </div>

              {/* Nombre y descripción debajo de la imagen y centrado */}
              <div className="mt-1 text-center">
                <h3 className="text-stone-500 text-sm font-semibold">{member.name}</h3>
                <p className="text-xs text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

  

  )
}
