import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

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

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error('Error saving form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save submission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await prisma.formSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Parse JSON strings back to arrays
    const formattedSubmissions = submissions.map(submission => ({
      ...submission,
      products: JSON.parse(submission.products),
      topics: JSON.parse(submission.topics),
    }));

    return NextResponse.json(formattedSubmissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
