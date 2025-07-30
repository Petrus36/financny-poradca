"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function KontaktPage() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const openMapModal = () => {
    setIsMapModalOpen(true);
  };

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  return (
    <main className="min-h-screen">
      {/* Map Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-200/50">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200/50">
              <h2 className="text-2xl font-bold text-[#202325]">Lokalita - Finančný Poradca</h2>
              <button
                onClick={closeMapModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d17.1067!3d48.1486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8e7b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sPopradsk%C3%A1%2023-3%2C%20821%2006%20Bratislava%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Finančný Poradca - Bratislava"
                ></iframe>
              </div>
              
              {/* Address Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[#202325] mb-2">Adresa:</h3>
                <p className="text-[#202325]">Popradská 23-3, 821 06 Bratislava</p>
                <p className="text-sm text-gray-600 mt-1">Slovakia</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Banner Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.png"
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
                KONTAKT
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Spojte sa s nami a získajte profesionálne finančné poradenstvo
              </p>
              <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto">
                Bezplatná konzultácia
              </button>
            </div>
            
            {/* Right side - Advisor Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-64 md:w-72 h-80 md:h-96 bg-gray-200 rounded-lg shadow-2xl flex items-end justify-center overflow-hidden">
                <span className="text-gray-500 text-lg mb-4">[Foto poradcu]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Working Hours */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-[#202325] mb-6">Pracovné hodiny</h3>
              <div className="space-y-3">
                {[
                  { day: "Pondelok", hours: "8:00-18:00" },
                  { day: "Utorok", hours: "8:00-18:00" },
                  { day: "Streda", hours: "8:00-18:00" },
                  { day: "Štvrtok", hours: "8:00-18:00" },
                  { day: "Piatok", hours: "8:00-18:00" },
                  { day: "Sobota", hours: "8:00-18:00" },
                  { day: "Nedeľa", hours: "8:00-18:00" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-[#202325] font-medium">{schedule.day}</span>
                    <span className="text-[#5ECAD5] font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Contact Info */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-[#202325] mb-8">Kontaktné údaje</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-12 h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#202325]">+421 905 583 323</p>
                    <p className="text-sm text-gray-600">Zavolajte nám</p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-12 h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#202325]">info@novakkrasko.sk</p>
                    <p className="text-sm text-gray-600">Napíšte nám</p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-12 h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#202325]">Popradská 23-3, 821 06 Bratislava</p>
                    <p className="text-sm text-gray-600">Navštívte nás</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Social Media Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
                <h3 className="text-2xl font-bold text-[#202325] mb-6">
                  Kontaktujte ma aj na sociálnych sieťach
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="w-6 h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-[#202325] font-medium">novakkrasko_simplea</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="w-6 h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-[#202325] font-medium">novakkrasko</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="w-6 h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="text-[#202325] font-medium">novakkrasko_simplea</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg className="w-6 h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-[#202325] font-medium">novakkrasko_simplea</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-96 w-full">
                  {/* Clickable overlay */}
                  <div 
                    className="absolute inset-0 z-10 cursor-pointer hover:bg-black/5 transition-colors"
                    onClick={openMapModal}
                  ></div>
                  
                  {/* Map iframe */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d17.1067!3d48.1486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8e7b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sPopradsk%C3%A1%2023-3%2C%20821%2006%20Bratislava%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Finančný Poradca - Bratislava"
                  ></iframe>
                </div>
                
                {/* Click indicator */}
                <div className="p-4 text-center bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Kliknite pre zobrazenie väčšej mapy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-[#202325] text-center mb-12">
            Napíšte nám správu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[#202325] font-medium mb-2">Meno a priezvisko</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent"
                placeholder="Vaše meno"
              />
            </div>
            <div>
              <label className="block text-[#202325] font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent"
                placeholder="vas@email.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[#202325] font-medium mb-2">Telefón</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent"
                placeholder="+421 900 000 000"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[#202325] font-medium mb-2">Správa</label>
              <textarea 
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent"
                placeholder="Napíšte nám vašu správu..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg">
                Odoslať správu
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 