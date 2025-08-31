"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.8!2d17.0225!3d48.4319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sDuklianskych%20hrdinov%205%2C%2090101%20Malacky%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Finančný Poradca - Malacky"
                ></iframe>
              </div>
              
              {/* Address Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[#202325] mb-2">Adresa:</h3>
                <p className="text-[#202325]">Duklianskych hrdinov 5, 90101 Malacky</p>
                <p className="text-sm text-gray-600 mt-1">Slovakia</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Banner Section */}
      <section className="relative min-h-[750px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.svg"
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Advisor photo positioned on the right */}
        <div className="absolute right-4 sm:right-20 md:right-40 lg:right-60 -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 z-10 w-[320px] h-[420px] sm:w-[400px] sm:h-[520px] md:w-[500px] md:h-[650px] lg:w-[600px] lg:h-[750px] xl:w-[650px] xl:h-[850px]">
          <Image
            src="/advisor-photo.png"
            alt="Financial Advisor"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-4 lg:-ml-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
                KONTAKT
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Spojte sa s nami a získajte profesionálne finančné poradenstvo
              </p>
              <Link href="/formular">
                <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto">
                  Bezplatná konzultácia
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Information Section */}
      <section className="bg-white py-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Contact Info */}
            <div className="text-center lg:text-left">
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
                    <p className="text-lg font-semibold text-[#202325]">Duklianskych hrdinov 5, 90101 Malacky</p>
                    <p className="text-sm text-gray-600">Navštívte nás</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96 w-full">
              {/* Clickable overlay */}
              <div 
                className="absolute inset-0 z-10 cursor-pointer hover:bg-black/5 transition-colors"
                onClick={openMapModal}
              ></div>
              
              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.8!2d17.0225!3d48.4319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sDuklianskych%20hrdinov%205%2C%2090101%20Malacky%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Finančný Poradca - Malacky"
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