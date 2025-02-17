import Link from "next/link";
import { ReactNode } from "react";
import { LinkProps } from "next/link";

interface Props extends LinkProps {
  children: ReactNode;
}
export default function CustomLink({ children, ...props }: Props) {
  return (
    <Link
      {...props}
      className="grid h-11 w-11 cursor-pointer place-items-center rounded-md transition-all dark:bg-black dark:hover:bg-white/10"
    >
      {children}
    </Link>
  );
}
