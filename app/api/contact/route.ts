import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('Missing RESEND_API_KEY');
    return NextResponse.json({ error: 'Missing API Key configuration' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, contactMethod, contactValue, preferredTime, requestDetails } = body;

    const { data, error } = await resend.emails.send({
      from: 'Royal Concierge <website@royalconcierge.pl>', // Assuming verified domain
      to: ['hello@royalconcierge.pl'],
      subject: `New Membership Request: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #C9A227; margin-bottom: 24px;">New Membership Application</h1>
          
          <div style="margin-bottom: 20px;">
            <p style="font-size: 14px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">Applicant Name</p>
            <p style="font-size: 18px; margin: 0; font-weight: 500;">${name}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="font-size: 14px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">Contact Method (${contactMethod})</p>
            <p style="font-size: 18px; margin: 0;">${contactValue}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="font-size: 14px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">Preferred Time</p>
            <p style="font-size: 18px; margin: 0;">${preferredTime || 'Not specified'}</p>
          </div>

          <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #C9A227; margin-top: 30px;">
            <p style="font-size: 14px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Request Details</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0;">${requestDetails}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Internal Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
