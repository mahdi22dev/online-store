import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>side nav settings orders logout</div>
      {children}
    </div>
  );
}
