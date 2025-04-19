import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  // configure the transporter with your Vercel env vars
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // send the email
  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_USER,        // aka avidetravel@gmail.com
    subject: `Contact Form: ${subject}`,
    text: `
Name: ${name}
Email: ${email}

${message}
    `.trim(),
  })

  return NextResponse.json({ success: true })
}
