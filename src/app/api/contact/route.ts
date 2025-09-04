import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(request: NextRequest) {
  try {
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

    return NextResponse.json(
      { 
        message: 'Kontaktný formulár bol úspešne odoslaný',
        id: contactSubmission.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating contact submission:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined
    });
    return NextResponse.json(
      { error: 'Chyba pri odosielaní formulára', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contactSubmissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(contactSubmissions);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      { error: 'Chyba pri načítavaní kontaktných formulárov' },
      { status: 500 }
    );
  }
}
