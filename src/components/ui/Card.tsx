import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
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
    <div className="rounded-4xl w-full space-y-4 border border-card-border bg-card-background px-6 py-8">
      <Image src={image} alt={imageAlt} width={70} height={70} />
      <h3 className="text-20 font-extrabold">{title}</h3>
      <p className="text-15 text-gray-dark">{description}</p>
      <div className="flex">{cta}</div>
    </div>
  );
}
