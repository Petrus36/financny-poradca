import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    // Verify database connection first
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL not configured');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database not configured',
          details: 'DATABASE_URL environment variable is missing'
        },
        { status: 500 }
      );
    }

    const data = await request.json();
    console.log('📝 Attempting to save form submission...');

    const submission = await prisma.formSubmission.create({
      data: {
        financialLiteracy: data.financialLiteracy,
        products: JSON.stringify(data.products),
        interests: data.interests,
        topics: JSON.stringify(data.topics || []),
        saveOnMortgage: !!data.saveOnMortgage,
        saveOnInsurance: !!data.saveOnInsurance,
        incomeSecurity: !!data.incomeSecurity,
        kidsFuture: !!data.kidsFuture,
        betterReturns: !!data.betterReturns,
        reviewExistingContracts: !!data.reviewExistingContracts,
        skFinancialLiteracy: data.skFinancialLiteracy || '',
        name: data.name,
        surname: data.surname,
        phone: data.phone || null,
        email: data.email || null,
      },
    });

    console.log('✅ Form submission saved successfully:', submission.id);
    return NextResponse.json({ success: true, id: submission.id });
  } catch (error: any) {
    console.error('❌ Error saving form submission:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to save submission';
    let errorDetails = error.message || 'Unknown error';
    
    if (error.code === 'P2021' || errorDetails.includes('does not exist')) {
      errorMessage = 'Database tables not created';
      errorDetails = 'Please run database migrations: npx prisma db push';
    } else if (errorDetails.includes('connect')) {
      errorMessage = 'Cannot connect to database';
      errorDetails = 'Check DATABASE_URL configuration';
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: errorDetails 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
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

    console.log('📊 Fetching form submissions...');
    const submissions = await prisma.formSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log(`✅ Found ${submissions.length} form submissions`);

    // Parse JSON strings back to arrays
    const formattedSubmissions = submissions.map(submission => ({
      ...submission,
      products: JSON.parse(submission.products),
      topics: JSON.parse(submission.topics),
    }));

    return NextResponse.json(formattedSubmissions);
  } catch (error: any) {
    console.error('❌ Error fetching submissions:', error);
    
    let errorMessage = 'Failed to fetch submissions';
    let errorDetails = error.message || 'Unknown error';
    
    if (error.code === 'P2021' || errorDetails.includes('does not exist')) {
      errorMessage = 'Database tables not created';
      errorDetails = 'Please run database migrations: npx prisma db push';
    } else if (errorDetails.includes('connect')) {
      errorMessage = 'Cannot connect to database';
      errorDetails = 'Check DATABASE_URL configuration';
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: errorDetails
      },
      { status: 500 }
    );
  }
}
