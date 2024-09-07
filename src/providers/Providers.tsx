"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { AppWalletProvider } from "./AppWalletProvider";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppWalletProvider>
        <ClerkProvider>
          <ProgressBar
            height="4px"
            color="#ffe100"
            options={{ showSpinner: false }}
            shallowRouting
          />
          {children}
        </ClerkProvider>
      </AppWalletProvider>
    </>
  );
}

export default Providers;
