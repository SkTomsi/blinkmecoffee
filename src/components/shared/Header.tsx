"use client";

import { ConnectWalletButton } from "./WalletConnectButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Skeleton } from "~/components/ui/skeleton";

export function Header() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const path = usePathname();
  return (
    <div className="flex h-[70px] items-center justify-between px-10">
      <div className="text-lg font-bold tracking-tighter">Get Blinked</div>
      <div className="flex gap-x-4 text-sm">
        {path.startsWith("/create") && (
          <>
            <Link href="/">My Blinks</Link>
            <Link href="/">Dashboard</Link>
          </>
        )}
      </div>
      {/* <WalletMultiButton style={{}} /> */}
      {isLoaded ? (
        <ConnectWalletButton />
      ) : (
        <Skeleton className="h-[40px] w-[160px] rounded-full" />
      )}
    </div>
  );
}
