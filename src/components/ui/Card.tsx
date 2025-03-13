import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { ReactNode } from "react";

type CardProps = {
  image: string | StaticImport;

  title: ReactNode;
  description: string;
  cta: ReactNode;
  sampleImage: StaticImport;
};
export default function Card({
  image,

  title,
  description,
  cta,
  sampleImage,
}: CardProps) {
  return (
    <div className="group flex w-full justify-between gap-4 space-y-4 rounded-4xl border border-card-border bg-card-background dark:bg-black/50">
      <div className="flex flex-col justify-between gap-4 px-6 py-8 xl:p-16 xl:pr-0">
        <div className="space-y-4">
          <Image
            src={image}
            alt={`${title} logo`}
            width={70}
            height={70}
            className="grayscale transition-all group-hover:grayscale-0"
          />
          <h3 className="text-20 font-extrabold">{title}</h3>
          <p className="text-15 text-gray-dark">{description}</p>
        </div>
        <div className="flex items-center text-18">{cta}</div>
      </div>
      <Image
        width={650}
        src={sampleImage}
        alt={`screenshot of ${title} project`}
        className="hidden grayscale transition-all group-hover:grayscale-0 xl:block"
      />
    </div>
  );
}
