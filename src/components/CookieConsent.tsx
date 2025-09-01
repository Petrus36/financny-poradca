"use client";

import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookie-preferences');
    const consentShown = localStorage.getItem('cookie-consent-shown');
    
    if (!cookieChoice && !consentShown) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-shown', 'true');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    localStorage.setItem('cookie-preferences', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookie-consent-shown', 'true');
    setIsVisible(false);
  };

  const handleCustomize = () => {
    // This will be handled by the cookies modal
    localStorage.setItem('cookie-consent-shown', 'true');
    setIsVisible(false);
    // You can trigger the cookies modal here if needed
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[90] p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <span className="text-2xl">🍪</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                Používame súbory cookie
              </h3>
              <p className="text-sm text-gray-600">
                Používame súbory cookie na zlepšenie vášho zážitku na našej webovej stránke. 
                Kliknutím na &quot;Povoliť všetky&quot; súhlasíte s používaním všetkých typov súborov cookie.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={handleAcceptNecessary}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Len nevyhnutné
          </button>
          <button
            onClick={handleCustomize}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Prispôsobiť
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Povoliť všetky
          </button>
        </div>
      </div>
    </div>
  );
}
