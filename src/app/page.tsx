import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col place-items-center gap-4">
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"text"}>Text</Button>
    </div>
  );
}
