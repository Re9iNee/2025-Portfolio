import { Button } from "@/components/ui/Button";
import Portrait from "@public/portrait.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section aria-label="introduction" className="relative mt-40 flex">
      <div className="space-y-4 xl:space-y-10">
        <div className="text-48 font-extrabold text-gray-dark xl:text-80">
          <p className="xl:hidden">Hi 👋🏻</p>
          <p>
            I&apos;m{" "}
            <span className="text-onyx dark:text-white">Reza Attar</span>
          </p>
        </div>
        <p className="text-15 font-medium text-gray-dark xl:max-w-[70%] xl:text-24">
          I am a front-end engineer and UI/UX designer helping startups turn
          their visions into a digital reality. I specialize in designing and
          building modern mobile and web-based apps.
        </p>
        <div
          aria-label="call to actions"
          className="flex flex-col items-center gap-4 xl:flex-row"
        >
          <Button variant={"primary"} className="xl:w-fit">
            See my Resume
          </Button>{" "}
          <Button variant={"secondary"} className="xl:w-fit">
            Get in Touch
          </Button>
        </div>
      </div>

      <Image
        width={540}
        height={540}
        quality={100}
        src={Portrait}
        priority={false}
        placeholder="blur"
        alt="reza attar portrait image"
        className="hidden aspect-square rounded-full object-cover xl:block"
      />
    </section>
  );
}
