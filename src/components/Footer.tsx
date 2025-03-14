import Link from "next/link";

import DynamicLogo from "./Logo";
import Divider from "./ui/Divider";
import { generateEmailLink } from "@/lib/utils";

export default function Footer() {
  return (
    <div className="mt-32">
      <Divider />
      <footer className="mx-auto max-w-screen-lg space-y-12 pb-24 pl-4 pt-12 dark:text-gray-light xl:flex xl:flex-row-reverse xl:justify-between xl:space-y-0">
        <div className="space-y-10 xl:flex xl:flex-row-reverse xl:gap-32 xl:space-y-0">
          <div className="flex flex-col gap-4">
            <h5 className="mb-4 text-16 font-bold dark:text-white">
              Elsewhere
            </h5>
            <Link
              target="_blank"
              href={generateEmailLink({ body: "", subject: "" })}
            >
              Email
            </Link>
            <Link
              target="_blank"
              href={"https://www.youtube.com/@RezaAttarCode"}
            >
              Youtube
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/rezaattarzadeh/"}
            >
              LinkedIn
            </Link>
            <Link target="_blank" href={"https://github.com/Re9iNee"}>
              Github
            </Link>
            <Link target="_blank" href={"https://x.com/Re9iNee"}>
              Twitter
            </Link>
            <Link
              target="_blank"
              href={"https://discordapp.com/users/435134219652694016"}
            >
              Discord
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="mb-4 text-16 font-bold dark:text-white">Links</h5>
            <Link href={"/about"}>About</Link>
            <Link href={"/works"}>Work</Link>
            {/* <Link href={""}>Tech Stack</Link> */}
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <DynamicLogo size="large" />
            <p>Thanks for stopping by ッ </p>
          </div>
          <p className="text-14">© 2023 Reza Attar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
