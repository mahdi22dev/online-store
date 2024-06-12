"use server";
import { EmailWelcomeTemplate } from "@/components/email/Welcome_template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sentWelcome = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const { error } = await resend.emails.send({
    from: "Phonearmor <onboarding@resend.dev>",
    to: ["idrissimahdi2021@gmail.com"],
    subject: "Welcome," + fullName + "!",
    react: EmailWelcomeTemplate({ fullName: fullName, email: email }),
  });

  if (error) {
    throw error;
  }
};
