'use client';

import React, { useState } from 'react'
export default function Hero() {

  const [formData, setFormData] = useState({
    name: '',
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
     //Verificar si estamos en el lado del cliente
     if (typeof window !== 'undefined') {
      // Codificar el mensaje
      const message = `Hola, mi nombre es ${encodeURIComponent(formData.name)}.\n\n` +
      `Mi consulta es: ${encodeURIComponent(formData.message)}.\n\n` +
      `Fecha de reserva: ${encodeURIComponent(formData.date)}.\n\n` +
      `Hora: ${encodeURIComponent(formData.time)}.\n\n` +
      `Método de pago: ${encodeURIComponent(formData.paymentMethod)}.`;

      // Construir la URL de WhatsApp
      const whatsappUrl = `https://wa.me/5493884670317?text=${message}`;

      // Redirigir a WhatsApp chat
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="home" className="w-full relative bg-center bg-no-repeat bg-[url('https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-200 bg-blend-multiply">
        <div className="rounded-lg absolute inset-0 bg-black opacity-75"></div> {/* Overlay para mejorar legibilidad */}
        <div className="px-4 mx-auto text-center relative py-24 lg:py-56 max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
            {/* Columna 2: Texto */}
            <div className="lg:w-2/3 order-1 lg:order-1">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl">
                Experience the traditional barbershop feel
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                {/* Aquí puedes agregar más contenido si lo deseas */}
              </div>
            </div>

            {/* Columna 1: Formulario */}
            <div className="bg-transparent border border-stone-100 rounded-2xl p-4 lg:w-1/4 order-2 lg:order-2">
              <h2 className="text-xl font-md text-stone-100 text-center mb-6 mt-6">
                Book Appointment by WhatsApp
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                {/* Fila para Nombre Completo */}
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-stone-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-stone-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="text-stone-200 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-stone-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-stone-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-stone-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-stone-200">
                    Name
                  </label>
                </div>
                {/* Fila para Mensaje */}
          
                <div className="relative h-16 w-full min-w-[300px]">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-2 peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-stone-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-stone-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="text-stone-200 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-stone-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-stone-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-stone-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-stone-200">
                    Message
                  </label>
                </div>

                {/* Fila para Fecha y Hora */}
                <div className="flex space-x-4">
                  {/* Campo de Fecha */}
                  <div className="relative w-full">
                    <input
                      value={formData.date}
                      onChange={handleChange}
                      type="date"
                      className="p-2 pl-10 rounded-lg border border-stone-100 bg-stone-100 text-stone-800 w-full placeholder-stone-200"
                      required
                    />
                  </div>

                  {/* Campo de Hora */}
                  <div className="relative w-full">
                    <input
                      value={formData.time}
                      onChange={handleChange}
                      type="time"
                      className="p-2 pl-10 rounded-lg border border-stone-100 bg-stone-100 text-stone-800 placeholder-stone-200 w-full"
                      required
                    />
                  </div>
                </div>

                {/* Fila para Método de Pago y Botón */}
                <div className="flex space-x-4">
                  <select id="paymentMethod"
                          name="paymentMethod"
                          value={formData.paymentMethod}
                          onChange={handleChange}
                          className="px-2 rounded-lg border border-stone-100 bg-transparent text-stone-200 placeholder-stone-200 w-full" required>
                            
                    <option className="text-stone-800">Seleccione método de pago</option>
                    <option className="text-stone-800">Tarjeta de crédito</option>
                    <option className="text-stone-800">Efectivo</option>
                    <option className="text-stone-800">Transferencia bancaria</option>
                  </select>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-stone-200 text-stone-800 py-2 px-4 rounded-lg hover:bg-stone-300 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

  )
}
