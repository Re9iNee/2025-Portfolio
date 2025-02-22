import Logo from "@public/logo/lg-dark.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 w-full space-y-10 border-t border-black/10 pb-24 pl-4 pt-12">
      <div className="flex flex-col gap-4">
        <h5 className="mb-4 text-16 font-bold">Elsewhere</h5>
        <Link href={""}>Email</Link>
        <Link href={""}>LinkedIn</Link>
        <Link href={""}>Github</Link>
        <Link href={""}>Twitter</Link>
        <Link href={""}>Discord</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="mb-4 text-16 font-bold">Links</h5>
        <Link href={""}>About</Link>
        <Link href={""}>Work</Link>
        <Link href={""}>Tech Stack</Link>
        <Link href={""}>Contact</Link>
      </div>
      <div className="space-y-4">
        <Logo />
        <p>Thanks for stopping by ッ </p>
      </div>

      <p>© 2023 Eihab Khan. All Rights Reserved.</p>
    </footer>
  );
}
