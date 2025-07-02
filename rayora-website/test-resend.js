// Test script to validate Resend API
const { Resend } = require('resend');

async function testResend() {
  const resend = new Resend('re_fDSDupu8_KJiDjhekLqGAtffZr2nPgxAo');
  
  try {
    console.log('🧪 Testing Resend API...');
    
    const result = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: ['contact@rayora.de'],
      subject: 'Resend API Test',
      html: '<h1>Test Email</h1><p>This is a test email from Resend API.</p>',
    });
    
    console.log('✅ Success!', result);
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

testResend();
