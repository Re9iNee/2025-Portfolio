import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

function Divider({ className }: { className?: ClassValue }) {
  return (
    <hr
      className={cn(
        "w-screen border-t border-black/10 dark:border-white/10",
        className,
      )}
    />
  );
}

export default Divider;
