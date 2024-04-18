import localFont from "next/font/local";

export const Poppins = localFont({
  src: "../styles/Poppins-Medium.ttf",
  variable: "--font-poppins",
  weight: "300 700 900",
  display: "swap",
  style: "normal",
});
