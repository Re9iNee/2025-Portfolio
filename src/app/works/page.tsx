import Card from "@/components/ui/Card";
import Divider from "@/components/ui/Divider";
import { ProjectPlaceholder } from "@/components/ui/Widget";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

type Project = {
  name: string;
  description: string;
  logo: string;
  cta: ReactNode;
};
const projects: Project[] = [
  {
    name: "Github",
    description:
      "Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
    logo: "/icons/Github.svg",
    cta: (
      <>
        Download App <ChevronRight />
      </>
    ),
  },
  {
    name: "Discord",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
    logo: "/icons/Discord.svg",
    cta: (
      <>
        Visit Site <ChevronRight />
      </>
    ),
  },
  {
    name: "Dribble",
    description:
      "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
    logo: "/icons/Dribble.svg",
    cta: (
      <>
        Visit Site <ChevronRight />
      </>
    ),
  },
];

export default function WorksPage() {
  return (
    <main className="mt-20 w-full max-w-screen-lg space-y-16 [&>*]:px-4">
      <section className="max-w-[80%] space-y-2">
        <h1 className="text-48 font-bold 2xl:text-80">Projects</h1>
        <h2 className="text-16 text-gray-medium 2xl:text-24">
          Projects and ideas I’ve worked on
        </h2>
      </section>

      <Divider className="w-full" />

      <div className="space-y-4">
        {projects.map((project) => (
          <Card
            {...project}
            key={project.name}
            title={project.name}
            image={project.logo}
            imageAlt={`${project.name} icon`}
          />
        ))}
        <ProjectPlaceholder />
      </div>
    </main>
  );
}
