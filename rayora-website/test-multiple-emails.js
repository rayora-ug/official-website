// Test sending to multiple addresses
const { Resend } = require('resend');

async function testMultipleEmails() {
  const resend = new Resend('re_fDSDupu8_KJiDjhekLqGAtffZr2nPgxAo');
  
  console.log('📧 Testing multiple email addresses...\n');
  
  const testEmails = [
    'contact@rayora.de',
    'info@rayora.de', // If this exists
  ];
  
  for (const email of testEmails) {
    try {
      console.log(`📮 Sending to: ${email}`);
      const result = await resend.emails.send({
        from: 'Rayora Test <contact@rayora.de>',
        to: [email],
        subject: `Delivery Test to ${email}`,
        html: `
          <h2>Email Delivery Test</h2>
          <p>This is a test email sent to <strong>${email}</strong></p>
          <p>Timestamp: ${new Date().toISOString()}</p>
          <p>If you receive this, email delivery is working for this address!</p>
        `,
      });
      
      if (result.error) {
        console.error(`❌ Failed to send to ${email}:`, result.error);
      } else {
        console.log(`✅ Sent to ${email} - ID: ${result.data?.id}`);
      }
      
    } catch (error) {
      console.error(`💥 Error sending to ${email}:`, error.message);
    }
    
    console.log(''); // Empty line for readability
  }
}

testMultipleEmails();
