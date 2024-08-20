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
import PencilIcon from "./icons/pencil";

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
      },
      writings: {
        href: '/writings',
        icon: PencilIcon,
        label: 'Writings'
      }
    }
  }

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-10 flex items-center gap-2 border rounded-2xl p-2">
      <TooltipProvider delayDuration={500}>
        {Object.values(MAPPING.links).map((item, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Button asChild variant={pathname === item.href ? 'default' : 'ghost'} className={"grid place-items-center rounded-xl size-11 aspect-square"}>
                <Link href={item.href}>
                  {React.createElement(item.icon, {
                    variant: pathname === item.href ? 'solid' : 'outline',
                    className: 'size-5'
                  })}
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={15}>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  )
};

export default Navbar;
