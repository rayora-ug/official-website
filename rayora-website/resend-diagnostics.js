// Comprehensive Resend diagnostics
const { Resend } = require('resend');

async function runDiagnostics() {
  const resend = new Resend('re_fDSDupu8_KJiDjhekLqGAtffZr2nPgxAo');
  
  console.log('🔧 Starting Resend Diagnostics...\n');
  
  try {
    // 1. Check domains
    console.log('1️⃣ Checking verified domains...');
    const domains = await resend.domains.list();
    console.log('📋 Domains:', JSON.stringify(domains, null, 2));
    
    // 2. Send test email
    console.log('\n2️⃣ Sending test email...');
    const result = await resend.emails.send({
      from: 'Test <contact@rayora.de>',
      to: ['contact@rayora.de'],
      subject: 'Resend Diagnostic Test',
      html: '<h1>Diagnostic Test</h1><p>If you receive this, email delivery is working!</p>',
    });
    
    console.log('📧 Email result:', JSON.stringify(result, null, 2));
    
    if (result.error) {
      console.error('❌ Email failed:', result.error);
    } else {
      console.log('✅ Email sent successfully! ID:', result.data?.id);
    }
    
  } catch (error) {
    console.error('💥 Diagnostic failed:', error);
  }
}

runDiagnostics();
