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
                  src="https://www.google.com/maps?q=A13+Concept+Business+Hub,+Továrenská+2206/13K,+901+01+Malacky,+Slovakia&hl=sk&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="A13 Concept Business Hub - Malacky"
                ></iframe>
              </div>
              
              {/* Address Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#202325] mb-2">A13 Concept Business Hub</h3>
                <p className="text-[#202325]">Továrenská 2206/13K, 901 01 Malacky</p>
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
                <a
                  href="mailto:michal.kurka@michalkurka.sk"
                  className="flex items-center space-x-2 hover:text-[#5ECAD5] transition-colors"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-[#202325]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-[#202325] text-sm md:text-base">michal.kurka@michalkurka.sk</span>
                </a>
                <button 
                  onClick={openMapModal}
                  className="flex items-start space-x-1 hover:text-[#5ECAD5] transition-colors cursor-pointer text-left"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-[#202325] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[#202325] text-base md:text-lg font-bold leading-tight mb-1">A13 Concept Business Hub</span>
                    <span className="text-[#202325] text-sm md:text-base leading-tight">Továrenská 2206/13K, 901 01 Malacky</span>
                  </div>
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