"use client";

import LogoBlack from "@public/logo/lg-dark.svg";
import LogoWhite from "@public/logo/lg-light.svg";
import Link from "next/link";

import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="mt-32 w-full space-y-10 border-t border-black/10 pb-24 pl-4 pt-12 dark:border-white/10 dark:text-gray-light">
      <div className="flex flex-col gap-4">
        <h5 className="mb-4 text-16 font-bold dark:text-white">Elsewhere</h5>
        <Link href={""}>Email</Link>
        <Link href={""}>LinkedIn</Link>
        <Link href={""}>Github</Link>
        <Link href={""}>Twitter</Link>
        <Link href={""}>Discord</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="mb-4 text-16 font-bold dark:text-white">Links</h5>
        <Link href={""}>About</Link>
        <Link href={""}>Work</Link>
        <Link href={""}>Tech Stack</Link>
        <Link href={""}>Contact</Link>
      </div>
      <div className="space-y-4">
        {resolvedTheme === "light" ? <LogoBlack /> : <LogoWhite />}
        <p>Thanks for stopping by ッ </p>
      </div>

      <p>© 2023 Eihab Khan. All Rights Reserved.</p>
    </footer>
  );
}
