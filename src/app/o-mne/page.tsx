import React from "react";

export default function OMnePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Split Background */}
      <section className="relative flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[600px]">
        {/* Left Side - Dark Grey */}
        <div className="w-full lg:w-1/2 bg-[#202325] flex items-center justify-center relative py-12 lg:py-0">
          <div className="text-center text-white px-4 sm:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">O MNE</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-md mx-auto leading-relaxed">
              Nie len o dalš klienta, Ste človek, ktorému pomáham postaviť zdravý finančný život.
            </p>
            <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto">
              Bezplatná konzultácia
            </button>
          </div>
        </div>

        {/* Right Side - Light Grey */}
        <div className="w-full lg:w-1/2 bg-[#EBEBEB] flex items-center justify-center lg:justify-end relative py-12 lg:py-0">
          {/* Diagonal Line Separator - hidden on mobile */}
          <div 
            className="absolute left-0 top-0 w-full h-full hidden lg:block"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, transparent 40%, #202325 40%, #202325 100%)'
            }}
          ></div>
          
          {/* Advisor Image */}
          <div className="relative z-10">
            <div className="w-64 md:w-80 h-80 md:h-96 bg-gray-300 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
              <span className="text-gray-500 text-lg">[Foto poradcu]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Moja cesta Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#202325] text-center mb-6 md:mb-8">
            Moja cesta
          </h2>
          <div className="text-justify text-base md:text-lg text-[#202325] leading-relaxed">
            <p>
              Študoval som na gymnáziu v Bratislave, kde som získal základné vzdelanie. 
              Počas svojho profesionálneho a aktívneho života som sa venoval financiám 
              a pomáham klientom dosahovať ich finančné ciele. Po 28 rokoch v oblasti 
              financií mám bohaté skúsenosti a pomáham ľuďom budovať zdravý finančný život.
            </p>
          </div>
        </div>
      </section>

      {/* Výhody našej spolupráce Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#202325] text-center mb-8 md:mb-12">
            Výhody našej spolupráce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5ECAD5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#202325] mb-2">
                    Komplexný pohľad - poistenie, úvery aj investície v jednom pláne.
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5ECAD5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#202325] mb-2">
                    Osobné poradenstvo - individuálny prístup ku každému klientovi.
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5ECAD5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#202325] mb-2">
                    Dlhodobá spolupráca - budujeme vzťahy na dôvere a výsledkoch.
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5ECAD5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#202325] mb-2">
                    Transparentnosť - jasné informácie o všetkých službách a poplatkoch.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moje úspechy Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#202325] text-center mb-8 md:mb-12">
            MOJE ÚSPECHY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-[#202325] text-white p-4 md:p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#5ECAD5]">15+</div>
              <div className="text-sm md:text-lg">ROKOV NA TRHU</div>
            </div>
            <div className="bg-[#202325] text-white p-4 md:p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#5ECAD5]">400</div>
              <div className="text-sm md:text-lg">SPOKOJNÝCH KLIENTOV</div>
            </div>
            <div className="bg-[#202325] text-white p-4 md:p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#5ECAD5]">98%</div>
              <div className="text-sm md:text-lg">SPOKOJNOSŤ</div>
            </div>
            <div className="bg-[#202325] text-white p-4 md:p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#5ECAD5]">50</div>
              <div className="text-sm md:text-lg">SPOLUPRACOVNÍKOV</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partneri Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#202325] text-center mb-4 md:mb-6">
            PARTNERI
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-8 md:mb-12">
            Spolupracujeme s najlepšími finančnými inštitúciami
          </p>
          
          <div className="relative">
            {/* Navigation arrows */}
            <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-[#5ECAD5] text-xl md:text-2xl cursor-pointer">
              ‹
            </div>
            <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-[#5ECAD5] text-xl md:text-2xl cursor-pointer">
              ›
            </div>
            
            {/* Partner logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 items-center">
              <div className="bg-gray-200 h-12 md:h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm md:text-base">365.bank</span>
              </div>
              <div className="bg-gray-200 h-12 md:h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm md:text-base">PRUDENTA</span>
              </div>
              <div className="bg-gray-200 h-12 md:h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm md:text-base">SLSP</span>
              </div>
              <div className="bg-gray-200 h-12 md:h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm md:text-base">CONSEQ</span>
              </div>
              <div className="bg-gray-200 h-12 md:h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm md:text-base">Union</span>
              </div>
              <div className="bg-gray-200 h-12 md:h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm md:text-base">OVB</span>
              </div>
              <div className="bg-gray-200 h-12 md:h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm md:text-base">Generali</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moje certifikáty Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#202325] text-center mb-8 md:mb-12">
            MOJE CERTIFIKÁTY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-48 md:w-64 h-60 md:h-80 bg-gray-200 rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center border-4 border-yellow-400">
                <span className="text-gray-500 text-sm md:text-base">[Certifikát 1]</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#202325] mb-2">
                Toto je názov certifikátu
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                There are many variations of passages of Lorem Ipsum available...
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 md:w-64 h-60 md:h-80 bg-gray-200 rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center border-4 border-yellow-400">
                <span className="text-gray-500 text-sm md:text-base">[Certifikát 2]</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#202325] mb-2">
                Toto je názov certifikátu
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                There are many variations of passages of Lorem Ipsum available...
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 md:w-64 h-60 md:h-80 bg-gray-200 rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center border-4 border-yellow-400">
                <span className="text-gray-500 text-sm md:text-base">[Certifikát 3]</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#202325] mb-2">
                Toto je názov certifikátu
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                There are many variations of passages of Lorem Ipsum available...
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 