import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(request: NextRequest) {
  try {
    // Verify database connection first
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL not configured');
      return NextResponse.json(
        { 
          error: 'Database not configured',
          details: 'DATABASE_URL environment variable is missing'
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, surname, phone, email, message } = body;

    // Validate required fields
    if (!name || !surname || !email) {
      return NextResponse.json(
        { error: 'Meno, priezvisko a email sú povinné polia' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Neplatný formát emailu' },
        { status: 400 }
      );
    }

    console.log('📧 Attempting to save contact submission...');

    // Create contact submission
    const contactSubmission = await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        surname: surname.trim(),
        phone: phone?.trim() || null,
        email: email.trim(),
        message: message?.trim() || null,
      },
    });

    console.log('✅ Contact submission saved successfully:', contactSubmission.id);

    return NextResponse.json(
      { 
        message: 'Kontaktný formulár bol úspešne odoslaný',
        id: contactSubmission.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Error creating contact submission:', error);
    const err = error as { message?: string; stack?: string; name?: string; code?: string };
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined,
      code: err.code
    });

    let errorMessage = 'Chyba pri odosielaní formulára';
    let errorDetails = err.message || 'Unknown error';
    
    if (err.code === 'P2021' || errorDetails.includes('does not exist')) {
      errorMessage = 'Database tables not created';
      errorDetails = 'Please run database migrations: npx prisma db push';
    } else if (errorDetails.includes('connect')) {
      errorMessage = 'Cannot connect to database';
      errorDetails = 'Check DATABASE_URL configuration';
    }

    return NextResponse.json(
      { error: errorMessage, details: errorDetails },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL not configured');
      return NextResponse.json(
        { 
          error: 'Database not configured',
          details: 'DATABASE_URL environment variable is missing'
        },
        { status: 500 }
      );
    }

    console.log('📊 Fetching contact submissions...');
    const contactSubmissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log(`✅ Found ${contactSubmissions.length} contact submissions`);
    return NextResponse.json(contactSubmissions);
  } catch (error) {
    console.error('❌ Error fetching contact submissions:', error);
    
    let errorMessage = 'Chyba pri načítavaní kontaktných formulárov';
    const err = error as { message?: string; code?: string };
    let errorDetails = err.message || 'Unknown error';
    
    if (err.code === 'P2021' || errorDetails.includes('does not exist')) {
      errorMessage = 'Database tables not created';
      errorDetails = 'Please run database migrations: npx prisma db push';
    } else if (errorDetails.includes('connect')) {
      errorMessage = 'Cannot connect to database';
      errorDetails = 'Check DATABASE_URL configuration';
    }

    return NextResponse.json(
      { error: errorMessage, details: errorDetails },
      { status: 500 }
    );
  }
}
