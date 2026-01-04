import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Email sender - use your verified domain or Resend's test domain
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
const FROM_NAME = 'Margarita Dautova'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source = 'unknown' } = body

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('RESEND_API_KEY not configured. Subscription logged:', { email, source })
      // Still return success in development so the form works
      return NextResponse.json(
        { success: true, message: 'Subscription successful! Check your inbox.' },
        { status: 200 }
      )
    }

    // Initialize Resend only when API key is available
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send the welcome email with the guide
    const { data, error } = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: email,
      subject: 'Your Career Pivot Playbook is here!',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Career Pivot Playbook</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="text-align: center; padding: 30px 0; border-bottom: 1px solid #e5e5e5;">
    <h1 style="font-family: Georgia, serif; font-size: 28px; color: #2c332d; margin: 0;">
      Margarita Dautova
    </h1>
    <p style="color: #666; font-size: 14px; margin: 5px 0 0;">Career & Transition Coach</p>
  </div>

  <div style="padding: 30px 0;">
    <h2 style="font-family: Georgia, serif; font-size: 24px; color: #2c332d; margin: 0 0 20px;">
      Your Career Pivot Playbook is ready!
    </h2>
    
    <p style="font-size: 16px; color: #555;">
      Hi there,
    </p>
    
    <p style="font-size: 16px; color: #555;">
      Thank you for downloading <strong>The Career Pivot Playbook</strong>. Inside, you'll find 5 frameworks that have helped hundreds of professionals navigate their next career move with clarity and confidence.
    </p>

    <div style="background: #f6f7f6; border-radius: 8px; padding: 25px; margin: 25px 0; text-align: center;">
      <p style="font-size: 18px; font-weight: 600; color: #2c332d; margin: 0 0 15px;">
        📖 Download Your Playbook
      </p>
      <a href="https://margarita-dautova-coaching.vercel.app/downloads/career-pivot-playbook.html" 
         style="display: inline-block; background: #5f7260; color: white; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 16px;">
        View Your Playbook
      </a>
      <p style="font-size: 13px; color: #888; margin: 15px 0 0;">
        Tip: Use your browser's Print function (Ctrl/Cmd+P) to save as PDF
      </p>
    </div>

    <h3 style="font-family: Georgia, serif; font-size: 18px; color: #2c332d; margin: 30px 0 15px;">
      What's inside:
    </h3>
    
    <ul style="font-size: 16px; color: #555; padding-left: 20px;">
      <li style="margin-bottom: 10px;">The "Stay or Go" Decision Matrix</li>
      <li style="margin-bottom: 10px;">5 Signs You're Ready for a Career Change</li>
      <li style="margin-bottom: 10px;">The Career Clarity Framework</li>
      <li style="margin-bottom: 10px;">How to Pivot Without Starting Over</li>
      <li style="margin-bottom: 10px;">Your 7-Day Next Steps Action Plan</li>
    </ul>

    <div style="background: #fff8e7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0;">
      <p style="font-size: 16px; color: #555; margin: 0;">
        <strong>Ready for personalized guidance?</strong><br>
        Book a free 30-minute strategy call and let's discuss your specific situation.
      </p>
      <a href="https://margarita-dautova-coaching.vercel.app/book" 
         style="display: inline-block; margin-top: 15px; color: #5f7260; font-weight: 600; text-decoration: underline;">
        Book your free call →
      </a>
    </div>

    <p style="font-size: 16px; color: #555;">
      Looking forward to helping you land your next career move,
    </p>
    
    <p style="font-size: 16px; color: #555;">
      <strong>Margarita</strong><br>
      <span style="color: #888;">PCC-Certified Career & Transition Coach</span>
    </p>
  </div>

  <div style="border-top: 1px solid #e5e5e5; padding-top: 20px; text-align: center;">
    <p style="font-size: 13px; color: #888; margin: 0;">
      Margarita Dautova Coaching | Munich, Germany<br>
      <a href="https://margarita-dautova-coaching.vercel.app" style="color: #5f7260;">margarita-dautova-coaching.vercel.app</a>
    </p>
    <p style="font-size: 12px; color: #aaa; margin: 10px 0 0;">
      You received this email because you signed up for the Career Pivot Playbook.<br>
      <a href="{{{unsubscribe_url}}}" style="color: #888;">Unsubscribe</a>
    </p>
  </div>

</body>
</html>
      `,
    })

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2))
      // Return success anyway - don't block the user experience
      // Log the error for debugging but let the user continue
      return NextResponse.json(
        { success: true, message: 'Thank you! Check your inbox for the playbook.' },
        { status: 200 }
      )
    }

    console.log('Email sent successfully:', { email, source, emailId: data?.id })

    return NextResponse.json(
      { success: true, message: 'Thank you! Check your inbox for the playbook.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error instanceof Error ? error.message : error)
    // Return success anyway - user shouldn't see errors
    // They can still access the playbook directly
    return NextResponse.json(
      { success: true, message: 'Thank you! Your playbook is ready.' },
      { status: 200 }
    )
  }
}
