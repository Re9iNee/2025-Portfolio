import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { cn, generateEmailLink } from "@/lib/utils";
import { SendHorizontal, Stars } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

type WidgetProps = {
  href: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  openInNewTab?: boolean;
  isComingSoon?: boolean;

  image: string | StaticImport;
};
export default function Widget({
  href,
  image,
  title,
  subtitle,
  imageAlt,
  isComingSoon = false,
  openInNewTab = false,
}: WidgetProps) {
  const Content = (
    <div
      className={cn(
        "flex h-full max-h-[400px] flex-col justify-between pt-8",
        isComingSoon && "transition-all group-hover:blur group-hover:grayscale",
      )}
    >
      <div className="space-y-1 px-4">
        <h4 className="text-24 font-extrabold xl:text-32">{title}</h4>
        <h5 className="text-15 text-gray-dark xl:text-16">{subtitle}</h5>
      </div>

      <div className="grid place-items-center overflow-hidden rounded-b-4xl">
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
  const containerClassNames = cn(
    "flex max-h-fit flex-col justify-between rounded-4xl border border-card-border bg-card-background text-center dark:bg-widget-background group",
  );

  if (isComingSoon)
    return (
      <div className={cn(containerClassNames, "relative")}>
        <div className="absolute z-10 grid h-full w-full cursor-not-allowed select-none place-items-center rounded-4xl bg-onyx/80 pt-0 text-40 font-medium text-white opacity-0 transition-all duration-300 group-hover:grid group-hover:opacity-100">
          <span className="hidden group-hover:block">COMING SOON</span>
        </div>
        {Content}
      </div>
    );

  return (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      className={containerClassNames}
    >
      {Content}
    </Link>
  );
}

export function ProjectPlaceholder() {
  return (
    <div className="flex h-[420px] flex-col items-center justify-between gap-6 rounded-4xl border border-dashed border-gray-medium bg-card-background px-6 py-8 dark:border-card-border dark:bg-widget-background/50">
      <div className="flex flex-col items-center gap-2">
        <div className="grid h-28 w-28 place-items-center">
          <Stars
            width={49}
            height={50}
            className="text-gray-dark dark:text-gray-light"
          />
        </div>
        <h4 className="text-20 font-extrabold xl:text-32">
          YOUR PROJECT GOES HERE
        </h4>
        <h5 className="mt-2 text-gray-dark xl:text-16">
          Let&apos;s turn your idea into a visual reality
        </h5>
      </div>

      <Button variant={"primary"} icon={<SendHorizontal />} className="w-fit">
        <Link href={generateEmailLink({})}>Get in Touch</Link>
      </Button>
    </div>
  );
}

export function LetsWorkTogether() {
  return (
    <div className="flex flex-col justify-between gap-8 bg-background text-center xl:flex-row xl:items-center xl:gap-0 xl:text-left">
      <div className="xl:max-w-[50%]">
        <h4 className="text-32 font-bold xl:text-48">
          Let&apos;s work Together
        </h4>
        <h5 className="text-15 text-gray-medium xl:text-20">
          Want to discuss an opportunity to create something great? I&apos;m
          ready when you are.
        </h5>
      </div>

      <Button
        variant={"primary"}
        icon={<SendHorizontal />}
        className="xl:w-fit"
      >
        <Link href={generateEmailLink({})}>Get in Touch</Link>
      </Button>
    </div>
  );
}
