
import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function WhatsAppForm({ closeModal, isOpen }: ModalProps) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative flex flex-col">
        
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Reservar Cita</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-900"
            aria-label="Cerrar Modal"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-semibold">Nombre Completo</label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-semibold">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600 font-semibold">Mensaje</label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Escribe tu mensaje"
              rows={4}
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-600 font-semibold">Fecha de Reserva</label>
            <input
              id="date"
              type="date"
              name="date"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-gray-600 font-semibold">Hora</label>
            <input
              id="time"
              type="time"
              name="time"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="paymentMethod" className="block text-gray-600 font-semibold">Método de Pago</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Selecciona un método</option>
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="transferencia">Transferencia Bancaria</option>
            </select>
          </div>
        </form>

        
        <hr className="my-6 border-gray-200" />
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={closeModal}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Confirmar Reserva
          </button>
        </div>
      </div>
    </div>
  )
}