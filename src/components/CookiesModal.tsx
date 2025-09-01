"use client";

import React, { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export default function CookiesModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Load saved preferences from localStorage
    const saved = localStorage.getItem('cookie-preferences');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferences(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error('Error loading cookie preferences:', e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
    onClose();
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    onClose();
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-preferences', JSON.stringify(onlyNecessary));
    onClose();
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-[100]">
      {/* Backdrop with subtle blur */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">🍪 Nastavenia súborov cookie</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-gray-700">
            <p className="mb-4">
              Používame súbory cookie na zlepšenie vášho zážitku na našej webovej stránke. 
              Môžete si vybrať, ktoré typy súborov cookie povolíte.
            </p>
            
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              {showDetails ? 'Skryť detaily' : 'Zobraziť detaily'}
            </button>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4">
            {/* Necessary Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Nevyhnutné súbory cookie</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Tieto súbory cookie sú potrebné pre základné fungovanie webovej stránky.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-500">Vždy povolené</span>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Analytické súbory cookie</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Pomáhajú nám pochopiť, ako návštevníci používajú našu webovú stránku.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-500">Povoliť</span>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Marketingové súbory cookie</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Používajú sa na zobrazovanie relevantných reklám a obsahu.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-500">Povoliť</span>
                </div>
              </div>
            </div>

            {/* Preferences Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Preferenčné súbory cookie</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Ukladajú vaše nastavenia a preferencie pre lepší zážitok.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.preferences}
                    onChange={(e) => handlePreferenceChange('preferences', e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-500">Povoliť</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          {showDetails && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-gray-900">Podrobné informácie o súboroch cookie:</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Nevyhnutné:</strong> Session ID, CSRF token, základné nastavenia</p>
                <p><strong>Analytické:</strong> Google Analytics, návštevnosť stránok, čas strávený na stránke</p>
                <p><strong>Marketingové:</strong> Facebook Pixel, remarketing, personalizované reklamy</p>
                <p><strong>Preferencie:</strong> Jazyk, téma, uložené nastavenia</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Povoliť všetky
          </button>
          <button
            onClick={handleAcceptSelected}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Povoliť vybrané
          </button>
          <button
            onClick={handleRejectAll}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Povoliť len nevyhnutné
          </button>
        </div>
      </div>
    </div>
  );
}
