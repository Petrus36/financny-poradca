'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FormularPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    financialLiteracy: '',
    products: [] as string[],
    interests: '',
    topics: [] as string[],
    // New yes/no questions
    saveOnMortgage: false,
    saveOnInsurance: false,
    incomeSecurity: false,
    kidsFuture: false,
    betterReturns: false,
    reviewExistingContracts: false,
    skFinancialLiteracy: '',
    name: '',
    surname: '',
    phone: '',
    email: ''
  });

  const handleProductChange = (product: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        products: [...prev.products, product]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        products: prev.products.filter(p => p !== product)
      }));
    }
  };

  const handleTopicChange = (topic: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        topics: [...prev.topics, topic]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        topics: prev.topics.filter(t => t !== topic)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.surname) {
      alert('Prosím vyplňte meno a priezvisko');
      return;
    }
    
    if (!formData.phone && !formData.email) {
      alert('Prosím vyplňte telefón alebo e-mail');
      return;
    }

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const result = await response.json();
        console.log('Success response:', result);
        alert('Formulár bol úspešne odoslaný! Ďakujeme za váš čas.');
        // Reset form
        setFormData({
          financialLiteracy: '',
          products: [],
          interests: '',
          topics: [],
          // New yes/no questions
          saveOnMortgage: false,
          saveOnInsurance: false,
          incomeSecurity: false,
          kidsFuture: false,
          betterReturns: false,
          reviewExistingContracts: false,
          skFinancialLiteracy: '',
          name: '',
          surname: '',
          phone: '',
          email: ''
        });
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('Server error:', errorData);
        throw new Error(`Server error: ${response.status} - ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Nastala chyba pri odosielaní formulára. Prosím skúste to znovu.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#202325] via-[#2A2C2D] to-[#202325] flex items-center justify-center p-3 sm:p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles with brand colors */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#5ECAD5]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-[#7FE3DC]/15 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-32 w-16 h-16 bg-[#5ECAD5]/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-[#4BB8C4]/10 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        {/* Additional brand-colored elements */}
        <div className="absolute top-20 right-40 w-6 h-6 bg-[#7FE3DC]/25 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-32 left-16 w-10 h-10 bg-[#5ECAD5]/15 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Geometric shapes with brand colors */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-[#5ECAD5]/15 rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-[#7FE3DC]/20 rotate-12 animate-pulse"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #5ECAD5 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Brand accent lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#5ECAD5]/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#7FE3DC]/15 to-transparent"></div>
      </div>
      {/* Back Button */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-md hover:bg-white text-gray-700 font-medium py-2 px-3 sm:px-4 rounded-lg transition duration-200 flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base border border-white/30 z-20"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="hidden sm:inline">Späť na domov</span>
        <span className="sm:hidden">Späť</span>
      </button>

      <div className="w-full max-w-2xl mx-auto relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-[#5ECAD5]/20 p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-6 sm:mb-8">
            FINANČNÝ DOTAZNÍK
          </h1>

          {/* Question 1: Financial Literacy */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              1. Ako hodnotíte svoju finančnú gramotnosť?
            </h2>
            <div className="space-y-2 ml-2 sm:ml-4">
              {['Katastrofa', 'Zlá', 'Priemerná', 'Dobrá', 'Skvelá'].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="financialLiteracy"
                    value={option}
                    checked={formData.financialLiteracy === option}
                    onChange={(e) => setFormData(prev => ({ ...prev, financialLiteracy: e.target.value }))}
                    className="w-4 h-4 text-[#5ECAD5] focus:ring-[#5ECAD5]"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2: Products */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              2. Ktoré produkty dnes využívate?
            </h2>
            <p className="text-sm text-gray-500 ml-2 sm:ml-4">(zaškrtávacie políčka)</p>
            <div className="space-y-2 ml-2 sm:ml-4">
              {[
                'Bežný / sporiaci účet',
                'Hypotéka / úver',
                'Investície',
                'Poistenie (život, auto, nehnuteľnosť)',
                '2. / 3. pilier',
                'Iné'
              ].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.products.includes(option)}
                    onChange={(e) => handleProductChange(option, e.target.checked)}
                    className="w-4 h-4 text-[#5ECAD5] focus:ring-[#5ECAD5] rounded"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 3: Interests */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              3. Čo vás najviac trápi alebo zaujíma?
            </h2>
            <div className="space-y-2 ml-2 sm:ml-4">
              {[
                'Ako ušetriť na hypotéke',
                'Ako optimalizovať poistenia',
                'Ako mať zabezpečený príjem v prípade zdravotných problémov',
                'Ako zabezpečiť budúcnosť detí',
                'Ako zhodnotiť úspory/investície',
                'Ako platiť menej na daniach',
                'iné (možnosť napísania)'
              ].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="interests"
                    value={option}
                    checked={formData.interests === option}
                    onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
                    className="w-4 h-4 text-[#5ECAD5] focus:ring-[#5ECAD5]"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 4+: Client yes/no questions */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              4. Záujmové otázky (odpoveď áno/nie)
            </h2>
            <div className="space-y-3 ml-2 sm:ml-4">
              {/* 1 */}
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#5ECAD5]" checked={formData.saveOnMortgage} onChange={(e)=>setFormData(p=>({...p, saveOnMortgage: e.target.checked}))} />
                <span className="text-gray-700">
                  Chcete vedieť ako na hypotéke usporiť viac ako polovicu úrokov?
                  <span className="block text-gray-500 text-sm">(na hypotéke 150.000 € úspora 60.000 + skrátenie splácania o niekoľko rokov)</span>
                </span>
              </label>
              {/* 2 */}
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#5ECAD5]" checked={formData.saveOnInsurance} onChange={(e)=>setFormData(p=>({...p, saveOnInsurance: e.target.checked}))} />
                <span className="text-gray-700">
                  Chcete vedieť ako ušetriť na poistných zmluvách (optimalizácia)?
                  <span className="block text-gray-500 text-sm">(častokrát aj stovky eur ročne)</span>
                </span>
              </label>
              {/* 3 */}
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#5ECAD5]" checked={formData.incomeSecurity} onChange={(e)=>setFormData(p=>({...p, incomeSecurity: e.target.checked}))} />
                <span className="text-gray-700">
                  Chcete vedieť ako mať zabezpečený príjem v prípade zdravotných problémov?
                  <span className="block text-gray-500 text-sm">(súkromná PN, súkromný invalidný dôchodok, ...)</span>
                </span>
              </label>
              {/* 4 */}
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#5ECAD5]" checked={formData.kidsFuture} onChange={(e)=>setFormData(p=>({...p, kidsFuture: e.target.checked}))} />
                <span className="text-gray-700">
                  Chcete vedieť ako efektívne zabezpečiť finančnú budúcnosť vašich detí?
                  <span className="block text-gray-500 text-sm">(príklad – 15 rokov 50 € mes. → vklad 9.000 € → 1% p.a. = 9.750 € vs. 7% p.a. 16.133 €)</span>
                </span>
              </label>
              {/* 5 */}
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#5ECAD5]" checked={formData.betterReturns} onChange={(e)=>setFormData(p=>({...p, betterReturns: e.target.checked}))} />
                <span className="text-gray-700">
                  Chcete vedieť ako mať násobne viac peňazí vďaka dobrému zhodnocovaniu?
                  <span className="block text-gray-500 text-sm">(príklad - 100 € /mes. na 30 rokov → 2% p.a. = 49.655 € vs. 8% p.a. = 146.815 €)</span>
                </span>
              </label>
              {/* 6 */}
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#5ECAD5]" checked={formData.reviewExistingContracts} onChange={(e)=>setFormData(p=>({...p, reviewExistingContracts: e.target.checked}))} />
                <span className="text-gray-700">
                  Chcete vedieť, či vaše už uzatvorené zmluvy sú pre vás výhodné a majú zmysel?
                </span>
              </label>
            </div>
          </div>

          {/* Question 5: Public financial literacy perception */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              5. Ako hodnotíte finančnú gramotnosť na Slovensku?
            </h2>
            <div className="space-y-2 ml-2 sm:ml-4">
              {['Katastrofa', 'Zlá', 'Priemerná', 'Dobrá', 'Skvelá'].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="skFinancialLiteracy"
                    value={option}
                    checked={formData.skFinancialLiteracy === option}
                    onChange={(e) => setFormData(prev => ({ ...prev, skFinancialLiteracy: e.target.value }))}
                    className="w-4 h-4 text-[#5ECAD5] focus:ring-[#5ECAD5]"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 6: Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              6. Ako vás môžeme kontaktovať?
            </h2>
            <div className="space-y-4 ml-2 sm:ml-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meno *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ECAD5] focus:border-[#5ECAD5] text-[#202325] bg-white"
                    placeholder="Vaše meno"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priezvisko *
                  </label>
                  <input
                    type="text"
                    value={formData.surname}
                    onChange={(e) => setFormData(prev => ({ ...prev, surname: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ECAD5] focus:border-[#5ECAD5] text-[#202325] bg-white"
                    placeholder="Vaše priezvisko"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefónne číslo
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      const digitsOnly = e.target.value.replace(/[^0-9+ ]/g, '');
                      setFormData(prev => ({ ...prev, phone: digitsOnly }));
                    }}
                    inputMode="tel"
                    pattern="[+0-9 ]*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ECAD5] focus:border-[#5ECAD5] text-[#202325] bg-white"
                    placeholder="+421 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ECAD5] focus:border-[#5ECAD5] text-[#202325] bg-white"
                    placeholder="vas@email.com"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500">
                * Povinné polia. Vyplňte prosím aspoň telefónne číslo alebo e-mail.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Odoslať formulár
            </button>
          </div>
                  </form>
        </div>
      </div>
    </div>
  );
}
