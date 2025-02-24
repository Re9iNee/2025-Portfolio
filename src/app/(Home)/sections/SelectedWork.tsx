import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ChevronRight } from "lucide-react";

function SelectedWork({ className }: { className?: ClassValue }) {
  return (
    <section aria-label="selected work" className={cn(className)}>
      <h2 className="mb-4 text-32 font-bold 2xl:mb-8 2xl:text-48">
        Selected Work
      </h2>
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
  );
}

export default SelectedWork;
