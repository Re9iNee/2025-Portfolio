"use client";

import { useTheme } from "next-themes";
import SignDark from "@public/Signature/signature-white.svg";
import SignLight from "@public/Signature/signature-black.svg";

export default function Signature() {
  const { resolvedTheme } = useTheme();

  if (resolvedTheme === "light") {
    return <SignLight />;
  } else {
    return <SignDark />;
  }
}
