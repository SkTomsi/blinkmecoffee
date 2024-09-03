"use client";

import { ConnectWalletButton } from "./WalletConnectButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
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
      <ConnectWalletButton />
    </div>
  );
}
