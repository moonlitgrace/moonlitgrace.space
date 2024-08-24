'use client';

import Link from 'next/link';
import HomeIcon from '@/components/icons/home';
import { usePathname } from 'next/navigation';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import React from 'react';
import PencilIcon from '@/components/icons/pencil';
import LabIcon from '@/components/icons/lab';
import GithubIcon from '@/components/icons/github';
import MailIcon from '@/components/icons/mail';
import { Separator } from '@/components/ui/separator';
import LightIcon from '@/components/icons/light';

const Appbar = () => {
  const pathname = usePathname();

  const MAPPING = {
    links: {
      home: {
        href: '/',
        icon: HomeIcon,
        label: 'Home',
        disabled: false,
      },
      writings: {
        href: '/thoughts',
        icon: PencilIcon,
        label: 'Thoughts',
        disabled: false,
      },
      photos: {
        href: '/lab',
        icon: LabIcon,
        label: 'Design lab',
        disabled: true,
      },
    },
    socials: {
      github: {
        url: 'https://github.com/moonlitgrace',
        icon: GithubIcon,
        label: 'See me projects!',
      },
      mail: {
        url: 'mailto:moonlitgrace.gaia@gmail.com',
        icon: MailIcon,
        label: 'Mail me!',
      },
    },
  };

  return (
    <TooltipProvider delayDuration={500}>
      <div className="fixed bottom-10 left-1/2 z-20 flex -translate-x-1/2 transform items-center gap-2 rounded-2xl border bg-background p-2">
        {Object.values(MAPPING.links).map((item, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Link href={item.href}>
                <Button
                  disabled={item.disabled}
                  variant={pathname === item.href ? 'default' : 'ghost'}
                  className={'grid aspect-square size-11 place-items-center rounded-xl'}
                >
                  {React.createElement(item.icon, {
                    variant: pathname === item.href ? 'solid' : 'outline',
                    className: 'size-5',
                  })}
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent sideOffset={15}>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Separator orientation="vertical" className="h-10" />
        {Object.values(MAPPING.socials).map((item, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Button
                key={idx}
                asChild
                variant={'ghost'}
                className={'grid aspect-square size-11 place-items-center rounded-xl'}
              >
                <a href={item.url} target="_blank">
                  {React.createElement(item.icon, {
                    variant: 'outline',
                    className: 'size-5',
                  })}
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={15}>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Separator orientation="vertical" className="h-10" />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              className={'grid aspect-square size-11 place-items-center rounded-xl'}
            >
              <LightIcon variant="outline" className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={15}>Light Mode</TooltipContent>
        </Tooltip>
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-40 bg-background gradient-mask-t-0"></div>
    </TooltipProvider>
  );
};

export default Appbar;
