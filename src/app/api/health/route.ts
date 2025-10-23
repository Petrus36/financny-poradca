import { NextResponse } from 'next/server';
import { getDatabaseStatus } from '@/lib/prisma';

export async function GET() {
  try {
    const dbStatus = await getDatabaseStatus();
    
    const response = {
      status: dbStatus.connected ? 'ok' : 'error',
      database: dbStatus.connected ? 'connected' : 'disconnected',
      environment: process.env.NODE_ENV,
      databaseUrl: process.env.DATABASE_URL ? 'configured' : 'missing',
      timestamp: new Date().toISOString(),
      ...dbStatus
    };
    
    return NextResponse.json(
      response,
      { status: dbStatus.connected ? 200 : 500 }
    );
    
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json(
      { 
        status: 'error',
        database: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
        environment: process.env.NODE_ENV,
        databaseUrl: process.env.DATABASE_URL ? 'configured' : 'missing'
      },
      { status: 500 }
    );
  }
}
