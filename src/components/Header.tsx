"use client"

import React, { useEffect, useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaCut } from "react-icons/fa";
import WhatsAppForm from './WhatsAppForm';

export default function Header() {
  /*const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Cambia el valor según sea necesario
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };*/
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  

  return (
    <header className="text-black">
    <div className="container mx-auto flex justify-between items-center px-4 py-4">
      {/* Logo */}
      <div className="text-2xl font-bold ">
        <a href="/" className="text-stone-800 hover:text-stone-600 flex items-center justify-center"><FaCut className="text-1xl" /> FlowN</a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a href="#home" className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-stone-500 after:transition-all after:duration-300 hover:after:w-full hover:text-stone-500">
          Home
        </a>
        <a href="#services" className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-stone-500 after:transition-all after:duration-300 hover:after:w-full hover:text-stone-500">
          Services
        </a>
        <a href="#team" className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-stone-500 after:transition-all after:duration-300 hover:after:w-full hover:text-stone-500">
          Team
        </a>
        <a href="#gallery" className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-stone-500 after:transition-all after:duration-300 hover:after:w-full hover:text-stone-500">
          About
        </a>
        <a href="#contact" className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-stone-500 after:transition-all after:duration-300 hover:after:w-full hover:text-stone-500">
          Contact
        </a>
      </nav>

      {/* Contact Button */}
      <div className="hidden md:block">
        <button onClick={openModal} className="z-10 bg-stone-800 rounded-lg hover:bg-stone-600 text-white font-semibold py-2 px-4  transition duration-300">Reserve</button>

        {/* Render the modal only if it's open */}
        {isModalOpen && (
              <WhatsAppForm isOpen={isModalOpen} closeModal={closeModal} />
            )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none"
        >
          {menuOpen ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <HiMenuAlt3 className="text-2xl" />
          )}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="md:hidden text-black">
        <nav className="flex flex-col space-y-4 py-4 px-4">
          <a href="#home" className="flex items-center hover:text-gray-400">
            Home
          </a>
          <a href="#services" className="flex items-center hover:text-gray-400">
            Services
          </a>
          <a href="#team" className="flex items-center hover:text-gray-400">
            Team
          </a>
          <a href="#gallery" className="flex items-center hover:text-gray-400">
            About
          </a>
          <a href="#contact" className="flex items-center hover:text-gray-400">
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
    )}
  </header>
  )
}

