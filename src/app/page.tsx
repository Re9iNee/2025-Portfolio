import Button from "@/components/Button";
import { BiPlus } from "react-icons/bi";

export default function Home() {
  return (
    <div className="grid h-screen w-screen place-items-center font-inter text-10">
      <Button>Good things go</Button>
      <BiPlus />
    </div>
  );
}
