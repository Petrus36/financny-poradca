"use client";

import React, { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "investovanie"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Ďakujeme za váš záujem! Budeme vás kontaktovať v najbližšom čase.");
    setFormData({ name: "", email: "", phone: "", message: "", service: "investovanie" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md md:max-w-lg lg:max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-200/50">
        {/* Header */}
        <div className="flex justify-between items-center p-4 md:p-6 lg:p-6 border-b border-gray-200/50">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-[#202325]">Bezplatná konzultácia</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 md:p-6 lg:p-6 space-y-3 md:space-y-4 lg:space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm md:text-sm lg:text-sm font-medium text-[#202325] mb-1">
              Meno a priezvisko *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base"
              placeholder="Vaše meno"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm md:text-sm lg:text-sm font-medium text-[#202325] mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base"
              placeholder="vas@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm md:text-sm lg:text-sm font-medium text-[#202325] mb-1">
              Telefón
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base"
              placeholder="+421 900 000 000"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm md:text-sm lg:text-sm font-medium text-[#202325] mb-1">
              Zaujíma ma *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base"
            >
              <option value="investovanie">Investovanie</option>
              <option value="poistenie">Poistenie</option>
              <option value="hypoteky">Hypotéky</option>
              <option value="financne_planovanie">Finančné plánovanie</option>
              <option value="druhe">Iné</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm md:text-sm lg:text-sm font-medium text-[#202325] mb-1">
              Vaša správa
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base"
              placeholder="Napíšte nám vašu správu..."
            />
          </div>

          <div className="pt-3 md:pt-4 lg:pt-4">
            <button
              type="submit"
              className="w-full bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold py-2.5 md:py-3 lg:py-3 px-6 rounded-lg transition-colors shadow-lg text-sm md:text-base lg:text-base"
            >
              Odoslať formulár
            </button>
          </div>

          <p className="text-xs md:text-xs lg:text-xs text-gray-500 text-center">
            Odoslaním formulára súhlasíte so spracovaním vašich osobných údajov.
          </p>
        </form>
      </div>
    </div>
  );
} 