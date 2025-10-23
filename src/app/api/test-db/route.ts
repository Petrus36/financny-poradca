import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function GET() {
  try {
    console.log('Testing database connection...');
    
    // Create a new Prisma client instance
    const prisma = new PrismaClient({
      log: ['error', 'warn', 'info'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });

    console.log('Prisma client created');
    
    // Test basic connection
    await prisma.$connect();
    console.log('Database connected successfully');
    
    // Test a simple query
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('Query result:', result);
    
    // Test table existence
    const tableCheck = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('form_submissions', 'blog_posts', 'contact_submissions')
    `;
    console.log('Tables found:', tableCheck);
    
    await prisma.$disconnect();
    console.log('Database disconnected');
    
    return NextResponse.json({
      success: true,
      message: 'Database connection test successful',
      tables: tableCheck,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Database test failed:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      name: error instanceof Error ? error.name : 'Unknown',
      stack: error instanceof Error ? error.stack : 'No stack'
    });
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      errorType: error instanceof Error ? error.constructor.name : 'Unknown',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
