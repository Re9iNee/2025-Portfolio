import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function SelectedWork({ className }: { className?: ClassValue }) {
  return (
    <section aria-label="selected work" className={cn(className)}>
      <h2 className="mb-4 text-32 font-bold xl:mb-8 xl:text-48">
        Selected Work
      </h2>
      <div className="space-y-9">
        <Card
          title="Mora"
          description="Mora is an online school platform developed to manage students teachers and every aspect of school management"
          image={"/Projects/mora-logo.ico"}
          imageAlt="Github Icon"
          cta={
            <Link
              href={"https://mora-ed.com"}
              className="flex items-center gap-1"
            >
              Visit Site <ChevronRight width={20} className="pt-0.5" />
            </Link>
          }
        />

        <Card
          title="Cleafin Marketplace"
          description="MLM Marketplace to manage every aspect of selling online stuff, including digital content or real life products. It has unique features to manage stock, users and ... which supports Multi language websites with different currencies."
          image={"/Projects/cleafin.webp"}
          imageAlt="Discord Icon"
          cta={
            <Link
              href={"https://cleafin.shop/"}
              className="flex items-center gap-1"
            >
              Visit Site <ChevronRight width={20} className="pt-0.5" />
            </Link>
          }
        />

        <Card
          title="Wordpress Websites"
          description="Worked on so many Wordpress projects. this is the most recent one. This website is designed to showcase electric products on their website."
          image={"/Projects/wordpress.png"}
          imageAlt="Dribble Icon"
          cta={
            <Link
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
