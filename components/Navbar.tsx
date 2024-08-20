'use client'

import Link from "next/link";
import HomeIcon from "@/components/icons/home";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const MAPPING = {
    links: {
      home: {
        icon: HomeIcon,
        label: "Home"
      }
    }
  }

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-10 border h-16 rounded-2xl p-2">
      {Object.values(MAPPING.links).map((item, idx) => (
        <TooltipProvider key={idx}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant={pathname === '/' ? 'default' : 'ghost'} className={"grid place-items-center rounded-xl size-full aspect-square"}>
                <Link href={'/'}>
                  {React.createElement(item.icon, {
                    variant: pathname === '/' ? 'solid' : 'outline',
                    className: 'size-5'
                  })}
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={15}>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
};

export default Navbar;
