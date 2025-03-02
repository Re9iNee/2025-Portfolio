import { LetsWorkTogether } from "@/components/ui/Widget";

import GetToKnowMe from "./sections/GetToKnowMe";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";

export default function Home() {
  return (
    <main className="space-y-28 p-4">
      <Hero />

      <SelectedWork className="xl:pt-28" />

      <GetToKnowMe />

      <LetsWorkTogether />
    </main>
  );
}
