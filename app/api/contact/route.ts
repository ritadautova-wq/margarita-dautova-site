import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const MARGARITA_EMAIL = 'margarita.dautova.coach@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
const FROM_NAME = 'Margarita Dautova Website'

const INTEREST_LABELS: Record<string, string> = {
  ongoing: '90-Day Clarity Through Transition',
  single: 'Strategic Session',
  corporate: 'Workshops & Coaching for Organisations',
  question: 'Just a question',
  other: 'Other',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, role, company, interest, message } = body

    // Validate required fields
    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 })
    }
    if (!interest) {
      return NextResponse.json({ error: 'Please select an interest' }, { status: 400 })
    }
    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Development fallback: log to console if API key not configured
    if (!process.env.RESEND_API_KEY) {
      console.log('Contact form submission (RESEND_API_KEY not configured):', {
        name,
        email,
        role,
        company,
        interest: INTEREST_LABELS[interest] || interest,
        message,
      })
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: MARGARITA_EMAIL,
      replyTo: email,
      subject: `New message from ${name} — ${INTEREST_LABELS[interest] || interest}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Message</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

  <div style="border-bottom: 2px solid #5f7260; padding-bottom: 16px; margin-bottom: 24px;">
    <h1 style="font-family: Georgia, serif; font-size: 22px; color: #2c332d; margin: 0;">
      New message from your website
    </h1>
  </div>

  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #555; width: 130px; vertical-align: top;">Name</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #333;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #555; vertical-align: top;">Email</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">
        <a href="mailto:${email}" style="color: #5f7260;">${email}</a>
      </td>
    </tr>
    ${role ? `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #555; vertical-align: top;">Role</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #333;">${role}</td>
    </tr>` : ''}
    ${company ? `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #555; vertical-align: top;">Company</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #333;">${company}</td>
    </tr>` : ''}
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #555; vertical-align: top;">Interested in</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #333;">${INTEREST_LABELS[interest] || interest}</td>
    </tr>
  </table>

  <div style="background: #f6f7f6; border-left: 3px solid #5f7260; padding: 16px 20px; margin-bottom: 24px;">
    <p style="font-weight: 600; color: #555; margin: 0 0 10px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
    <p style="color: #333; margin: 0; white-space: pre-wrap; line-height: 1.7;">${message}</p>
  </div>

  <p style="font-size: 13px; color: #888; margin: 0;">
    Hit reply to respond directly to ${name} at ${email}.
  </p>

</body>
</html>
      `,
    })

    if (error) {
      console.error('Resend error (contact form):', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: 'Failed to send your message. Please try emailing me directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
