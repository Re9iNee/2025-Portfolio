import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Widget, { LetsWorkTogether } from "@/components/ui/Widget";
import { ChevronRight } from "lucide-react";

import Bookshelf from "@public/Bookshelf.png";
import FaceEmoji from "@public/emoji.png";
import Notebook from "@public/Notebook.png";
import TechStack from "@public/tech-stack.png";

export default function Home() {
  return (
    <main className="space-y-28 p-4">
      {/* Hero */}
      <section aria-label="introduction" className="mt-60 space-y-4">
        {/* hero title */}
        <div className="text-48 font-extrabold text-gray-dark">
          <p>Hi 👋🏻</p>
          <p>
            I'm <span className="text-onyx">Reza Attar</span>
          </p>
        </div>

        <p className="text-15 font-medium text-gray-dark">
          I am a front-end engineer and UI/UX designer helping startups turn
          their visions into a digital reality. I specialize in designing and
          building modern mobile and web-based apps.
        </p>

        <div
          aria-label="call to actions"
          className="flex flex-col items-center gap-4"
        >
          <Button variant={"primary"}>See my Resume</Button>
          <Button variant={"secondary"}>Get in Touch</Button>
        </div>
      </section>

      <section aria-label="selected work">
        <h2 className="mb-4 text-32 font-bold">Selected Work</h2>
        <div className="space-y-9">
          <Card
            title="Github"
            description="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more."
            image={"/icons/Github.svg"}
            imageAlt="Github Icon"
            cta={
              <>
                Download App <ChevronRight />
              </>
            }
          />

          <Card
            title="Discord"
            description="With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar."
            image={"/icons/Discord.svg"}
            imageAlt="Discord Icon"
            cta={
              <>
                Visit Site <ChevronRight />
              </>
            }
          />

          <Card
            title="Storybook Documentation"
            description="This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process."
            image={"/icons/Dribble.svg"}
            imageAlt="Dribble Icon"
            cta={
              <>
                Visit Site <ChevronRight />
              </>
            }
          />
        </div>
      </section>

      <section aria-label="get to know me">
        <h2 className="mb-4 text-32 font-bold">Get to know me</h2>
        <div className="space-y-9">
          <Widget
            title="About Me"
            image={FaceEmoji}
            imageAlt="My Face Emoji"
            subtitle="Who I am and What I do"
          />

          <Widget
            title="Tech Stack"
            image={TechStack}
            imageAlt="Tech Stack Image"
            subtitle="The dev tools, apps and devices I use"
          />

          <Widget
            title="Bookshelf"
            image={Bookshelf}
            imageAlt="Books image"
            subtitle="Books I've enjoyed reading"
          />

          <Widget
            title="Notebook"
            image={Notebook}
            imageAlt="Notebook image"
            subtitle="My thoughts, insights and reflections"
          />
        </div>
      </section>

      <LetsWorkTogether />
    </main>
  );
}
