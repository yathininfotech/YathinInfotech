import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {
    const { name, phone, email, message } = req.body;

    const response = await resend.emails.send({
      from: `${email}`, // ✅ use this FIRST
      to: "maheswarikaveti86@gmail.com", // ✅ YOU receive here
      reply_to: email, // optional but useful
      subject: `New Contact Form - ${name}`,
      html: `
        // <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", response);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({ success: false });
  }
}