"use client"

import React, { useState } from 'react'
import { FaClock, FaCalendar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
const services = [
  { id: 1,image:"https://ganiveteriacasalama.com/wp-content/uploads/2021/10/IMG-20211004-WA0010-300x300.jpg", name: 'Haircut' },
  { id: 2,image:"https://i.pinimg.com/474x/02/56/8f/02568f19e090212ed519c25662c2a7d7.jpg", name: 'Beard Trim' },
  { id: 3,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAh4HzRh1WV4MRvz5cb0Cws7Pyz3WSV2e9w&s", name: 'Hair Coloring'},
  { id: 4,image:"https://www.altacapacitacion.com/product_images/cursos-en-acp/trabajo/2__80798_thumb.jpg",name: 'Shave'},
  { id: 5,image:"https://ganiveteriacasalama.com/wp-content/uploads/2021/10/IMG-20211004-WA0010-300x300.jpg", name: 'Hair Styling'},
  { id: 6,image:"https://haircutday.com/b/wp-content/uploads/2024/01/Diseno-sin-titulo32-300x300.png", name: 'Kids Haircut'},
]

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (services.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length - 2) % (services.length - 2))
  }


  return (
    <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* First Column - Hours and Days */}
            <section className="md:w-1/3 mb-8 md:mb-0 flex flex-col">
              <header className="text-4xl font-bold text-center mb-8">DISCOVER OUR BARBER WORKS</header>
              <article className="p-6 rounded-lg flex-grow">
                <p className='text-sm mb-4'>Transform your look with our expert barber services. From classic cuts to modern styles, we cater to all your grooming needs.</p>
              </article>
              <footer className="flex justify-start mt-4 space-x-4">
                <button
                  onClick={prevSlide}
                  className="hover:text-stone-400 text-stone-500 font-bold text-5xl"
                >
                  <HiOutlineArrowLongLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="hover:text-stone-400 text-stone-500 font-bold text-5xl"
                >
                  <HiOutlineArrowLongRight />
                </button>
              </footer>
            </section>

            {/* Second Column - Service Carousel */}
            <section className="md:w-2/3 md:pl-8 flex flex-col">
              <div className="relative p-1 rounded-lg flex-grow">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                  >
                    {services.map((service) => (
                      <article key={service.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                        <div className="relative"> 
                          <img 
                            src={service.image} 
                            alt={service.name} 
                            className="object-cover rounded-md w-full h-72" 
                          />
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>


  )
}
