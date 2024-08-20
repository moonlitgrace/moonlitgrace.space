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
import PhotoIcon from "./icons/photo";
import GithubIcon from "./icons/github";
import MailIcon from "./icons/mail";
import { Separator } from "./ui/separator";
import LightIcon from "./icons/light";

const Navbar = () => {
  const pathname = usePathname();

  const MAPPING: {
    links: {
      [key: string]: {
        href: string;
        icon: ({ variant, ...props }: IconProps) => React.JSX.Element;
        label: string;
      }
    },
    socials: {
      [key: string]: {
        link: string;
        icon: ({ variant, ...props }: IconProps) => React.JSX.Element;
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
      },
      photos: {
        href: '/photos',
        icon: PhotoIcon,
        label: 'Photo'
      }
    },
    socials: {
      github: {
        link: 'https://github.com/moonlitgrace',
        icon: GithubIcon
      },
      mail: {
        link: 'mailto:moonlitgrace.gaia@gmail.com',
        icon: MailIcon
      }
    }
  }

  return (
    <TooltipProvider delayDuration={500}>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-10 flex items-center gap-2 border rounded-2xl p-2">
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
        <Separator orientation="vertical" className="h-10" />
        {Object.values(MAPPING.socials).map((item, idx) => (
          <Button key={idx} asChild variant={'ghost'} className={"grid place-items-center rounded-xl size-11 aspect-square"}>
            <a href={item.link} target="_blank">
              {React.createElement(item.icon, {
                variant: 'outline',
                className: 'size-5'
              })}
            </a>
          </Button>
        ))}
        <Separator orientation="vertical" className="h-10" />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'} className={"grid place-items-center rounded-xl size-11 aspect-square"}>
              <LightIcon variant="outline" className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={15}>
            Light Mode
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
};

export default Navbar;
