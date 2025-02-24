import Widget, { LetsWorkTogether } from "@/components/ui/Widget";

import Bookshelf from "@public/Bookshelf.png";
import FaceEmoji from "@public/emoji.png";
import Notebook from "@public/Notebook.png";
import TechStack from "@public/tech-stack.png";
import Hero from "./Hero";
import SelectedWork from "./SelectedWork";

export default function Home() {
  return (
    <main className="space-y-28 p-4">
      <Hero />

      <SelectedWork />

      <section aria-label="get to know me">
        <h2 className="mb-4 text-32 font-bold">Get to know me</h2>
        <div className="space-y-9">
          <Widget
            title="About Me"
            image={FaceEmoji}
            imageAlt="My Face Emoji"
            subtitle="Who I am and What I do"
          />

          <Widget
            title="Tech Stack"
            image={TechStack}
            imageAlt="Tech Stack Image"
            subtitle="The dev tools, apps and devices I use"
          />

          <Widget
            title="Bookshelf"
            image={Bookshelf}
            imageAlt="Books image"
            subtitle="Books I've enjoyed reading"
          />

          <Widget
            title="Notebook"
            image={Notebook}
            imageAlt="Notebook image"
            subtitle="My thoughts, insights and reflections"
          />
        </div>
      </section>

      <LetsWorkTogether />
    </main>
  );
}
