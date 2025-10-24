"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
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
}) {
  try {
    await resend.emails.send({
      from: "Leon Agency <onboarding@resend.dev>",
      to: "bouazizfarouk3@gmail.com",
      subject: "Leon Agency contact message",
      replyTo: email,
      text: `
        name: ${name}
        \nemail: ${email}
        \nindustry: ${industry};
        \ncompany: ${company};
        \nservice: ${service};
        \nmessage: ${message};`,
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
