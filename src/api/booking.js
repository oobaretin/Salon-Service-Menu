// Backend API endpoints for booking system
// This would typically be in your backend server (Node.js, Python, etc.)

// Example using Node.js with Express and Nodemailer
const nodemailer = require('nodemailer');

// Configure email transporter with Google App Password
const createTransporter = (salonEmail, appPassword) => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: salonEmail,
      pass: appPassword // Google App Password
    }
  });
};

// Book appointment endpoint
export const bookAppointment = async (req, res) => {
  try {
    const {
      service,
      variation,
      price,
      duration,
      clientName,
      clientPhone,
      clientEmail,
      preferredDate,
      preferredTime,
      notes,
      bookingId,
      salonEmail,
      salonName,
      salonPhone
    } = req.body;

    // Save booking to database (implement your database logic)
    const booking = {
      id: bookingId,
      service,
      variation,
      price,
      duration,
      clientName,
      clientPhone,
      clientEmail,
      preferredDate,
      preferredTime,
      notes,
      status: 'pending',
      createdAt: new Date()
    };

    // TODO: Save to your database
    // await saveBooking(booking);

    res.json({
      success: true,
      bookingId,
      message: 'Booking created successfully'
    });

  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to book appointment'
    });
  }
};

// Send confirmation emails
export const sendConfirmation = async (req, res) => {
  try {
    const { bookingData, salonInfo } = req.body;
    
    // Get salon's email credentials from environment or database
    const salonEmail = process.env.SALON_EMAIL || salonInfo.email;
    const appPassword = process.env.SALON_APP_PASSWORD; // Google App Password

    if (!appPassword) {
      throw new Error('Salon email credentials not configured');
    }

    const transporter = createTransporter(salonEmail, appPassword);

    // Email to salon (booking notification)
    const salonEmailContent = {
      from: salonEmail,
      to: salonEmail,
      subject: `New Booking: ${bookingData.service} - ${bookingData.variation}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Appointment Booking</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Booking Details</h3>
            <p><strong>Booking ID:</strong> ${bookingData.bookingId}</p>
            <p><strong>Service:</strong> ${bookingData.service} - ${bookingData.variation}</p>
            <p><strong>Price:</strong> $${bookingData.price}</p>
            <p><strong>Duration:</strong> ${bookingData.duration}</p>
            <p><strong>Date:</strong> ${bookingData.preferredDate}</p>
            <p><strong>Time:</strong> ${bookingData.preferredTime}</p>
          </div>

          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Client Information</h3>
            <p><strong>Name:</strong> ${bookingData.clientName}</p>
            <p><strong>Phone:</strong> ${bookingData.clientPhone}</p>
            <p><strong>Email:</strong> ${bookingData.clientEmail}</p>
            ${bookingData.notes ? `<p><strong>Notes:</strong> ${bookingData.notes}</p>` : ''}
          </div>

          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;"><strong>Action Required:</strong> Please confirm this appointment with the client.</p>
          </div>

          <p style="color: #6b7280; font-size: 14px;">
            This booking was created through your website booking system.
          </p>
        </div>
      `
    };

    // Email to client (confirmation)
    const clientEmailContent = {
      from: salonEmail,
      to: bookingData.clientEmail,
      subject: `Appointment Confirmed - ${bookingData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Appointment Confirmed!</h2>
          
          <p>Hi ${bookingData.clientName},</p>
          
          <p>Your appointment has been successfully booked. Here are the details:</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Appointment Details</h3>
            <p><strong>Booking ID:</strong> ${bookingData.bookingId}</p>
            <p><strong>Service:</strong> ${bookingData.service} - ${bookingData.variation}</p>
            <p><strong>Price:</strong> $${bookingData.price}</p>
            <p><strong>Duration:</strong> ${bookingData.duration}</p>
            <p><strong>Date:</strong> ${bookingData.preferredDate}</p>
            <p><strong>Time:</strong> ${bookingData.preferredTime}</p>
          </div>

          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Important Information</h3>
            <ul style="color: #374151;">
              <li>Please arrive 10 minutes early</li>
              <li>Bring a valid ID</li>
              <li>Cancel 24 hours in advance if needed</li>
              <li>Contact us at ${salonInfo.phone} for any changes</li>
            </ul>
          </div>

          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;"><strong>Next Steps:</strong> We'll contact you within 24 hours to confirm your appointment time.</p>
          </div>

          <p style="color: #6b7280; font-size: 14px;">
            Thank you for choosing ${salonInfo.name}!<br>
            <strong>${salonInfo.name}</strong><br>
            Phone: ${salonInfo.phone}<br>
            Email: ${salonInfo.email}
          </p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(salonEmailContent);
    await transporter.sendMail(clientEmailContent);

    res.json({
      success: true,
      message: 'Confirmation emails sent successfully'
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send confirmation emails'
    });
  }
};

// Send reminder email (to be called by a cron job)
export const sendReminder = async (bookingId) => {
  try {
    // TODO: Get booking from database
    // const booking = await getBooking(bookingId);
    
    // TODO: Send reminder email to client
    // Implementation for reminder emails
    
    console.log(`Reminder sent for booking ${bookingId}`);
  } catch (error) {
    console.error('Reminder error:', error);
  }
};
