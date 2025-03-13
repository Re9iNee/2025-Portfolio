import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import cleafin from "@public/Projects/cleafin.png";
import moraBlog from "@public/Projects/mora-blog.png";
import moraDash from "@public/Projects/mora-dash.png";
import aria from "@public/Projects/aria-electric.png";

function SelectedWork({ className }: { className?: ClassValue }) {
  return (
    <section aria-label="selected work" className={cn(className)}>
      <h2 className="mb-4 text-32 font-bold xl:mb-8 xl:text-48">
        Selected Work
      </h2>
      <div className="space-y-9">
        <Card
          sampleImage={moraDash}
          title="Mora Dashboard"
          description="Mora is an online school platform developed to manage students teachers and every aspect of school management"
          image={"/Projects/mora-logo.ico"}
          cta={
            <Link
              target="_blank"
              href={"https://demo.mora-ed.com"}
              className="flex items-center gap-1"
            >
              Visit Site <ChevronRight width={20} className="pt-0.5" />
            </Link>
          }
        />

        <Card
          sampleImage={moraBlog}
          title="Mora Blog"
          description="Mora Blog designed to teach people about AI, It's content is based on topics and trends of Artificial Intelligence and how people can adapt and write prompts"
          image={"/Projects/mora-logo.ico"}
          cta={
            <Link
              target="_blank"
              href={"https://mora-ed.com"}
              className="flex items-center gap-1"
            >
              Visit Site <ChevronRight width={20} className="pt-0.5" />
            </Link>
          }
        />

        <Card
          sampleImage={cleafin}
          title="Cleafin Marketplace"
          description="MLM Marketplace to manage every aspect of selling online stuff, including digital content or real life products. It has unique features to manage stock, users and ... which supports Multi language websites with different currencies."
          image={"/Projects/cleafin.webp"}
          cta={
            <Link
              target="_blank"
              href={"https://cleafin.shop/"}
              className="flex items-center gap-1"
            >
              Visit Site <ChevronRight width={20} className="pt-0.5" />
            </Link>
          }
        />

        <Card
          sampleImage={aria}
          title="Wordpress Websites"
          description="Worked on so many Wordpress projects. this is the most recent one. This website is designed to showcase electric products on their website."
          image={"/Projects/wordpress.png"}
          cta={
            <Link
              target="_blank"
              href={"https://aria-electric.com/"}
              className="flex items-center gap-1"
            >
              Visit Site <ChevronRight width={20} className="pt-0.5" />
            </Link>
          }
        />
      </div>
    </section>
  );
}

export default SelectedWork;
