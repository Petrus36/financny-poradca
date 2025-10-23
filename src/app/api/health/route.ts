import { NextResponse } from 'next/server';
import { getDatabaseStatus } from '@/lib/prisma';

export async function GET() {
  try {
    console.log('Health check started...');
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('VERCEL:', !!process.env.VERCEL);
    
    const dbStatus = await getDatabaseStatus();
    console.log('Database status:', dbStatus);
    
    const response = {
      status: dbStatus.connected ? 'ok' : 'error',
      database: dbStatus.connected ? 'connected' : 'disconnected',
      environment: process.env.NODE_ENV,
      databaseUrl: process.env.DATABASE_URL ? 'configured' : 'missing',
      timestamp: new Date().toISOString(),
      ...dbStatus
    };
    
    console.log('Health check response:', response);
    
    return NextResponse.json(
      response,
      { status: dbStatus.connected ? 200 : 500 }
    );
    
  } catch (error) {
    console.error('Health check failed:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack');
    
    return NextResponse.json(
      { 
        status: 'error',
        database: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
        environment: process.env.NODE_ENV,
        databaseUrl: process.env.DATABASE_URL ? 'configured' : 'missing',
        errorType: error instanceof Error ? error.constructor.name : 'Unknown',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
