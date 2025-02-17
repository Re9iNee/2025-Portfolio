import { ChevronRight, PlusIcon } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  mode?: "dark" | "light";
  variant?: "primary" | "secondary" | "text";
};

import { cn } from "@/lib/utils"; // A utility function to merge classNames
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex rounded-lg font-medium transition-all items-center px-8 py-4 font-inter font-medium gap-2",
  {
    variants: {
      variant: {
        primary: "drop-shadow-button bg-dark-gradient text-white",
        secondary: "bg-onyx text-gray-dark dark:bg-faint-white",
        text: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn("text-18", buttonVariants({ variant }), className)}
      {...props}
    >
      <PlusIcon />
      {children}
      <ChevronRight />
    </button>
  );
};
