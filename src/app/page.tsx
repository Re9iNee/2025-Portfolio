import { Button } from "@/components/ui/Button";

import { XIcon } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";
import CustomLink from "@/components/ui/Link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col place-items-center gap-4">
      <ThemeSwitch />
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"text"}>Text</Button>

      <CustomLink href={""}>
        <XIcon />
      </CustomLink>
    </div>
  );
}
