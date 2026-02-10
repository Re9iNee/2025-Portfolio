import Widget from "@/components/ui/Widget";
import Bookshelf from "@public/Widgets/Bookshelf.png";
import FaceEmoji from "@public/Widgets/emoji.png";

function GetToKnowMe() {
  return (
    <section aria-label="get to know me">
      <h2 className="mb-4 text-32 font-bold xl:mb-8 xl:text-48">
        Get to know me
      </h2>
      <div className="space-y-9 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
        <Widget
          href="/about"
          title="About Me"
          image={FaceEmoji}
          imageAlt="My Face Emoji"
          subtitle="Who I am and What I do"
        />

        {/* <Widget
          isComingSoon
          href="#"
          title="Tech Stack"
          image={TechStack}
          imageAlt="Tech Stack Image"
          subtitle="The dev tools, apps and devices I use"
        /> */}

        <Widget
          openInNewTab
          title="Bookshelf"
          image={Bookshelf}
          imageAlt="Books image"
          subtitle="Books I've enjoyed reading"
          href="https://www.goodreads.com/review/list/97249582-re9inee?utf8=✓&shelf=read&view=covers&title=re9inee&per_page=infinite"
        />

        {/* <Widget
          href="#"
          isComingSoon
          title="Notebook"
          image={Notebook}
          imageAlt="Notebook image"
          subtitle="My thoughts, insights and reflections"
        /> */}
      </div>
    </section>
  );
}

export default GetToKnowMe;
