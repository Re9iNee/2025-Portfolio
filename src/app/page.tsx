import { LetsWorkTogether } from "@/components/ui/Widget";

import GetToKnowMe from "./GetToKnowMe";
import Hero from "./Hero";
import SelectedWork from "./SelectedWork";

export default function Home() {
  return (
    <main className="space-y-28 p-4">
      <Hero />

      <SelectedWork className="2xl:pt-28" />

      <GetToKnowMe />

      <LetsWorkTogether />
    </main>
  );
}
