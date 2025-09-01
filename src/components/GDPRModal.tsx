"use client";

import React, { useState } from 'react';

export default function GDPRModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'rights' | 'data' | 'contact'>('overview');

  if (!isOpen) return null;

  const tabs = [
    { id: 'overview', label: 'Prehľad', icon: '📋' },
    { id: 'rights', label: 'Vaše práva', icon: '⚖️' },
    { id: 'data', label: 'Spracovanie dát', icon: '🔒' },
    { id: 'contact', label: 'Kontakt', icon: '📞' },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-[100]">
      {/* Backdrop with subtle blur */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">🔒 Ochrana osobných údajov (GDPR)</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prehľad ochrany osobných údajov</h3>
                <div className="prose text-gray-700 space-y-4">
                  <p>
                    Súhlasíte s tým, že spoločnosť <strong>Michal Krásko - Finančný poradca</strong> 
                    môže spracovávať vaše osobné údaje v súlade s nariadením GDPR.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Kto sme?</h4>
                    <p className="text-blue-800">
                      Sme finančný poradca poskytujúci služby v oblasti investovania, poistení, 
                      hypoték a dôchodkového plánovania.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Prečo spracovávame vaše údaje?</h4>
                    <ul className="text-green-800 list-disc list-inside space-y-1">
                      <li>Poskytovanie finančných služieb a poradenstva</li>
                      <li>Komunikácia s klientmi</li>
                      <li>Plnenie zákonných povinností</li>
                      <li>Zlepšovanie našich služieb</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Ako dlho uchovávame údaje?</h4>
                    <p className="text-yellow-800">
                      Osobné údaje uchovávame po dobu nevyhnutnú na splnenie účelu spracovania 
                      alebo po dobu stanovenú zákonom (zvyčajne 5-10 rokov).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Rights Tab */}
          {activeTab === 'rights' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vaše práva podľa GDPR</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">👁️ Právo na prístup</h4>
                    <p className="text-gray-700 text-sm">
                      Môžete požiadať o informácie o tom, aké osobné údaje o vás spracovávame.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">✏️ Právo na opravu</h4>
                    <p className="text-gray-700 text-sm">
                      Môžete požiadať o opravu nesprávnych alebo neúplných údajov.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">🗑️ Právo na vymazanie</h4>
                    <p className="text-gray-700 text-sm">
                      Môžete požiadať o vymazanie vašich osobných údajov (s určitými výnimkami).
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">⏸️ Právo na obmedzenie</h4>
                    <p className="text-gray-700 text-sm">
                      Môžete požiadať o obmedzenie spracovania vašich údajov.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">📤 Právo na prenosnosť</h4>
                    <p className="text-gray-700 text-sm">
                      Môžete požiadať o prenos vašich údajov do iného systému.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">🚫 Právo na námietku</h4>
                    <p className="text-gray-700 text-sm">
                      Môžete namietať proti spracovaniu vašich údajov na základe oprávneného zájmu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Data Processing Tab */}
          {activeTab === 'data' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Spracovanie osobných údajov</h3>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">📊 Aké údaje spracovávame?</h4>
                    <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                      <li>Meno, priezvisko a kontaktné údaje</li>
                      <li>Finančné informácie a potreby</li>
                      <li>História transakcií a služieb</li>
                      <li>Komunikačné záznamy</li>
                      <li>Technické údaje (IP adresa, cookies)</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">🔐 Bezpečnosť údajov</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Vaše osobné údaje chrátime pomocou:
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                      <li>Šifrovania citlivých údajov</li>
                      <li>Bezpečnostných protokolov</li>
                      <li>Pravidelných bezpečnostných kontrol</li>
                      <li>Školenia zamestnancov</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">🌍 Prevod údajov</h4>
                    <p className="text-gray-700 text-sm">
                      Vaše údaje sa spracovávajú v rámci EÚ. Ak by bolo potrebné ich preniesť 
                      mimo EÚ, zabezpečíme rovnakú úroveň ochrany.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kontakt pre GDPR otázky</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">📧 Kontaktný email</h4>
                    <p className="text-blue-800">
                      Pre všetky otázky týkajúce sa ochrany osobných údajov nás kontaktujte na:
                    </p>
                    <p className="text-blue-800 font-semibold mt-2">gdpr@financnyporadca.sk</p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">📝 Ako uplatniť vaše práva?</h4>
                    <ol className="text-green-800 text-sm space-y-1 list-decimal list-inside">
                      <li>Napíšte nám email s vašou požiadavkou</li>
                      <li>Uveďte, ktoré právo chcete uplatniť</li>
                      <li>Pre identifikáciu uveďte vaše meno a kontakt</li>
                      <li>Odpovieme vám do 30 dní</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">⚖️ Dozorný orgán</h4>
                    <p className="text-yellow-800 text-sm">
                      Ak si myslíte, že vaše práva boli porušené, môžete sa obrátiť na 
                      Úrad na ochranu osobných údajov SR.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Zavrieť
          </button>
        </div>
      </div>
    </div>
  );
}
