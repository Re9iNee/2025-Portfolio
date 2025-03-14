import { Button } from "@/components/ui/Button";
import { generateEmailLink } from "@/lib/utils";
import Portrait from "@public/portrait.jpg";
import Image from "next/image";
import Link from "next/link";

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
          I build web-apps <br /> Real{" "}
          <span className="font-bold text-onyx">Fast!</span> <br /> Real{" "}
          <span className="font-bold text-onyx">Optimized!</span> <br /> No need
          to look for another engineer I do all the work!{" "}
          <span className="font-bold text-onyx">Back-end Front-end</span>, Just
          give me an <span className="underline">Idea!</span> Sky&apos;s the
          limit for us!
        </p>
        <div
          aria-label="call to actions"
          className="flex flex-col items-center gap-4 xl:flex-row"
        >
          <Button variant={"primary"} className="xl:w-fit">
            <Link
              download
              href={
                "https://d1ntfq67otjmwh.cloudfront.net/mora-blog-files/Front-End%20Engineer%20-%20Reza%20Attarzadeh.pdf"
              }
            >
              See my Resume
            </Link>
          </Button>{" "}
          <Button variant={"secondary"} className="xl:w-fit">
            <Link href={generateEmailLink({})}>Get in Touch</Link>
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
