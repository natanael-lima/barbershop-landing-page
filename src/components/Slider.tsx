import React from 'react'
import { FaCalendar, FaClock } from 'react-icons/fa'
import { TbPointFilled } from "react-icons/tb";
import { GiPolarStar } from "react-icons/gi";
export default function Slider() {
  return (
    <div className="relative w-full overflow-hidden bg-stone-800 rounded-lg">
      <div id="slider" className="flex items-center whitespace-nowrap animate-slide">
        {/* Slide 1 */}
        <div className="flex-shrink-0 p-4 transition-transform duration-300 flex flex-col">
            <div className="flex flex-col items-center hover">
                <div className="flex items-center mb-2">
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <FaClock className="text-stone-200 mr-1" />
                <h3 className="text-stone-200 font-semibold">Opening Hours</h3>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Mon-Fri: 9:00 AM - 8:00 PM</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Saturday: 10:00 AM - 6:00 PM</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Sunday: Closed</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <FaCalendar className="text-stone-200 mr-1" />
                <h3 className="text-stone-200 font-semibold">Special Days</h3>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>1st Monday: Senior Discount</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Last Sat: Kids Day</span>
                </div>
            </div>
        </div>

        {/* Repetir Slide 1 para efecto de infinito */}
        <div className="flex-shrink-0 p-4 transition-transform duration-300 flex flex-col">
            <div className="flex flex-col items-center hover">
                <div className="flex items-center mb-2">
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <FaClock className="text-stone-200 mr-1" />
                <h3 className="text-stone-200 font-semibold">Opening Hours</h3>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Mon-Fri: 9:00 AM - 8:00 PM</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Saturday: 10:00 AM - 6:00 PM</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Sunday: Closed</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <FaCalendar className="text-stone-200 mr-1" />
                <h3 className="text-stone-200 font-semibold">Special Days</h3>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>1st Monday: Senior Discount</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Last Sat: Kids Day</span>
                </div>
            </div>
        </div>
        <div className="flex-shrink-0 p-4 transition-transform duration-300 flex flex-col">
            <div className="flex flex-col items-center hover">
                <div className="flex items-center mb-2">
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <FaClock className="text-stone-200 mr-1" />
                <h3 className="text-stone-200 font-semibold">Opening Hours</h3>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Mon-Fri: 9:00 AM - 8:00 PM</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Saturday: 10:00 AM - 6:00 PM</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Sunday: Closed</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <FaCalendar className="text-stone-200 mr-1" />
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <h3 className="text-stone-200 font-semibold">Special Days</h3>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>1st Monday: Senior Discount</span>
                <GiPolarStar className="text-stone-200 mr-3 ml-3" />
                <span className='text-stone-200'>Last Sat: Kids Day</span>
                </div>
            </div>
        </div>

        {/* Puedes agregar más slides aquí si es necesario */}
      </div>
    </div>

  )
}
