'use client';

import Link from 'next/link';
import HomeIcon from '@/components/icons/home';
import { usePathname } from 'next/navigation';

import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import React from 'react';
import PencilIcon from '@/components/icons/pencil';
import GithubIcon from '@/components/icons/github';
import MailIcon from '@/components/icons/mail';
import { ResponsiveSeparator, ResponsiveTooltipContent } from '@/app/_components/responsive';

const AppBar = () => {
  const pathname = usePathname();

  const MAPPING = {
    links: {
      home: {
        href: '/',
        icon: HomeIcon,
        label: 'Home',
      },
      blog: {
        href: '/blog',
        icon: PencilIcon,
        label: 'Blog',
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
      <div className="fixed bottom-10 left-1/2 z-20 flex -translate-x-1/2 transform items-center gap-2 rounded-2xl border bg-background p-2 md:bottom-auto md:left-10 md:top-1/2 md:-translate-y-1/2 md:flex-col">
        {Object.values(MAPPING.links).map((item, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant={pathname === item.href ? 'default' : 'ghost'}
                className={'grid aspect-square size-11 place-items-center rounded-xl'}
              >
                <Link href={item.href} aria-label={`Goto ${item.label}page`}>
                  {React.createElement(item.icon, {
                    variant: pathname === item.href ? 'solid' : 'outline',
                    className: 'size-5',
                  })}
                </Link>
              </Button>
            </TooltipTrigger>
            <ResponsiveTooltipContent content={item.label} />
          </Tooltip>
        ))}
        <ResponsiveSeparator />
        {Object.values(MAPPING.socials).map((item, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Button
                key={idx}
                asChild
                variant={'ghost'}
                className={'grid aspect-square size-11 place-items-center rounded-xl'}
              >
                <a href={item.url} target="_blank" aria-label={item.label}>
                  {React.createElement(item.icon, {
                    variant: 'outline',
                    className: 'size-5',
                  })}
                </a>
              </Button>
            </TooltipTrigger>
            <ResponsiveTooltipContent content={item.label} />
          </Tooltip>
        ))}
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-40 bg-background gradient-mask-t-0 md:hidden"></div>
    </TooltipProvider>
  );
};

export default AppBar;
