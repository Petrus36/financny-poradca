import { NextResponse } from 'next/server';
import { prisma, testConnection } from '@/lib/prisma';

export async function GET() {
  try {
    // Test database connection
    const isConnected = await testConnection();
    
    if (!isConnected) {
      return NextResponse.json(
        { 
          status: 'error',
          database: 'disconnected',
          message: 'Database connection failed'
        },
        { status: 500 }
      );
    }

    // Test a simple query
    const blogCount = await prisma.blogPost.count();
    
    return NextResponse.json({
      status: 'ok',
      database: 'connected',
      environment: process.env.NODE_ENV,
      blogPosts: blogCount,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json(
      { 
        status: 'error',
        database: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
        environment: process.env.NODE_ENV
      },
      { status: 500 }
    );
  }
}
