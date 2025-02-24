import Link from "next/link";

import DynamicLogo from "./Logo";

export default function Footer() {
  return (
    <div>
      <div className="mt-32 w-[99vw] border-t border-black/10 dark:border-white/10"></div>
      <footer className="mx-auto max-w-screen-lg space-y-12 pb-24 pl-4 pt-12 dark:text-gray-light 2xl:flex 2xl:flex-row-reverse 2xl:justify-between 2xl:space-y-0">
        <div className="space-y-10 2xl:flex 2xl:flex-row-reverse 2xl:gap-32 2xl:space-y-0">
          <div className="flex flex-col gap-4">
            <h5 className="mb-4 text-16 font-bold dark:text-white">
              Elsewhere
            </h5>
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
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <DynamicLogo size="large" />
            <p>Thanks for stopping by ッ </p>
          </div>
          <p className="text-14">© 2023 Eihab Khan. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
