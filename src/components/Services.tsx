"use client"

import React, { useState } from 'react'
import WhatsAppForm from './WhatsAppForm';
import ServicesModal from './ServicesModal';
const services = [
    {
        id: 1,
        title: "Corte Clásico",
        description: "Un corte clásico que nunca pasa de moda.",
        price: "5000",
        icon: "https://img.icons8.com/glyph-neue/64/scissors.png"
    },
    {
        id: 2,
        title: "Afeitado Profesional",
        description: "Disfruta de un afeitado suave y cómodo.",
        price: "4500",
        icon: "https://img.icons8.com/glyph-neue/64/straight-razor.png"
    },
    {
        id: 3,
        title: "Corte de Cabello Moderno",
        description: "Un estilo moderno que refleja tu personalidad.",
        price: "6500",
        icon: "https://img.icons8.com/glyph-neue/64/beard-trimmer.png"
    },
    {
        id: 4,
        title: "Corte con Diseño",
        description: "Agrega un diseño único a tu corte de cabello.",
        price: "2555",
        icon: "https://img.icons8.com/glyph-neue/64/paint-palette.png"
    },
];
export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenService, setIsModalOpenService] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalService = () => {setIsModalOpenService(true);};
  const closeModalService = () => { setIsModalOpenService(false);};

  return (
    <section id="service" className="py-16 flex flex-col items-center w-full">
      <div className="container mx-auto px-6 text-stone-600 md:px-12 xl:px-6">
        <div className="flex flex-col  md:flex-row md:gap-6 lg:items-start lg:gap-10">
          {/* Columna 1: Servicios */}
          <div className="w-full md:lg:w-2/3 flex flex-col items-start">
            {/* Contenedor principal de los servicios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={service.id} className="flex flex-col p-3 text-left">
                  {/* Ícono del servicio */}
                  <div className="flex flex-col items-center mb-2 text-gray-800 text-3xl">
                    <img src={service.icon} alt="" />{/* Ícono encima del título */}
                  </div>
                  <div className="ml-2"> {/* Margen para separar el icono del texto */}
                    <h3 className="text-2xl font-bold text-stone-900 text-center">{service.title}</h3>
                    <p className="my-1 text-stone-600 text-lg text-center">{service.description}</p>
                    <p className="font-extrabold text-stone-800 text-2xl text-center">
                      ${<span className='font-extrabold text-stone-800 text-5xl'>{service.price}</span>}
                    </p>
                  </div>
                  {/* Divisor entre servicios */}
                  {index < services.length - 0 && <hr className="border-stone-300 my-4" />}
                </div>
              ))}
            </div>
          </div>

          {/* Columna 2: Información General */}
          <div className="order-2 md:order-1 w-full md:w-1/3 flex flex-col items-end  justify-end md:justify-start px-4 py-4 md:py-20">
            <h2 className="racking-tight leading-none font-bold text-6xl mb-8 text-stone-900 text-end">QUALITY SERVICES FOR YOUR HAIR</h2>
            <a
              href="#view-all-services"
              onClick={openModalService}
              className="text-blue-600 hover:underline my-4"
            >
              View all services
            </a>
            {isModalOpenService && (
              <ServicesModal isOpen={isModalOpenService} closeModal={closeModalService} />
            )}
            <button
              onClick={openModal}
              className="bg-stone-800 text-white py-2 px-4 rounded-lg hover:bg-stone-600 transition duration-300 mt-4"
            >
              Book an Appointment
            </button>
            {isModalOpen && (
              <WhatsAppForm isOpen={isModalOpen} closeModal={closeModal} />
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
