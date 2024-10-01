"use client"

import React from 'react'
import { FaHome, FaCut, FaUserFriends, FaImages, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
<header className=" text-black">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">
            Logo
          </a>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="flex items-center hover:text-gray-400">
            <FaHome className="mr-1" />
            Home
          </a>
          <a href="#services" className="flex items-center hover:text-gray-400">
            <FaCut className="mr-1" />
            Services
          </a>
          <a href="#team" className="flex items-center hover:text-gray-400">
            <FaUserFriends className="mr-1" />
            Team
          </a>
          <a href="#gallery" className="flex items-center hover:text-gray-400">
            <FaImages className="mr-1" />
            About
          </a>
          <a href="#contact" className="flex items-center hover:text-gray-400">
            <FaEnvelope className="mr-1" />
            Contact
          </a>
        </nav>

        {/* Botón de contacto */}
        <div>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div id="mobile-menu" className="hidden md:hidden bg-gray-800">
        <nav className="flex flex-col space-y-4 py-4 px-4">
          <a href="#home" className="flex items-center hover:text-gray-400">
            <FaHome className="mr-1" />
            Home
          </a>
          <a href="#services" className="flex items-center hover:text-gray-400">
            <FaCut className="mr-1" />
            Services
          </a>
          <a href="#team" className="flex items-center hover:text-gray-400">
            <FaUserFriends className="mr-1" />
            Our Team
          </a>
          <a href="#gallery" className="flex items-center hover:text-gray-400">
            <FaImages className="mr-1" />
            Gallery
          </a>
          <a href="#contact" className="flex items-center hover:text-gray-400">
            <FaEnvelope className="mr-1" />
            Contact
          </a>
          <div>
            <a
              href="#contact"
              className="block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header