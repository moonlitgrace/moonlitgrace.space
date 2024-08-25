'use client';

import Link from 'next/link';
import HomeIcon from '@/components/icons/home';
import { usePathname } from 'next/navigation';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import React from 'react';
import PencilIcon from '@/components/icons/pencil';
import GithubIcon from '@/components/icons/github';
import MailIcon from '@/components/icons/mail';
import { Separator } from '@/components/ui/separator';
import { useScreenDetector } from '@/hooks/useScreenDetector';

const Appbar = () => {
  const pathname = usePathname();

  const { isMobile } = useScreenDetector();

  const MAPPING = {
    links: {
      home: {
        href: '/',
        icon: HomeIcon,
        label: 'Home',
      },
      writings: {
        href: '/writings',
        icon: PencilIcon,
        label: 'Writings',
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
      <div className="fixed left-1/2 md:left-10 transform md:top-1/2 bottom-10 md:bottom-auto z-20 flex md:flex-col -translate-x-1/2 md:-translate-y-1/2 items-center gap-2 rounded-2xl border bg-background p-2">
        {Object.values(MAPPING.links).map((item, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant={pathname === item.href ? 'default' : 'ghost'}
                className={'grid aspect-square size-11 place-items-center rounded-xl'}
              >
                <Link href={item.href}>
                  {React.createElement(item.icon, {
                    variant: pathname === item.href ? 'solid' : 'outline',
                    className: 'size-5',
                  })}
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={15} side={isMobile ? 'top' : 'right'}>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Separator className='md:w-1/2 h-1/2 md:h-px' />
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
            <TooltipContent sideOffset={15} side={isMobile ? 'top' : 'right'}>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="md:hiddens pointer-events-none fixed inset-x-0 bottom-0 z-10 h-40 bg-background gradient-mask-t-0"></div>
    </TooltipProvider>
  );
};

export default Appbar;
