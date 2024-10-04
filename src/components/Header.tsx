"use client"

import React, { useEffect, useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaCut } from "react-icons/fa";
import Form from './WhatsAppForm';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

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
  };

  

  return (
    <header className="absolute top-0 left-0 w-full text-black bg-transparent rounded-lg z-10">
      <div className={`container mx-auto flex justify-between items-center px-4 py-4 ${menuOpen ? 'bg-stone-950' : ''}`}>
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-stone-300 hover:text-stone-200 flex items-center justify-center">
            <FaCut className="text-1xl" /> FlowN
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 border p-4 border-white rounded-lg">
          <a onClick={() => scrollToSection('home')} className="cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] text-stone-300 after:bg-stone-200 after:transition-all after:duration-300 hover:after:w-full hover:text-stone-200">
            Home
          </a>
          <a onClick={() => scrollToSection('service')} className="cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] text-stone-300 after:bg-stone-200 after:transition-all after:duration-300 hover:after:w-full hover:text-stone-200">
            Services
          </a>
          <a onClick={() => scrollToSection('work')} className="cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] text-stone-300 after:bg-stone-200 after:transition-all after:duration-300 hover:after:w-full hover:text-stone-200">
            Works
          </a>
          <a  onClick={() => scrollToSection('about')} className="cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] text-stone-300 after:bg-stone-200 after:transition-all after:duration-300 hover:after:w-full hover:text-stone-200">
            About us
          </a>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-stone-300 rounded-lg hover:bg-stone-200 text-stone-800 font-semibold py-2 px-4 transition duration-300">
            Contact us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-stone-300 focus:outline-none"
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
          <nav className="flex flex-col space-y-4 py-4 px-4 bg-stone-950">
              <a onClick={() => scrollToSection('home')} className="flex items-center text-stone-200 hover:text-stone-300">
                Home
              </a>
              <a onClick={() => scrollToSection('service')} className="flex items-center text-stone-200 hover:text-stone-300">
                Services
              </a>
              <a onClick={() => scrollToSection('work')} className="flex items-center text-stone-200 hover:text-stone-300">
                Works
              </a>
              <a onClick={() => scrollToSection('about')} className="flex items-center text-stone-200 hover:text-stone-300">
                About
              </a>
              <div>
                <button
                  className="block bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold py-2 px-4 rounded-lg transition duration-300 text-center"
                >
                Contact us
                </button>
              </div>
            </nav>
        </div>
      )}
    </header>

  )
}

