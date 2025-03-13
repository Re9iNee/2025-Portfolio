"use client";

import { Button } from "@/components/ui/Button";
import { cn, generateEmailLink } from "@/lib/utils";
import { ClassValue } from "clsx";
import Link from "next/link";
import {
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from "react";

export default function ContactForm() {
  const [from, setFrom] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");

  return (
    <>
      <div className="space-y-4">
        <InputContainer
          id="email"
          label="Email"
          inputType="email"
          onChange={setFrom}
          placeholder="Enter your email address"
        />
        <InputContainer
          id="name"
          label="Name"
          inputType="text"
          onChange={setName}
          placeholder="Enter your name"
        />
        <InputContainer
          id="subject"
          label="Subject"
          inputType="text"
          onChange={setSubject}
          placeholder="Enter subject"
        />
      </div>

      <textarea
        onChange={(e) => setBody(e.target.value)}
        className="mt-6 min-h-80 w-full rounded-xl bg-white-faint p-6 placeholder:text-gray-dark dark:bg-background"
        placeholder="Write your message here"
      />

      <Button className="mb-6 xl:w-fit xl:self-end">
        <Link
          href={generateEmailLink({
            subject,
            body: `This email is from ${name} ${from}, ${body}`,
          })}
        >
          Send
        </Link>
      </Button>
    </>
  );
}

type Props = {
  id: string;
  label: string;
  placeholder: string;
  className?: ClassValue;
  inputType: HTMLInputTypeAttribute;
  onChange: Dispatch<SetStateAction<string>>;
};
function InputContainer({
  id,
  label,
  onChange,
  inputType,
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
      <label htmlFor={id} className="text-14 font-medium xl:text-16">
        {label}:
      </label>
      <input
        id={id}
        name={id}
        type={inputType}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-14 placeholder:text-gray-dark focus:outline-none dark:placeholder:text-gray-medium xl:text-16"
        placeholder={placeholder}
      />
    </div>
  );
}
