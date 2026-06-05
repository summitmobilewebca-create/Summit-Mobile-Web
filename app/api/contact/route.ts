import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API Key stored securely in .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic server-side validation validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send the email to your business address
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Replace with your verified custom domain later
      to: "summitmobileweb.ca@gmail.com",        // Put YOUR real business inbox address here
      subject: `New Lead: ${name} via Contact Form`,
      replyTo: email, // Clicking 'Reply' in your inbox will automatically reply to the user's email
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f4f4f5; padding: 15px; border-radius: 5px;">${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}