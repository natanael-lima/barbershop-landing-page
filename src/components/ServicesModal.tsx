import React from 'react'

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
  }
  const services = [
    { id: 1, title: "Haircut", price: 25 },
    { id: 2, title: "Beard Trim", price: 15 },
    { id: 3, title: "Shave", price: 20 },
    { id: 4, title: "Hair Wash", price: 10 },
    { id: 5, title: "Haircut + Beard Trim", price: 35 },
    { id: 6, title: "Hot Towel Shave", price: 30 },
    { id: 7, title: "Hair Coloring", price: 50 },
  ];
  
export default function ServicesModal({ closeModal, isOpen }: ModalProps) {
    if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada
  return (
    <div className="fixed inset-0 bg-neutral-900 bg-opacity-50 flex items-center justify-center z-50">
      {/* Contenedor del Modal */}
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">All Services</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabla de Servicios */}
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="border-b-2 border-stone-300 py-2 text-stone-600">Service Name</th>
              <th className="border-b-2 border-stone-300 py-2 text-stone-600">Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td className="border-b border-stone-300 py-2">{service.title}</td>
                <td className="border-b border-stone-300 py-2">${service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
