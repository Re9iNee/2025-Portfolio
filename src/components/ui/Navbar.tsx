import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  RiHome9Fill,
  RiHomeLine,
  RiMenuFill,
  RiMenuLine,
  RiMessage2Fill,
  RiMessage2Line,
  RiPencilFill,
  RiPencilLine,
  RiSuitcase2Fill,
  RiSuitcase2Line,
  RiUser2Fill,
  RiUser2Line,
} from "react-icons/ri";

const items: Item[] = [
  {
    link: "/",
    ActiveIcon: RiHome9Fill,
    PassiveIcon: RiHomeLine,
  },
  {
    link: "/contact-us",
    ActiveIcon: RiUser2Fill,
    PassiveIcon: RiUser2Line,
  },
  {
    link: "/bag",
    ActiveIcon: RiSuitcase2Fill,
    PassiveIcon: RiSuitcase2Line,
  },
  {
    link: "/write",
    ActiveIcon: RiPencilFill,
    PassiveIcon: RiPencilLine,
  },
  {
    link: "/letter",
    ActiveIcon: RiMessage2Fill,
    PassiveIcon: RiMessage2Line,
  },
  {
    link: "/shelf",
    ActiveIcon: RiMenuFill,
    PassiveIcon: RiMenuLine,
  },
] as const;

type Item = {
  link: string;
  PassiveIcon: IconType;
  ActiveIcon: IconType;
};

export default function Navbar() {
  const currentRoute = "/";

  return (
    <nav className="bg-nav-background/30 border-nav-border/30 dark:bg-nav-background/60 dark:border-nav-border/40 fixed bottom-3 flex justify-between rounded-xl border px-4 py-2.5">
      {items.map((item) => (
        <Item key={item.link} isActive={item.link === currentRoute} {...item} />
      ))}
    </nav>
  );
}

type ItemProps = {
  isActive?: boolean;
} & Item;
const Item = ({ isActive, ActiveIcon, PassiveIcon, link }: ItemProps) => {
  return (
    <Link
      href={link}
      className={cn(
        "grid h-10 w-14 place-items-center rounded-xl text-white-faint",
        isActive && "w-14 rounded-xl bg-black/50 text-white",
      )}
    >
      {isActive ? (
        <ActiveIcon className="text-24" />
      ) : (
        <PassiveIcon className="text-24" />
      )}
    </Link>
  );
};
