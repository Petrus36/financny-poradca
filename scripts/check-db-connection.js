#!/usr/bin/env node

/**
 * Database Connection Test Script
 * 
 * This script tests your database connection and provides diagnostic information.
 */

const { PrismaClient } = require('@prisma/client');

async function checkConnection() {
  console.log('🔍 Testing database connection...\n');
  
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is not set!');
    return false;
  }
  
  console.log('🔗 Database URL:', process.env.DATABASE_URL.substring(0, 30) + '...');
  
  const prisma = new PrismaClient({
    log: ['error', 'warn'],
  });
  
  try {
    // Test connection
    await prisma.$connect();
    console.log('✅ Database connection successful!');
    
    // Test table existence
    const blogCount = await prisma.blogPost.count();
    console.log(`📊 Blog posts in database: ${blogCount}`);
    
    const formCount = await prisma.formSubmission.count();
    console.log(`📋 Form submissions in database: ${formCount}`);
    
    return true;
    
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error(error.message);
    
    if (error.message.includes('does not exist')) {
      console.log('\n💡 Suggestion: Run "npm run db:push" to create tables');
    }
    
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

checkConnection()
  .then((success) => {
    if (success) {
      console.log('\n🎉 Database is ready for production!');
    } else {
      console.log('\n🔧 Database needs setup. Check the troubleshooting steps above.');
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
  });
