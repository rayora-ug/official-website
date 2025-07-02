import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Always log the submission for debugging
    const submissionData = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    };
    
    console.log('📧 New Contact Form Submission:', submissionData);
    
    // In development or if no email service is configured, just log
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    if (isDevelopment) {
      console.log('🔧 Development Mode: Form submission logged above');
      console.log('📝 To receive emails, configure RESEND_API_KEY in .env.local');
    }

    // Send email if Resend is configured
    if (resend && process.env.RESEND_API_KEY) {
      try {
        const result = await resend.emails.send({
          from: 'Rayora Contact Form <contact@rayora.de>', // Using your verified domain
          to: ['contact@rayora.de'], // Your email address
          replyTo: email, // So you can reply directly to the person
          subject: `New Contact Form: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0; white-space: pre-wrap;">
                  ${message}
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                  Submitted on: ${new Date().toLocaleString()}
                </p>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p style="color: #666; font-size: 12px;">
                  You can reply directly to this email to respond to ${name}.
                </p>
              </div>
            </div>
          `,
        });
        
        console.log('✅ Email sent successfully!');
        console.log('📧 Email ID:', result.data?.id);
        console.log('📨 Email response:', JSON.stringify(result, null, 2));
        
        // Additional validation
        if (result.error) {
          console.error('⚠️ Email API returned error:', result.error);
          throw new Error(`Resend API error: ${result.error.message}`);
        }
        
        if (!result.data?.id) {
          console.error('⚠️ No email ID returned, possible delivery issue');
          throw new Error('No email ID returned from Resend');
        }
      } catch (emailError) {
        console.error('❌ Failed to send email:', emailError);
        // Don't fail the request if email fails, but inform the user
        return NextResponse.json(
          { 
            message: 'Form submitted successfully, but there was an issue sending the email notification. We have logged your message and will respond soon.',
            warning: 'Email delivery issue'
          },
          { status: 200 }
        );
      }
    } else {
      console.log('⚠️  RESEND_API_KEY not configured. Email not sent, but form data is logged.');
    }

    return NextResponse.json(
      { message: 'Thank you for your message! We have received it and will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('💥 Contact form error:', error);
    return NextResponse.json(
      { error: 'Sorry, there was an internal error. Please try again or contact us directly at contact@rayora.de' },
      { status: 500 }
    );
  }
}
