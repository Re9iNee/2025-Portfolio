import Image from "next/image";
import LogoSmallLight from "@public/logo/sm-light.png";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex justify-center">
      <Image alt="logo" priority={false} src={LogoSmallLight}></Image>
      <ThemeSwitch />
    </header>
  );
}
