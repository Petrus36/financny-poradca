'use client';

import { useEffect, useState } from 'react';

interface DatabaseStatus {
  status: string;
  database: string;
  environment: string;
  databaseUrl: string;
  connected?: boolean;
  tables?: {
    blogPosts: number;
    formSubmissions: number;
    contactSubmissions: number;
  };
  error?: string;
  suggestion?: string;
}

export default function DatabaseStatusPage() {
  const [status, setStatus] = useState<DatabaseStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/health');
      const data = await response.json();
      setStatus(data);
    } catch (error) {
      console.error('Failed to fetch database status:', error);
      setStatus({
        status: 'error',
        database: 'error',
        environment: 'unknown',
        databaseUrl: 'unknown',
        error: 'Failed to connect to API'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>
          🔍 Database Status
        </h1>

        {loading ? (
          <div style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            Loading...
          </div>
        ) : (
          <>
            {/* Status Card */}
            <div style={{
              padding: '2rem',
              backgroundColor: status?.connected ? '#d4edda' : '#f8d7da',
              border: `2px solid ${status?.connected ? '#28a745' : '#dc3545'}`,
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: status?.connected ? '#155724' : '#721c24'
              }}>
                {status?.connected ? '✅ Database Connected' : '❌ Database Not Connected'}
              </h2>
              <p style={{ margin: '0.5rem 0' }}>
                <strong>Status:</strong> {status?.status}
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                <strong>Environment:</strong> {status?.environment}
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                <strong>DATABASE_URL:</strong> {status?.databaseUrl}
              </p>
            </div>

            {/* Tables Info */}
            {status?.tables && (
              <div style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                  📊 Database Tables
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}>
                      {status.tables.blogPosts}
                    </div>
                    <div style={{ color: '#666' }}>Blog Posts</div>
                  </div>
                  <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>
                      {status.tables.formSubmissions}
                    </div>
                    <div style={{ color: '#666' }}>Form Submissions</div>
                  </div>
                  <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107' }}>
                      {status.tables.contactSubmissions}
                    </div>
                    <div style={{ color: '#666' }}>Contact Submissions</div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Info */}
            {status?.error && (
              <div style={{
                padding: '2rem',
                backgroundColor: '#fff3cd',
                border: '2px solid #ffc107',
                borderRadius: '8px',
                marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#856404' }}>
                  ⚠️ Error Details
                </h3>
                <p style={{ margin: '0.5rem 0', color: '#856404' }}>
                  <strong>Error:</strong> {status.error}
                </p>
                {status.suggestion && (
                  <p style={{ margin: '0.5rem 0', color: '#856404' }}>
                    <strong>Suggestion:</strong> {status.suggestion}
                  </p>
                )}
              </div>
            )}

            {/* Instructions */}
            <div style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                📖 How to Fix
              </h3>
              
              {status?.databaseUrl === 'missing' && (
                <div>
                  <p style={{ marginBottom: '1rem' }}>
                    <strong>Step 1:</strong> Add DATABASE_URL to Vercel environment variables
                  </p>
                  <ol style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li>Go to Vercel Dashboard → Your Project</li>
                    <li>Click Settings → Environment Variables</li>
                    <li>Add DATABASE_URL with your PostgreSQL connection string</li>
                    <li>Save and redeploy</li>
                  </ol>
                </div>
              )}
              
              {status?.error?.includes('does not exist') && (
                <div>
                  <p style={{ marginBottom: '1rem' }}>
                    <strong>Step 2:</strong> Create database tables
                  </p>
                  <pre style={{
                    padding: '1rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                    overflow: 'auto'
                  }}>
{`# Set your database URL
$env:DATABASE_URL="your_connection_string"

# Push schema to database
npx prisma db push`}
                  </pre>
                </div>
              )}

              <div style={{ marginTop: '1.5rem' }}>
                <p>
                  <strong>Need more help?</strong> Check the QUICK_FIX.md or VERCEL_FIX.md files in your project root.
                </p>
              </div>
            </div>

            {/* Refresh Button */}
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button
                onClick={fetchStatus}
                style={{
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                🔄 Refresh Status
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

