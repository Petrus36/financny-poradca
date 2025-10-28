import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set!')
  console.error('Please add DATABASE_URL to your Vercel environment variables')
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Test database connection
export async function testConnection() {
  try {
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}

// Helper to check database status
export async function getDatabaseStatus() {
  try {
    if (!process.env.DATABASE_URL) {
      return {
        connected: false,
        error: 'DATABASE_URL not configured',
        suggestion: 'Add DATABASE_URL to Vercel environment variables'
      }
    }

    await prisma.$connect()
    
    // Try to count records in each table
    const blogCount = await prisma.blogPost.count()
    const formCount = await prisma.formSubmission.count()
    const contactCount = await prisma.contactSubmission.count()

    return {
      connected: true,
      tables: {
        blogPosts: blogCount,
        formSubmissions: formCount,
        contactSubmissions: contactCount
      }
    }
  } catch (error) {
    console.error('Database status check failed:', error)
    
    const err = error as { message?: string; code?: string }
    if (err.message?.includes('does not exist') || err.code === 'P2021') {
      return {
        connected: false,
        error: 'Database tables do not exist',
        suggestion: 'Run: DATABASE_URL="your_connection_string" npx prisma db push'
      }
    }
    
    return {
      connected: false,
      error: err.message || 'Unknown error',
      suggestion: 'Check DATABASE_URL and database connection'
    }
  }
}
