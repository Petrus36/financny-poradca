import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {

    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(7);
    const extension = path.extname(file.name);
    const filename = `blog-${timestamp}-${randomString}${extension}`;

    if (process.env.NODE_ENV === 'production') {
      // Use Vercel Blob storage in production
      const blob = await put(filename, file, {
        access: 'public',
      });

      return NextResponse.json({ 
        success: true, 
        imageUrl: blob.url,
        filename 
      });
    } else {
      // Use local filesystem in development
      const uploadDir = path.join(process.cwd(), 'public', 'blog-images');
      const filePath = path.join(uploadDir, filename);

      // Create directory if it doesn't exist
      const fs = await import('fs');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      await writeFile(filePath, buffer);

      // Return the public URL
      const imageUrl = `/blog-images/${filename}`;

      return NextResponse.json({ 
        success: true, 
        imageUrl,
        filename 
      });
    }

  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
