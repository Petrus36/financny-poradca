import React from "react";

export default function ReferenciePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#202325] to-[#2A2C2D] py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-light text-white mb-6">
            Referencie
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pozrite si, čo hovoria naši spokojní klienti o našich službách
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-[#202325]">Mária Kováčová</h4>
                  <p className="text-sm text-gray-600">Bratislava</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Výborný prístup a profesionálne poradenstvo. Pomohol mi vytvoriť 
                finančný plán, ktorý mi umožnil dosiahnuť moje ciele."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  P
                </div>
                <div>
                  <h4 className="font-semibold text-[#202325]">Peter Novák</h4>
                  <p className="text-sm text-gray-600">Košice</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Doporučujem všetkým, ktorí chcú mať svoje financie pod kontrolou. 
                Transparentný prístup a skvelé výsledky."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-[#202325]">Anna Svobodová</h4>
                  <p className="text-sm text-gray-600">Žilina</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Díky finančnému poradenstvu som si mohla dovoliť kúpu bytu. 
                Všetko bolo jasne vysvetlené a pod kontrolou."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  J
                </div>
                <div>
                  <h4 className="font-semibold text-[#202325]">Ján Horváth</h4>
                  <p className="text-sm text-gray-600">Nitra</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Profesionálny prístup a individuálne riešenia. Pomohol mi 
                optimalizovať moje investície a poistenie."
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  L
                </div>
                <div>
                  <h4 className="font-semibold text-[#202325]">Lucia Tóthová</h4>
                  <p className="text-sm text-gray-600">Banská Bystrica</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Skvelé poradenstvo pri plánovaní dôchodku. Teraz mám istotu, 
                že moja budúcnosť je zabezpečená."
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-[#202325]">Martin Varga</h4>
                  <p className="text-sm text-gray-600">Trnava</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Doporučujem všetkým podnikateľom. Pomohol mi optimalizovať 
                firemné financie a daňové plánovanie."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#202325] text-center mb-12">
            Naše výsledky
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#5ECAD5] mb-2">500+</div>
              <div className="text-lg text-[#202325]">Spokojných klientov</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#5ECAD5] mb-2">10+</div>
              <div className="text-lg text-[#202325]">Rokov skúseností</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#5ECAD5] mb-2">98%</div>
              <div className="text-lg text-[#202325]">Spokojnosť klientov</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#5ECAD5] mb-2">24/7</div>
              <div className="text-lg text-[#202325]">Dostupnosť</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#202325]">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Staňte sa ďalším spokojným klientom
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktujte ma a dohodneme si bezplatnú konzultáciu
          </p>
          <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg">
            Bezplatná konzultácia
          </button>
        </div>
      </section>
    </main>
  );
} 