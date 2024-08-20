import Image from "next/image";

export default function Home() {
  return <div className="flex">
    <Image src={"/moonlitgrace-art.svg"} alt="" width={0} height={0} className="w-full" />
  </div>;
}
