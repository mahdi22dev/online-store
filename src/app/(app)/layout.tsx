

import Navbar from "@/components/header/Navbar";
import Footer from "@/app/(app)/home/_components/Footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main >
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
          <Footer />

    </main>
  );
}
