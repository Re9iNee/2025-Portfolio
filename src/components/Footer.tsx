import Link from "next/link";

import DynamicLogo from "./Logo";
import Divider from "./ui/Divider";

export default function Footer() {
  return (
    <div className="mt-32">
      <Divider />
      <footer className="mx-auto max-w-screen-lg space-y-12 pb-24 pl-4 pt-12 dark:text-gray-light xl:flex xl:flex-row-reverse xl:justify-between xl:space-y-0">
        <div className="space-y-10 xl:flex xl:flex-row-reverse xl:gap-32 xl:space-y-0">
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
