import React from 'react'
import { FaCut, FaPaintBrush } from 'react-icons/fa'; // Importa los íconos que desees
import { GiBeard } from "react-icons/gi";
import { GiRazor } from "react-icons/gi";
import { TbMoodKidFilled } from "react-icons/tb";
import { PiHairDryerFill } from "react-icons/pi";
const services = [
    {
        id: 1,
        title: "Corte Clásico",
        description: "Un corte clásico que nunca pasa de moda.",
        price: "$5000",
        icon: <FaCut size={40} />
    },
    {
        id: 2,
        title: "Afeitado Profesional",
        description: "Disfruta de un afeitado suave y cómodo.",
        price: "$4500",
        icon: <GiBeard size={40} />
    },
    {
        id: 3,
        title: "Estilo de Barba",
        description: "Dale forma a tu barba con nuestros expertos.",
        price: "$3000",
        icon: <GiRazor size={40} />
    },
    {
        id: 4,
        title: "Corte de Cabello para Niños",
        description: "Cortes divertidos y amigables.",
        price: "$4000",
        icon: <TbMoodKidFilled size={40} />
    },
    {
        id: 5,
        title: "Corte de Cabello Moderno",
        description: "Un estilo moderno que refleja tu personalidad.",
        price: "$6500",
        icon: <PiHairDryerFill size={40} />
    },
    {
        id: 6,
        title: "Corte con Diseño",
        description: "Agrega un diseño único a tu corte de cabello.",
        price: "$25",
        icon: <FaPaintBrush size={40} />
    },
];
export default function Services() {

  return (
    <section className='flex flex-col items-center w-full'>
  <h2 className="text-4xl font-bold text-center mb-8">SERVICES</h2>
  
  {/* Contenedor principal de los servicios */}
  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 mb-8 md:mb-12 px-4 md:px-8">
    {services.map(service => (
      <figure 
        key={service.id} 
        className="flex flex-col items-center justify-center p-3 text-center bg-gray-200 border border-gray-400 rounded-lg hover:bg-gray-300 transition-colors duration-300 w-44 h-44 md:w-56 md:h-56"
      >
        {/* Ícono del servicio */}
        <div className="mb-4 text-gray-800 text-3xl">{service.icon}</div>
        
        {/* Contenido del servicio */}
        <blockquote className="w-full">
          <h3 className="text-md font-semibold text-stone-900">{service.title}</h3>
          <p className="my-2 text-stone-600 text-sm">{service.description}</p>
          <p className="font-bold text-stone-800 text-base">{service.price}</p>
        </blockquote>
      </figure>
    ))}
  </div>
</section>


  )
}
