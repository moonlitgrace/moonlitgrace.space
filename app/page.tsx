import MoonlitGraceArt from "@/components/MoonlitGraceArt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home. | moonlitspace",
  description: "a graceful space",
};

export default function Home() {
  return <div className="w-full grid place-items-center">
    <MoonlitGraceArt />
  </div>;
}
