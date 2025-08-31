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
      const response = await fetch('/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Formulár bol úspešne odoslaný! Ďakujeme za váš čas.');
        // Reset form
        setFormData({
          financialLiteracy: '',
          products: [],
          interests: '',
          topics: [],
          name: '',
          surname: '',
          phone: '',
          email: ''
        });
      } else {
        throw new Error('Chyba pri odosielaní formulára');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Nastala chyba pri odosielaní formulára. Prosím skúste to znovu.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3 sm:p-6 relative">
      {/* Back Button */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 sm:px-4 rounded-lg transition duration-200 flex items-center space-x-1 sm:space-x-2 shadow-md hover:shadow-lg text-sm sm:text-base"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="hidden sm:inline">Späť na domov</span>
        <span className="sm:hidden">Späť</span>
      </button>

      <div className="w-full max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
            Finančný dotazník
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
                    className="w-4 h-4 text-blue-600"
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
                'Iné (možnosť napísania)'
              ].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.products.includes(option)}
                    onChange={(e) => handleProductChange(option, e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
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
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 4: Topics */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              4. Vyberte si 2 témy, ktoré sú pre vás najdôležitejšie
            </h2>
            <p className="text-sm text-gray-500 ml-2 sm:ml-4">[drop-down alebo multi-choice s výberom z horeuvedených tém]</p>
            <div className="space-y-2 ml-2 sm:ml-4">
              {[
                'Ako ušetriť na hypotéke',
                'Ako optimalizovať poistenia',
                'Ako mať zabezpečený príjem v prípade zdravotných problémov',
                'Ako zabezpečiť budúcnosť detí',
                'Ako zhodnotiť úspory/investície',
                'Ako platiť menej na daniach'
              ].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.topics.includes(option)}
                    onChange={(e) => handleTopicChange(option, e.target.checked)}
                    disabled={!formData.topics.includes(option) && formData.topics.length >= 2}
                    className="w-4 h-4 text-blue-600 rounded disabled:opacity-50"
                  />
                  <span className={`text-gray-700 ${!formData.topics.includes(option) && formData.topics.length >= 2 ? 'opacity-50' : ''}`}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
            <p className="text-sm text-blue-600 ml-2 sm:ml-4">
              Vybrané: {formData.topics.length}/2
            </p>
          </div>

          {/* Question 5: Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              5. Ako vás môžeme kontaktovať?
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
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
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
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
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
            >
              Odoslať formulár
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
