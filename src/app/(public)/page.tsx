"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-y-2">
        <p className="rounded-full border border-primary bg-primary/10 px-2 text-sm text-primary-foreground">
          Fund your banger works easily using blinks
        </p>
        <p className="mt-4 text-7xl font-extrabold tracking-tighter">
          Blink me a coffee
        </p>
        <p className="text-md font-normal text-gray-400">
          Create your personalized link, share it, and receive support in
          seconds
        </p>
      </div>
      <Link href={"/create/"}>
        <Button className="mt-8 rounded-full">Create My Blink</Button>
      </Link>
    </main>
  );
}
