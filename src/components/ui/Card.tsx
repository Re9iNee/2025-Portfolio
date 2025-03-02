import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import iPhoneScreenshot from "@public/Projects/Subbi.png";
import { ReactNode } from "react";

type CardProps = {
  image: string | StaticImport;
  imageAlt: string;
  title: ReactNode;
  description: string;
  cta: ReactNode;
};
export default function Card({
  image,
  imageAlt,
  title,
  description,
  cta,
}: CardProps) {
  return (
    <div className="flex w-full justify-between space-y-4 rounded-4xl border border-card-border bg-card-background dark:bg-black/50">
      <div className="flex flex-col justify-between gap-4 px-6 py-8 xl:p-16 xl:pr-0">
        <div className="space-y-4">
          <Image src={image} alt={imageAlt} width={70} height={70} />
          <h3 className="text-20 font-extrabold">{title}</h3>
          <p className="text-15 text-gray-dark">{description}</p>
        </div>
        <div className="flex items-center text-18">{cta}</div>
      </div>
      <Image
        src={iPhoneScreenshot}
        alt="screenshot of a project"
        className="hidden xl:block"
      />
    </div>
  );
}
