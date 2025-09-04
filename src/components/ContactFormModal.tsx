"use client";

import React, { useState } from "react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      console.log('Submitting form data:', formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage("Ďakujeme za váš záujem! Budeme vás kontaktovať v najbližšom čase.");
        setFormData({ name: "", surname: "", phone: "", email: "", message: "" });
        
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitMessage("");
        }, 2000);
      } else {
        console.error('API Error:', data);
        setSubmitMessage(data.error || "Chyba pri odosielaní formulára");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage("Chyba pri odosielaní formulára");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-lg md:max-w-xl lg:max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200/50">
        {/* Header */}
        <div className="flex justify-between items-center p-4 md:p-6 lg:p-6 border-b border-gray-200/50">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-[#202325]">Kontaktujte ma</h2>
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
              Meno *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base text-gray-900"
              placeholder="Vaše meno"
            />
          </div>

          <div>
            <label htmlFor="surname" className="block text-sm md:text-sm lg:text-sm font-medium text-[#202325] mb-1">
              Priezvisko *
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base text-gray-900"
              placeholder="Vaše priezvisko"
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
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base text-gray-900"
              placeholder="+421 900 000 000"
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
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base text-gray-900"
              placeholder="vas@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm md:text-sm lg:text-sm font-medium text-[#202325] mb-1">
              Čo vás trápi?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 md:py-2.5 lg:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent bg-white/80 backdrop-blur-sm text-sm md:text-base lg:text-base text-gray-900"
              placeholder="Napíšte nám, čo vás zaujíma alebo s čím vám môžem pomôcť..."
            />
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`p-3 rounded-lg text-sm ${
              submitMessage.includes("Ďakujeme") 
                ? "bg-green-50 text-green-800 border border-green-200" 
                : "bg-red-50 text-red-800 border border-red-200"
            }`}>
              {submitMessage}
            </div>
          )}

          <div className="pt-3 md:pt-4 lg:pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5ECAD5] hover:bg-[#4BB8C4] disabled:bg-gray-400 text-white font-semibold py-2.5 md:py-3 lg:py-3 px-6 rounded-lg transition-colors shadow-lg text-sm md:text-base lg:text-base"
            >
              {isSubmitting ? 'Odosielam...' : 'Odoslať formulár'}
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
