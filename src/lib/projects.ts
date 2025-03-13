import cleafin from "@public/Projects/cleafin.png";
import moraBlog from "@public/Projects/mora-blog.png";
import moraDash from "@public/Projects/mora-dash.png";
import aria from "@public/Projects/aria-electric.png";
import { CardProps } from "@/components/ui/Card";

export const projects: CardProps[] = [
  {
    image: moraDash,
    title: "Mora Dashboard",
    logo: "/Projects/mora-logo.ico",
    href: "https://demo.mora-ed.com",
    description:
      "Mora is an online school platform developed to manage students teachers and every aspect of school management",
  },
  {
    image: moraBlog,
    title: "Mora Blog",
    description:
      "Mora Blog designed to teach people about AI, It's content is based on topics and trends of Artificial Intelligence and how people can adapt and write prompts",
    logo: "/Projects/mora-logo.ico",
    href: "https://mora-ed.com",
  },
  {
    image: cleafin,
    title: "Cleafin Marketplace",
    description:
      "MLM Marketplace to manage every aspect of selling online stuff, including digital content or real life products. It has unique features to manage stock, users and ... which supports Multi language websites with different currencies.",
    logo: "/Projects/cleafin-logo.webp",
    href: "https://cleafin.shop",
  },
  {
    image: aria,
    title: "Wordpress Website",
    description:
      "Worked on so many Wordpress projects. this is the most recent one. This website is designed to showcase electric products on their website.",
    logo: "/Projects/wordpress.png",
    href: "https://aria-electric.com",
  },
];
