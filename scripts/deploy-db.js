#!/usr/bin/env node

/**
 * Database Deployment Script for Vercel
 * 
 * This script helps deploy your Prisma schema to Vercel's PostgreSQL database.
 * Run this after setting up your DATABASE_URL environment variable in Vercel.
 */

const { execSync } = require('child_process');

console.log('🚀 Deploying database schema to Vercel...\n');

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL environment variable is not set!');
  console.log('\n📝 To fix this:');
  console.log('1. Set up PostgreSQL database in Vercel Dashboard');
  console.log('2. Add DATABASE_URL to your environment variables');
  console.log('3. Run this script again');
  process.exit(1);
}

console.log('🔗 Database URL found:', process.env.DATABASE_URL.substring(0, 20) + '...');

try {
  // Generate Prisma client
  console.log('📦 Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  // Push schema to database
  console.log('\n🗄️  Pushing schema to database...');
  execSync('npx prisma db push', { stdio: 'inherit' });
  
  // Seed initial data if needed
  console.log('\n🌱 Checking if database needs seeding...');
  try {
    execSync('node scripts/seed-data.js', { stdio: 'inherit' });
  } catch (seedError) {
    console.log('ℹ️  Seeding skipped (database may already have data)');
  }
  
  console.log('\n✅ Database deployment completed successfully!');
  console.log('\n📝 Next steps:');
  console.log('1. Commit and push your changes to GitHub');
  console.log('2. Vercel will automatically redeploy');
  console.log('3. Test at: https://your-app.vercel.app/api/health');
  console.log('4. Try uploading a blog post in admin panel');
  
} catch (error) {
  console.error('\n❌ Database deployment failed:', error.message);
  console.log('\n🔍 Troubleshooting:');
  console.log('1. Verify DATABASE_URL is correct PostgreSQL connection string');
  console.log('2. Check if database server is accessible');
  console.log('3. Ensure database user has proper permissions');
  console.log('4. Try running: npx prisma db push --force-reset');
  process.exit(1);
}
