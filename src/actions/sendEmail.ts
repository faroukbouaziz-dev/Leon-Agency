"use server";

import { Resend } from "resend";

export async function sendEmail(
  {
    name,
    email,
    industry,
    company,
    service,
    message,
  }: {
    name: string;
    email: string;
    industry: string;
    company: string;
    service: string;
    message: string;
  },
  feedback: boolean,
) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const msgTxt = feedback
    ? `Name: ${name} 
      \nFeedback: ${message}`
    : `name: ${name}
      \nemail: ${email}
      \nindustry: ${industry};
      \ncompany: ${company};
      \nservice: ${service};
      \nmessage: ${message};`;
  try {
    await resend.emails.send({
      from: "Leon Agency <onboarding@resend.dev>",
      to: "bouazizfarouk3@gmail.com",
      subject: "Leon Agency contact message",
      replyTo: email,
      text: msgTxt,
    });
  } catch (err) {
    console.error("Sending email failed", err);
    throw new Error((err as Error).message);
  }
}
