"use server";
import { EmailTemplate } from "@/components/email/email-template";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sentWelcome = async () => {
  const { error } = await resend.emails.send({
    from: "Phonearmor <onboarding@resend.dev>",
    to: ["idrissimahdi2021@gmail.com"],
    subject: "Hello world",
    react: EmailTemplate({ firstName: "John" }),
  });

  if (error) {
    throw error;
  }
};
