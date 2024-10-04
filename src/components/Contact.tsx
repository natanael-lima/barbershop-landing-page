import React from 'react'

export default function Contact() {
  return (
      <section className="flex flex-col items-center w-full p-2">
          <h2 className="tracking-tight leading-none font-bold text-6xl text-stone-900">CONTACT US</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-16">
              {/* Google Maps Location */}
              <div className="col-span-1">
                  <h3 className="font-semibold mb-2">Location</h3>
                  <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.2364014160261!2d-65.2984811!3d-24.1756138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e0e10ed99c7b7f%3A0x48c06d15f7eddb78!2sPlaza%20Belgrano!5e0!3m2!1ses-419!2sar!4v1696111750138!5m2!1ses-419!2sar"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
              </div>

              {/* Address and Call Us */}
              <div className="col-span-1">
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-gray-800">976 Marine Dr,<br />North Vancouver, BC V7P 0B7</p>
                  
                  <h3 className="font-semibold mt-4">Call Us</h3>
                  <p className="text-gray-800">(604) 971-1199</p>
              </div>

              {/* Email and Social Media */}
              <div className="col-span-1">
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-800">newyorkbarbershopbc@gmail.com</p>

                  <h3 className="font-semibold mt-4">Follow Us</h3>
                  <p className="text-gray-800">
                      <a href="https://www.facebook.com/" className="text-blue-600 hover:underline">Facebook</a> | 
                      <a href="https://www.instagram.com/" className="text-blue-600 hover:underline"> Instagram</a>
                  </p>
              </div>
              {/* Hours */}
              <div className="col-span-1">
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <div className="text-gray-800 space-y-2">
                      <p>Monday  – 10a.m.–7p.m.</p>
                      <p>Tuesday  – 10a.m.–7p.m.</p>
                      <p>Wednesday  – 10a.m.–7p.m.</p>
                      <p>Thursday  – 10a.m.–7p.m.</p>
                      <p>Friday  – 10a.m.–7p.m.</p>
                      <p>Saturday  – 10a.m.–5p.m.</p>
                      <p>Sunday  – 11a.m.–5p.m.</p>
                  </div>
              </div>
          </div>
      </section>
  )
}
