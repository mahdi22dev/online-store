import Navbar from "@/components/header/Navbar";
import Footer from "@/app/(app)/home/_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {/* @ts-ignore */}
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
