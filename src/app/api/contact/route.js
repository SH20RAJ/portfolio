// filepath: /Users/shaswatraj/Desktop/open-source/portfolio/src/app/api/contact/route.js
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Missing required fields' 
      }, { status: 400 });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid email address' 
      }, { status: 400 });
    }

    // Access Cloudflare environment
    const env = request.env;
    
    if (!env?.DB) {
      // Log the issue but don't fail the request
      console.warn('D1 database not available in current environment');
      
      // Still return success for development/testing environments
      return NextResponse.json({ 
        success: true, 
        message: 'Message received (development mode)' 
      }, { status: 200 });
    }
    
    try {
      // Use the DB from the Cloudflare environment
      const query = `
        INSERT INTO contacts (name, email, subject, message) 
        VALUES (?, ?, ?, ?)
      `;
      
      // Execute the query directly
      const result = await env.DB.prepare(query)
        .bind(name, email, subject, message)
        .run();
      
      if (!result.success) {
        throw new Error('Failed to store contact submission');
      }

      // Log success for monitoring
      console.log('Contact form submission stored successfully for ' + email);

      return NextResponse.json({ 
        success: true, 
        message: 'Your message has been received. Thank you for contacting us!' 
      });
    } catch (dbError) {
      // Database-specific error handling
      console.error('D1 database error:', dbError);
      
      // Return a user-friendly message without exposing DB errors
      return NextResponse.json({ 
        success: false, 
        message: 'We could not save your message at this time. Please try again later.' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    }, { status: 500 });
  }
}
