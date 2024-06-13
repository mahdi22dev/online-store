import React from "react";
import UserAccountnav from "@/components/header/UserAccountnav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <UserAccountnav />
      {children}
    </div>
  );
}
