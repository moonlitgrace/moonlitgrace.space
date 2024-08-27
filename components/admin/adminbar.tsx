'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import React from 'react';
import PencilIcon from '@/components/icons/pencil';
import { useScreenDevice } from '@/hooks/use-screen-detector';
import HomeIcon from '@/components/icons/home';

const Adminbar = () => {
  const pathname = usePathname();

  const { isMobile } = useScreenDevice();

  const MAPPING = {
    links: {
      home: {
        href: '/admin',
        icon: HomeIcon,
        label: 'Admin Home',
      },
      blog: {
        href: '/admin/blog',
        icon: PencilIcon,
        label: 'Admin Blog',
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
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-40 bg-background gradient-mask-t-0 md:hidden"></div>
    </TooltipProvider>
  );
};

export default Adminbar;
