#!/usr/bin/env node

/**
 * Production Database Setup Script
 * 
 * This script helps you set up your production database for Vercel deployment.
 * Run this after you've added DATABASE_URL to your Vercel environment variables.
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('🚀 Production Database Setup for Vercel\n');
  console.log('This script will help you set up your production database.\n');

  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.log('⚠️  DATABASE_URL is not set in your environment.\n');
    console.log('Please follow these steps:\n');
    console.log('1. Get your PostgreSQL connection string from:');
    console.log('   - Vercel Dashboard → Storage → Postgres');
    console.log('   - OR from neon.tech / supabase.com / other provider\n');
    console.log('2. Run this command (Windows PowerShell):');
    console.log('   $env:DATABASE_URL="your_connection_string_here"\n');
    console.log('3. Or (Mac/Linux):');
    console.log('   export DATABASE_URL="your_connection_string_here"\n');
    console.log('4. Then run this script again\n');
    
    const continueAnyway = await question('Do you want to enter the DATABASE_URL now? (y/n): ');
    
    if (continueAnyway.toLowerCase() === 'y') {
      const dbUrl = await question('\nPaste your DATABASE_URL: ');
      process.env.DATABASE_URL = dbUrl.trim();
    } else {
      console.log('\n❌ Exiting. Please set DATABASE_URL and try again.');
      rl.close();
      process.exit(1);
    }
  }

  console.log('\n✅ DATABASE_URL is set!');
  console.log('🔗 Database:', process.env.DATABASE_URL.substring(0, 40) + '...\n');

  // Test connection
  console.log('🔍 Testing database connection...\n');
  
  try {
    execSync('node scripts/check-db-connection.js', { 
      stdio: 'inherit',
      env: process.env 
    });
  } catch (error) {
    console.error('\n❌ Database connection test failed!\n');
    console.log('Please check:');
    console.log('1. Your DATABASE_URL is correct');
    console.log('2. Your database is accessible from your location');
    console.log('3. Your database allows external connections\n');
    
    const continueAnyway = await question('Do you want to continue anyway? (y/n): ');
    
    if (continueAnyway.toLowerCase() !== 'y') {
      console.log('\n❌ Exiting.');
      rl.close();
      process.exit(1);
    }
  }

  // Push schema to database
  console.log('\n📦 Deploying database schema...\n');
  
  const confirm = await question('This will create/update tables in your production database. Continue? (y/n): ');
  
  if (confirm.toLowerCase() !== 'y') {
    console.log('\n❌ Cancelled.');
    rl.close();
    process.exit(0);
  }

  try {
    console.log('\n🚀 Running: npx prisma db push\n');
    execSync('npx prisma db push', { 
      stdio: 'inherit',
      env: process.env 
    });
    
    console.log('\n✅ Database schema deployed successfully!\n');
  } catch (error) {
    console.error('\n❌ Failed to deploy database schema');
    console.error('Error:', error.message);
    rl.close();
    process.exit(1);
  }

  // Final verification
  console.log('\n🔍 Verifying setup...\n');
  
  try {
    execSync('node scripts/check-db-connection.js', { 
      stdio: 'inherit',
      env: process.env 
    });
  } catch (error) {
    console.error('\n⚠️  Verification failed, but schema was deployed.');
  }

  console.log('\n🎉 Setup complete!\n');
  console.log('Next steps:');
  console.log('1. Make sure DATABASE_URL is added to Vercel environment variables');
  console.log('2. Redeploy your app on Vercel');
  console.log('3. Visit https://your-app.vercel.app/api/health to verify\n');

  rl.close();
}

main().catch(error => {
  console.error('Unexpected error:', error);
  rl.close();
  process.exit(1);
});

