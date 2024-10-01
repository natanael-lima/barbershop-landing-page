
import React from 'react'

export default function Hero() {
  return (
    <section className="relative bg-center bg-no-repeat bg-[url('https://media.istockphoto.com/id/1473584880/es/foto/hombre-negro-en-una-peluquer%C3%ADa.jpg?s=2048x2048&w=is&k=20&c=RradYLVgbYR7ah3MZhDKz8BkNJTD3qDnyUUI_gLbbmY=')] bg-gray-200 bg-blend-multiply">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay para mejorar legibilidad */}
      <div className="px-4 mx-auto max-w-screen-xl text-center relative z-10 py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          We invest in the world’s potential
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>  
        </div>
      </div>
    </section>

  )
}
