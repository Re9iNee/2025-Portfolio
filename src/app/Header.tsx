import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DynamicLogo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="mt-8 flex items-center justify-between gap-56 2xl:rounded-xl 2xl:border 2xl:border-white/25 2xl:bg-white/25">
      <DynamicLogo size="small" className="2xl:hidden" />
      <div className="hidden gap-10 p-4 text-16 2xl:flex">
        <DynamicLogo size="small" className="cursor-pointer" />

        <Link href={"/about"}>About</Link>
        <Link href={"/work"}>Work</Link>
        <Link href={"/Notebook"}>Notebook</Link>
        <Link href={"/Contact"}>Contact</Link>
        <p className="flex cursor-pointer">
          More <ChevronDown />
        </p>
      </div>

      <div className="hidden items-center gap-6 p-4 text-24 2xl:flex">
        <FaLinkedin />
        <FaXTwitter />
        <FaGithub />
        <div className="h-6 border-r border-black/20"></div>
        <ThemeSwitch />
      </div>
    </header>
  );
}
