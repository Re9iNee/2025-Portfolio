import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import { cn, getResumeFileLink } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";
import DynamicLogo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="mt-8 flex w-full items-center justify-center xl:justify-between xl:rounded-xl xl:border xl:border-white/25 xl:bg-white/25">
      <DynamicLogo size="small" className="xl:hidden" />
      <div className="hidden gap-10 p-4 text-16 xl:flex">
        <DynamicLogo size="small" />

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link href="/about" passHref>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/works" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Works
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        target="_blank"
                        href={getResumeFileLink()}
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <PiReadCvLogoLight className="h-6 w-6" />
                        <div className="text-lg mb-2 mt-4 font-medium">
                          CV File
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Professionally designed portfolio showcasing skills
                          and career achievements.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/awards" title="Awards">
                    Recognized achievements earned through hard work.
                  </ListItem>
                  {/* <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem> */}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden items-center gap-6 p-4 text-24 xl:flex">
        <Link href={"https://www.youtube.com/@RezaAttarCode"} target="_blank">
          <FaYoutube />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/rezaattarzadeh/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link href={"https://github.com/Re9iNee"} target="_blank">
          <FaGithub />
        </Link>
        <div className="h-6 border-r border-black/20"></div>
        <ThemeSwitch />
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm line-clamp-2 leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
