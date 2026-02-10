import Divider from "@/components/ui/Divider";
import Close from "@public/Contact Window/close.svg";
import Fullscreen from "@public/Contact Window/fullscreen.svg";
import Minimize from "@public/Contact Window/minimize.svg";
import { MdEmail } from "react-icons/md";
import { generateEmailLink, getGithubLink, getLinkedinLink } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ContactForm from "./form";

function ContactPage() {
  return (
    <main className="mt-20 w-full max-w-screen-lg space-y-16 [&>*]:px-4">
      <section className="max-w-[80%] space-y-2">
        <h1 className="sr-only">Contact Reza Attar</h1>
        <h1 className="text-48 font-bold xl:text-80">Get in touch</h1>
        <h2 className="text-16 text-gray-medium xl:text-24">
          Let&apos;s build something awesome.
        </h2>
      </section>

      <Divider className="w-full" />

      <section
        aria-label="contact window"
        className="mx-4 flex flex-col gap-6 rounded-xl border border-card-border bg-card-background dark:bg-onyx"
      >
        <div
          className="relative border-b border-b-black/5 py-4 text-center"
          aria-label="contact window header"
        >
          <div className="absolute left-4 top-[50%] flex -translate-y-[50%] items-center gap-2 p-1">
            <Close />
            <Minimize />
            <Fullscreen />
          </div>
          <h4 className="text-16 font-medium">New message</h4>
        </div>

        <ContactForm />
      </section>

      <section
        aria-label="link to other social medias"
        className="mx-auto grid w-fit grid-cols-4 gap-11 text-24 xl:flex [&>*]:cursor-pointer"
      >
        <Link href={generateEmailLink({})}>
          <MdEmail />
        </Link>
        <Link href={getLinkedinLink()} target="_blank">
          <FaLinkedin />
        </Link>
        <Link href={getGithubLink()} target="_blank">
          <FaGithub />
        </Link>
      </section>
    </main>
  );
}

export default ContactPage;
