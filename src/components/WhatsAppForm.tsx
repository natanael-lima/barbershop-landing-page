"use client"; // Indica que este componente solo debe ejecutarse en el cliente
import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function WhatsAppForm({ closeModal, isOpen }: ModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: '',
    time: '',
    paymentMethod: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar si estamos en el lado del cliente
    if (typeof window !== 'undefined') {
      // Codificar el mensaje
      const message = `Hola, mi nombre es ${encodeURIComponent(formData.name)}.\n\n` +
      `Mi correo es: ${encodeURIComponent(formData.email)}.\n\n` +
      `Mi consulta es: ${encodeURIComponent(formData.message)}.\n\n` +
      `Fecha de reserva: ${encodeURIComponent(formData.date)}.\n\n` +
      `Hora: ${encodeURIComponent(formData.time)}.\n\n` +
      `Método de pago: ${encodeURIComponent(formData.paymentMethod)}.`;

      // Construir la URL de WhatsApp
      const whatsappUrl = `https://wa.me/5493884670317?text=${message}`;

      // Redirigir a WhatsApp chat
      window.open(whatsappUrl, '_blank');
      closeModal(); // Cierra el modal después de enviar
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative flex flex-col">
        {/* Header */}
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

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-semibold">Nombre Completo</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
              value={formData.date}
              onChange={handleChange}
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
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="paymentMethod" className="block text-gray-600 font-semibold">Método de Pago</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
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

        {/* Footer */}
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
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Confirmar Reserva
          </button>
        </div>
      </div>
    </div>
  )
}