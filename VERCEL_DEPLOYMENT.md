# Vercel Deployment Guide

## Blog Image Management

### Local Development (localhost)
- ✅ **File uploads work** - You can drag & drop or select image files
- ✅ **Images stored locally** in `/public/blog-images/` folder
- ✅ **Automatic cleanup** when deleting blog posts

### Production (Vercel)
- ❌ **File uploads disabled** - Vercel serverless functions cannot write permanent files
- ✅ **URL-based images** - Use image URLs instead

## How to Add Images in Production

### Option 1: Use Free Image Hosting Services
1. **Imgur** (imgur.com)
   - Upload image → Copy direct link
   - Example: `https://i.imgur.com/abc123.jpg`

2. **Cloudinary** (cloudinary.com)
   - Free tier available
   - Professional image optimization
   - Example: `https://res.cloudinary.com/your-cloud/image/upload/v123/sample.jpg`

3. **Postimages** (postimages.org)
   - Simple free hosting
   - Direct image URLs

### Option 2: Host Images in Your Repository
1. **Add images to `/public/` folder** in your GitHub repo
2. **Use relative URLs** like `/my-image.jpg`
3. **Commit and push** to GitHub
4. **Vercel will serve** these static files

### Step-by-Step for Vercel:
1. **Go to Admin Panel** on your live site
2. **Click "Pridať príspevok"**
3. **You'll see a yellow notice** about production mode
4. **Enter image URL** in the URL field (required in production)
5. **Fill other fields** and save

## Technical Details

### Why File Uploads Don't Work on Vercel:
- **Serverless functions** are stateless
- **File system is read-only** during execution
- **No persistent storage** between requests
- **Files uploaded** would be lost after function ends

### What We've Implemented:
- **Environment detection** - Different behavior in production vs development
- **Helpful UI messages** - Clear guidance for production users
- **Graceful fallbacks** - URL input always available
- **Error handling** - Clear error messages when file upload attempted in production

## Recommended Workflow:
1. **Develop locally** with file uploads for convenience
2. **Use image URLs** when deploying to production
3. **Consider upgrading** to cloud storage solution for better user experience

## Future Improvements:
- Integrate with Cloudinary API for file uploads
- Add Vercel Blob storage for file handling
- Implement image optimization and compression
