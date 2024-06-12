"use server";
import { EmailOrderCompletedTemplate } from "@/components/email/Order_complete";
import { EmailWelcomeTemplate } from "@/components/email/Welcome_template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sentWelcome = async ({
  fullName,
}: {
  fullName: string;
  email: string;
}) => {
  const { error } = await resend.emails.send({
    from: "Phonearmor <onboarding@resend.dev>",
    to: ["idrissimahdi2021@gmail.com"],
    subject: "Welcome," + fullName + "!",
    react: EmailWelcomeTemplate({ fullName: fullName }),
  });

  if (error) {
    throw error;
  }
};

export const sentorderNotifcation = async ({
  orderid,
  email,
}: {
  orderid: string;
  email: string;
}) => {
  const { error } = await resend.emails.send({
    from: "Phonearmor <onboarding@resend.dev>",
    // can't change the email because resent don't allow that for free accounts
    to: ["idrissimahdi2021@gmail.com"],
    subject: "Thank your for your order #" + orderid,
    react: EmailOrderCompletedTemplate({ orderid: orderid }),
  });

  if (error) {
    throw error;
  }
};
