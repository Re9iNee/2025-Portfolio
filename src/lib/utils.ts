import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type generateEmailParams = {
  to?: string;
  subject?: string;
  body?: string;
};
export function generateEmailLink({
  to = "attarzadeh76@gmail.com",
  subject = "Let's work together on the new project",
  body = "I saw your website and want to start working together on a this new idea I have, the idea is about ",
}: generateEmailParams): string {
  return `mailto:${to}?subject=${subject} &body=${body}`;
}
