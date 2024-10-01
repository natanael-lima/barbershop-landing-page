import React from 'react'
import { FaCut, FaMale, FaChild, FaPaintBrush } from 'react-icons/fa'; // Importa los íconos que desees

const services = [
    {
        id: 1,
        title: "Corte Clásico",
        description: "Un corte clásico que nunca pasa de moda.",
        price: "$15",
        icon: <FaCut size={40} />
    },
    {
        id: 2,
        title: "Afeitado Profesional",
        description: "Disfruta de un afeitado suave y cómodo.",
        price: "$10",
        icon: <FaCut size={40} />
    },
    {
        id: 3,
        title: "Estilo de Barba",
        description: "Dale forma a tu barba con nuestros expertos.",
        price: "$12",
        icon: <FaMale size={40} />
    },
    {
        id: 4,
        title: "Corte de Cabello para Niños",
        description: "Cortes divertidos y amigables para los más pequeños.",
        price: "$8",
        icon: <FaChild size={40} />
    },
    {
        id: 5,
        title: "Corte de Cabello Moderno",
        description: "Un estilo moderno que refleja tu personalidad.",
        price: "$20",
        icon: <FaCut size={40} />
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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8 md:mb-12 p-6">
        {services.map(service => (
            <figure key={service.id} className="flex flex-col items-center justify-center p-8 text-center bg-gray-200 border border-gray-400 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                <div className="mb-4 text-gray-800">{service.icon}</div>
                <blockquote className="max-w-xs mx-auto mb-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="my-2 text-gray-600">{service.description}</p>
                    <p className="font-bold text-gray-800">{service.price}</p>
                </blockquote>
            </figure>
        ))}
    </div>
</section>

  )
}
