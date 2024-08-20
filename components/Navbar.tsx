'use client'

import Link from "next/link";
import HomeIcon from "@/components/icons/home";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-10 border h-16 rounded-2xl p-2">
      <Link href={'/'} className={cn(pathname === '/' && 'bg-primary', "grid place-items-center rounded-xl h-full aspect-square w-auto")}>
        <HomeIcon variant={pathname === '/' ? 'solid' : 'outline'} className="size-5" />
      </Link>
    </div>
  )
};

export default Navbar;
