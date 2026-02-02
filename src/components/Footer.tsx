"use client";

import React, { useState } from "react";
import Link from "next/link";
import CookiesModal from "./CookiesModal";
import GDPRModal from "./GDPRModal";

export default function Footer() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isCookiesModalOpen, setIsCookiesModalOpen] = useState(false);
  const [isGDPRModalOpen, setIsGDPRModalOpen] = useState(false);

  const openCookiesModal = () => setIsCookiesModalOpen(true);
  const closeCookiesModal = () => setIsCookiesModalOpen(false);
  const openGDPRModal = () => setIsGDPRModalOpen(true);
  const closeGDPRModal = () => setIsGDPRModalOpen(false);

  const openMapModal = () => {
    setIsMapModalOpen(true);
  };

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  return (
    <>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.8!2d17.0225!3d48.4319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sTov%C3%A1rensk%C3%A1%202206%2F13k%2C%20Malacky%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1234567890"
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
                <p className="text-[#202325]">Továrenská 2206/13k, Malacky</p>
                <p className="text-sm text-gray-600 mt-1">Slovakia</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#D9D9D9] py-8 md:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Rýchle odkazy */}
            <div>
              <h3 className="text-[#202325] font-semibold text-base md:text-lg mb-3 md:mb-4">Rýchle odkazy</h3>
              <ul className="space-y-1 md:space-y-2">
                <li><Link href="/domov" className="text-[#202325] hover:text-[#5ECAD5] transition-colors text-sm md:text-base">Domov</Link></li>
                <li><Link href="/o-mne" className="text-[#202325] hover:text-[#5ECAD5] transition-colors text-sm md:text-base">O mne</Link></li>
                <li><Link href="/sluzby" className="text-[#202325] hover:text-[#5ECAD5] transition-colors text-sm md:text-base">Služby</Link></li>
                <li><Link href="/spoluprace" className="text-[#202325] hover:text-[#5ECAD5] transition-colors text-sm md:text-base">Spolupráca</Link></li>
                <li><Link href="/blog" className="text-[#202325] hover:text-[#5ECAD5] transition-colors text-sm md:text-base">Blog</Link></li>
              </ul>
            </div>

            {/* Sociálne siete */}
            {/* <div>
              <h3 className="text-[#202325] font-semibold text-base md:text-lg mb-3 md:mb-4">Sociálne siete</h3>
              <div className="space-y-3 md:space-y-4">
                <a 
                  href="https://www.instagram.com/novakkrasko_simplea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#5ECAD5] transition-colors"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-[#202325] text-sm md:text-base">novakkrasko_simplea</span>
                </a>
                <a 
                  href="https://www.facebook.com/novakkrasko_simplea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#5ECAD5] transition-colors"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-[#202325] text-sm md:text-base">novakkrasko_simplea</span>
                </a>
                <a 
                  href="https://twitter.com/novakkrasko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#5ECAD5] transition-colors"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span className="text-[#202325] text-sm md:text-base">novakkrasko</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/novakkrasko_simplea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#5ECAD5] transition-colors"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-[#202325] text-sm md:text-base">novakkrasko_simplea</span>
                </a>
              </div>
              <div className="mt-3 md:mt-4">
                <a
                  href="https://www.simplea.sk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5ECAD5] text-white px-3 md:px-4 py-2 rounded inline-block hover:bg-[#4BB8C4] transition-colors text-sm md:text-base"
                >
                  https://www.simplea.sk/
                </a>
              </div>
            </div> */}

            {/* Kontakt */}
            <div>
              <h3 className="text-[#202325] font-semibold text-base md:text-lg mb-3 md:mb-4">Kontakt</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-[#202325] text-sm md:text-base">+421 905 583 323</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-[#202325] text-sm md:text-base">info@novakkrasko.sk</span>
                </div>
                <button 
                  onClick={openMapModal}
                  className="flex items-start space-x-1 hover:text-[#5ECAD5] transition-colors cursor-pointer"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-[#202325] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-[#202325] text-sm md:text-base leading-tight">Továrenská 2206/13k, Malacky</span>
                </button>
              </div>
            </div>

            {/* GDPR & Cookies */}
            <div>
              <h3 className="text-[#202325] font-semibold text-base md:text-lg mb-3 md:mb-4">GDPR & Cookies</h3>
              <div className="space-y-2">
                <button 
                  onClick={openCookiesModal}
                  className="text-[#202325] hover:text-[#5ECAD5] transition-colors text-sm md:text-base block text-left"
                >
                  🍪 Nastavenia cookies
                </button>
                <button 
                  onClick={openGDPRModal}
                  className="text-[#202325] hover:text-[#5ECAD5] transition-colors text-sm md:text-base block text-left"
                >
                  🔒 Ochrana údajov (GDPR)
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          {/* <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-300 text-center md:text-right">
            <p className="text-[#202325] text-xs md:text-sm">
              S ❤ vyrobilo © 2024 NextLayer Studio s.r.o Všetky práva vyhradené.
            </p>
          </div> */}
        </div>
      </footer>

      {/* Cookies Modal */}
      <CookiesModal isOpen={isCookiesModalOpen} onClose={closeCookiesModal} />

      {/* GDPR Modal */}
      <GDPRModal isOpen={isGDPRModalOpen} onClose={closeGDPRModal} />
    </>
  );
} 