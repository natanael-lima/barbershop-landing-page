"use client"

import React, { useState } from 'react'
import { FaClock, FaCalendar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const services = [
  { id: 1, name: 'Haircut', price: '$30', description: 'Professional haircut for all styles' },
  { id: 2, name: 'Beard Trim', price: '$20', description: 'Shape and style your beard' },
  { id: 3, name: 'Hair Coloring', price: '$50', description: 'Full hair coloring service' },
  { id: 4, name: 'Shave', price: '$25', description: 'Classic straight razor shave' },
  { id: 5, name: 'Hair Styling', price: '$40', description: 'Special occasion hair styling' },
  { id: 6, name: 'Kids Haircut', price: '$20', description: 'Haircuts for children' },
]

export default function Service() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (services.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length - 2) % (services.length - 2))
  }

  return (
    <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* First Column - Hours and Days */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Hours & Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaClock className="text-gray-600 mr-2" />
                  <h3 className="font-semibold">Opening Hours</h3>
                </div>
                <ul className="space-y-2">
                  <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                  <li>Saturday: 10:00 AM - 6:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
                <div className="flex items-center mt-6 mb-4">
                  <FaCalendar className="text-gray-600 mr-2" />
                  <h3 className="font-semibold">Special Days</h3>
                </div>
                <ul className="space-y-2">
                  <li>Every first Monday: Senior Discount Day</li>
                  <li>Last Saturday of the month: Kids Day</li>
                </ul>
              </div>
            </div>

            {/* Second Column - Service Carousel */}
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-bold mb-4">Our Services</h2>
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                  >
                    {services.map((service) => (
                      <div key={service.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                        <div className="bg-gray-100 p-4 rounded-lg h-full">
                          <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                          <p className="text-gray-600 mb-2">{service.description}</p>
                          <p className="text-xl font-bold text-gray-800">{service.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-4 space-x-4">
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
}
