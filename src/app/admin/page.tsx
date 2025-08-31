'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Hardcoded admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'financny2024';

interface FormSubmission {
  id: string;
  financialLiteracy: string;
  products: string[];
  interests: string;
  topics: string[];
  name: string;
  surname: string;
  phone: string | null;
  email: string | null;
  createdAt: string;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if already logged in (stored in sessionStorage)
    const loggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    if (loggedIn) {
      setIsLoggedIn(true);
      fetchSubmissions();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      sessionStorage.setItem('adminLoggedIn', 'true');
      fetchSubmissions();
    } else {
      setError('Nesprávne prihlasovacie údaje');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('adminLoggedIn');
    setUsername('');
    setPassword('');
    setSubmissions([]);
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/form-submission');
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
      } else {
        setError('Chyba pri načítavaní dát');
      }
    } catch (error) {
      setError('Chyba pri načítavaní dát');
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('sk-SK');
  };

  const openModal = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
    setShowModal(false);
  };

  // Filter submissions based on search term (by name)
  const filteredSubmissions = submissions.filter(submission => {
    const fullName = `${submission.name} ${submission.surname}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-3 sm:p-6">
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

        <div className="max-w-md w-full space-y-6 sm:space-y-8 p-4 sm:p-8">
          <div>
            <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
              Admin prihlásenie
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Používateľské meno
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Heslo
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Prihlásiť sa
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      {/* Blur overlay when modal is open */}
      <div className={`${showModal ? 'blur-sm' : ''} transition-all duration-300`}>
        {/* Header */}
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {loading ? 'Načítavam...' : 'Obnoviť'}
            </button>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200"
            >
              Odhlásiť sa
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Hľadať podľa mena..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchTerm && (
            <p className="mt-2 text-sm text-gray-600">
              Zobrazené: {filteredSubmissions.length} z {submissions.length} formulárov
            </p>
          )}
        </div>

        {/* Submissions Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-3 sm:px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Odoslané formuláre ({filteredSubmissions.length})
            </h2>
          </div>

          {error && (
            <div className="px-3 sm:px-6 py-4 bg-red-50 border-l-4 border-red-400">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {loading ? (
            <div className="px-3 sm:px-6 py-12 text-center">
              <div className="text-gray-500">Načítavam dáta...</div>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="px-3 sm:px-6 py-12 text-center">
              <div className="text-gray-500 text-sm sm:text-base">
                {searchTerm ? 'Žiadne formuláre nevyhovujú vyhľadávaniu' : 'Žiadne formuláre neboli odoslané'}
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Meno
                    </th>
                    <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kontakt
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gramotnosť
                    </th>
                    <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Záujem
                    </th>
                    <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dátum
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Akcie
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {submission.name} {submission.surname}
                        </div>
                        <div className="sm:hidden text-xs text-gray-500 mt-1">
                          {submission.phone && <div>📞 {submission.phone}</div>}
                          {submission.email && <div>📧 {submission.email}</div>}
                        </div>
                      </td>
                      <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {submission.phone && <div>📞 {submission.phone}</div>}
                          {submission.email && <div>📧 {submission.email}</div>}
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {submission.financialLiteracy}
                        </span>
                        <div className="md:hidden text-xs text-gray-500 mt-1 max-w-xs truncate">
                          {submission.interests}
                        </div>
                      </td>
                      <td className="hidden md:table-cell px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {submission.interests}
                        </div>
                      </td>
                      <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(submission.createdAt)}
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => openModal(submission)}
                          className="text-blue-600 hover:text-blue-900 text-xs sm:text-sm"
                        >
                          <span className="hidden sm:inline">Zobraziť detaily</span>
                          <span className="sm:hidden">Detaily</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Detailed View Modal */}
      {showModal && selectedSubmission && (
        <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-3 sm:p-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 pr-4">
                Detail formulára - {selectedSubmission.name} {selectedSubmission.surname}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold flex-shrink-0"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
              {/* Personal Information */}
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                <h4 className="text-base sm:text-lg font-semibold text-blue-900 mb-3">👤 Osobné údaje</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Meno:</span>
                    <p className="text-gray-900 font-medium">{selectedSubmission.name}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Priezvisko:</span>
                    <p className="text-gray-900 font-medium">{selectedSubmission.surname}</p>
                  </div>
                  {selectedSubmission.phone && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Telefón:</span>
                      <p className="text-gray-900 font-medium">📞 {selectedSubmission.phone}</p>
                    </div>
                  )}
                  {selectedSubmission.email && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">E-mail:</span>
                      <p className="text-gray-900 font-medium">📧 {selectedSubmission.email}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-sm font-medium text-gray-600">Dátum odoslania:</span>
                    <p className="text-gray-900 font-medium">📅 {formatDate(selectedSubmission.createdAt)}</p>
                  </div>
                </div>
              </div>

              {/* Financial Literacy */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-green-900 mb-3">📊 Finančná gramotnosť</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-600">Hodnotenie:</span>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    selectedSubmission.financialLiteracy === 'Skvelá' ? 'bg-green-100 text-green-800' :
                    selectedSubmission.financialLiteracy === 'Dobrá' ? 'bg-blue-100 text-blue-800' :
                    selectedSubmission.financialLiteracy === 'Priemerná' ? 'bg-yellow-100 text-yellow-800' :
                    selectedSubmission.financialLiteracy === 'Zlá' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {selectedSubmission.financialLiteracy}
                  </span>
                </div>
              </div>

              {/* Current Products */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">💼 Aktuálne využívané produkty</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSubmission.products.map((product, index) => (
                    <span
                      key={index}
                      className="inline-flex px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full"
                    >
                      {product}
                    </span>
                  ))}
                </div>
                {selectedSubmission.products.length === 0 && (
                  <p className="text-gray-500 italic">Žiadne produkty neboli vybrané</p>
                )}
              </div>

              {/* Main Interest */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">🎯 Hlavný záujem</h4>
                <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                  <p className="text-gray-900 font-medium">{selectedSubmission.interests}</p>
                </div>
              </div>

              {/* Selected Topics */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-indigo-900 mb-3">📚 Vybrané témy (2 najdôležitejšie)</h4>
                <div className="space-y-2">
                  {selectedSubmission.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-white p-3 rounded border-l-4 border-indigo-400"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-100 text-indigo-800 rounded-full text-sm font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-900 font-medium">{topic}</p>
                    </div>
                  ))}
                </div>
                {selectedSubmission.topics.length === 0 && (
                  <p className="text-gray-500 italic">Žiadne témy neboli vybrané</p>
                )}
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">📋 Súhrn</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
                  <div className="bg-white p-3 rounded shadow">
                    <p className="text-2xl font-bold text-blue-600">{selectedSubmission.products.length}</p>
                    <p className="text-sm text-gray-600">Produktov</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow">
                    <p className="text-2xl font-bold text-indigo-600">{selectedSubmission.topics.length}</p>
                    <p className="text-sm text-gray-600">Tém</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow">
                    <p className="text-2xl font-bold text-green-600">
                      {selectedSubmission.phone && selectedSubmission.email ? '2' : '1'}
                    </p>
                    <p className="text-sm text-gray-600">Kontaktov</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow">
                    <p className="text-2xl font-bold text-purple-600">
                      {selectedSubmission.financialLiteracy === 'Skvelá' ? '5' :
                       selectedSubmission.financialLiteracy === 'Dobrá' ? '4' :
                       selectedSubmission.financialLiteracy === 'Priemerná' ? '3' :
                       selectedSubmission.financialLiteracy === 'Zlá' ? '2' : '1'}/5
                    </p>
                    <p className="text-sm text-gray-600">Gramotnosť</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 p-3 sm:p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Zavrieť
              </button>
              <button
                onClick={() => {
                  const contactInfo = [
                    selectedSubmission.phone && `Telefón: ${selectedSubmission.phone}`,
                    selectedSubmission.email && `E-mail: ${selectedSubmission.email}`
                  ].filter(Boolean).join('\n');
                  
                  navigator.clipboard.writeText(contactInfo);
                  alert('Kontaktné údaje boli skopírované do schránky!');
                }}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Kopírovať kontakt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
