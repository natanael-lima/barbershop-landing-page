/*"use client"

import React, { useState } from 'react'
import { FaClock, FaCalendar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const services = [
  { id: 1,image:"https://img.freepik.com/premium-photo/black-man-hairdresser-barber-transparent-white-isolate-white-background-white-background-hd-pho_873925-713926.jpg", name: 'Haircut', price: '$30', description: 'Professional haircut for all styles' },
  { id: 2,image:"https://haircutday.com/b/wp-content/uploads/2024/01/Diseno-sin-titulo32-300x300.png", name: 'Beard Trim', price: '$20', description: 'Shape and style your beard' },
  { id: 3,image:"https://haircutday.com/b/wp-content/uploads/2024/01/Diseno-sin-titulo32-300x300.png", name: 'Hair Coloring', price: '$50', description: 'Full hair coloring service' },
  { id: 4,image:"https://haircutday.com/b/wp-content/uploads/2024/01/Diseno-sin-titulo32-300x300.png",name: 'Shave', price: '$25', description: 'Classic straight razor shave' },
  { id: 5,image:"https://haircutday.com/b/wp-content/uploads/2024/01/Diseno-sin-titulo32-300x300.png", name: 'Hair Styling', price: '$40', description: 'Special occasion hair styling' },
  { id: 6,image:"https://haircutday.com/b/wp-content/uploads/2024/01/Diseno-sin-titulo32-300x300.png", name: 'Kids Haircut', price: '$20', description: 'Haircuts for children' },
]

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getVisibleCards = () => {
  if (window.innerWidth >= 1024) return 4; // Pantallas grandes
  if (window.innerWidth >= 768) return 2; // Pantallas medianas
  return 1; // Pantallas pequeñas
}

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % (services.length - getVisibleCards() + 1)); // Ajustar para las tarjetas visibles
}

const prevSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length - getVisibleCards() + 1) % (services.length - getVisibleCards() + 1)); // Ajustar para las tarjetas visibles
}

  return (
    <section className="py-12 rounded-lg">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-center">
      
      <div className="md:w-2/1 md:pl-2">
        <h2 className="text-4xl font-bold text-center mb-8 ">OUR SERVICES</h2>
        <div className="relative p-6 rounded-lg">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / (getVisibleCards()))}%)` }} // Ajustar el desplazamiento
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 md:w-1/4 sm:w-1/2 px-2 mb-6"> {
                  <div className="bg-stone-200/80  shadow-md rounded-lg overflow-hidden">
                    
                    <div className="relative"> 
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="object-cover rounded-md w-full h-48" 
                      />
                    </div>
                   
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <h3 className="text-lg font-semibold mb-2 text-stone-600 text-center">{service.name}</h3>
                      <p className="text-stone-400 mb-4 text-center">{service.description}</p>
                      <p className="text-xl font-bold text-stone-700 mt-auto mb-2 text-center">{service.price}</p>
                      <button className='bg-stone-600 rounded-lg py-2 w-full'>Reservar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-start mt-4 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}*/
