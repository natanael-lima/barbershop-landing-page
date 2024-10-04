import React from 'react'
import Team from './Team'

export default function About() {
  return (
    <div className="py-16 flex flex-col items-center w-full">  
    <div className="container m-auto px-6 text-stone-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="Barbershop image" loading="lazy" width="" height=""/>
        </div>
        <div className="md:7/12 lg:w-6/12">
        <h2 className="tracking-tight leading-none font-bold text-6xl text-stone-900">ABOUT US</h2>
          <p className="mt-6 text-gray-600">At <strong>FlowN</strong>, we believe a great look starts with a great haircut. We are a modern barbershop with a classic touch, dedicated to providing you with a high-quality experience where every detail matters. Our team of professional barbers is committed to delivering precise cuts, unique styles, and personalized service that fits your style and personality.</p>
          <Team/>
        </div>

      </div>
    </div>
  </div>
  
  )
}
