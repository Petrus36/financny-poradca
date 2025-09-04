'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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

interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  createdAt: string;
}

interface ContactSubmission {
  id: string;
  name: string;
  surname: string;
  phone: string | null;
  email: string;
  message: string | null;
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
  
  // Blog management state
  const [activeTab, setActiveTab] = useState<'submissions' | 'blog' | 'contact'>('submissions');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: '',
    description: '',
    url: '',
    imageUrl: ''
  });
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  
  // Contact submissions state
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [contactLoading, setContactLoading] = useState(false);
  const [contactError, setContactError] = useState('');
  const [selectedContactSubmission, setSelectedContactSubmission] = useState<ContactSubmission | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    // Check if already logged in (stored in sessionStorage)
    const loggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    if (loggedIn) {
      setIsLoggedIn(true);
      fetchSubmissions();
      fetchBlogPosts();
      fetchContactSubmissions();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      sessionStorage.setItem('adminLoggedIn', 'true');
      fetchSubmissions();
      fetchBlogPosts();
      fetchContactSubmissions();
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

  // Blog management functions
  const fetchBlogPosts = async () => {
    setBlogLoading(true);
    try {
      const response = await fetch('/api/blog');
      if (response.ok) {
        const data = await response.json();
        setBlogPosts(data);
      } else {
        setBlogError('Chyba pri načítavaní blog príspevkov');
      }
    } catch (error) {
      setBlogError('Chyba pri načítavaní blog príspevkov');
      console.error('Error fetching blog posts:', error);
    } finally {
      setBlogLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    console.log('Uploading file:', file.name, file.size, 'bytes');

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Upload failed:', errorData);
      
      // Show more specific error messages
      if (errorData.details) {
        throw new Error(`${errorData.error}\n\nDetaily: ${errorData.details}`);
      }
      throw new Error(errorData.error || 'Failed to upload image');
    }

    const data = await response.json();
    console.log('Upload successful:', data);
    return data.imageUrl;
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Blog form submitted:', blogForm);
    console.log('Selected file:', selectedFile);
    setBlogLoading(true);
    
    try {
      let imageUrl = blogForm.imageUrl;

      // If a file was selected, upload it first
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      // Validate that we have an image URL
      if (!imageUrl) {
        console.log('No image URL provided');
        setBlogError('Musíte nahrať obrázok alebo zadať URL obrázka');
        setBlogLoading(false);
        return;
      }

      // Validate other required fields
      if (!blogForm.title || !blogForm.description || !blogForm.url) {
        console.log('Missing required fields:', { title: blogForm.title, description: blogForm.description, url: blogForm.url });
        setBlogError('Všetky polia sú povinné');
        setBlogLoading(false);
        return;
      }

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...blogForm,
          imageUrl
        }),
      });

      if (response.ok) {
        setShowBlogModal(false);
        setBlogForm({ title: '', description: '', url: '', imageUrl: '' });
        setSelectedFile(null);
        setImagePreview('');
        fetchBlogPosts();
        setBlogError('');
      } else {
        setBlogError('Chyba pri vytváraní blog príspevku');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
      setBlogError(error instanceof Error ? error.message : 'Chyba pri vytváraní blog príspevku');
    } finally {
      setBlogLoading(false);
    }
  };

  const deleteBlogPost = async (id: string) => {
    if (!confirm('Ste si istý, že chcete vymazať tento blog príspevok?')) {
      return;
    }

    try {
      const response = await fetch(`/api/blog?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBlogPosts();
      } else {
        setBlogError('Chyba pri mazaní blog príspevku');
      }
    } catch (error) {
      setBlogError('Chyba pri mazaní blog príspevku');
      console.error('Error deleting blog post:', error);
    }
  };

  const cleanupOrphanedImages = async () => {
    if (!confirm('Ste si istý, že chcete vymazať nepoužívané obrázky? Táto akcia je nevratná.')) {
      return;
    }

    setBlogLoading(true);
    try {
      const response = await fetch('/api/cleanup-images', {
        method: 'POST',
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        setBlogError('');
      } else {
        setBlogError('Chyba pri čistení obrázkov');
      }
    } catch (error) {
      setBlogError('Chyba pri čistení obrázkov');
      console.error('Error cleaning up images:', error);
    } finally {
      setBlogLoading(false);
    }
  };

  // Contact submissions functions
  const fetchContactSubmissions = async () => {
    setContactLoading(true);
    try {
      const response = await fetch('/api/contact');
      if (response.ok) {
        const data = await response.json();
        setContactSubmissions(data);
      } else {
        setContactError('Chyba pri načítavaní kontaktných formulárov');
      }
    } catch (error) {
      setContactError('Chyba pri načítavaní kontaktných formulárov');
      console.error('Error fetching contact submissions:', error);
    } finally {
      setContactLoading(false);
    }
  };

  const openContactModal = (submission: ContactSubmission) => {
    setSelectedContactSubmission(submission);
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setSelectedContactSubmission(null);
    setShowContactModal(false);
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
      {/* Main content - blur when modal is open */}
      <div className={`${showModal || showBlogModal ? 'blur-md' : ''} transition-all duration-300`}>
        {/* Header */}
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button
              onClick={
                activeTab === 'submissions' ? fetchSubmissions : 
                activeTab === 'blog' ? fetchBlogPosts : 
                fetchContactSubmissions
              }
              disabled={loading || blogLoading || contactLoading}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {(loading || blogLoading || contactLoading) ? 'Načítavam...' : 'Obnoviť'}
            </button>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200"
            >
              Odhlásiť sa
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('submissions')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'submissions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Formuláre ({submissions.length})
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'blog'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Blog ({blogPosts.length})
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contact'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Kontakt ({contactSubmissions.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'submissions' && (
          <>
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

          {error && activeTab === 'submissions' && (
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
          </>
        )}

        {/* Blog Management Section */}
        {activeTab === 'blog' && (
          <div className="space-y-6">
            {/* Blog Header with Add Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Blog príspevky ({blogPosts.length})
              </h2>
              <div className="flex space-x-3">
                <button
                  onClick={cleanupOrphanedImages}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>Vyčistiť obrázky</span>
                </button>
                <button
                  onClick={() => setShowBlogModal(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Pridať príspevok</span>
                </button>
              </div>
            </div>

            {/* Error Display */}
            {blogError && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-800">{blogError}</p>
              </div>
            )}

            {/* Blog Posts Grid */}
            {blogLoading ? (
              <div className="text-center py-12">
                <div className="text-gray-500">Načítavam blog príspevky...</div>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Zatiaľ žiadne blog príspevky.</p>
              </div>
            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="relative h-48">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                        <span className="text-gray-500">{formatDate(post.createdAt)}</span>
                        <a 
                          href={post.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                        >
                          Otvoriť link
                        </a>
                      </div>
                      <button
                        onClick={() => deleteBlogPost(post.id)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded transition duration-200 font-medium"
                      >
                        Vymazať
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Contact Submissions Section */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            {/* Contact Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Kontaktné formuláre ({contactSubmissions.length})
              </h2>
            </div>

            {/* Error Display */}
            {contactError && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-800">{contactError}</p>
              </div>
            )}

            {/* Contact Submissions Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-3 sm:px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Kontaktné formuláre ({contactSubmissions.length})
                </h2>
              </div>

              {contactLoading ? (
                <div className="px-3 sm:px-6 py-12 text-center">
                  <div className="text-gray-500">Načítavam kontaktné formuláre...</div>
                </div>
              ) : contactSubmissions.length === 0 ? (
                <div className="px-3 sm:px-6 py-12 text-center">
                  <p className="text-gray-500">Zatiaľ žiadne kontaktné formuláre.</p>
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
                          Správa
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
                      {contactSubmissions.map((submission) => (
                        <tr key={submission.id} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {submission.name} {submission.surname}
                            </div>
                            <div className="sm:hidden text-xs text-gray-500 mt-1">
                              {submission.phone && <div>📞 {submission.phone}</div>}
                              <div>📧 {submission.email}</div>
                            </div>
                          </td>
                          <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {submission.phone && <div>📞 {submission.phone}</div>}
                              <div>📧 {submission.email}</div>
                            </div>
                          </td>
                          <td className="px-3 sm:px-6 py-4">
                            <div className="text-sm text-gray-900 max-w-xs truncate">
                              {submission.message || 'Žiadna správa'}
                            </div>
                          </td>
                          <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(submission.createdAt)}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => openContactModal(submission)}
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
        )}
      </div>
      </div>

      {/* Blog Modal - Transparent overlay */}
      {showBlogModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full relative z-[70] border border-gray-200">
            <div className="flex justify-between items-center p-6 border-b bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Pridať nový blog príspevok</h3>
              <button
                onClick={() => {
                  setShowBlogModal(false);
                  setBlogForm({ title: '', description: '', url: '', imageUrl: '' });
                  setSelectedFile(null);
                  setImagePreview('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleBlogSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nadpis
                </label>
                <input
                  type="text"
                  required
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Zadajte nadpis článku..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Popis
                </label>
                <textarea
                  required
                  rows={3}
                  value={blogForm.description}
                  onChange={(e) => setBlogForm({ ...blogForm, description: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Zadajte popis článku..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL link
                </label>
                <input
                  type="url"
                  required
                  value={blogForm.url}
                  onChange={(e) => setBlogForm({ ...blogForm, url: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="https://example.com/clanok"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Obrázok
                </label>
                
                {/* File Upload */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Kliknite pre nahranie</span> alebo pretiahnite obrázok
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF (max. 5MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileSelect}
                      />
                    </label>
                  </div>

                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="relative">
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <Image
                          src={imagePreview}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedFile(null);
                          setImagePreview('');
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* URL Alternative */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">alebo</span>
                    </div>
                  </div>

                  <input
                    type="url"
                    value={blogForm.imageUrl}
                    onChange={(e) => setBlogForm({ ...blogForm, imageUrl: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Zadajte URL obrázka (voliteľné)"
                  />
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowBlogModal(false);
                    setBlogForm({ title: '', description: '', url: '', imageUrl: '' });
                    setSelectedFile(null);
                    setImagePreview('');
                  }}
                  className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200"
                >
                  Zrušiť
                </button>
                <button
                  type="submit"
                  disabled={blogLoading}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
                >
                  {blogLoading ? 'Ukladám...' : 'Uložiť'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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

      {/* Contact Submission Modal */}
      {showContactModal && selectedContactSubmission && (
        <div className="fixed inset-0 backdrop-blur-lg bg-black/20 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-3 sm:p-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 pr-4">
                Kontaktný formulár - {selectedContactSubmission.name} {selectedContactSubmission.surname}
              </h3>
              <button
                onClick={closeContactModal}
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
                    <p className="text-gray-900 font-medium">{selectedContactSubmission.name}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Priezvisko:</span>
                    <p className="text-gray-900 font-medium">{selectedContactSubmission.surname}</p>
                  </div>
                  {selectedContactSubmission.phone && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Telefón:</span>
                      <p className="text-gray-900 font-medium">📞 {selectedContactSubmission.phone}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-sm font-medium text-gray-600">E-mail:</span>
                    <p className="text-gray-900 font-medium">📧 {selectedContactSubmission.email}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Dátum odoslania:</span>
                    <p className="text-gray-900 font-medium">📅 {formatDate(selectedContactSubmission.createdAt)}</p>
                  </div>
                </div>
              </div>

              {/* Message */}
              {selectedContactSubmission.message && (
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">💬 Správa</h4>
                  <div className="bg-white p-3 rounded border-l-4 border-green-400">
                    <p className="text-gray-900 font-medium whitespace-pre-wrap">{selectedContactSubmission.message}</p>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 p-3 sm:p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={closeContactModal}
                className="w-full sm:w-auto px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Zavrieť
              </button>
              <button
                onClick={() => {
                  const contactInfo = [
                    `Meno: ${selectedContactSubmission.name} ${selectedContactSubmission.surname}`,
                    selectedContactSubmission.phone && `Telefón: ${selectedContactSubmission.phone}`,
                    `E-mail: ${selectedContactSubmission.email}`
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
