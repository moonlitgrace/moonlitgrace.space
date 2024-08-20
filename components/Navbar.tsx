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
import { IconProps } from "@/interfaces/icon";

const Navbar = () => {
  const pathname = usePathname();

  const MAPPING: {
    links: {
      [key: string]: {
        href: string;
        icon: ({ variant, ...props }: IconProps) => React.JSX.Element;
        label: string;
      }
    }
  } = {
    links: {
      home: {
        href: '/',
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
              <Button asChild variant={pathname === item.href ? 'default' : 'ghost'} className={"grid place-items-center rounded-xl size-full aspect-square"}>
                <Link href={item.href}>
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
