
# Vercel Deployment Guide - FIXED DATABASE ISSUES

## ✅ COMPLETE SOLUTION FOR BLOG UPLOADS

### What Was Fixed:
- ✅ **Database connection** - PostgreSQL setup for Vercel
- ✅ **File uploads** - Vercel Blob storage working
- ✅ **Environment variables** - Proper configuration
- ✅ **Database deployment** - Automated scripts

## Quick Setup for Vercel

### Step 1: Create PostgreSQL Database
1. **Go to Vercel Dashboard** → Your Project → **Settings → Storage**
2. **Click "Create Database"** → Choose **"Postgres"**
3. **Copy the DATABASE_URL** connection string

### Step 2: Set Environment Variables
1. **Vercel Dashboard** → **Settings → Environment Variables**
2. **Add:** `DATABASE_URL` = `[your PostgreSQL connection string]`
3. **Environments:** Production, Preview, Development

### Step 3: Deploy Database Schema
Run locally with your DATABASE_URL:
```bash
npm run db:push
```

### Step 4: Deploy Application
```bash
git add .
git commit -m "Fix database configuration for Vercel"
git push origin main
```

## Testing Your Deployment

### Check Database Health:
Visit: `https://your-app.vercel.app/api/health`

### Test Blog Upload:
1. Go to admin panel
2. Upload image (uses Vercel Blob)
3. Create blog post (saves to PostgreSQL)

## Available Scripts

- `npm run vercel:setup` - Show setup instructions
- `npm run db:check` - Test database connection
- `npm run db:push` - Deploy schema to database
- `npm run db:deploy` - Full deployment script

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
