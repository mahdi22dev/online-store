import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div className="flex flex-col items-center justify-center p-10">
    <h1>Welcome, Mahdi Idrissi!</h1>
    <img src="/logo.png" alt="" />
  </div>
);
