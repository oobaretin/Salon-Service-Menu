#!/usr/bin/env node

/**
 * Salon Service Menu - Client Setup Script
 * 
 * This script helps you quickly set up a new client by updating the salon information.
 * 
 * Usage: node setup-client.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function setupClient() {
  console.log('🎨 Salon Service Menu - Client Setup\n');
  
  try {
    // Read current salon data
    const salonDataPath = path.join(__dirname, 'src', 'data', 'salonData.js');
    let salonData = fs.readFileSync(salonDataPath, 'utf8');
    
    // Get client information
    const salonName = await question('Salon Name: ');
    const phone = await question('Phone Number: ');
    const email = await question('Email Address: ');
    const address = await question('Address: ');
    const hours = await question('Business Hours (e.g., Mon-Sat: 9AM-7PM): ');
    const bookingUrl = await question('Booking URL (Calendly, etc.): ');
    const website = await question('Website URL (optional): ');
    const instagram = await question('Instagram Handle (optional): ');
    const description = await question('Salon Description: ');
    
    // Update the SALON_INFO object
    const updatedSalonData = salonData.replace(
      /export const SALON_INFO = \{[\s\S]*?\};/,
      `export const SALON_INFO = {
  name: "${salonName}",
  phone: "${phone}",
  email: "${email}",
  address: "${address}",
  hours: "${hours}",
  bookingUrl: "${bookingUrl}",
  website: "${website || ''}",
  instagram: "${instagram || ''}",
  description: "${description}"
};`
    );
    
    // Write updated data
    fs.writeFileSync(salonDataPath, updatedSalonData);
    
    console.log('\n✅ Client setup complete!');
    console.log('📝 Updated salon information in src/data/salonData.js');
    console.log('🚀 Run "npm run dev" to start the development server');
    console.log('🌐 Your salon menu will be available at http://localhost:5173');
    
  } catch (error) {
    console.error('❌ Error setting up client:', error.message);
  } finally {
    rl.close();
  }
}

setupClient();
