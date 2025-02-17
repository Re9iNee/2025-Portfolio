import { Headphones } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Label({ children }: Props) {
  return (
    <div className="rounded-3xl bg-white/70 px-3 py-1.5 text-14 text-gray-dark dark:bg-onyx dark:text-gray-light">
      {children}
    </div>
  );
}

export const AudioBook = () => {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-full border border-onyx/25 bg-gray-dark text-white">
      <Headphones />
    </div>
  );
};
