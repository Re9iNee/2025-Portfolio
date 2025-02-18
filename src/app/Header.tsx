import Image from "next/image";
import LogoSmallLight from "@public/logo/sm-light.png";

export default function Header() {
  return (
    <div className="flex justify-center">
      <Image alt="logo" priority={false} src={LogoSmallLight}></Image>
    </div>
  );
}
