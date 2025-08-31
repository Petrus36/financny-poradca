import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const blogPosts = await prisma.blogPost.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, url, imageUrl } = body;

    if (!title || !description || !url || !imageUrl) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const blogPost = await prisma.blogPost.create({
      data: {
        title,
        description,
        url,
        imageUrl
      }
    });

    return NextResponse.json(blogPost, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Blog post ID is required' },
        { status: 400 }
      );
    }

    // First, get the blog post to retrieve the image URL
    const blogPost = await prisma.blogPost.findUnique({
      where: { id }
    });

    if (!blogPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Delete the blog post from database
    await prisma.blogPost.delete({
      where: { id }
    });

    // Delete the image file if it's stored locally
    if (blogPost.imageUrl && blogPost.imageUrl.startsWith('/blog-images/')) {
      try {
        const fs = require('fs');
        const path = require('path');
        const imagePath = path.join(process.cwd(), 'public', blogPost.imageUrl);
        
        // Check if file exists before trying to delete
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
          console.log('Image file deleted:', imagePath);
        }
      } catch (fileError) {
        console.error('Error deleting image file:', fileError);
        // Don't fail the whole operation if image deletion fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
