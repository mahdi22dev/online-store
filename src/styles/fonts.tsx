import localFont from "next/font/local";

export const protoMono = localFont({
  src: "../styles/ProtoMono-Regular.woff2",
  variable: "--font-protomono",
  weight: "300 700 900",
  display: "swap",
  style: "normal",
});
