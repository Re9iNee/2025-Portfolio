import { ChevronRight, PlusIcon } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  mode?: "dark" | "light";
  variant?: "primary" | "secondary" | "text";
};

// TODO: you need to check for box shadows - cause it wasn't in style guide before

export default function Button({
  variant = "primary",
  mode = "light",
  children,
}: Props) {
  return (
    <button className="drop-shadow-button inline-flex gap-2 rounded-lg bg-dark-gradient px-8 py-4 font-inter text-18 font-medium text-white">
      <PlusIcon />
      Button
      <ChevronRight />
    </button>
  );
}
