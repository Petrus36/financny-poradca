import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';

export async function POST() {
  try {
    // Get all blog posts with their image URLs
    const blogPosts = await prisma.blogPost.findMany({
      select: { imageUrl: true }
    });

    // Get all image URLs from database
    const usedImageUrls = blogPosts
      .map(post => post.imageUrl)
      .filter(url => url.startsWith('/blog-images/'))
      .map(url => url.replace('/blog-images/', ''));

    // Get all files in the blog-images directory
    const imagesDir = path.join(process.cwd(), 'public', 'blog-images');
    
    if (!fs.existsSync(imagesDir)) {
      return NextResponse.json({ message: 'Blog images directory does not exist' });
    }

    const allFiles = fs.readdirSync(imagesDir);
    
    // Find orphaned files (files not referenced in database)
    const orphanedFiles = allFiles.filter(filename => !usedImageUrls.includes(filename));
    
    // Delete orphaned files
    let deletedCount = 0;
    for (const filename of orphanedFiles) {
      try {
        const filePath = path.join(imagesDir, filename);
        fs.unlinkSync(filePath);
        deletedCount++;
        console.log('Deleted orphaned image:', filename);
      } catch (error) {
        console.error('Error deleting file:', filename, error);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Cleanup completed. Deleted ${deletedCount} orphaned images.`,
      deletedFiles: orphanedFiles
    });

  } catch (error) {
    console.error('Error during cleanup:', error);
    return NextResponse.json(
      { error: 'Failed to cleanup images' },
      { status: 500 }
    );
  }
}
