# 🚀 QUICK FIX FOR VERCEL BLOG UPLOAD

## The Problem
Your blog upload isn't working on Vercel because the database (PostgreSQL) is not connected.

## The Solution (3 Minutes)

### 1. Create Database in Vercel
- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Select your `financny_page` project
- **Settings** → **Storage** → **Create Database** → **Postgres**
- Copy the `DATABASE_URL`

### 2. Add Environment Variable
- **Settings** → **Environment Variables**
- **Add:** `DATABASE_URL` = `[paste your connection string]`
- **Select:** Production, Preview, Development

### 3. Deploy Database
Run this command locally:
```bash
npm run db:push
```

### 4. Redeploy
```bash
git add .
git commit -m "Fix database for Vercel"
git push
```

## Test It Works
1. Visit: `https://your-app.vercel.app/api/health`
2. Should show: `{"status":"ok","database":"connected"}`
3. Try uploading a blog post in admin panel

## That's It! 
Your blog upload will now work on Vercel. Both file uploads (Vercel Blob) and database saves (PostgreSQL) are properly configured.

---

**Need help?** All the scripts and detailed instructions are ready in your project.
