"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { ApolloProvider } from "@apollo/client";
import { apollo } from "@/lib/grqphqlClient";
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ApolloProvider client={apollo}>
        <Toaster closeButton expand={false} position="top-right" />
        <Provider store={store}>{children}</Provider>
      </ApolloProvider>
    </SessionProvider>
  );
}
