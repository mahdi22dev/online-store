"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {/* <NextTopLoader
        color="#FED18C"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
      /> */}
      <Toaster closeButton expand={false} position="top-right" />
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
