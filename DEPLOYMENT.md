# Deployment Guide for Vercel

## Problem
Your application works locally with SQLite but fails on Vercel because Vercel's serverless functions don't support persistent file storage (SQLite files).

## Solution
Switch to PostgreSQL for production while keeping SQLite for local development.

## Steps to Deploy

### 1. Create a Free PostgreSQL Database

**Option A: Neon (Recommended)**
1. Go to [neon.tech](https://neon.tech)
2. Sign up for free
3. Create a new project
4. Copy the connection string (starts with `postgresql://`)

**Option B: Vercel Postgres**
1. Go to your Vercel dashboard
2. Select your project
3. Go to Storage tab
4. Create a Postgres database
5. Copy the connection string

### 2. Configure Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name**: `DATABASE_URL`
   - **Value**: Your PostgreSQL connection string (e.g., `postgresql://username:password@hostname:port/database?sslmode=require`)
   - **Environments**: Production, Preview, Development

### 3. Deploy Database Schema

After setting up the database URL in Vercel:

1. **Deploy your application to Vercel** (this will generate the Prisma client)
2. **Run migration from your local machine**:
   ```bash
   # Set the production database URL temporarily
   $env:DATABASE_URL="your_postgresql_connection_string_here"
   
   # Create and deploy the migration
   npx prisma migrate dev --name init
   
   # Or if you prefer to deploy directly:
   npx prisma db push
   ```

### 4. Verify Deployment

1. Your Vercel deployment should now work with the PostgreSQL database
2. Test form submissions on your live site
3. Check the admin panel to see if data is being saved

## Local Development

- Your local development will continue using SQLite
- Create a `.env.local` file with: `DATABASE_URL="file:./prisma/dev.db"`
- The production environment will use the PostgreSQL database set in Vercel

## Troubleshooting

If you still encounter issues:

1. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard → Functions → View Function Logs
   
2. **Verify Environment Variables**:
   - Ensure `DATABASE_URL` is set in Vercel settings
   
3. **Check Database Connection**:
   - Ensure your PostgreSQL database allows connections from Vercel
   - Most services like Neon automatically allow this

## Changes Made

✅ Updated `prisma/schema.prisma` to use PostgreSQL  
✅ Added `postinstall` script to `package.json`  
✅ Modified build script to generate Prisma client  
✅ Created example environment file  

Your application is now ready for Vercel deployment with PostgreSQL!
