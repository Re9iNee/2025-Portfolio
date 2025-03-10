import { Button } from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import PortraitImage from "@public/portrait.jpg";
import Signature from "@public/Signature.svg";
import { SendHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mt-20 max-w-screen-lg space-y-16 [&>*]:px-4">
      <section className="max-w-[80%] space-y-2">
        <h1 className="sr-only">About Reza Attar</h1>
        <h2 className="text-48 font-bold xl:text-80">A little bit about me</h2>
        <h2 className="text-16 text-gray-medium xl:text-24">
          Who I am and what I do.
        </h2>
      </section>

      <Divider className="w-full" />

      <div className="space-y-16 xl:flex xl:flex-row-reverse xl:justify-between xl:space-y-0">
        <div className="xl:space-y-24">
          <Image
            width={250}
            height={322}
            quality={100}
            priority={false}
            placeholder="blur"
            src={PortraitImage}
            className="rounded-lg border object-cover dark:border-gray-dark xl:h-[443px] xl:w-[344px]"
            alt="a portrait of Reza Attar"
          />
          <Button
            variant={"primary"}
            icon={<SendHorizontal />}
            className="mx-auto hidden w-fit xl:flex"
          >
            Get in touch
          </Button>
        </div>

        <div className="space-y-16 xl:max-w-[50%]">
          <div className="space-y-8 [&>div>h3]:text-16 [&>div>h3]:font-semibold [&>div>h3]:dark:text-gray-dark/50 [&>div>p]:text-15 [&>div>p]:text-gray-dark xl:[&>div>p]:text-18 [&>div]:space-y-2">
            <div>
              <h3>WHO I AM</h3>
              <p>
                I&apos;m <span className="text-onyx dark:text-white">Reza</span>
                (Pronounced “Ee-hab”) a multi-disciplinary front-end engineer
                and UI/UX designer based in Rabat, Morocco 🇲🇦.
              </p>
            </div>
            <div>
              <h3>WHAT I DO</h3>
              <p>
                With two years of invaluable experience in my role at Harmony
                Technology –– a tech company based here in Rabat, I have honed
                my skills in React.js, Next.js, TailwindCSS, and TypeScript,
                allowing me to craft seamless and interactive user experiences.
                During my time at Harmony Technology, I had the privilege of
                collaborating on projects for esteemed clients such as the
                Ministry of Health, Ministry of Education, and Ministry of
                Justice. It was an incredibly rewarding experience to develop
                applications that directly impact the lives of Moroccan
                citizens.
              </p>
            </div>
            <div>
              <h3>WHAT I DID</h3>
              <p>
                Before delving into the realm of front end engineering, I spent
                five years as a graphic designer. This background has equipped
                me with a keen eye for aesthetics and a deep understanding of
                user-centered design principles. It enables me to seamlessly
                blend functionality and visual appeal in every project I
                undertake.
              </p>
            </div>
          </div>
          <p className="text-15 text-gray-dark [&>a]:text-onyx [&>a]:underline [&>a]:dark:text-white">
            Feel free to reach out via{" "}
            <Link href={"mailto:attarzadeh76@gmail.com"}>e-mail</Link>, or
            follow me on <Link href="link-to-x">Twitter</Link>. Want to see
            where I’ve worked? Check out my{" "}
            <Link href={"link-to-cv"}>Resume</Link>, or Connect with me on{" "}
            <Link href={"link to linkedin"}>LinkedIn</Link>.
          </p>
          <div className="space-y-4">
            <h5 className="xl:hidden">Let&apos;s build something great,</h5>
            <Signature />
          </div>
        </div>
      </div>

      <div className="xl:hidden">
        <Button variant={"primary"} icon={<SendHorizontal />}>
          Get in touch
        </Button>
      </div>
    </main>
  );
}
