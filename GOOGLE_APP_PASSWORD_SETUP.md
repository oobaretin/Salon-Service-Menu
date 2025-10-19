# Google App Password Setup Guide

## For Each Client's Salon

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click "2-Step Verification"
3. Follow the setup process (SMS or authenticator app)

### Step 2: Generate App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click "App passwords" (under 2-Step Verification)
3. Select "Mail" and "Other (custom name)"
4. Enter "Salon Booking System"
5. Copy the generated 16-character password

### Step 3: Configure Environment Variables
Create a `.env` file in your project root:

```env
# Salon Email Configuration
SALON_EMAIL=yourclient@salon.com
SALON_APP_PASSWORD=your-16-character-app-password

# Database Configuration (if using database)
DATABASE_URL=your-database-connection-string

# Optional: SMS notifications
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
```

### Step 4: Update Salon Information
In your `ServiceMenu.jsx` component, update the `SALON_INFO`:

```javascript
const SALON_INFO = {
  name: "Your Client's Salon Name",
  phone: "(555) 123-4567",
  email: "booking@yourclientsalon.com", // This should match SALON_EMAIL
  address: "123 Beauty Lane, Style City, SC 12345",
  hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
  // Remove bookingUrl - we're using the advanced modal now
  website: "https://yourclientsalon.com",
  instagram: "@yourclientsalon",
  description: "Professional salon services"
};
```

## Backend Integration Options

### Option 1: Node.js/Express Backend
```javascript
// server.js
const express = require('express');
const cors = require('cors');
const { bookAppointment, sendConfirmation } = require('./api/booking');

const app = express();
app.use(cors());
app.use(express.json());

// Booking endpoints
app.post('/api/book-appointment', bookAppointment);
app.post('/api/send-confirmation', sendConfirmation);

app.listen(3001, () => {
  console.log('Booking server running on port 3001');
});
```

### Option 2: Vercel Serverless Functions
Create `api/book-appointment.js`:
```javascript
// api/book-appointment.js
import { bookAppointment } from '../src/api/booking';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await bookAppointment(req, res);
  }
  res.status(405).json({ message: 'Method not allowed' });
}
```

### Option 3: Netlify Functions
Create `netlify/functions/book-appointment.js`:
```javascript
// netlify/functions/book-appointment.js
const { bookAppointment } = require('../../src/api/booking');

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    return await bookAppointment(event, context);
  }
  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method not allowed' })
  };
};
```

## Database Setup (Optional)

### For Simple Bookings (No Database)
- Bookings are sent via email only
- No persistent storage
- Good for small salons

### For Advanced Bookings (With Database)
```sql
-- Create bookings table
CREATE TABLE bookings (
  id VARCHAR(50) PRIMARY KEY,
  service VARCHAR(100) NOT NULL,
  variation VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration VARCHAR(20) NOT NULL,
  client_name VARCHAR(100) NOT NULL,
  client_phone VARCHAR(20) NOT NULL,
  client_email VARCHAR(100) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(20) NOT NULL,
  notes TEXT,
  status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Testing the Setup

### 1. Test Email Configuration
```javascript
// test-email.js
const nodemailer = require('nodemailer');

const testEmail = async () => {
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.SALON_EMAIL,
      pass: process.env.SALON_APP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.SALON_EMAIL,
      to: process.env.SALON_EMAIL,
      subject: 'Test Email',
      text: 'This is a test email from your salon booking system.'
    });
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Email failed:', error);
  }
};

testEmail();
```

### 2. Test Booking Flow
1. Fill out the booking form
2. Check that confirmation emails are sent
3. Verify both salon and client receive emails
4. Check email content and formatting

## Troubleshooting

### Common Issues:
1. **"Invalid credentials"** - Check app password is correct
2. **"Less secure app access"** - Use app passwords, not regular passwords
3. **"2FA not enabled"** - Must enable 2FA before creating app passwords
4. **Emails not sending** - Check spam folder, verify email addresses

### Security Notes:
- Never commit app passwords to version control
- Use environment variables for all sensitive data
- Rotate app passwords regularly
- Consider using a dedicated email service (SendGrid, Mailgun) for production

## Deployment Checklist

### Before Going Live:
- [ ] Google App Password configured
- [ ] Environment variables set
- [ ] Email templates tested
- [ ] Booking flow tested end-to-end
- [ ] Client information updated
- [ ] Database configured (if using)
- [ ] Backup strategy in place

### For Each New Client:
1. Set up their Google account with 2FA
2. Generate app password for their email
3. Update SALON_INFO with their details
4. Test booking flow with their email
5. Deploy to their domain
