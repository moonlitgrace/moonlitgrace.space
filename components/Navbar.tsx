'use client'

import Link from "next/link";
import HomeIcon from "@/components/icons/home";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-10 border h-16 rounded-2xl p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className={cn(pathname === '/' && 'bg-primary', "grid place-items-center rounded-xl size-full aspect-square")}>
              <Link href={'/'}>
                <HomeIcon variant={pathname === '/' ? 'solid' : 'outline'} className="size-5" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={15}>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
};

export default Navbar;
