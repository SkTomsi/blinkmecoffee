import { ClerkProvider } from "@clerk/nextjs";
import { AppWalletProvider } from "./AppWalletProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppWalletProvider>
        <ClerkProvider>{children}</ClerkProvider>
      </AppWalletProvider>
    </>
  );
}

export default Providers;
