import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { SendHorizontal, Stars } from "lucide-react";
import Image from "next/image";
import { Button } from "./Button";

type WidgetProps = {
  image: string | StaticImport;
  imageAlt: string;
  title: string;
  subtitle: string;
};
export default function Widget({
  title,
  subtitle,
  image,
  imageAlt,
}: WidgetProps) {
  return (
    <div className="rounded-4xl dark:bg-widget-background flex flex-col items-center gap-8 border border-card-border bg-card-background pt-8 text-center">
      <div className="space-y-1 px-4">
        <h4 className="text-24 font-extrabold">{title}</h4>
        <h5 className="text-15 text-gray-dark">{subtitle}</h5>
      </div>

      <Image src={image} alt={imageAlt} className="rounded-b-4xl" />
    </div>
  );
}

export function ProjectPlaceholder() {
  return (
    <div className="rounded-4xl flex flex-col items-center gap-6 border border-dashed border-gray-medium bg-card-background px-6 py-8">
      <div className="flex flex-col items-center">
        <Stars width={49} height={50} className="text-gray-dark" />
        <h4 className="text-20 font-extrabold">YOUR PROJECT GOES HERE</h4>
        <h5 className="text-gray-dark">
          Let&apos;s turn your idea into a visual reality
        </h5>
      </div>

      <Button variant={"primary"} icon={<SendHorizontal />} className="w-fit">
        Get in Touch
      </Button>
    </div>
  );
}

export function LetsWorkTogether() {
  return (
    <div className="flex flex-col justify-between gap-8 bg-background text-center">
      <div>
        <h4 className="text-32 font-bold">Let&apos;s work Together</h4>
        <h5 className="text-15 text-gray-medium">
          Want to discuss an opportunity to create something great? I&apos;m
          ready when you are.
        </h5>
      </div>

      <Button variant={"primary"} icon={<SendHorizontal />}>
        Get in Touch
      </Button>
    </div>
  );
}
