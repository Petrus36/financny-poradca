#!/bin/bash

echo "🚀 Setting up Vercel Database Configuration"
echo "=========================================="
echo ""

echo "📋 Step 1: Create Vercel PostgreSQL Database"
echo "1. Go to https://vercel.com/dashboard"
echo "2. Select your 'financny_page' project"
echo "3. Go to Settings → Storage"
echo "4. Click 'Create Database'"
echo "5. Choose 'Postgres'"
echo "6. Follow the setup wizard"
echo "7. Copy the DATABASE_URL connection string"
echo ""

echo "📋 Step 2: Add Environment Variables in Vercel"
echo "1. In Vercel Dashboard → Settings → Environment Variables"
echo "2. Add new variable:"
echo "   Name: DATABASE_URL"
echo "   Value: [paste your PostgreSQL connection string]"
echo "   Environments: Production, Preview, Development"
echo ""

echo "📋 Step 3: Run Database Migration"
echo "After setting up the DATABASE_URL in Vercel:"
echo ""
echo "npm run db:push"
echo ""

echo "📋 Step 4: Deploy Your Application"
echo "1. Commit and push your changes to GitHub"
echo "2. Vercel will automatically redeploy"
echo "3. Test at: https://your-app.vercel.app/api/health"
echo ""

echo "✅ Setup Complete!"
echo "Your blog upload should now work on Vercel."
