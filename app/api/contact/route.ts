import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, contact, requestDetails } = body

    if (!name || !contact || !requestDetails) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: 'Royal Concierge <onboarding@resend.dev>',
      to: 'hello@royalconcierge.pl',
      subject: `New Membership Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #0a0a0a; color: #e8e6e3;">
          <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #c9a227;">
            <h1 style="color: #c9a227; font-size: 24px; letter-spacing: 4px; margin: 0;">ROYAL CONCIERGE</h1>
            <p style="color: #9a9a9a; font-size: 12px; letter-spacing: 2px; margin-top: 8px;">NEW MEMBERSHIP INQUIRY</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <p style="color: #c9a227; font-size: 11px; letter-spacing: 2px; margin-bottom: 8px;">FULL NAME</p>
            <p style="color: #e8e6e3; font-size: 16px; margin: 0;">${name}</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <p style="color: #c9a227; font-size: 11px; letter-spacing: 2px; margin-bottom: 8px;">CONTACT</p>
            <p style="color: #e8e6e3; font-size: 16px; margin: 0;">${contact}</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <p style="color: #c9a227; font-size: 11px; letter-spacing: 2px; margin-bottom: 8px;">NATURE OF REQUEST</p>
            <p style="color: #e8e6e3; font-size: 16px; margin: 0; white-space: pre-wrap;">${requestDetails}</p>
          </div>
          
          <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #2a2a2a;">
            <p style="color: #6a6a6a; font-size: 11px; letter-spacing: 1px;">This inquiry was submitted via the Royal Concierge website.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
