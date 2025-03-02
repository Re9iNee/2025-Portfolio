import { Button } from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { cn } from "@/lib/utils";
import Close from "@public/Contact Window/close.svg";
import Fullscreen from "@public/Contact Window/fullscreen.svg";
import Minimize from "@public/Contact Window/minimize.svg";
import { ClassValue } from "clsx";
import { HTMLInputTypeAttribute } from "react";
import { LuNotebook } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

function ContactPage() {
  return (
    <main className="mt-20 w-full max-w-screen-lg space-y-16 [&>*]:px-4">
      <section className="max-w-[80%] space-y-2">
        <h1 className="sr-only">Contact Reza Attar</h1>
        <h1 className="text-48 font-bold 2xl:text-80">Get in touch</h1>
        <h2 className="text-16 text-gray-medium 2xl:text-24">
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

        <div className="space-y-4">
          <InputContainer
            label="Email"
            inputType="email"
            id="email"
            placeholder="Enter your email address"
          />
          <InputContainer
            label="Name"
            inputType="text"
            id="name"
            placeholder="Enter your name"
          />
          <InputContainer
            label="Subject"
            id="subject"
            placeholder="Enter subject"
            inputType="text"
          />
        </div>

        <textarea
          className="mt-6 min-h-80 w-full rounded-xl bg-white-faint p-6 placeholder:text-gray-dark dark:bg-background"
          placeholder="Write your message here"
        />

        <Button className="mb-6 2xl:w-fit 2xl:self-end">Send</Button>
      </section>

      <section
        aria-label="link to other social medias"
        className="mx-auto grid w-fit grid-cols-3 gap-11 text-24 2xl:flex [&>*]:cursor-pointer"
      >
        <MdEmail />
        <LuNotebook />
        <FaLinkedin />

        <FaTwitter />
        <FaGithub />
        <FaDiscord />
      </section>
    </main>
  );
}

export default ContactPage;

type Props = {
  id: string;
  label: string;
  placeholder: string;
  className?: ClassValue;
  inputType: HTMLInputTypeAttribute;
};
function InputContainer({
  label,
  inputType,
  id,
  placeholder,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex gap-2 border-b border-b-gray-light pb-4 last:border-b-0 dark:border-b-white/10",
        className,
      )}
    >
      <label htmlFor={id} className="text-14 font-medium 2xl:text-16">
        {label}:
      </label>
      <input
        id={id}
        name={id}
        type={inputType}
        className="bg-transparent w-full text-14 placeholder:text-gray-dark focus:outline-none dark:placeholder:text-gray-medium 2xl:text-16"
        placeholder={placeholder}
      />
    </div>
  );
}
