'use client';

import React, { useState } from 'react'
export default function Hero() {
  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  return (
    <section className="w-full relative bg-center bg-no-repeat bg-[url('https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-200 bg-blend-multiply">
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
              <form className="flex flex-col space-y-4">
                {/* Fila para Nombre Completo */}
                <input
                  type="text"
                  placeholder="Fullname"
                  className="p-2 rounded-lg border border-stone-100 bg-transparent text-stone-200 placeholder-stone-200"
                />

                {/* Fila para Mensaje */}
                <textarea
                  placeholder="Message"
                  className="p-2 rounded-lg border border-stone-100 bg-transparent text-stone-200 placeholder-stone-200"
                ></textarea>

                {/* Fila para Fecha y Hora */}
                <div className="flex space-x-4">
                  {/* Campo de Fecha */}
                  <div className="relative w-full">
                    <input
                      type="date"
                      className="p-2 pl-10 rounded-lg border border-stone-100 bg-stone-100 text-stone-800 w-full placeholder-stone-200"
                    />
                  </div>

                  {/* Campo de Hora */}
                  <div className="relative w-full">
                    <input
                      type="time"
                      value={timeValue}
                      onChange={(e) => setTimeValue(e.target.value)}
                      className="p-2 pl-10 rounded-lg border border-stone-100 bg-stone-100 text-stone-800 placeholder-stone-200 w-full"
                    />
                  </div>
                </div>

                {/* Fila para Método de Pago y Botón */}
                <div className="flex space-x-4">
                  <select className="px-2 rounded-lg border border-stone-100 bg-transparent text-stone-200 placeholder-stone-200 w-full">
                    <option className="text-stone-800">Seleccione método de pago</option>
                    <option className="text-stone-800">Tarjeta de crédito</option>
                    <option className="text-stone-800">Efectivo</option>
                    <option className="text-stone-800">Transferencia bancaria</option>
                  </select>
                  <button
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
