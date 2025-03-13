import Card, { CardProps } from "@/components/ui/Card";
import Divider from "@/components/ui/Divider";
import { ProjectPlaceholder } from "@/components/ui/Widget";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import cleafin from "@public/Projects/cleafin.png";
import moraBlog from "@public/Projects/mora-blog.png";
import moraDash from "@public/Projects/mora-dash.png";
import aria from "@public/Projects/aria-electric.png";
import { projects } from "../../lib/projects";

export default function WorksPage() {
  return (
    <main className="mt-20 w-full max-w-screen-lg space-y-16 [&>*]:px-4">
      <section className="max-w-[80%] space-y-2">
        <h1 className="text-48 font-bold xl:text-80">Projects</h1>
        <h2 className="text-16 text-gray-medium xl:text-24">
          Projects and ideas I’ve worked on
        </h2>
      </section>

      <Divider className="w-full" />

      <div className="space-y-4">
        {projects.map((project) => (
          <Card {...project} key={project.href} />
        ))}
        <ProjectPlaceholder />
      </div>
    </main>
  );
}
